import { api } from "./api";

export const login = (email, password) => api("/login", {
  method: "POST", body: JSON.stringify({ email, password }),
});
export const getSession = (signal) => api("/me", { signal });
export const logout = () => api("/logout", { method: "POST" });
