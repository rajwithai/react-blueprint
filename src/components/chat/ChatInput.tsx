import { useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getSuggestionChips } from "@/lib/chatConfig";

interface ChatInputProps {
  value: string;
  onChange: (val: string) => void;
  onSend: () => void;
  onSuggestion: (text: string) => void;
  showSuggestions: boolean;
  isLoading: boolean;
}

const ChatInput = ({ value, onChange, onSend, onSuggestion, showSuggestions, isLoading }: ChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { pathname } = useLocation();
  const chips = getSuggestionChips(pathname);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 120) + "px";
    }
  }, [value]);

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !isLoading) onSend();
    }
  };

  return (
    <div className="border-t border-border bg-background p-3">
      {/* Suggestion chips */}
      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap gap-1.5 mb-2.5"
          >
            {chips.map((chip) => (
              <button
                key={chip}
                onClick={() => onSuggestion(chip)}
                className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {chip}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input row */}
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask anything..."
          rows={1}
          className="flex-1 resize-none rounded-xl border border-border bg-secondary px-3.5 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
        <motion.button
          onClick={onSend}
          disabled={!value.trim() || isLoading}
          whileTap={{ scale: 0.9 }}
          className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 transition-opacity"
          aria-label="Send message"
        >
          <motion.div animate={isLoading ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 0.4 }}>
            <Send className="h-4 w-4" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};

export default ChatInput;
