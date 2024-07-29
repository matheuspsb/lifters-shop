import { QueryClient } from "@tanstack/react-query";

export const queryProduct = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});