import { QueryClient } from "@tanstack/react-query";

/**
 * React Query client instance
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
