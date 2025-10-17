import { Stack } from "expo-router";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { ThemeProvider, useThemeContext } from "@hooks/ThemeContext";
import { UserProvider } from "@hooks/UserContext";

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
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="landing" />
          <Stack.Screen name="index" />
          <Stack.Screen name="auth" />
        </Stack>
      </GluestackUIProvider>
    </UserProvider>
  );
}
