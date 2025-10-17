import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

type ColorMode = "light" | "dark";
type ThemeContextType = {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
  isSystemTheme: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme();
  const [colorMode, setColorMode] = useState<ColorMode>(
    systemScheme ?? "light"
  );
  const [isSystemTheme, setIsSystemTheme] = useState(true);

  // useEffect(() => {
  //     if (isSystemTheme && systemScheme) {
  //         setColorMode(systemScheme);
  //     }
  // }, [systemScheme, isSystemTheme]);

  // const handleSetColorMode = (mode: ColorMode) => {
  //     setColorMode(mode);
  //     setIsSystemTheme(false);
  // };

  useEffect(() => {
    AsyncStorage.getItem("theme").then((saved) => {
      if (saved === "light" || saved === "dark") {
        setColorMode(saved);
        setIsSystemTheme(false);
      }
    });
  }, []);

  const handleSetColorMode = async (mode: ColorMode) => {
    await AsyncStorage.setItem("theme", mode);
    setColorMode(mode);
    setIsSystemTheme(false);
  };

  const toggleColorMode = () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
    setIsSystemTheme(false);
  };

  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        setColorMode: handleSetColorMode,
        toggleColorMode,
        isSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used within ThemeProvider");
  return context;
};
