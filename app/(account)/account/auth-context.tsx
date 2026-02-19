"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  email: string | null;
  name: string | null;
  profileImage: string | null;
  authReady: boolean;
  logout: () => void;
  updateUser: (name: string, profileImage: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function parseJwt(token: string) {
  try {
    const base64Payload = token.split(".")[1];
    const payload = atob(base64Payload);
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const updateUser = (name: string, profileImage: string) => {
    setName(name);
    setProfileImage(profileImage);
  };

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find(row => row.startsWith("auth_token="))
      ?.split("=")[1];

    if (token) {
      const payload = parseJwt(token);
      if (payload?.email) {
        setIsLoggedIn(true);
        setEmail(payload.email);
        setName(payload.name);
        setProfileImage(payload.profileImage);
      }
    }

    setAuthReady(true);
  }, []);


  const logout = () => {
    document.cookie = "auth_token=; path=/; max-age=0";
    setIsLoggedIn(false);
    setEmail(null);
    setName(null);
    setProfileImage(null);
    localStorage.clear();
  };


  return (
    <AuthContext.Provider value={{ isLoggedIn, email, name, profileImage, authReady, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
