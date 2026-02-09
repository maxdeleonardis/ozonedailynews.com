'use client';

import React, { createContext, useContext } from 'react';

interface ArticlesContextType {
  articles: any[];
}

const ArticlesContext = createContext<ArticlesContextType>({ articles: [] });

export function ArticlesProvider({ children }: { children: React.ReactNode }) {
  return (
    <ArticlesContext.Provider value={{ articles: [] }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  return useContext(ArticlesContext);
}
