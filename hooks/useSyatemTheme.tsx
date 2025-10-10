'use dom';
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const useSystemTheme = () => {

    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme") as Theme | null;
            if (saved) return saved;

            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            return prefersDark ? "dark" : "light";
        }
        return "light";
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return { theme, setTheme };
};
export default useSystemTheme;
