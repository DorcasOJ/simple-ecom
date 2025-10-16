import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import Navbar from "@components/layout/Navbar";
import { useThemeContext } from "@hooks/ThemeContext";
import { useUser } from "@hooks/UserContext";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, View } from "react-native";

export default function ProductListPage() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [addedItems, setAddedItems] = useState<{ [key: number]: boolean }>({});
    const { colorMode } = useThemeContext();
    const { addToCart, user, updateCartQuantity } = useUser();

    const isDark = colorMode === "dark";

    // ✅ Fetch Products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // ✅ Handle Add to Cart
    const handleAddToCart = (item: any) => {
        addToCart(item);
        setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    };

    // ✅ Handle Add More (Increase Quantity)
    const handleAddMore = (item: any) => {
        // find quantity from cart
        const cartItem = user?.cart?.find((c) => c.id === item.id);
        const currentQty = cartItem?.quantity || 0;
        updateCartQuantity(item.id, currentQty + 1);
    };

    if (loading) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    return (
        <Box className={`h-full w-full ${isDark ? "bg-black text-white" : "bg-white text-black"} pb-20`}>
            <Navbar page="auth" />

            <Box className="w-full max-w-7xl mx-auto">
                <Box className="pt-36 px-6 sm:mt-32 sm:pt-0 flex flex-col justify-center h-full w-full">
                    <FlatList
                        data={products}
                        numColumns={2}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{ padding: 10 }}
                        renderItem={({ item }) => {
                            const isAdded = addedItems[item.id];
                            const cartItem = user?.cart?.find((c) => c.id === item.id) as (typeof item & { quantity?: number }) | undefined;

                            return (
                                <View
                                    className="rounded-2xl m-2 p-3 w-[47%] shadow-md bg-transparent border border-primary-100"
                                >
                                    <Image
                                        source={{ uri: item.image }}
                                        className="w-full h-40 rounded-lg"
                                        ContentFit="contain"
                                        alt=""
                                    />
                                    <Text className=" font-semibold mt-2" numberOfLines={1}>
                                        {item.title}
                                    </Text>
                                    <Text className="mb-2">${item.price}</Text>

                                    <View className="flex-col gap-y-3 sm:flex-row justify-between mt-2">
                                        {/* ✅ View Product Link */}
                                        <Link href={`/(user)/main/product/${item.id}`} asChild>
                                            <Button size="sm" variant="outline" className="flex-1 mr-1">
                                                <ButtonText>View</ButtonText>
                                            </Button>
                                        </Link>

                                        {/* ✅ Add or Added Button */}
                                        {!isAdded ? (
                                            <Button
                                                size="sm"
                                                className="flex-1 ml-1"
                                                onPress={() => handleAddToCart(item)}
                                            >
                                                <ButtonText>Add to Cart</ButtonText>
                                            </Button>
                                        ) : (
                                            <View className="flex-col flex-1 ml-1">
                                                <Button
                                                    size="sm"
                                                    className="bg-green-500"
                                                    onPress={() => handleAddMore(item)}
                                                >
                                                    <ButtonText>Added ✓</ButtonText>
                                                </Button>
                                                <Text className="text-center text-xs text-gray-500 mt-1">
                                                    Qty: {cartItem?.quantity || 1}
                                                </Text>
                                            </View>
                                        )}
                                    </View>
                                </View>
                            );
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

