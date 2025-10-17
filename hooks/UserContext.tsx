// export const useUser = () => useContext(UserContext);
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator, Appearance, Text, View } from "react-native";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number;
};

type User = {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  cart: CartItem[];
  role: "user" | "dispatch" | "customerService" | "admin";
  token?: string;
  avatar?: string;
};

export type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateProfileImage: (image: string) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<User>({
    id: "0",
    name: "Abc",
    email: "abc@gmail.com",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=687&q=80",
    cart: [],
    role: "user",
  });

  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  // ✅ Load font (Sora)
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Sora-Regular": require("@assets/fonts/Sora-Regular.ttf"),
          "Sora-SemiBold": require("@assets/fonts/Sora-SemiBold.ttf"),
          "Lato-Regular": require("@assets/fonts/Lato-Regular.ttf"),
          "Lato-Bold": require("@assets/fonts/Lato-Bold.ttf"),
          "Roboto-Regular": require("@assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Medium": require("@assets/fonts/Roboto-Medium.ttf"),
        });
        setIsFontLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") {
          setTheme(savedTheme);
        } else {
          // fallback to system preference
          const systemTheme = Appearance.getColorScheme() || "light";
          setTheme(systemTheme);
        }
      } catch (err) {
        console.error("Failed to load theme", err);
        setTheme("light");
      }
    };

    loadFonts();
    loadTheme();
  }, []);

  // ✅ Load user from AsyncStorage
  useEffect(() => {
    const loadUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem("user");
        if (savedUser) {
          setUserState(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setIsUserLoaded(true);
      }
    };
    loadUser();
  }, []);

  // ✅ Save user to AsyncStorage whenever it changes
  useEffect(() => {
    if (isUserLoaded && user) {
      AsyncStorage.setItem("user", JSON.stringify(user)).catch((error) =>
        console.error("Failed to save user:", error)
      );
    }
  }, [user, isUserLoaded]);

  const setUser = React.useCallback((newUser: User | null) => {
    setUserState(newUser as User);
    if (!newUser) {
      AsyncStorage.removeItem("user").catch((error) =>
        console.error("Failed to remove user:", error)
      );
    }
  }, []);

  const updateCartQuantity = React.useCallback(
    (id: number, quantity: number) => {
      setUserState((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          cart: prev.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        };
      });
    },
    []
  );

  const updateProfileImage = React.useCallback((image: string) => {
    setUserState((prev) => {
      if (!prev) return prev;
      return { ...prev, avatar: image };
    });
  }, []);

  const addToCart = React.useCallback((item: CartItem) => {
    setUserState((prev) => {
      if (!prev) return prev;

      const exists = prev.cart.find((p) => p.id === item.id);
      let newCart: CartItem[];

      if (exists) {
        newCart = prev.cart.map((p) =>
          p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      } else {
        newCart = [...prev.cart, { ...item, quantity: 1 }];
      }

      return { ...prev, cart: newCart };
    });
  }, []);

  const removeFromCart = React.useCallback((id: number) => {
    setUserState((prev) => {
      if (!prev) return prev;
      const newCart = prev.cart.filter((p) => p.id !== id);
      return { ...prev, cart: newCart };
    });
  }, []);

  const clearCart = React.useCallback(() => {
    setUserState((prev) => {
      if (!prev) return prev;
      return { ...prev, cart: [] };
    });
  }, []);

  // ✅ Show loading screen until both font + user data load
  if (!isFontLoaded || !isUserLoaded || theme === null) {
    console.log(setIsFontLoaded, isUserLoaded, theme, "--");
    const backgroundColor = theme === "dark" ? "#000" : "#fff";
    const textColor = theme === "dark" ? "#fff" : "#000";
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor,
          // backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator
          size="large"
          color={theme === "dark" ? "#fff" : "#007AFF"}
        />
        <Text
          style={{
            marginTop: 10,
            fontFamily: "Sora-Regular",
            color: textColor,
          }}
        >
          Loading App...
        </Text>
      </View>
    );
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        addToCart,
        removeFromCart,
        clearCart,
        updateProfileImage,
        updateCartQuantity,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};
