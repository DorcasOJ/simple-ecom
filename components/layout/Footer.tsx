import { Box } from "@components/ui/box";
import React from "react";
import { Platform, Text } from "react-native";

const Footer = ({ bgColor, textColor }: { bgColor: string, textColor: string }) => {
    return (
        <Box
            style={{
                width: "100%",
                flexDirection: Platform.OS === "web" ? "row" : "column",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 20,
                paddingBottom: 40,
                minHeight: Platform.OS === 'web' ? 400 : 300,
                backgroundColor: "transparent",
                gap: 16,
            }}
        >
            {/* Services */}
            <Box
                style={{
                    flexDirection: "column",
                    gap: 8,
                    width: Platform.OS === "web" ? "22%" : "100%",
                    marginBottom: 16,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: "Sora-SemiBold",
                        color: textColor,
                        marginBottom: 4,
                    }}
                >
                    Services
                </Text>
                <Text style={{ fontSize: 14, color: textColor, paddingVertical: 2 }}>Branding</Text>
                <Text style={{ fontSize: 14, color: textColor, paddingVertical: 2 }}>Design</Text>
                <Text style={{ fontSize: 14, color: textColor, paddingVertical: 2 }}>Marketing</Text>
                <Text style={{ fontSize: 14, color: textColor, paddingVertical: 2 }}>Advertisement</Text>
            </Box>

            {/* Company */}
            <Box
                style={{
                    flexDirection: "column",
                    gap: 8,
                    width: Platform.OS === "web" ? "22%" : "100%",
                    marginBottom: 16,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: "Sora-SemiBold",
                        color: textColor,
                        marginBottom: 4,
                    }}
                >
                    Company
                </Text>
                <Text style={{ fontSize: 14, color: textColor, paddingVertical: 2 }}>About us</Text>
                <Text style={{ fontSize: 14, color: textColor, paddingVertical: 2 }}>Contact</Text>
                <Text style={{ fontSize: 14, color: textColor, paddingVertical: 2 }}>Jobs</Text>
                <Text style={{ fontSize: 14, color: textColor, paddingVertical: 2 }}>Press kit</Text>
            </Box>

            {/* Legal */}
            <Box
                style={{
                    flexDirection: "column",
                    gap: 8,
                    width: Platform.OS === "web" ? "22%" : "100%",
                    marginBottom: 16,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: "Sora-SemiBold",
                        color: textColor,
                        marginBottom: 4,
                    }}
                >
                    Legal
                </Text>
                <Text style={{ fontSize: 14, color: textColor, paddingVertical: 2 }}>Terms of use</Text>
                <Text style={{ fontSize: 14, color: textColor, paddingVertical: 2 }}>Privacy policy</Text>
                <Text style={{ fontSize: 14, color: textColor, paddingVertical: 2 }}>Cookie policy</Text>
            </Box>

            {/* Newsletter */}
            <Box
                style={{
                    flexDirection: "column",
                    gap: 8,
                    width: Platform.OS === "web" ? "22%" : "100%",
                    marginBottom: 16,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: "Sora-SemiBold",
                        color: textColor,
                        marginBottom: 4,
                    }}
                >
                    Newsletter
                </Text>
                <Text style={{ fontSize: 14, color: textColor }}>Enter your email address</Text>
                {/* 
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 8,
                        height: 36,
                    }}
                >
                    <TextInput
                        placeholder="username@site.com"
                        placeholderTextColor="#aaa"
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: bgColor,
                            borderTopLeftRadius: 6,
                            borderBottomLeftRadius: 6,
                            paddingHorizontal: 8,
                            paddingVertical: Platform.OS === "web" ? 6 : 8,
                            fontSize: 14,
                            height: "100%",
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: bgColor,
                            paddingHorizontal: 12,
                            justifyContent: "center",
                            alignItems: "center",
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            height: "100%",
                        }}
                    >
                        <Text
                            style={{
                                color: textColor,
                                fontSize: 14,
                                fontWeight: "600",
                            }}
                        >
                            Subscribe
                        </Text>
                    </TouchableOpacity>
                </View> */}
            </Box>
        </Box>
    );
};

export default Footer;
