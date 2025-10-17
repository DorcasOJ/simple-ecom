import PasswordInputBox from "@components/inputBox/PasswordInputBox";
import SendButton from "@components/inputBox/SendButton";
import TextInputBox from "@components/inputBox/TextInputBox";
import AuthLogo from "@components/Landing/AuthLogo";
import { Box } from "@components/ui/box";
import { config } from "@components/ui/gluestack-ui-provider/localConfig";
import { Text } from "@components/ui/text";
import { useThemeContext } from "@hooks/ThemeContext";
import useAuth from "@hooks/useAuth";
import usePreloadAssets from "@hooks/usePreloadAssets";
import { LoginForm } from "@types/AuthType";
import { Image } from "expo-image";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { BaggageClaim } from "lucide-react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { Platform, Pressable, ScrollView } from "react-native";

const Login = () => {
  const { role } = useLocalSearchParams();
  const { colorMode } = useThemeContext();
  const { login, buttonLoading, error } = useAuth("user");
  const router = useRouter();
  const theme = config[colorMode] ?? config.light;
  const bgColor =
    Platform.OS === "web"
      ? theme["--color-primary-0"]
      : colorMode === "dark"
      ? "#1C3628"
      : "#AAC9AF";

  const textColor =
    Platform.OS === "web"
      ? theme["--color-typography-900"]
      : colorMode === "dark"
      ? "#F5F5F5"
      : "#262627";

  const buttonColor =
    Platform.OS === "web"
      ? theme["--color-primary-500"]
      : colorMode === "dark"
      ? "#34604A"
      : "#4B7862";
  const imgIsLoaded = usePreloadAssets([
    require("@/assets/images/auth/auth-side-img-1.png"),
    require("@assets/images/auth/logo.png"),
  ]);

  const form = useForm<LoginForm>({
    defaultValues: { email: "", password: "" },
  });

  const handleLogin = async (data: LoginForm) => {
    console.log("logging in");
    try {
      await login(data, form);
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  return (
    <ScrollView className="w-full bg-white dark:bg-black">
      <Box className="w-full mx-w-4xl mx-auto">
        <Box className="min-h-[600px] sm:min-h-[800px] h-screen sm:px-6 7xl:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center w-full ">
          <Box className="w-full h-full flex flex-row-reverse items-center justify-center sm:shadow-md shadow-secondary-300 dark:shadow-secondary-200/20 rounded-2xl">
            {/* Left Side */}
            <Box className="flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-r-2xl lg:rounded-l-none h-full px-4 sm:px-6">
              <AuthLogo />

              <Text
                className="text-xl font-['Sora'] "
                style={{
                  color: textColor,
                  fontSize: 30,
                  ...Platform.select({
                    android: {
                      lineHeight: 40,
                    },
                    ios: {
                      lineHeight: 40,
                    },
                  }),
                }}
              >
                {String(role).charAt(0).toUpperCase() + String(role).slice(1)}{" "}
                Login
              </Text>

              {error && (
                <Text className="text-error-0 text-center max-w-sm" size="sm">
                  {error}
                </Text>
              )}

              <Box className="w-full max-w-lg space-y-4">
                <TextInputBox
                  form={form}
                  icon="mail"
                  fieldName="email"
                  type="email"
                  placeholder="Enter your Email"
                  bgColor={bgColor}
                  textColor={textColor}
                />

                <Box>
                  <PasswordInputBox
                    form={form}
                    textColor={textColor}
                    bgColor={bgColor}
                    fieldName={"password"} // default: "password"
                    placeholder={"Enter a Password"}
                  />
                  {/* <ErrorMessage
                    errors={form.formState.errors}
                    name="password"
                    render={({ message }) => (
                      <Box className="flex flex-row items-start gap-1 justify-center mt-2">
                        <Info size={14} className="mt-[2px]" />
                        <Text className="text-sm text-error-0">{message}</Text>
                      </Box>
                    )}
                  /> */}
                </Box>

                <Link href="/auth/user/forgetPassword">
                  <Text className="text-sm text-typography-500 underline text-right py-6">
                    Forgot Password
                  </Text>
                </Link>
                <Pressable onPress={form.handleSubmit(handleLogin)}>
                  <SendButton
                    bgColor={bgColor}
                    textColor={textColor}
                    isLoading={buttonLoading}
                    actionWord="Login"
                  />
                </Pressable>
              </Box>

              <Box className="flex flex-col items-center justify-center gap-3 text-xs">
                <Link href={`auth/${role}/register`}>
                  <Text
                    className="text-center text-black dark:text-white hover:underline"
                    size="sm"
                  >
                    Don't have an account? Register
                  </Text>
                </Link>

                <Pressable onPress={() => router.back()}>
                  <Text
                    className="text-center text-black dark:text-white hover:underline"
                    size="sm"
                  >
                    Back
                  </Text>
                </Pressable>
              </Box>
            </Box>

            {/* Right Side Image */}
            <Box className="w-[50%] hidden lg:flex h-full items-center justify-center rounded-2xl">
              {imgIsLoaded ? (
                <Box className="flex items-center justify-center lg:flex h-full rounded-l-2xl w-full overflow-hidden">
                  <Image
                    source={require("@/assets/images/auth/auth-side-img-1.png")}
                    className="w-full h-full rounded-l-2xl object-cover"
                    alt=""
                  />
                </Box>
              ) : (
                <BaggageClaim
                  strokeWidth={1}
                  size={500}
                  className="text-base-content text-5xl mt-30"
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Login;
