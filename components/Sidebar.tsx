// 'use dom';

// import { router } from "expo-router";
// import { Text, TouchableOpacity, View } from "react-native";

// export default function Sidebar({ role }: { role: string }) {
//     const links =
//         role === "user"
//             ? [
//                 { name: "Home", path: "/(user)/main" },
//                 { name: "Cart", path: "/(user)/main/cart" },
//                 { name: "Profile", path: "/(user)/main/profile" },
//             ]
//             : role === "dispatch"
//                 ? [
//                     { name: "Deliveries", path: "/dispatch/main/deliveries" },
//                     { name: "History", path: "/dispatch/main/history" },
//                 ]
//                 : role === "admin"
//                     ? [
//                         { name: "Dashboard", path: "/admin/main" },
//                         { name: "Users", path: "/admin/main/users" },
//                         { name: "Reports", path: "/admin/main/reports" },
//                     ]
//                     : [
//                         { name: "Chats", path: "/customerService/main/chats" },
//                         { name: "Tickets", path: "/customerService/main/tickets" },
//                     ];

//     return (
//         <View className="w-56 bg-white p-4 border-r border-gray-200">
//             <Text className="text-2xl font-bold mb-4 capitalize">{role}</Text>
//             {links.map((link) => (
//                 <TouchableOpacity
//                     key={link.path}
//                     onPress={() => router.push(link.path)}
//                     className="mb-3"
//                 >
//                     <Text className="text-lg text-gray-700">{link.name}</Text>
//                 </TouchableOpacity>
//             ))}
//         </View>
//     );
// }

'use dom';

import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
} from '@/components/ui/avatar';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import {
    Drawer,
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
} from '@/components/ui/drawer';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Home, LogOut, ShoppingCart, User, Wallet } from 'lucide-react-native';
import React from 'react';

// {showDrawer, setShowDrawer}
// const setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>
// 


export default function Sidebar({ showDrawer, setShowDrawer }: {
    showDrawer: boolean; setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) {
   
    return (
        <>
          
            <Drawer
                isOpen={showDrawer}
                onClose={() => {
                    setShowDrawer(false);
                }}
            >
                <DrawerBackdrop />
                <DrawerContent className="w-[270px] md:w-[300px]">
                    <DrawerHeader className="justify-center flex-col gap-2">
                        <Avatar size="2xl">
                            <AvatarFallbackText>User Image</AvatarFallbackText>
                            <AvatarImage
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                                }}
                            />
                        </Avatar>
                        <VStack className="justify-center items-center">
                            <Text size="lg">User Name</Text>
                            <Text size="sm" className="text-typography-600">
                                abc@gmail.com
                            </Text>
                        </VStack>
                    </DrawerHeader>
                    <Divider className="my-4" />
                    <DrawerBody contentContainerClassName="gap-2">
                        <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                            <Icon as={User} size="lg" className="text-typography-600" />
                            <Text>My Profile</Text>
                        </Pressable>
                        <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                            <Icon as={Home} size="lg" className="text-typography-600" />
                            <Text>Saved Address</Text>
                        </Pressable>
                        <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                            <Icon
                                as={ShoppingCart}
                                size="lg"
                                className="text-typography-600"
                            />
                            <Text>Orders</Text>
                        </Pressable>
                        <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                            <Icon as={Wallet} size="lg" className="text-typography-600" />
                            <Text>Saved Cards</Text>
                        </Pressable>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button
                            className="w-full gap-2"
                            variant="outline"
                            action="secondary"
                        >
                            <ButtonText>Logout</ButtonText>
                            <ButtonIcon as={LogOut} />
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
