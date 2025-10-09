import { router } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

const products = [
    { id: 1, name: "Shoes" },
    { id: 2, name: "Bag" },
    { id: 3, name: "Watch" },
];

export default function ProductList() {
    return (
        <View className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold mb-4">Products</Text>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable
                        className="mb-3 p-3 border rounded"
                        onPress={() => router.push(`/ (user)/main/product/${item.id}`)}
                    >
                        <Text className="text-lg">{item.name}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
}
