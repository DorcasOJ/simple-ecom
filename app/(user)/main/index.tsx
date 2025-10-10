'use dom';
import { useThemeContext } from "@hooks/ThemeContext";
import { Search, ShoppingCart } from "lucide-react-native";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const categories = [
    { id: "1", name: "Men", image: "https://via.placeholder.com/80x80?text=Men" },
    { id: "2", name: "Women", image: "https://via.placeholder.com/80x80?text=Women" },
    { id: "3", name: "Kids", image: "https://via.placeholder.com/80x80?text=Kids" },
    { id: "4", name: "Accessories", image: "https://via.placeholder.com/80x80?text=Acc" },
];

const products = [
    { id: "1", name: "Classic Sneakers", price: 45, image: "https://via.placeholder.com/200x200?text=Sneakers" },
    { id: "2", name: "Denim Jacket", price: 80, image: "https://via.placeholder.com/200x200?text=Jacket" },
    { id: "3", name: "Wrist Watch", price: 150, image: "https://via.placeholder.com/200x200?text=Watch" },
    { id: "4", name: "Leather Bag", price: 100, image: "https://via.placeholder.com/200x200?text=Bag" },
];

export default function indec() {

    const { colorMode, toggleColorMode } = useThemeContext();
    const isDark = colorMode === "dark";

    return (
        <View className={`flex-1 ${isDark ? "bg-[#0f1512]" : "bg-[#f6f8f7]"}`}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {/* Header */}
                <View className="flex-row items-center justify-between px-5 pt-10 pb-4">
                    <View>
                        <Text className={`text-lg ${isDark ? "text-gray-200" : "text-gray-700"}`}>Welcome back 👋</Text>
                        <Text className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}>
                            Shop Your Style
                        </Text>
                    </View>

                    <TouchableOpacity className="p-2 rounded-full bg-primary-0/40">
                        <ShoppingCart size={22} color={isDark ? "white" : "black"} />
                    </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View className="px-5">
                    <View
                        className={`flex-row items-center rounded-full px-4 py-2 ${isDark ? "bg-gray-800" : "bg-gray-100"
                            }`}
                    >
                        <Search size={18} color={isDark ? "white" : "black"} />
                        <TextInput
                            placeholder="Search products..."
                            placeholderTextColor={isDark ? "#aaa" : "#555"}
                            className={`flex-1 ml-2 ${isDark ? "text-white" : "text-black"}`}
                        />
                    </View>
                </View>

                {/* Categories */}
                <View className="mt-6">
                    <Text className={`px-5 text-lg font-semibold ${isDark ? "text-white" : "text-black"}`}>
                        Categories
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="mt-3 px-4"
                    >
                        {categories.map((cat) => (
                            <TouchableOpacity
                                key={cat.id}
                                className={`items-center mx-2 p-3 rounded-2xl ${isDark ? "bg-gray-800" : "bg-white"
                                    } shadow-sm`}
                            >
                                <Image
                                    source={{ uri: cat.image }}
                                    className="w-16 h-16 rounded-full mb-2"
                                />
                                <Text className={`${isDark ? "text-gray-200" : "text-gray-700"}`}>
                                    {cat.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Products */}
                <View className="mt-6 px-5">
                    <Text className={`text-lg font-semibold ${isDark ? "text-white" : "text-black"}`}>
                        Featured Products
                    </Text>

                    <View className="flex-row flex-wrap justify-between mt-4">
                        {products.map((product) => (
                            <TouchableOpacity
                                key={product.id}
                                className={`w-[48%] mb-4 rounded-2xl p-3 ${isDark ? "bg-gray-800" : "bg-white"
                                    } shadow`}
                            >
                                <Image
                                    source={{ uri: product.image }}
                                    className="w-full h-40 rounded-xl"
                                    resizeMode="cover"
                                />
                                <Text
                                    className={`mt-2 text-base font-medium ${isDark ? "text-gray-100" : "text-gray-800"
                                        }`}
                                >
                                    {product.name}
                                </Text>
                                <Text className={`mt-1 font-semibold text-primary-500`}>
                                    ${product.price}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
