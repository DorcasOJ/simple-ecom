// import React, { createContext, useContext, useEffect, useState } from "react";
// import { Appearance, ColorSchemeName, useColorScheme } from "react-native";

// type ColorMode = "light" | "dark";

// type ThemeContextType = {
//     colorMode: ColorMode;
//     setColorMode: (mode: ColorMode) => void;
//     toggleColorMode: () => void;
//     isSystemTheme: boolean;
// };

// // Create the context
// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//     const [colorMode, setColorMode] = useState<ColorMode>("light");
//     const [isSystemTheme, setIsSystemTheme] = useState(true);

//     // Detect and sync with system color scheme
//     useEffect(() => {
//         const systemColorScheme: ColorSchemeName = Appearance.getColorScheme();
//         const initialMode = systemColorScheme === "dark" ? "dark" : "light";
//         setColorMode(initialMode);

//         // Listen for system theme changes
//         const listener = Appearance.addChangeListener(({ colorScheme }) => {
//             if (isSystemTheme) {
//                 const newMode = colorScheme === "dark" ? "dark" : "light";
//                 setColorMode(newMode);
//             }
//         });

//         return () => listener.remove();
//     }, [isSystemTheme]);

//     const handleSetColorMode = (mode: ColorMode) => {
//         setColorMode(mode);
//         setIsSystemTheme(false); // User manually set theme, stop following system
//     };

//     const toggleColorMode = () => {
//         setColorMode((prev) => (prev === "light" ? "dark" : "light"));
//         setIsSystemTheme(false);
//     };

//     return (
//         <ThemeContext.Provider
//             value={{
//                 colorMode,
//                 setColorMode: handleSetColorMode,
//                 toggleColorMode,
//                 isSystemTheme
//             }}
//         >
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// // Custom hook to access theme
// export const useThemeContext = () => {
//     const context = useContext(ThemeContext);
//     if (!context)
//         throw new Error("useThemeContext must be used within ThemeProvider");
//     return context;
// };

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
    const [colorMode, setColorMode] = useState<ColorMode>(systemScheme ?? "light");
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
            value={{ colorMode, setColorMode: handleSetColorMode, toggleColorMode, isSystemTheme }}
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
