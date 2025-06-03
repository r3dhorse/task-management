import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await client.api.auth.logout.$post();
      
      if (!response.ok) {
        throw new Error("Logout failed");
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Logged out successfully");
      queryClient.clear();
      router.push("/sign-in");
    },
    onError: () => {
      toast.error("Failed to logout");
    },
  });

  return mutation;
};