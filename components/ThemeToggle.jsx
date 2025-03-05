"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
      variant="outline"
      className="dark:border-gray-600 dark:text-white hover:dark:bg-gray-800 flex items-center space-x-2"
    >
      <span className="h-5 w-5">{theme === "dark" ? "🌞" : "🌙"}</span>
      <span className="hidden sm:inline-block">{theme === "dark" ? " Light Mode" : " Dark Mode"}</span>
    </Button>
  );
}
