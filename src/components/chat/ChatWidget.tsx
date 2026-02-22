import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, AlertCircle, RotateCcw } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { CHAT_API_URL } from "@/lib/chatConfig";
import ChatMessage, { Message } from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import aliphLogo from "@/assets/aliph-logo.png";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasUnread, setHasUnread] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Escape to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const sendMessage = useCallback(
    async (text?: string) => {
      const content = (text || input).trim();
      if (!content || isLoading) return;

      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setError(null);
      setIsLoading(true);

      try {
        const history = [...messages, userMsg].map((m) => ({
          role: m.role,
          content: m.content,
        }));

        const res = await fetch(CHAT_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: content, conversation_history: history }),
        });

        if (!res.ok) throw new Error(`API error: ${res.status}`);

        const data = await res.json();
        const reply = data.reply || data.response || data.message || "No response received.";

        const assistantMsg: Message = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: reply,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMsg]);
        if (!isOpen) setHasUnread(true);
      } catch (err: any) {
        setError(err.message || "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [input, messages, isLoading, isOpen]
  );

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.95 },
  };

  return (
    <>
      {/* Floating trigger */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleOpen}
            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6" />
            {hasUnread && (
              <span className="absolute top-0 right-0 h-3.5 w-3.5 rounded-full bg-destructive border-2 border-background" />
            )}
            {/* Pulse ring on first render */}
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-accent"
              animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
              transition={{ duration: 1.8, repeat: 3, ease: "easeOut" }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className={`fixed z-50 flex flex-col bg-background border border-border shadow-2xl overflow-hidden ${
              isMobile
                ? "inset-0 rounded-none"
                : "bottom-6 right-6 w-[400px] h-[550px] rounded-2xl"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/80 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <img src={aliphLogo} alt="Aliph" className="h-6 w-6 object-contain" />
                <div>
                  <p className="text-sm font-semibold text-foreground leading-none">Aliph AI Assistant</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Ask me anything</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.length === 0 && !isLoading && (
                <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-8">
                  <img src={aliphLogo} alt="Aliph" className="h-10 w-10 opacity-60" />
                  <p className="text-sm text-muted-foreground max-w-[240px]">
                    Hi! I'm Aliph AI. Ask me anything about our products and solutions.
                  </p>
                </div>
              )}

              {messages.map((msg, i) => (
                <ChatMessage key={msg.id} message={msg} index={i} />
              ))}

              {isLoading && (
                <div className="flex gap-2.5">
                  <div className="flex-shrink-0 h-7 w-7 rounded-full bg-secondary flex items-center justify-center">
                    <img src={aliphLogo} alt="Aliph" className="h-4 w-4 object-contain" />
                  </div>
                  <div className="rounded-2xl rounded-bl-md bg-secondary">
                    <TypingIndicator />
                  </div>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 text-destructive text-xs bg-destructive/10 rounded-lg px-3 py-2">
                  <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="flex-1">{error}</span>
                  <button
                    onClick={() => {
                      setError(null);
                      const lastUser = [...messages].reverse().find((m) => m.role === "user");
                      if (lastUser) sendMessage(lastUser.content);
                    }}
                    className="flex-shrink-0"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Input */}
            <ChatInput
              value={input}
              onChange={setInput}
              onSend={() => sendMessage()}
              onSuggestion={(text) => sendMessage(text)}
              showSuggestions={messages.length === 0}
              isLoading={isLoading}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
