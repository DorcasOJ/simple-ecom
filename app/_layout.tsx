
import { Stack } from "expo-router";

export default function RootLayout() {
  return (

    <Stack screenOptions={{ headerShown: false }}>
      {/* Landing page visible to everyone */}
      <Stack.Screen name="index" />

      {/* Separate role stacks */}
      <Stack.Screen name="(user)" />
      <Stack.Screen name="(dispatch)" />
      <Stack.Screen name="(admin)" />
      <Stack.Screen name="(customerService)" />
    </Stack>

  )
}
