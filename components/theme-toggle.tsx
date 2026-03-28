"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ?
                (
                    <Sun
                        className="text-yellow-400"
                    />
                )
                :
                (
                    <Moon
                        className="text-slate-700 dark:text-slate-200"
                    />
                )
            }
        </button>
    );
}