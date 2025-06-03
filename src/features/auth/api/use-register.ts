import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ApiError } from "@/lib/api-errors";

type ResponseType = InferResponseType<(typeof client.api.auth.register)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.auth.register)["$post"]>["json"];

export const useRegister = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (data) => {
      const response = await client.api.auth.register.$post({ json: data });
      
      if (!response.ok) {
        const error = await response.json() as ApiError;
        throw new Error(error.error || "Registration failed");
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Registration successful!");
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
      router.push("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to register");
    },
  });

  return mutation;
};