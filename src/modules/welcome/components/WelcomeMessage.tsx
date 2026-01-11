import React from 'react';

interface WelcomeMessageProps {
  userName: string;
  className?: string;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  userName,
  className = '',
}) => {
  return (
    <h1 className={`text-2xl font-semibold text-gray-900 ${className}`}>
      Welcome, {userName}
    </h1>
  );
};

