


import { Text } from '@gluestack-ui/themed'
import { Link } from 'expo-router'
import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'

const PrimaryButton = ({ href, buttonColor, textColor, actionWord }: { href: string, buttonColor: string, textColor: string, actionWord: string }) => {
    return (


        <Link href={href} asChild>

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
                    {actionWord}
                </Text>
            </TouchableOpacity>
        </Link>

    )
}

export default PrimaryButton
