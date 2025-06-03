import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "../schemas";
import { createApiError } from "@/lib/api-errors";

const app = new Hono()
  .post(
    "/login",
    zValidator("json", loginSchema),
    async (c) => {
      const { email, password } = c.req.valid("json");
      
      // TODO: Implement actual authentication logic
      // For now, returning mock response
      if (email === "test@example.com" && password === "password") {
        return c.json({
          user: {
            id: "1",
            email,
            name: "Test User",
          },
          token: "mock-jwt-token",
        });
      }
      
      return c.json(
        createApiError(401, "INVALID_CREDENTIALS", "Invalid email or password"),
        401
      );
    }
  )
  .post(
    "/register",
    zValidator("json", registerSchema),
    async (c) => {
      const { email, name } = c.req.valid("json");
      
      // TODO: Implement actual registration logic
      // For now, returning mock response
      return c.json({
        user: {
          id: "2",
          email,
          name,
        },
        token: "mock-jwt-token",
      });
    }
  )
  .post("/logout", async (c) => {
    // TODO: Implement logout logic
    return c.json({ success: true });
  })
  .get("/me", async (c) => {
    // TODO: Implement auth middleware and get current user
    const authHeader = c.req.header("Authorization");
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return c.json(
        createApiError(401, "UNAUTHORIZED", "Missing or invalid token"),
        401
      );
    }
    
    // Mock response
    return c.json({
      user: {
        id: "1",
        email: "test@example.com",
        name: "Test User",
      },
    });
  });

export default app;
