import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Box } from "@components/ui/box";
import { VStack } from "@components/ui/vstack";
import { useThemeContext } from "@hooks/ThemeContext";
import { useUser } from "@hooks/UserContext";
import { Link } from "expo-router";
import React, { useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DISPATCHERS = [
    { id: 1, name: "Swift Dispatch", rating: 4.9 },
    { id: 2, name: "Speedy Express", rating: 4.7 },
    // { id: 3, name: "GoGo Delivery", rating: 4.8 },
    { id: 3, name: "IPoo Delivery", rating: 4.8 },
];

export default function OrderPage() {
    const { user, clearCart } = useUser();
    const [search, setSearch] = useState("");
    const [selectedDispatch, setSelectedDispatch] = useState<any>(null);
    const [isOrdered, setIsOrdered] = useState(false);

    const { colorMode } = useThemeContext();
    const isDark = colorMode === "dark";
    const filteredDispatchers = DISPATCHERS.filter((d) =>
        d.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleOrder = () => {
        setIsOrdered(true);
        clearCart();
    };

    if (isOrdered) {
        return (
            <View className={`flex-1 items-center justify-center ${isDark ? "bg-black" : "bg-white"} py-20`}>

                <Text className="text-2xl font-bold mb-4">✅ Order Placed!</Text>
                <Text className="text-gray-600 mb-4">
                    Your items will be delivered by {selectedDispatch?.name}.
                </Text>
                <Text className="text-sm text-gray-500">
                    You’ll get updates soon. Thank you for your order!
                </Text>

                <Link href="/(user)/main/product" asChild className="mt-4">
                    <Button>
                        <ButtonText>Shop MoreProducts</ButtonText>
                    </Button>
                </Link>
            </View>
        );
    }

    return (
        <Box className={`h-full w-full ${isDark ? "bg-black" : "bg-white"} py-20 px-6 `}>

            <ScrollView>
                <Text className="text-2xl font-bold mb-3">Checkout</Text>

                <Text className="text-gray-700 mb-2">
                    Total Items: {user.cart.length}
                </Text>
                <VStack space={"xl"}>

                    <TextInput
                        placeholder="Search for a dispatch service..."
                        value={search}
                        onChangeText={setSearch}
                        className="border border-gray-300 max-w-lg mx-auto w-full rounded-lg  p-3 mb-3"
                    />
                    <Box >
                        <FlatList
                            data={filteredDispatchers}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View
                                    className={`p-3 mb-4 max-w-xl w-full mx-auto rounded-lg border ${selectedDispatch?.id === item.id
                                        ? "border-primary-500 bg-primary-0"
                                        : "border-secondary-200"
                                        }`}
                                >
                                    <Text className="font-semibold">{item.name}</Text>
                                    <Text className="text-gray-500">⭐ {item.rating}</Text>
                                    <Button
                                        size="sm"
                                        className={`mt-2 bg-secondary-0 border-secondary-0 ${selectedDispatch?.id === item.id ? "bg-primary-0 border-primary-0" : "bg-secondary-0 border-secondary-0"}`}
                                        onPress={() => setSelectedDispatch(item)}
                                    >
                                        <ButtonText>
                                            {selectedDispatch?.id === item.id
                                                ? "Selected"
                                                : "Connect Dispatch"}
                                        </ButtonText>
                                    </Button>
                                </View>
                            )}
                        />
                    </Box>


                    {selectedDispatch && (
                        <Button className="mt-4 w-full max-w-xl mx-auto" onPress={handleOrder}>
                            <ButtonText>Confirm Order</ButtonText>
                        </Button>
                    )}
                </VStack>
            </ScrollView>

        </Box>
    );
}
