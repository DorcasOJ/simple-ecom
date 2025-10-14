

import { useThemeContext } from "@hooks/ThemeContext";
import "@styles/global.css";
import { ScrollView, View } from "react-native";
import { Box } from "./ui/box";

const Container = ({ children, variant }: { children: React.ReactNode, variant?: 'landing' | 'small' }) => {
    const { colorMode } = useThemeContext();

    if (!variant) {
        return (

            <ScrollView style={{ $$css: true, _: `w-full  text-black dark:text-white relative ${colorMode === "dark" ? "bg-black" : " bg- white"}` }}>
                <Box className='w-full max-w-[1900px] mx-auto px-7 sm:px-9' >
                    {children}

                </Box>
            </ScrollView >

        )

    }

    if (variant === "landing") {
        return (
            <View style={{ $$css: true, _: "w-full px-7 sm:px-9 max-w-[1900px] mx-auto text-black dark:text-white relative " }}>
                {children}
            </View>

        )
    }

    return (
        <ScrollView style={{ $$css: true, _: `w-full  text-black dark:text-white relative ${colorMode === "dark" ? "bg-black" : " bg- white"}` }}>
            <Box className='w-full max-w-[700px] mx-auto px-7 sm:px-9' >
                {children}

            </Box>
        </ScrollView >
    )
}

export default Container