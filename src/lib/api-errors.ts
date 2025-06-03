import { z } from "zod";

export const ApiErrorSchema = z.object({
  error: z.string(),
  code: z.string().optional(),
  statusCode: z.number(),
});

export type ApiError = z.infer<typeof ApiErrorSchema>;

export class ApiException extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string
  ) {
    super(message);
    this.name = "ApiException";
  }
}

export const createApiError = (
  statusCode: number,
  code: string,
  message: string
): ApiError => ({
  error: message,
  code,
  statusCode,
});