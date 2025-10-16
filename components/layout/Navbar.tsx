import { Box } from "@components/ui/box";
import { Image } from "@components/ui/image";
import { Pressable } from "@components/ui/pressable";
import { Text } from "@components/ui/text";
import { ROUTES } from "@constants/routes";
import usePreloadAssets from "@hooks/usePreloadAssets";
import "@styles/global.css";
import { Link } from "expo-router";
import { Bell, Moon, ShoppingCart, Sun, User } from "lucide-react-native";
import { Platform, StyleSheet } from "react-native";

export type NavbarProps = {
    page?: "landing" | "auth";
    user?: any;
    colorMode: "light" | "dark";
    toggleColorMode?: () => void;
};

const Navbar = ({ page, colorMode, toggleColorMode, user }: NavbarProps) => {
    const logoLoaded = usePreloadAssets([require("@/assets/images/auth/logo.png")]);

    return (
        <Box className="w-full" style={styles.fullWidth}>
            <Box
                className="fixed w-full top-0 z-[900] text-black dark:text-white"
                style={styles.navbarFixed}
            >{page === "landing" ?
                <Box
                    className={` w-full mx-auto text-black dark:text-white relative  "px-4 sm:px-8 max-w-[2100px]"
                       
                        }`}
                    style={StyleSheet.flatten([
                        {
                            width: "100%",
                            position: "relative",
                            ...Platform.select({
                                android: {
                                    paddingTop: 40,
                                },
                                ios: { paddingTop: 40 }

                            }),
                            // backgroundColor: colorMode === 'dark' && page === "auth" ? "black" : "white",
                        },
                        page === "landing"
                            ? styles.navLandingContainer
                            : styles.navAuthContainer,
                    ])}
                >
                    <Box
                        className={`w-full items-center justify-between flex flex-row p-5 ${page === "landing"
                            ? "backdrop-blur-sm rounded-full bg-white/10 mt-3"
                            : "rounded-0 shadow bg-black dark:shadow-primary-0"
                            }`}
                        style={StyleSheet.flatten([
                            styles.navbarInner,
                            page === "landing" ? styles.navLanding : styles.navAuth,
                        ])}
                    >
                        {/* Logo section */}
                        <Box className="flex items-end-safe gap-x-3" style={styles.logoRow}>
                            <Box className="h-16 w-[110px] sm:w-[150px]" style={styles.logoBox}>
                                {logoLoaded ? <Link href="/" className="w-full h-full" style={styles.logoLink}>
                                    {colorMode === "dark" ? (
                                        <Image
                                            source={require("@assets/images/auth/logo-vertical-dark.png")}
                                            className="w-full h-full rouneded-l-2xl object-contain"
                                            style={styles.logoImage}
                                            alt=""

                                        />
                                    ) : (
                                        <Image
                                            source={require("../../assets/images/auth/logo.png")}
                                            className="w-full h-full rouneded-l-2xl object-contain"
                                            style={styles.logoImage}
                                            alt=""
                                        />
                                    )}
                                </Link> :
                                    <Link href={"/"}>
                                        <Text size={"lg"}>SendMe</Text>
                                    </Link>
                                }
                            </Box>
                        </Box>

                        {/* Right-side actions */}
                        {page === "landing" ? (
                            <Box
                                className="flex items-center justify-end gap-3"
                                style={styles.iconGroup}
                            >
                                <Pressable onPress={toggleColorMode}>
                                    {colorMode === "light" ? <Moon /> : <Sun />}
                                </Pressable>
                            </Box>
                        ) : (
                            <>
                                {user?.avatar && (
                                    <Box
                                        className="flex-row items-center gap-2"
                                        style={styles.userInfo}
                                    >
                                        <Text style={styles.userName}>{user.name}</Text>
                                        {user.avatar && (
                                            <Image
                                                source={{ uri: user.avatar }}
                                                className="w-8 h-8 rounded-full"
                                                style={styles.userAvatar}
                                                alt=""
                                            />
                                        )}
                                    </Box>
                                )}

                                <Box
                                    className={`flex flex-row items-center justify-center gap-x-2 sm:gap-x-5 text-black dark:text-white ${page === "auth" && "me-8 sm:me-10"
                                        }`}
                                    style={styles.actionIcons}
                                >
                                    <Link href={ROUTES.LANDING}>
                                        <Text>
                                            <Bell size={20} />
                                        </Text>
                                    </Link>

                                    <Link href={"/(user)/main/cart"} style={styles.cartLink}>
                                        <Text>
                                            <ShoppingCart size={20} />
                                        </Text>
                                        <Text
                                            size={"xs"}
                                            className="absolute -top-2 right-0 text-error-500 font-bold"
                                            style={styles.cartBadge}
                                        >
                                            {user?.cart?.length || 0}
                                        </Text>
                                    </Link>

                                    <Link href={ROUTES.LANDING}>
                                        <Text>
                                            <User size={20} />
                                        </Text>
                                    </Link>

                                    <Box
                                        className="flex items-center justify-end gap-3"
                                        style={styles.iconGroup}
                                    >
                                        <Pressable onPress={toggleColorMode}>
                                            {colorMode === "light" ? <Moon size={18} /> : <Sun size={18} />}
                                        </Pressable>
                                    </Box>
                                </Box>
                            </>
                        )}
                    </Box>
                </Box>

                :


                <Box
                    className={` w-full mx-auto text-black dark:text-white relative
                        px-0 w-full"
                        }`}
                    style={StyleSheet.flatten([
                        {
                            width: "100%",
                            position: "relative",
                            ...Platform.select({
                                android: {
                                    paddingTop: 40,
                                },
                                ios: { paddingTop: 40 }

                            }),
                            backgroundColor: colorMode === 'dark' && page === "auth" ? "black" : "white",
                        },
                      
                        styles.navAuthContainer,
                    ])}
                >
                    <Box
                        className={`w-full items-center justify-between flex flex-row p-5 ${page === "landing"
                            ? "backdrop-blur-sm rounded-full bg-white/10 mt-3"
                            : "rounded-0 shadow bg-black dark:shadow-primary-0"
                            }`}
                        style={StyleSheet.flatten([
                            styles.navbarInner,
                            page === "landing" ? styles.navLanding : styles.navAuth,
                        ])}
                    >
                        {/* Logo section */}
                        <Box className="flex items-end-safe gap-x-3" style={styles.logoRow}>
                            <Box className="h-16 w-[110px] sm:w-[150px]" style={styles.logoBox}>
                                {logoLoaded ? <Link href="/" className="w-full h-full" style={styles.logoLink}>
                                    {colorMode === "dark" ? (
                                        <Image
                                            source={require("@assets/images/auth/logo-vertical-dark.png")}
                                            className="w-full h-full rouneded-l-2xl object-contain"
                                            style={styles.logoImage}
                                            alt=""

                                        />
                                    ) : (
                                        <Image
                                            source={require("../../assets/images/auth/logo.png")}
                                            className="w-full h-full rouneded-l-2xl object-contain"
                                            style={styles.logoImage}
                                            alt=""
                                        />
                                    )}
                                </Link> :
                                    <Link href={"/"}>
                                        <Text size={"lg"}>SendMe</Text>
                                    </Link>
                                }
                            </Box>
                        </Box>

                        {/* Right-side actions */}
                        {page === "landing" ? (
                            <Box
                                className="flex items-center justify-end gap-3"
                                style={styles.iconGroup}
                            >
                                <Pressable onPress={toggleColorMode}>
                                    {colorMode === "light" ? <Moon /> : <Sun />}
                                </Pressable>
                            </Box>
                        ) : (
                            <>
                                {user?.avatar && (
                                    <Box
                                        className="flex-row items-center gap-2"
                                        style={styles.userInfo}
                                    >
                                        <Text style={styles.userName}>{user.name}</Text>
                                        {user.avatar && (
                                            <Image
                                                source={{ uri: user.avatar }}
                                                className="w-8 h-8 rounded-full"
                                                style={styles.userAvatar}
                                                alt=""
                                            />
                                        )}
                                    </Box>
                                )}

                                <Box
                                    className={`flex flex-row items-center justify-center gap-x-2 sm:gap-x-5 text-black dark:text-white ${page === "auth" && "me-8 sm:me-10"
                                        }`}
                                    style={styles.actionIcons}
                                >
                                    <Link href={ROUTES.LANDING}>
                                        <Text>
                                            <Bell size={20} />
                                        </Text>
                                    </Link>

                                    <Link href={"/(user)/main/cart"} style={styles.cartLink}>
                                        <Text>
                                            <ShoppingCart size={20} />
                                        </Text>
                                        <Text
                                            size={"xs"}
                                            className="absolute -top-2 right-0 text-error-500 font-bold"
                                            style={styles.cartBadge}
                                        >
                                            {user?.cart?.length || 0}
                                        </Text>
                                    </Link>

                                    <Link href={ROUTES.LANDING}>
                                        <Text>
                                            <User size={20} />
                                        </Text>
                                    </Link>

                                    <Box
                                        className="flex items-center justify-end gap-3"
                                        style={styles.iconGroup}
                                    >
                                        <Pressable onPress={toggleColorMode}>
                                            {colorMode === "light" ? <Moon size={18} /> : <Sun size={18} />}
                                        </Pressable>
                                    </Box>
                                </Box>
                            </>
                        )}
                    </Box>
                </Box>}
            </Box>
        </Box>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    fullWidth: {
        width: "100%",

    },
    navbarFixed: {
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 90,
    },
    navbarContainer: {
        width: "100%",
        position: "relative",
        ...Platform.select({
            android: {
                paddingTop: 40,
            },
            ios: { paddingTop: 40 }

        })
    },
    navLandingContainer: {
        paddingHorizontal: 16,
        maxWidth: 2100,
    },
    navAuthContainer: {
        paddingHorizontal: 0,


    },
    navbarInner: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
    },
    navLanding: {
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.1)",
        marginTop: 12,
        backdropFilter: "blur(6px)",
    },
    navAuth: {
        backgroundColor: "#fff",
        shadowColor: "#00000040",
        shadowOpacity: 0.1,
        elevation: 4,
    },
    logoRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    logoBox: {
        height: 64,
        width: 110,
    },
    logoLink: {
        width: "100%",
        height: "100%",
    },
    logoImage: {
        width: "100%",
        height: "100%",
        contentFit: "contain",
        borderRadius: 8,
    },
    iconGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        justifyContent: "flex-end",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    userName: {
        fontSize: 14,
    },
    userAvatar: {
        width: 32,
        height: 32,
        borderRadius: 999,
    },
    actionIcons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    cartLink: {
        position: "relative",
    },
    cartBadge: {
        position: "absolute",
        top: -6,
        right: 0,
        fontSize: 10,
        fontWeight: "bold",
        color: "#EF4444",
    },
});
