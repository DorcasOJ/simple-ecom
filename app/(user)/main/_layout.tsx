// app/(user)/main/_layout.tsx


import Sidebar from "@components/Sidebar";
import { Button, ButtonText } from "@components/ui/button";
import { Stack, Tabs } from "expo-router";
import { Box, Home, Menu, ShoppingCartIcon, User } from "lucide-react-native";
import React from "react";
import { Platform, useWindowDimensions, View } from "react-native";


// export default function UserMainLayout() {
//     return (
//         <View className="flex-1 flex-row">
//             <Sidebar role="user" />
//             <View className="flex-1 bg-gray-50">
//                 <Slot /> {/* Active screen renders here */}
//             </View>
//         </View>
//     );
// }

// import { Stack } from "expo-router";

export default function UserMainLayout() {
    const { width } = useWindowDimensions();

    // Detect if it's a small screen (like a phone)
    const isMobile = Platform.OS !== "web" || width < 768;

    const [showDrawer, setShowDrawer] = React.useState(false);

    if (isMobile) {
        // 📱 Mobile view → use bottom Tabs
        return (
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: "#000",
                    tabBarInactiveTintColor: "#999",
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color, size }) => (
                            //   <Icon name="home" color={color} size={size} />
                            <Home size={size} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ color, size }) => (
                            // <Icon name="user" color={color} size={size} />
                            <User />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="cart"
                    options={{
                        title: "Cart",
                        tabBarIcon: ({ color, size }) => (
                            // <Icon name="shopping-cart" color={color} size={size} />
                            <ShoppingCartIcon size={size} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="product"
                    options={{
                        title: "Product",
                        tabBarIcon: ({ color, size }) => (
                            // <Icon name="box" color={color} size={size} />
                            <Box size={size} />
                        ),
                    }}
                />
            </Tabs>
        );
    }

    return (
        <View className="flex-1 flex-row">

            <Sidebar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
            <Button
                onPress={() => {
                    setShowDrawer(true);
                }}
                className="absolute left-0 z-40"
            >
                <ButtonText>
                    <Menu />
                </ButtonText>
            </Button>
            {/* Main content area */}
            <View className="flex-1 bg-gray-50">
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name="profile" />
                    <Stack.Screen name="cart" />
                    <Stack.Screen name="product" />
                </Stack>
            </View>
        </View>
    );

}
