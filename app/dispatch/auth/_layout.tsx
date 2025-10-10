import { Stack } from "expo-router";

export default function DispatchAuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
            <Stack.Screen name="forgetPassword" />
            <Stack.Screen name="createPassword" />
        </Stack>
    );
}
