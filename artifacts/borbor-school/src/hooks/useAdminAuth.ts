import { useEffect, useState, useCallback } from "react";
import { getAdmin, setAdmin, type AdminCredential } from "@/lib/store";

const SESSION_KEY = "borbor.session.v1";

export function useAdminAuth() {
  const [isAuthed, setIsAuthed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SESSION_KEY) === "1";
  });

  useEffect(() => {
    const onStorage = () => {
      setIsAuthed(sessionStorage.getItem(SESSION_KEY) === "1");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = useCallback((email: string, password: string) => {
    const admin = getAdmin();
    if (
      email.trim().toLowerCase() === admin.email.trim().toLowerCase() &&
      password === admin.password
    ) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setIsAuthed(true);
      return { ok: true as const };
    }
    return { ok: false as const, error: "Invalid email or password" };
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthed(false);
  }, []);

  const changePassword = useCallback(
    (oldPassword: string, newPassword: string, newEmail?: string) => {
      const admin = getAdmin();
      if (oldPassword !== admin.password) {
        return { ok: false as const, error: "Current password is incorrect" };
      }
      if (!newPassword || newPassword.length < 6) {
        return { ok: false as const, error: "New password must be at least 6 characters" };
      }
      const next: AdminCredential = {
        email: (newEmail && newEmail.trim()) || admin.email,
        password: newPassword,
      };
      setAdmin(next);
      return { ok: true as const };
    },
    [],
  );

  return { isAuthed, login, logout, changePassword };
}
