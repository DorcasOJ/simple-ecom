// // import React, { createContext, ReactNode, useContext, useState } from "react";

// // type Product = {
// //     id: number;
// //     title: string;
// //     price: number;
// //     image: string;
// // };

// // type User = {
// //     name: string;
// //     email: string;
// //     profileImage: string | null;
// //     cart: Product[];
// // };

// // type UserContextType = {
// //     user: User;
// //     setUser: any;
// //     updateProfileImage: (image: string) => void;
// //     updateCartQuantity: any;
// //     addToCart: (product: Product) => void;
// //     removeFromCart: (id: number) => void;
// //     clearCart: () => void;
// // };

// // const UserContext = createContext<UserContextType | undefined>(undefined);

// // export const UserProvider = ({ children }: { children: ReactNode }) => {
// //     const [user, setUser] = useState<User>({
// //         name: "Abc",
// //         email: "abc@gmail.com",
// //         profileImage:
// //             "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=687&q=80",
// //         cart: [],
// //     });

// //     const updateProfileImage = (image: string) =>
// //         setUser((prev) => ({ ...prev, profileImage: image }));

// //     const addToCart = (product) => {
// //         setUser((prev) => {
// //             const existing = prev.cart.find((item) => item.id === product.id);
// //             if (existing) {
// //                 return {
// //                     ...prev,
// //                     cart: prev.cart.map((item) =>
// //                         item.id === product.id
// //                             ? { ...item, quantity: (item.quantity || 1) + 1 }
// //                             : item
// //                     ),
// //                 };
// //             }
// //             return { ...prev, cart: [...prev.cart, { ...product, quantity: 1 }] };
// //         });
// //     };

// //     const updateCartQuantity = (id, quantity) => {
// //         setUser((prev) => ({
// //             ...prev,
// //             cart: prev.cart.map((item) =>
// //                 item.id === id ? { ...item, quantity } : item
// //             ),
// //         }));
// //     };


// //     const removeFromCart = (id: number) =>
// //         setUser((prev) => ({
// //             ...prev,
// //             cart: prev.cart.filter((p) => p.id !== id),
// //         }));

// //     const clearCart = () => setUser((prev) => ({ ...prev, cart: [] }));

// //     return (
// //         <UserContext.Provider
// //             value={{
// //                 user, updateProfileImage, addToCart, removeFromCart, clearCart,
// //                 setUser,
// //                 updateCartQuantity,
// //             }}
// //         >
// //             {children}
// //         </UserContext.Provider>
// //     );
// // };

// // export const useUser = () => {
// //     const context = useContext(UserContext);
// //     if (!context) throw new Error("useUser must be used within a UserProvider");
// //     return context;
// // };





// // hooks/UserContext.tsx
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import React, { createContext, useContext, useEffect, useState } from "react";

// interface User {
//     id?: string;
//     name?: string;
//     email?: string;
//     role: "user" | "dispatch" | "customerService" | "admin";
//     token?: string;
//     profileImage?: string;
//     avatar?: string;
//     cart?: any[];
// }

// interface UserContextType {
//     user: User | null;
//     setUser: (user: User | null) => void;
//     addToCart: (item: any) => void;
//     updateCartQuantity: (id: number, quantity: number) => void;
//     clearCart: () => void;
//     updateProfileImage: (image: string) => void;
// }

// const UserContext = createContext<UserContextType>({} as UserContextType);

// export const UserProvider = ({ children }: { children: React.ReactNode }) => {
//     const [user, setUserState] = useState<User | null>(null);

//     // ✅ Load user from storage when app starts
//     useEffect(() => {
//         (async () => {
//             const storedUser = await AsyncStorage.getItem("user");
//             if (storedUser) setUserState(JSON.parse(storedUser));
//         })();
//     }, []);

//     // ✅ Persist user data to AsyncStorage
//     const setUser = async (newUser: User | null) => {
//         setUserState(newUser);
//         if (newUser) {
//             await AsyncStorage.setItem("user", JSON.stringify(newUser));
//         } else {
//             await AsyncStorage.removeItem("user");
//         }
//     };

//     // ✅ Cart functions
//     const addToCart = (item: any) => {
//         if (!user) return;
//         const existingItem = user.cart?.find((p) => p.id === item.id);
//         const updatedCart = existingItem
//             ? user.cart!.map((p) =>
//                 p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
//             )
//             : [...(user.cart || []), { ...item, quantity: 1 }];
//         setUser({ ...user, cart: updatedCart });
//     };

//     const updateProfileImage = (image: string) =>
//         setUser((prev) => ({ ...prev, profileImage: image }));

//     const updateCartQuantity = (id: number, quantity: number) => {
//         if (!user) return;
//         const updatedCart = user.cart!.map((item) =>
//             item.id === id ? { ...item, quantity } : item
//         );
//         setUser({ ...user, cart: updatedCart });
//     };

//     const clearCart = () => {
//         if (user) setUser({ ...user, cart: [] });
//     };

//     return (
//         <UserContext.Provider
//             value={{ user, setUser, addToCart, updateCartQuantity, updateProfileImage, clearCart }}
//         >
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => useContext(UserContext);
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

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

export const UserContext = createContext<UserContextType | undefined>(undefined);

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
        loadFonts();
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

    const updateCartQuantity = React.useCallback((id: number, quantity: number) => {
        setUserState((prev) => {
            if (!prev) return prev;
            return {
                ...prev,
                cart: prev.cart.map((item) =>
                    item.id === id ? { ...item, quantity } : item
                ),
            };
        });
    }, []);

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
    if (!isFontLoaded || !isUserLoaded) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",

                    // backgroundColor: "#fff",
                }}
            >
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={{ marginTop: 10, fontFamily: "Sora" }}>Loading App...</Text>
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


//  export const useUser = () => useContext(UserContext);