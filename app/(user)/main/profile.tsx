import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Box } from "@components/ui/box";
import { useThemeContext } from "@hooks/ThemeContext";
import { useUser } from "@hooks/UserContext";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Image, View } from "react-native";

export default function ProfilePage() {
    const { user, updateProfileImage } = useUser();

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            updateProfileImage(uri); // updates in sidebar immediately
        }
    };
    const { colorMode } = useThemeContext();
    const isDark = colorMode === "dark";

    return (
        <Box className={`h-full w-full ${isDark ? "bg-black" : "bg-white"} py-20`}>
            <View className="items-center">
                <Image
                    source={{
                        uri:
                            user?.avatar ||
                            "https://via.placeholder.com/150x150.png?text=No+Image",
                    }}
                    className="w-32 h-32 rounded-full mb-3 border border-primary-300/40"
                    alt=""
                />
                <Button onPress={pickImage} className="mb-4">
                    <ButtonText>Edit Profile Picture</ButtonText>
                </Button>

                <Text className="text-2xl font-semibold mt-2">{user?.name}</Text>
                <Text className="text-gray-600">{user?.email}</Text>
            </View>
            <Box className="w-full mt-8 border-t border-primary-300/40 ">
                <Box className="pt-6 w-full max-w-xl mx-auto flex items-center justify-center">
                    <Text className="text-lg font-medium mb-2">Account Details</Text>
                    <Text className="text-gray-700">Phone: +234 800 000 0000</Text>
                    <Text className="text-gray-700 mt-1">Address: Lagos, Nigeria</Text>
                </Box>
            </Box>

        </Box>
    );
}
