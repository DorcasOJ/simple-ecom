// app/(user)/main/_layout.tsx


import Sidebar from "@components/Sidebar";
import { Stack } from "expo-router";
import { View } from "react-native";


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

export default function CustomerServiceMainLayout() {
    return (
        <View className="flex-1 flex-row">
            {/* Sidebar stays constant */}
            <Sidebar role="user" />

            {/* Main content area */}
            <View className="flex-1 bg-gray-50">
                {/* Stack controls navigation transitions within main */}
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
