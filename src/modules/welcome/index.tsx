'use client';

import React from 'react';
import { WelcomeMessage } from './components/WelcomeMessage';
import { useWelcome } from './hooks/useWelcome';

export const Welcome: React.FC = () => {
  const { userName } = useWelcome();

  return <WelcomeMessage userName={userName} />;
};

