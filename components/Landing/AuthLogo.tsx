import { Box } from "@components/ui/box";
import { useThemeContext } from "@hooks/ThemeContext";
import { Image } from "expo-image";
import { Platform } from "react-native";

const AuthLogo = () => {
  const { colorMode } = useThemeContext();

  return (
    <Box
      className=" sm:w-[350px] sm:h-30 "
      style={{
        ...Platform.select({
          web: {
            height: 90,
            width: 200,
          },

          android: {
            height: 80,
            width: 150,
          },
          ios: {
            height: 80,
            width: 150,
          },
        }),
      }}
    >
      {colorMode === "light" ? (
        <Image
          contentFit="cover"
          source={require("@assets/images/auth/logo.png")}
          className=" w-full h-full object-contain"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        <Image
          contentFit="cover"
          source={require("@assets/images/auth/logo-vertical-dark.png")}
          className=" w-full object-cover h-full"
          alt=""
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      )}
    </Box>
  );
};

export default AuthLogo;
