interface UseWelcomeReturn {
  userName: string;
}

export const useWelcome = (): UseWelcomeReturn => {
  const userName = 'Ahmed';

  return {
    userName,
  };
};

