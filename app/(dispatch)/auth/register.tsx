"use dom";

import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function UserLogin() {
    return (
        <View
            style={{ $$css: true, _: "flex-1 items-center justify-center bg-white" }}
        >
            <Text style={{ $$css: true, _: "text-xl font-bold mb-4" }}>
                User Login
            </Text>

            <Button title="Sign Up" onPress={() => router.push("/(dispatch)/main")} />
            <Text
                style={{ $$css: true, _: "mt-6 text-blue-600" }}
                onPress={() => router.push("/")}
            >
                ← Back to Landing
            </Text>
        </View>
    );
}
