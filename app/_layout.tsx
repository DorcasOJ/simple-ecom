
import { Stack } from "expo-router";

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/styles/global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from 'sonner-native';


export default function RootLayout() {
  return (
    <GluestackUIProvider mode="dark">

      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}> {/* Important for gesture handler */}

          <Stack screenOptions={{ headerShown: false }}>
            {/* Landing page visible to everyone */}
            <Stack.Screen name="index" />

            {/* Separate role stacks */}
            <Stack.Screen name="(user)" />
            <Stack.Screen name="dispatch" />
            <Stack.Screen name="(admin)" />
            <Stack.Screen name="(customerService)" />
          </Stack>
          <Toaster position="top-center" closeButton />


        </GestureHandlerRootView>
      </SafeAreaProvider>
    </GluestackUIProvider>


  )
}
