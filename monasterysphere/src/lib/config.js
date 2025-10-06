// Use Vite env if available, else default to local backend
export const API_BASE =
  import.meta?.env?.VITE_API_BASE || "http://localhost:8787";
