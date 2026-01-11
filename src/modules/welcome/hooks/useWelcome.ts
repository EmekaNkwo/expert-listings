interface UseWelcomeReturn {
  userName: string;
}

export const useWelcome = (): UseWelcomeReturn => {
  // Mock data - can be replaced with API call later
  const userName = 'Ahmed';

  return {
    userName,
  };
};

