'use dom';

import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Sidebar({ role }: { role: string }) {
    const links =
        role === "user"
            ? [
                { name: "Home", path: "/(user)/main" },
                { name: "Cart", path: "/(user)/main/cart" },
                { name: "Profile", path: "/(user)/main/profile" },
            ]
            : role === "dispatch"
                ? [
                    { name: "Deliveries", path: "/(dispatch)/main/deliveries" },
                    { name: "History", path: "/(dispatch)/main/history" },
                ]
                : role === "admin"
                    ? [
                        { name: "Dashboard", path: "/(admin)/main" },
                        { name: "Users", path: "/(admin)/main/users" },
                        { name: "Reports", path: "/(admin)/main/reports" },
                    ]
                    : [
                        { name: "Chats", path: "/(customerService)/main/chats" },
                        { name: "Tickets", path: "/(customerService)/main/tickets" },
                    ];

    return (
        <View className="w-56 bg-white p-4 border-r border-gray-200">
            <Text className="text-2xl font-bold mb-4 capitalize">{role}</Text>
            {links.map((link) => (
                <TouchableOpacity
                    key={link.path}
                    onPress={() => router.push(link.path)}
                    className="mb-3"
                >
                    <Text className="text-lg text-gray-700">{link.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

