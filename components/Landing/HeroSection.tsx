import Container from "@components/Container";
import Spinner from "@components/Spinner";
import { Box } from "@components/ui/box";
import { config } from "@components/ui/gluestack-ui-provider/localConfig";
import { Text } from "@components/ui/text";
import usePreloadAssets from "@hooks/usePreloadAssets";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Platform, TouchableOpacity } from "react-native";


export default function HeroSection({ colorMode }: { colorMode: 'light' | 'dark' }) {

    // const { colorMode } = useThemeContext();
    // const theme = config[colorMode];
    const theme = config[colorMode] ?? config.light;
    const bgColor =
        Platform.OS === "web"
            ? theme["--color-primary-0"]
            : colorMode === "dark"
                ? "#1C3628"
                : "#AAC9AF";

    const textColor =
        Platform.OS === "web"
            ? theme["--color-typography-900"]
            : colorMode === "dark"
                ? "#F5F5F5"
                : "#262627";

    const buttonColor = Platform.OS === "web"
        ? theme["--color-primary-500"]
        : colorMode === "dark"
            ? "#34604A"
            : "#4B7862";


    const imageLoaded = usePreloadAssets([require("@assets/images/landing-page/hero.png")]);

    return (
        <Box style={{
            minHeight: 850,
            width: "100%",
            position: "relative",
            paddingTop: 120,
            overflow: "hidden",
            backgroundColor: bgColor,

        }}>
            <Container variant="landing">
                <Box style={{
                    flexDirection: Platform.OS === "web" ? "row" : "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    ...Platform.select({
                        android: {
                            paddingTop: 75,
                        },
                        ios: {
                            paddingTop: 75,
                        },
                    })
                }}>
                    {/* LEFT */}
                    <Box style={{
                        width: Platform.OS === "web" ? "60%" : "90%",
                        ...Platform.select({
                            android: {
                                alignSelf: "center",
                            },
                            ios: {
                                alignSelf: "center",
                            },
                        }),
                        gap: 20,
                    }}>
                        <Text style={{
                            textAlign: Platform.OS === "web" ? "left" : "center",
                            fontFamily: "Sora-SemiBold",
                            fontWeight: Platform.OS === "web" ? 900 : 700,
                            color: textColor,
                            fontSize: Platform.OS === "web" ? 70 : 42,
                            ...Platform.select({
                                web: {
                                    lineHeight: 1,
                                },
                            }),

                        }}>Shop. Send. Receive. and Secure Fast</Text>
                        <Text style={{
                            fontSize: 16,
                            textAlign: Platform.OS === "web" ? "left" : "center",
                            fontFamily: "Lato-Regular",
                            ...Platform.select({
                                web: {
                                    fontWeight: 600,
                                },
                            }),
                            color: textColor,
                        }}>
                            SENDME is your all-in-one shopping and delivery companion. Easily order items, track deliveries, and enjoy secure payments.
                        </Text>

                        <Box style={{
                            flexDirection: Platform.OS === "web" ? "row" : "column",


                            ...Platform.select({
                                web: {
                                    fontWeight: 600,
                                },
                                android: {
                                    alignItems: "center",
                                    justifyContent: "center",
                                },
                                ios: {
                                    alignItems: "center",
                                    justifyContent: "center",
                                },
                            }),
                            gap: Platform.OS === "web" ? 25 : 18,
                            paddingTop: 16,
                        }}>
                            {/* <Link href="/auth/user/register" style = {{

                            }}>
                                <Button style={{
                                    borderRadius: 9999,
                                    paddingVertical: 12,
                                    paddingHorizontal: 24,
                                }}>
                                    <ButtonText style={styles.primaryButtonText}>Start Shopping</ButtonText>
                                </Button>
                            </Link> */}

                            <Link
                                href="/auth/user/register"
                                asChild
                            >
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{
                                        backgroundColor: buttonColor,
                                        borderRadius: 9999,
                                        paddingVertical: 12,
                                        paddingHorizontal: 24,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: Platform.OS === "web" ? "auto" : "65%",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: textColor,
                                            fontSize: 16,
                                            fontWeight: "600",
                                            textAlign: "center",
                                        }}
                                    >
                                        Start Shopping
                                    </Text>
                                </TouchableOpacity>
                            </Link>

                            <Link href="/auth/dispatch/register" asChild>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{
                                        backgroundColor: "transparent",
                                        borderColor: buttonColor,
                                        borderWidth: 2,
                                        borderRadius: 9999,
                                        paddingVertical: 12,
                                        paddingHorizontal: 24,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: Platform.OS === "web" ? "auto" : "50%",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: textColor,
                                            fontSize: 16,
                                            fontWeight: "600",
                                            textAlign: "center",
                                        }}
                                    >
                                        Become a Dispatcher
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                        </Box>
                    </Box>

                    {/* RIGHT IMAGE */}
                    {/* <Box style={{
                        width: Platform.OS === "web" ? "40%" : "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        height: Platform.OS === "web" ? 550 : 300,
                    }}>
                        <Box style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 9999,
                            overflow: "hidden",
                        }}>
                            {imageLoaded ? <Image source={require("@assets/images/landing-page/hero.png")} style={{
                                width: "100%",
                                height: "100%",
                                contentFit: "contain",
                            }} alt="" /> :
                                <View>
                                    <Spinner />
                                    <Text>Loading</Text>
                                </View>
                            }
                        </Box>
                    </Box> */}


                    <Box
                        style={{
                            width: "40%",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 550,
                        }}
                    >
                        <Box
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 24,
                                overflow: "hidden",
                                position: "relative",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            {!imageLoaded ? (
                                <Box
                                    style={{
                                        backgroundColor: bgColor,
                                        position: "absolute",
                                        inset: 0,
                                        alignItems: "center",
                                        justifyContent: "center",

                                    }}
                                >
                                    <Spinner size={50} color="#007bff" />
                                </Box>)
                                :

                                <Image
                                    source={require("@assets/images/landing-page/hero.png")}
                                    contentFit="cover"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        // resizeMode: "contain",
                                    }}
                                    alt="Hero Image"
                                // onLoad={() => setLoaded(true)}
                                />
                            }
                        </Box>
                    </Box>
                </Box>
            </Container >
        </Box >
    );
}