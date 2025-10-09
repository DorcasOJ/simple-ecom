'use dom';
// eslint-disable-next-line import/no-unresolved
import "@styles/global.css";
import { Platform, ScrollView } from "react-native";
import Landing from "./Landing";

export default function index() {
  return (
    <ScrollView style={{
      $$css: true, _: ' relative bg-secondary'
    }}>
      {Platform.OS === "web" ? (
        < img src="https://images.unsplash.com/photo-1756244866467-f4682840070c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover absolute inset-0 -z-10"
        />
      ) : (
        <Image source={'https://images.unsplash.com/photo-1756244866467-f4682840070c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'} style={{ $$css: true, _: "w-full h-full object-cover absolute inset-0 -z-10" }} />
      )}

      < Landing />
      {/* <View style={{ $$css: true, _:items-center mt-12">
      
        <Image
          source={{ uri: "https://via.placeholder.com/120x120.png?text=Logo" }}
          style={{ $$css: true, _:w-24 h-24 mb-4 rounded-full"
        />
        <Text style={{ $$css: true, _:text-3xl font-bold text-gray-900">SendMe E-commerce</Text>
        <Text style={{ $$css: true, _:text-gray-600 text-center mt-2 mb-10">
          Shop, Deliver, Manage — All in One Platform
        </Text>
      </View> */}

      {/* Call to Action Buttons */}
      {/* <View style={{ $$css: true, _:gap-4">
        <Button title="Shop Now" onPress={() => router.push("/(user)/auth/login")} />
        <Button title="Dispatch Login" onPress={() => router.push("/(dispatch)/auth/login")} />
        <Button title="Admin Login" onPress={() => router.push("/(admin)/auth/login")} />
        <Button title="Customer Service" onPress={() => router.push("/(customerService)/auth/login")} />
      </View> */}

      {/* <View style={{ $$css: true, _: "mt - 12 items- center" }}>
        <Text style={{ $$css: true, _: "text - gray - 500 text- sm" }}>© 2025 SendMe Technologies</Text>
      </View > */}
    </ScrollView >
  );
}

// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }
