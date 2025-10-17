import { SignupForm } from "@/types/AuthType";
import ConfirmPasswordInputBox from "@components/inputBox/ConfirmPasswordInputBox";

import PasswordInputBox from "@components/inputBox/PasswordInputBox";
import SendButton from "@components/inputBox/SendButton";
import TermsInput from "@components/inputBox/TermInputBox";
import TextInputBox from "@components/inputBox/TextInputBox";
import AuthLogo from "@components/Landing/AuthLogo";
import { Box } from "@components/ui/box";
import { config } from "@components/ui/gluestack-ui-provider/localConfig";
import { Text } from "@components/ui/text";
import { ErrorMessage } from "@hookform/error-message";
import { useThemeContext } from "@hooks/ThemeContext";
import useAuth from "@hooks/useAuth";
import usePreloadAssets from "@hooks/usePreloadAssets";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { BaggageClaim, Info } from "lucide-react-native";
import { useForm } from "react-hook-form";
import { Platform, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Register = () => {
  const { register, buttonLoading, error } = useAuth("user");
  const { colorMode } = useThemeContext();

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
    require("@/assets/images/auth//auth-side-img-1.png"),
    require("@assets/images/auth/logo.png"),
  ]);

  const router = useRouter();

  const form = useForm<SignupForm>({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
      terms: false,
      confirmPassword: "",
    },
  });

  const handleSignup = async (data: SignupForm) => {
    try {
      await register(data, form);
    } catch (err) {
      console.error("Register Error:", err);
    }
  };

  return (
    <ScrollView
      className="
        w-full bg-black h-[1100px] overflow-auto"
    >
      {/* <Navbar page='auth' /> */}
      <Box className="w-full mx-w-4xl mx-auto border border-red-950">
        <Box className="h-full overflow-auto sm:px-6 7xl:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center">
          <Box className="w-full h-full flex flex-row items-center justify-center sm:shadow-md  shadow-secondary-300 dark:shadow-secondary-200/20  rounded-2xl">
            <Box className="flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-l-2xl lg:rounded-r-none h-full sm:px-6 py-8">
              <AuthLogo />

              <Box className='text-xl font-["Sora"] text-base-content'>
                {" "}
                Signup
              </Box>

              {error && (
                <Text size={"sm"} className="text-error-0 text-center max-w-sm">
                  {error}
                </Text>
              )}
              <form
                onSubmit={form.handleSubmit(handleSignup)}
                className="w-[100%] max-w-lg space-y-4 "
              >
                <Box className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-4">
                  <Box className="w-full">
                    <TextInputBox
                      form={form}
                      icon="user"
                      fieldName="firstName"
                      type="text"
                      placeholder="First Name"
                      key={"firstName"}
                    />
                  </Box>

                  <Box className="w-full">
                    <TextInputBox
                      form={form}
                      icon="user"
                      fieldName="lastName"
                      type="text"
                      placeholder="Last name"
                      key={"lastName"}
                    />
                  </Box>
                </Box>

                <Box className="w-full">
                  <TextInputBox
                    form={form}
                    icon="mail"
                    fieldName="email"
                    type="email"
                    placeholder="Email"
                    key={"email"}
                  />
                </Box>

                <Box>
                  <TextInputBox
                    form={form}
                    icon="phone"
                    fieldName="phone"
                    type="Phone"
                    placeholder="Phone Number"
                    key={"Pnone"}
                  />
                  <ErrorMessage
                    errors={form.formState.errors}
                    name="phone"
                    render={({ message }) => (
                      <p className="text-sm text-center justify-center text-destructive mt-2 flex ">
                        <span className=" text-destructive ">
                          <Info size={"18px"} />
                        </span>
                        {message}
                      </p>
                    )}
                  />
                </Box>

                <Box>
                  <PasswordInputBox form={form} />
                  {/* <ErrorMessage
                    errors={form.formState.errors}
                    name="password"
                    render={({ message }) => (
                      <p className="text-sm text-center justify-center text-error-0 mt-2 flex text-error items-start gap-1">
                        <span className="mt-[2px] ">
                          <Info size={"12px"} />
                        </span>
                        {message}
                      </p>
                    )}
                  /> */}
                </Box>

                <Box className="relative ">
                  <ConfirmPasswordInputBox
                    form={form}
                    bgColor={bgColor}
                    textColor={textColor}
                    // password={`${form.watch("password")}`}
                  />
                  {/* <ErrorMessage
                    errors={form.formState.errors}
                    name="confirmPassword"
                    render={({ message }) => (
                      <p className="text-sm text-center justify-center text-error-0 mt-2 flex text-error items-start gap-1">
                        <span className="mt-[2px] ">
                          <Info size={"12px"} />
                        </span>
                        {message}
                      </p>
                    )}
                  /> */}
                </Box>

                <TermsInput form={form} name="terms" />
                {/* <ErrorMessage
                  errors={form.formState.errors}
                  name="terms"
                  render={({ message }) => (
                    <p className="text-sm text-center justify-center text-error-0 mt-2 flex ps-2 ">
                      <span className=" text-error-0 ">
                        <Info size={"12px"} />
                      </span>
                      {message}
                    </p>
                  )}
                /> */}

                <Pressable onPress={form.handleSubmit(handleSignup)}>
                  <SendButton
                    bgColor={bgColor}
                    textColor={textColor}
                    isLoading={buttonLoading}
                    actionWord="Signup"
                  />
                </Pressable>
              </form>

              <Box className=" flex flex-col items-center justify-center gap-3 text-xs">
                <Link href={"/auth/user/login"}>
                  <Text
                    className="text-center  hover:underline text-black dark:text-white"
                    size={"sm"}
                  >
                    Have an account? login
                  </Text>
                </Link>

                <Link href={"/"}>
                  <Text
                    className="text-center text-black dark:text-white hover:underline"
                    size={"sm"}
                  >
                    Back to Home
                  </Text>
                </Link>

                <Pressable onPress={() => router.back()}>
                  <Text className="text-center text-black dark:text-white  text-sm hover:underline">
                    Go Back
                  </Text>
                </Pressable>
              </Box>
            </Box>

            <Box className=" flex-1 hidden lg:flex w-full h-full overflow-hidden">
              {imgIsLoaded ? (
                <Box className=" flex-col hidden items-center justify-center overflow-hidden lg:flex h-full rounded-r-2xl w-full">
                  <Image
                    source={require("../../../assets/images/auth/auth-side-img-1.png")}
                    className="w-full h-full rouneded-r-2xl object-contain"
                    alt=""
                  />
                </Box>
              ) : (
                <BaggageClaim
                  strokeWidth={"1px"}
                  size={"500px"}
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

export default Register;
