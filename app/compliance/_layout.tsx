import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ComplianceLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="[role]" />
            </Stack>
        </SafeAreaView>
    );
}
