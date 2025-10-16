import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ComplianceRoleLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
                <Stack.Screen name="bvn" />
                <Stack.Screen name="nin" />
                <Stack.Screen name="documents" />
                <Stack.Screen name="success" />
            </Stack>
        </SafeAreaView>
    );
}
