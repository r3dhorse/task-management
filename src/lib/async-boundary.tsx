"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { Skeleton } from "@/components/ui/skeleton";

interface AsyncBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function AsyncBoundary({ 
  children, 
  fallback = <LoadingFallback /> 
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

function LoadingFallback() {
  return (
    <div className="space-y-4 p-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}