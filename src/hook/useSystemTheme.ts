import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const useSystemTheme = () => {
  //   const [darkTheme, setDarkTheme] = useState(false);

  //   // function to apply theme
  //   const applyTheme = (isDark: boolean) => {
  //     document.documentElement.setAttribute(
  //       "data-theme",
  //       isDark ? "dark" : "light"
  //     );
  //     setDarkTheme(isDark);
  //   };

  //   useEffect(() => {
  //     // initial -  check for the systeme  theme
  //     const mq = window.matchMedia("(prefers-color-scheme: dark)");

  //     // apply the system theme
  //     applyTheme(mq.matches);

  //     const handler = (e: MediaQueryListEvent) => {
  //       applyTheme(e.matches);
  //     };

  //     // listen for change in system theme and apply
  //     mq.addEventListener("change", handler);

  //     return () => mq.removeEventListener("change", handler);
  //   }, []);

  //   return darkTheme;

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
