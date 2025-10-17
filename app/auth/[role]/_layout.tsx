import { Stack } from "expo-router";

const AuthRoleLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="forgetPassword" />
      <Stack.Screen name="createPassword" />
      <Stack.Screen name="register" />
    </Stack>
  );
};

export default AuthRoleLayout;
