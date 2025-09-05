"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AvatarProfileProps {
  className?: string;
}

export const AvatarProfile = ({ className }: AvatarProfileProps) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative group rounded-full flex items-center justify-center border border-foreground/30"
    >
      <Image
        src={theme === "light" ? "/profile-light.png" : "/profile-dark.png"}
        alt="Avatar"
        width={200}
        height={200}
        className={cn(
          'rounded-full object-cover transition-opacity duration-300 group-hover:opacity-0 object-top',
          className
        )}
        priority
      />
      <Image
        src={theme === "light" ? "/profile-dark.png" : "/profile-light.png"}
        alt="Avatar"
        width={200}
        height={200}
        className={cn(
          'rounded-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 object-top',
          className
        )}
        priority
      />
    </button>
  );
};
