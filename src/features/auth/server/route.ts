import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "../schemas";
import { createApiError } from "@/lib/api-errors";
import { createAdminClient } from "@/lib/appwrite";
import { ID } from "node-appwrite";
import { setCookie } from "hono/cookie";
import { AUTH_COOKIE } from "../constants";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), async (c) => {
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
  })

  .post("/register", zValidator("json", registerSchema), async (c) => {
    const { name, email, password } = c.req.valid("json");
    const { account } = await createAdminClient();
    const user = account.create(ID.unique(), email, password, name);
    const session = await account.createEmailPasswordSession(email, password);
    setCookie(c, AUTH_COOKIE, session.secret, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });
    return c.json({
      data: user,
    });
  })

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
