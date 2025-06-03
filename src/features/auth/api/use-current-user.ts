import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";
import { ApiError } from "@/lib/api-errors";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: async () => {
      const response = await client.api.auth.me.$get();
      
      if (!response.ok) {
        if (response.status === 401) {
          return null;
        }
        const error = await response.json() as ApiError;
        throw new Error(error.error || "Failed to fetch user");
      }
      
      return await response.json();
    },
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};