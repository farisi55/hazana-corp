/// <reference types="vite/client" />

declare module '*.svg' {
  const src: string;
  export default src;
}

type PuterAIChatMessage = {
  role: 'system' | 'assistant' | 'user';
  content: string;
};

type PuterGlobal = {
  auth?: {
    isSignedIn?: () => boolean;
    signIn?: () => Promise<unknown>;
  };
  ai?: {
    chat?: (message: string | PuterAIChatMessage[]) => Promise<unknown>;
  };
};

interface Window {
  puter?: PuterGlobal;
}
