import { router, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ProductDetails() {
    const { id } = useLocalSearchParams(); // extract :id from the URL

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-2xl font-bold mb-4">Product Details</Text>
            <Text className="text-lg mb-6">Product ID: {id}</Text>

            <Button title="Back to Products" onPress={() => router.back()} />
        </View>
    );
}
