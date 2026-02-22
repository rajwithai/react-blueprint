// Change this URL to your actual API endpoint
export const CHAT_API_URL = "https://your-api-endpoint.com/chat";

// Suggestion chips per page context
export function getSuggestionChips(pathname: string): string[] {
  if (pathname.includes("/products/aliphchat")) {
    return ["What is AliphChat?", "How does sovereign search work?", "Book a demo"];
  }
  if (pathname.includes("/products/grc")) {
    return ["What does the GRC platform do?", "PDPL compliance help", "Request a demo"];
  }
  if (pathname.includes("/products/privacy-shield")) {
    return ["How does Privacy Shield protect data?", "What entities are detected?", "See it in action"];
  }
  if (pathname.includes("/products/organization-memory")) {
    return ["How does Organization Memory work?", "What systems does it connect to?", "Book a demo"];
  }
  if (pathname.includes("/products/global-llm")) {
    return ["Which AI models are supported?", "How does intelligent routing work?", "Get started"];
  }
  if (pathname.includes("/products/agentic-ai")) {
    return ["What is Agentic AI?", "When is it available?", "Join the waitlist"];
  }
  return ["What does Aliph do?", "Tell me about your products", "Book a demo", "PDPL compliance"];
}
