import React, { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

type ColorMode = "light" | "dark" | "system";

type ThemeContextType = {
    colorMode: ColorMode;
    setColorMode: (mode: ColorMode) => void;
    toggleColorMode: () => void;
};

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [colorMode, setColorMode] = useState<ColorMode>("system");

    // Detect system color scheme on first load
    useEffect(() => {
        const systemColorScheme = Appearance.getColorScheme() || "light";
        setColorMode(systemColorScheme as ColorMode);

        // Listen for system theme changes
        const listener = Appearance.addChangeListener(({ colorScheme }) => {
            setColorMode(colorScheme as ColorMode);
        });

        return () => listener.remove();
    }, []);

    const toggleColorMode = () => {
        setColorMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ colorMode, setColorMode, toggleColorMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to access theme
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error("useThemeContext must be used within ThemeProvider");
    return context;
};
