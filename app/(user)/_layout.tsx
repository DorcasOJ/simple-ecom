// app/(user)/_layout.tsx
import { Stack } from "expo-router";
import React from 'react';

export default function UserLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false, // hides the top title bar
        }}
      >
        {/* Screens inside (user)/ */}
        {/* <Stack.Screen name="auth" /> */}
        <Stack.Screen name="main" />
        {/* <Stack.Screen name="compliance" /> */}
      </Stack>
    </>

  );
}

