import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {
    Drawer,
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
} from "@/components/ui/drawer";
import { Icon } from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useUser } from "@hooks/UserContext";
import { Link, usePathname } from "expo-router";
import { Home, LogOut, ShoppingCart, User, Wallet } from "lucide-react-native";
import React from "react";

export default function Sidebar({
    showDrawer,
    setShowDrawer,
}: {
    showDrawer: boolean;
    setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const pathname = usePathname();
    const { user } = useUser();

    const links = [
        { href: "/(user)/main/profile", label: "My Profile", icon: User },
        { href: "/(user)/main", label: "Home", icon: Home },
        { href: "/(user)/main/cart", label: "Cart", icon: ShoppingCart },
        { href: "/(user)/main/order", label: "Orders", icon: ShoppingCart },
        { href: "/(user)/main/wallet", label: "Wallet", icon: Wallet },
    ];

    return (
        <Drawer isOpen={showDrawer} onClose={() => setShowDrawer(false)}>
            <DrawerBackdrop />
            <DrawerContent className="w-[270px] md:w-[300px]">
                <DrawerHeader className="justify-center flex-col gap-2">
                    <Avatar size="2xl">
                        <AvatarImage source={{ uri: user?.profileImage || "https://placehold.co/100x100" }} />
                        <AvatarFallbackText>{user?.name || "User"}</AvatarFallbackText>
                    </Avatar>

                    <VStack className="justify-center items-center">
                        <Text size="lg">{user?.name ?? "Guest User"}</Text>
                        <Text size="sm" className="text-typography-600">
                            {user?.email ?? ""}
                        </Text>
                    </VStack>

                </DrawerHeader>

                <Divider className="my-4" />
                <DrawerBody contentContainerClassName="gap-2">
                    {links.map(({ href, label, icon: IconComponent }) => {
                        const isActive = pathname === href;
                        return (
                            <Link key={href} href={href} asChild>
                                <Pressable
                                    className={`gap-3 flex-row items-center p-3 rounded-xl ${isActive ? "bg-primary-100" : "hover:bg-background-50"
                                        }`}
                                >
                                    <Icon
                                        as={IconComponent}
                                        size="lg"
                                        className={`${isActive ? "text-primary-700" : "text-typography-600"
                                            }`}
                                    />
                                    <Text
                                        className={`font-medium ${isActive ? "text-primary-700" : "text-typography-700"
                                            }`}
                                    >
                                        {label}
                                    </Text>
                                </Pressable>
                            </Link>
                        );
                    })}
                </DrawerBody>

                <DrawerFooter>
                    <Button className="w-full gap-2" variant="outline" action="secondary">
                        <ButtonText>Logout</ButtonText>
                        <ButtonIcon as={LogOut} />
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
