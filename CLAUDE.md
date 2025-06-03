# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 task management application using the App Router, TypeScript, and Tailwind CSS. The project uses Hono.js for the backend API with type-safe RPC communication.

## Commands

```bash
# Development
npm run dev       # Start development server on http://localhost:3000

# Production
npm run build     # Build for production
npm run start     # Start production server

# Code Quality
npm run lint      # Run ESLint
```

## Architecture

### Tech Stack
- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **API**: Hono.js with RPC for type-safe client-server communication
- **State Management**: TanStack Query v5
- **Forms**: React Hook Form + Zod validation

### Project Structure
The codebase follows a feature-based architecture:

```
src/
├── app/              # Next.js pages and API routes
├── components/       # Shared UI components (shadcn/ui)
├── features/         # Feature modules (e.g., auth)
└── lib/             # Utilities (RPC client, utils)
```

### Key Patterns

1. **API Routes**: All API routes are handled by Hono at `/api/[[...route]]/route.ts`
2. **Type-Safe RPC**: Client uses `hc()` from Hono to create type-safe API client
3. **Feature Organization**: Each feature (e.g., auth) has:
   - `api/`: React Query hooks
   - `components/`: Feature-specific UI
   - `schemas.ts`: Zod validation schemas
   - `server/`: Hono route handlers
4. **Authentication**: Auth pages use route group `(auth)` with custom layout
5. **Environment Variables**: `NEXT_PUBLIC_APP_URL` must be set for API client

### Important Files
- `src/lib/rpc.ts`: Hono RPC client configuration
- `src/app/api/[[...route]]/route.ts`: API entry point
- `src/features/auth/server/route.ts`: Auth API routes
- `src/components/query-provider.tsx`: React Query setup

## Current Implementation Status

- ✅ Authentication UI (sign-in/sign-up forms)
- ✅ Basic API structure with Hono
- ✅ Type-safe RPC client setup
- ⚠️ Login endpoint exists but has no actual authentication logic
- ❌ No database integration
- ❌ No session management
- ❌ Sign-up backend not implemented