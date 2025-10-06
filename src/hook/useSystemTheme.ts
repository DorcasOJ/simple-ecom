import { useEffect, useState } from "react";

const useSystemTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  // function to apply theme
  const applyTheme = (isDark: boolean) => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    setDarkTheme(isDark);
  };

  useEffect(() => {
    // initial -  check for the systeme  theme
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    // apply the system theme
    applyTheme(mq.matches);

    const handler = (e: MediaQueryListEvent) => {
      applyTheme(e.matches);
    };

    // listen for change in system theme and apply
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return darkTheme;
};
export default useSystemTheme;
