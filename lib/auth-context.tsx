'use client';

import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
}

const AuthContext = createContext<AuthContextType>({ isAuthenticated: false, user: null });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated] = useState(false);
  const [user] = useState(null);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
