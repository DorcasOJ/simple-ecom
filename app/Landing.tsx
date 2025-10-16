import Container from "@components/Container";
import PrimaryButton from "@components/inputBox/PrimaryButton";
import FAQ from "@components/Landing/FAQ";
import HeroSection from "@components/Landing/HeroSection";
import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";
import { Box } from "@components/ui/box";
import { config } from "@components/ui/gluestack-ui-provider/localConfig";
import { Text } from "@components/ui/text";
import usePreloadAssets from "@hooks/usePreloadAssets";
import { UserContext } from "@hooks/UserContext";
import { Image } from "expo-image";
import { useContext } from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";



import {
    Accordion,
    AccordionContent,
    AccordionContentText,
    AccordionHeader,
    AccordionIcon,
    AccordionItem,
    AccordionTitleText,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { AddIcon, RemoveIcon } from '@/components/ui/icon';


type LandingPageProp = {
    colorMode: 'dark' | 'light';
    toggleColorMode: () => void;
}
const lightColor = config.light;
const darkColor = config.dark;

const Landing = ({ colorMode, toggleColorMode }: LandingPageProp) => {
    const { user } = useContext(UserContext);
    // const { colorMode, toggleColorMode } = useThemeContext();
    const isLoaded = usePreloadAssets([require("@assets/images/landing-page/hero.png")]);

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



    return (
        <ScrollView style={styles.scrollContainer}>
            <Box style={styles.navbarWrapper}>
                <Navbar page="landing" user={user} colorMode={colorMode} toggleColorMode={toggleColorMode} />
            </Box>

            <Box style={styles.heroWrapper}>
                <HeroSection colorMode={colorMode} />
            </Box>

            <Box style={styles.imageSection}>
                <Image source={require("@assets/images/landing-page/1.png")} style={styles.fullImage} alt="" />
            </Box>

            <Box
                style={{
                    width: "100%",
                    position: "relative",
                    backgroundColor: bgColor,
                    minHeight: Platform.OS === "web" ? 600 : 500,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: Platform.OS === "web" ? 100 : 60,
                }}
            >
                <Container
                    variant="landing"

                >
                    <Box
                        style={{
                            ...Platform.select({
                                web: {
                                    maxWidth: 800,
                                }
                            }),
                            width: Platform.OS === "web" ? "60%" : "80%",
                            alignSelf: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: Platform.OS === "web" ? 30 : 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: Platform.OS === "web" ? 48 : 32,
                                fontFamily: "Sora-SemiBold",
                                textAlign: "center",
                                color: textColor,

                            }}
                        >
                            Deliver and Earn
                        </Text>

                        <Text
                            style={{
                                fontSize: Platform.OS === "web" ? 18 : 16,
                                textAlign: "center",
                                fontWeight: 600,
                                maxWidth: 500,
                                color: textColor,
                                opacity: 0.9,
                                fontFamily: "Lato-Bold",
                                paddingHorizontal: 20,

                            }}
                        >
                            Join SendMe as a dispatcher — accept verified orders, get paid
                            securely, and build trust through ratings.
                        </Text>

                        <Box
                            style={{
                                // flexDirection: Platform.OS === "web" ? "row" : "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 14,
                                // flexWrap: "wrap",
                                marginTop: 10,
                            }}
                        >
                            <PrimaryButton actionWord=" Sign up as  a Dispatcher" href={'/auth/user/register'} buttonColor={buttonColor} textColor={textColor} />

                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box style={styles.imageSection}>
                <Image source={require("@assets/images/landing-page/2.png")} style={styles.fullImage} alt="" />
            </Box>

            <Box
                style={{

                }}
            >
                <Container variant="landing">
                    <Box style={{
                        ...Platform.select({
                            web: {
                                maxWidth: 800,
                            }

                        }),
                        // paddingHorizontal: 60,
                        minHeight: Platform.OS === 'web' ? 600 : 300,
                        width: Platform.OS === "web" ? "60%" : "80%",
                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: Platform.OS === "web" ? 30 : 20,
                    }}>
                        <Text style={{
                            fontSize: Platform.OS === "web" ? 48 : 32,
                            fontFamily: "Sora-SemiBold",
                            textAlign: "center",
                            color: textColor,
                            ...Platform.select({
                                web: {
                                    lineHeight: 1
                                }
                            })

                        }}>We’ve Got You Covered</Text>

                        <Text style={{
                            fontSize: Platform.OS === "web" ? 18 : 16,
                            textAlign: "center",
                            fontWeight: 600,
                            maxWidth: 500,
                            color: textColor,
                            opacity: 0.9,
                            fontFamily: "Lato-Bold",
                            paddingHorizontal: 20,

                        }}>
                            With order verification, customer support, and admin monitoring, SendMe ensures every transaction is safe and reliable.
                        </Text>

                        <Box style={styles.downloadButtonGroup}>
                            {/* <Button style={styles.primaryButton}>
                                <ButtonText style={styles.primaryButtonText}>Download the App</ButtonText>
                            </Button> */}

                            <PrimaryButton href="/" actionWord="Download the App" buttonColor={buttonColor} textColor={textColor} />
                        </Box>
                    </Box>

                    <Box style={{
                        ...Platform.select({
                            web: {
                                maxWidth: 800,
                            }

                        }),
                        paddingHorizontal: 20,
                        minHeight: Platform.OS === 'web' ? 500 : 300,

                        width: Platform.OS === "web" ? "60%" : "80%",
                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        // gap: Platform.OS === "web" ? 30 : 20,
                    }}>
                        <FAQ textColor={textColor} />

                        <Accordion style={{ width: "80%", background: "transparent" }}>
                            <AccordionItem value="item-1" className="rounded-lg bg-transparent border-primary-0">
                                <AccordionHeader>
                                    <AccordionTrigger className="focus:web:rounded-lg border-primary-0">
                                        {({ isExpanded }: { isExpanded: boolean }) => {
                                            return (
                                                <>
                                                    {isExpanded ? (
                                                        <AccordionIcon as={RemoveIcon} className="mr-3" />
                                                    ) : (
                                                        <AccordionIcon as={AddIcon} className="mr-3" />
                                                    )}
                                                    <AccordionTitleText>
                                                        How do I place an order?
                                                    </AccordionTitleText>
                                                </>
                                            );
                                        }}
                                    </AccordionTrigger>
                                </AccordionHeader>
                                <AccordionContent className="ml-9">
                                    <AccordionContentText>
                                        To place an order, simply select the products you want, proceed to
                                        checkout, provide shipping and payment information, and finalize
                                        your purchase.
                                    </AccordionContentText>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="mt-5 rounded-lg bg-transparent border-primary-0">
                                <AccordionHeader>
                                    <AccordionTrigger className="focus:web:rounded-lg bg-transparent border-primary-0">
                                        {({ isExpanded }: { isExpanded: boolean }) => {
                                            return (
                                                <>
                                                    {isExpanded ? (
                                                        <AccordionIcon as={RemoveIcon} className="mr-3" />
                                                    ) : (
                                                        <AccordionIcon as={AddIcon} className="mr-3" />
                                                    )}
                                                    <AccordionTitleText>
                                                        What payment methods do you accept?
                                                    </AccordionTitleText>
                                                </>
                                            );
                                        }}
                                    </AccordionTrigger>
                                </AccordionHeader>
                                <AccordionContent className="ml-9">
                                    <AccordionContentText>
                                        We accept all major credit cards, including Visa, Mastercard, and
                                        American Express. We also support payments through PayPal.
                                    </AccordionContentText>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Box>

                    <Box style={styles.footerSection}>
                        <Footer bgColor={bgColor} textColor={textColor} />
                    </Box>
                </Container>
            </Box>
        </ScrollView>
    );
};

export default Landing;

const styles = StyleSheet.create({
    scrollContainer: {
        position: "relative",
        flex: 1,
    },
    navbarWrapper: {
        width: "100%",
        position: "relative",
        zIndex: 50,
    },
    heroWrapper: {
        width: "100%",
        backgroundColor: '#ccc'
    },
    imageSection: {
        width: "100%",
        position: "relative",
        height: Platform.OS === "web" ? 700 : 300,
    },
    fullImage: {
        width: "100%",
        height: "100%",
        contentFit: "cover",
    },
    dispatchSection: {
    },
    centerContent: {

    },

    buttonGroup: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },
    primaryButton: {
        backgroundColor: "#f6b90e",
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 28,
    },
    primaryButtonText: {
        color: "#000",
        fontWeight: "600",
    },
    faqSection: {
        width: "100%",
        position: "relative",
        backgroundColor: "#f3f3f3",
        paddingTop: 120,
    },
    faqContent: {
        paddingVertical: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    faqTitle: {
        fontSize: 32,
        fontFamily: "Sora",
        textAlign: "center",
        marginBottom: 10,
    },
    faqSubtitle: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Lato",
        maxWidth: 500,
    },
    downloadButtonGroup: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
    },
    footerSection: {
        paddingVertical: 80,
    },
});
