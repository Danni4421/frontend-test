// src/store/useSessionStore.ts
import { User } from "@/types";
import { create } from "zustand";

interface SessionStore {
  user: User | null;
  setUser: (user: User) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionStore>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"), // Memuat data user dari localStorage jika ada
  setUser: (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    set({ user });
  },
  clearSession: () => {
    localStorage.removeItem("user");
    set({ user: null });
    window.location.href = "/login";
  },
}));
