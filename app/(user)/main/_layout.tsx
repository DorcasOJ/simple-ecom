// app/(user)/main/_layout.tsx


import Sidebar from "@components/Sidebar";
import { Button, ButtonText } from "@components/ui/button";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUser } from "@hooks/UserContext";
import { Stack, Tabs } from "expo-router";
import { Menu, ShoppingCartIcon } from "lucide-react-native";
import React from "react";
import { Platform, Text, useWindowDimensions, View } from "react-native";


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
    const { user } = useUser()
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
                        tabBarIcon: ({ color, focused }) => (
                            //   <Icon name="home" color={color} size={size} />
                            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />

                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'image' : 'image-outline'} color={color} size={24} />

                        ),
                    }}
                />
                <Tabs.Screen
                    name="cart"
                    options={{
                        title: "Cart",
                        // tabBarIcon: ({ color, focused }) => (
                        //     <Ionicons name={focused ? 'cart-sharp' : 'cart-outline'} color={color} size={24} />

                        // ),
                        tabBarIcon: ({ color, size }) => (
                            <ShoppingCartWithBadge
                                count={user.cart.length}
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="product"
                    options={{
                        title: "Product",
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'cloud-circle-outline' : 'cloud-circle'} color={color} size={24} />

                        ),
                    }}
                />


                {/* Hidden Routes */}
                <Tabs.Screen name="product/index" options={{ href: null, }} />
                <Tabs.Screen name="wallet" options={{ href: null, }} />
                <Tabs.Screen name="product/[id]" options={{ href: null }} />
                <Tabs.Screen name="order" options={{ href: null }} />
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
                className="absolute top-8 right-0 z-40 bg-transparent p-2 me-3 hover:bg-transparent hover:border-primary-0 hover:border-dashed"
            >
                <ButtonText>
                    <Menu className="text-black dark:text-white " />
                </ButtonText>
            </Button>
            {/* Main content area */}
            <View className="flex-1 bg-gray-50">
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name="profile" />
                    <Stack.Screen name="cart" />
                    <Stack.Screen name="order" />
                    <Stack.Screen name="wallet" />
                    <Stack.Screen name="product" />
                </Stack>
            </View>
        </View>
    );

}


const ShoppingCartWithBadge = ({
    count,
    color,
    size,
}: {
    count: number;
    color: string;
    size: number;
}) => (
    <View>
        <ShoppingCartIcon color={color} size={size} />
        {count > 0 && (
            <View
                style={{
                    position: "absolute",
                    right: -5,
                    top: -3,
                    backgroundColor: "red",
                    borderRadius: 10,
                    width: 16,
                    height: 16,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{ color: "white", fontSize: 10 }}>{count}</Text>
            </View>
        )}
    </View>
);