import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Box } from "@components/ui/box";
import { useThemeContext } from "@hooks/ThemeContext";
import { useUser } from "@hooks/UserContext";
import { Link } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

export default function CartPage() {

    const { user, removeFromCart, clearCart } = useUser();

    const total = user?.cart.reduce((sum, item) => sum + item.price, 0) || 0;

    const { colorMode } = useThemeContext();
    const isDark = colorMode === "dark";

    if (user?.cart.length === 0) {
        return (
            <View className={`flex-1 items-center justify-center p-6  ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
                <Text className="text-lg font-semibold text-gray-700 mb-3">
                    Your cart is empty 🛒
                </Text>
                <Link href="/(user)/main/product" asChild>
                    <Button>
                        <ButtonText>Shop Products</ButtonText>
                    </Button>
                </Link>
            </View>
        );
    }

    return (
        <Box className={`h-full w-full ${isDark ? "bg-black" : "bg-white"} py-20`}>
            <Box className="flex-1 p-4">
                <Text className="text-2xl font-bold mb-4">Your Cart</Text>


                {user?.cart.map((item) => (
                    <View
                        key={item.id}
                        className={`flex-row bg-gray-200 dark:bg-neutral-800 p-3 mb-3 rounded-xl items-center shadow-sm`}
                    >
                        <Image
                            source={{ uri: item.image }}
                            className="w-20 h-20 rounded-lg"
                            ContentFit="contain"
                            alt=""
                        />
                        <View className="flex-1 ml-3">
                            <Text className="font-semibold" numberOfLines={1}>
                                {item.title}
                            </Text>
                            <Text className="text-gray-500">${item.price}</Text>
                        </View>
                        <Button
                            size="sm"
                            variant="outline"
                            onPress={() => removeFromCart(item.id)}
                        >
                            <ButtonText>Remove</ButtonText>
                        </Button>
                    </View>
                ))}

                <View className="mt-6 p-4 bg-primary-0/50 border-primary-500/90 rounded-xl">
                    <Text className="text-lg font-semibold">
                        Total: ${total.toFixed(2)}
                    </Text>

                    <View className="flex-row justify-between mt-4">
                        <Button variant="outline" onPress={clearCart}>
                            <ButtonText>Clear Cart</ButtonText>
                        </Button>

                        <Link href="/main/order" asChild>
                            <Button>
                                <ButtonText>Checkout</ButtonText>
                            </Button>
                        </Link>
                    </View>
                </View>
            </Box>
        </Box>
    )
}
