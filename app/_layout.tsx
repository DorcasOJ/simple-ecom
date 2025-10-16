import { GluestackUIProvider } from '@components/ui/gluestack-ui-provider';
import { ThemeProvider, useThemeContext } from '@hooks/ThemeContext';
import { UserProvider } from '@hooks/UserContext';
import { Stack } from 'expo-router';
import { LogBox } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Toaster } from 'sonner-native';

// 🧩 Ignore or enable all logs
LogBox.ignoreAllLogs(false);

// 🧩 Catch global JS errors
if (global.ErrorUtils && typeof global.ErrorUtils.setGlobalHandler === "function") {
  global.ErrorUtils.setGlobalHandler((error, isFatal) => {
    console.error("🚨 Global JS Error caught:", error, isFatal);
  });
}


export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { colorMode } = useThemeContext();

  return (
    <UserProvider>
      <GluestackUIProvider mode={colorMode}>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Landing" />
              <Stack.Screen name="index" />
              {/* <Stack.Screen name="" /> */}

              {/* Auth routes */}
              <Stack.Screen name="auth/user" />
              <Stack.Screen name="auth/admin" />
              <Stack.Screen name="auth/createPassword/[token]" />
              <Stack.Screen name="auth/dispatch" />

              {/* Protected routes */}
              <Stack.Screen name="(user)" />
              <Stack.Screen name="admin" />
              <Stack.Screen name="compliance" />
              <Stack.Screen name="customerService" />
              <Stack.Screen name="dispatch" />
            </Stack>
            <Toaster position="top-center" closeButton />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </GluestackUIProvider>
    </UserProvider>
  );
}