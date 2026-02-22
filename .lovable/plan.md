

# Interactive Chatbot Widget with Generic API Integration

## Overview
Build a floating, highly interactive chatbot widget on every page. Instead of being tied to a specific AI provider (like Gemini), it will call a **configurable API endpoint** that you provide. You send the user's question, and your API returns the answer. This makes it completely flexible -- connect it to any backend, any AI model, or any custom service.

## How the API Integration Works

The chatbot will send a POST request to a URL you configure. The request/response format:

```text
POST  <your-api-url>

Request Body:
{
  "message": "What is AliphChat?",
  "conversation_history": [
    { "role": "user", "content": "Hi" },
    { "role": "assistant", "content": "Hello! How can I help?" }
  ]
}

Response Body:
{
  "reply": "AliphChat is our enterprise AI search..."
}
```

You will set your API URL in a simple config file. No edge functions or Supabase secrets needed -- just point it to your endpoint.

## Chat UI Design (Apple-inspired, highly interactive)

### Floating Trigger Button
- Fixed bottom-right corner, branded circular button with chat icon
- Gentle pulse animation on first visit to attract attention
- Smooth scale-up on hover
- Unread dot indicator if assistant responded while panel was closed

### Chat Panel
- Slides up from bottom-right with spring animation (framer-motion)
- ~400px wide x 550px tall on desktop; full-screen on mobile
- Frosted glass header bar with "Aliph AI Assistant" title and close button
- Smooth open/close transitions

### Message Bubbles
- User messages: right-aligned, navy/dark background, white text, rounded corners
- Assistant messages: left-aligned, light gray background, dark text
- Aliph logo avatar for assistant, user icon for user
- Messages fade in with staggered animation
- Markdown rendering for assistant responses (bold, lists, links, code)
- Timestamps shown on hover

### Interactive Elements
- Auto-resizing textarea that grows as user types
- Animated send button (icon rotates on send)
- Quick-action suggestion chips when conversation is empty (e.g. "Tell me about AliphChat", "Book a demo", "PDPL compliance")
- Context-aware chips that change based on current page
- Smooth auto-scroll to latest message
- Keyboard shortcuts: Enter to send, Shift+Enter for newline, Escape to close

### Loading and Error States
- Animated 3-dot typing indicator while waiting for API response
- Error message with retry button if API call fails
- Skeleton shimmer while loading

## Files to Create

### 1. `src/lib/chatConfig.ts`
- Exports the API endpoint URL as a constant
- Easy single place to change the URL:
  ```
  export const CHAT_API_URL = "https://your-api-endpoint.com/chat";
  ```

### 2. `src/components/chat/ChatWidget.tsx`
- Main floating widget: trigger button + chat panel
- Manages open/close state and conversation history in React state
- Calls the configured API endpoint via fetch
- Renders message list and input area
- Full-screen mode on mobile

### 3. `src/components/chat/ChatMessage.tsx`
- Individual message bubble component
- Markdown rendering via react-markdown
- Avatar icon (Aliph logo for assistant, user icon for user)
- Fade-in animation per message
- Timestamp on hover

### 4. `src/components/chat/ChatInput.tsx`
- Auto-resizing textarea
- Animated send button
- Suggestion chips (shown when conversation is empty)
- Context-aware: different chips on different pages
- Keyboard shortcut handling

### 5. `src/components/chat/TypingIndicator.tsx`
- Animated 3-dot bounce indicator shown while waiting for API response

## Files to Update

### 6. `src/components/layout/Layout.tsx`
- Add `<ChatWidget />` component so the chatbot appears on every page

## Dependency to Add
- `react-markdown` -- for rendering formatted AI responses in chat bubbles

## Technical Details

- **No backend/edge function needed** -- the chatbot calls your API directly from the browser
- **No API keys stored in the app** -- your API endpoint handles authentication on its side
- **Conversation history** is kept in React state (resets on page refresh)
- **CORS**: Your API endpoint must allow requests from the app's domain
- **Suggestion chips** change based on `window.location.pathname` (product pages show product-specific prompts)
- **Accessibility**: focus trap when open, aria-labels, keyboard navigation
- **Mobile**: chat panel goes full-screen with slide-up animation

## Configuration

After implementation, you just update one line in `src/lib/chatConfig.ts` with your actual API URL. The request format is documented so you can build your backend in any language or framework to match it.

