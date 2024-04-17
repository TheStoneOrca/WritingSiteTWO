"use client";

import useUser from "@/hooks/useUser";
import React, { useEffect } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { isReady, isSignedIn } = useUser();

  useEffect(() => {
    if (!isReady) return;
    if (!isSignedIn) {
      window.location.href = "/signup";
    }
  }, [isReady]);

  return <>{children}</>;
}
