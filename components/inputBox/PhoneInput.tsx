import React, { useRef } from "react";
import { Controller } from "react-hook-form";
import { Platform, Text, TextInput, View } from "react-native";

type Props = {
    control: any;
    name: string;
    defaultCode?: string;
    rules?: any;
};

const PhoneInputField = ({ control, name, defaultCode = "US", rules }: Props) => {
    const phoneInputRef = useRef<any>(null);

    // Dynamically import native phone input only on mobile
    const PhoneInput =
        Platform.OS !== "web"
            ? require("react-native-phone-number-input").default
            : null;

    // Dynamically import web-friendly version
    const WebPhoneInput =
        Platform.OS === "web"
            ? require("react-phone-number-input").default
            : null;

    if (Platform.OS === "web") {
        require("react-phone-number-input/style.css");
    }

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <View style={{ marginVertical: 10 }}>
                    {Platform.OS === "web" && WebPhoneInput ? (
                        <WebPhoneInput
                            placeholder="Enter phone number"
                            defaultCountry={defaultCode}
                            value={value}
                            onChange={onChange}
                            style={{
                                width: "100%",
                                border: error ? "1px solid red" : "1px solid #ccc",
                                borderRadius: 8,
                                padding: 10,
                            }}
                        />
                    ) : PhoneInput ? (
                        <PhoneInput
                            ref={phoneInputRef}
                            defaultCode={defaultCode}
                            layout="first"
                            value={value}
                            onChangeFormattedText={onChange}
                            containerStyle={{
                                borderWidth: 1,
                                borderColor: error ? "red" : "#ccc",
                                borderRadius: 8,
                            }}
                            textContainerStyle={{
                                borderTopRightRadius: 8,
                                borderBottomRightRadius: 8,
                            }}
                        />
                    ) : (
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            placeholder="Enter phone number"
                            style={{
                                borderWidth: 1,
                                borderColor: error ? "red" : "#ccc",
                                borderRadius: 8,
                                padding: 10,
                            }}
                        />
                    )}

                    {error && (
                        <Text style={{ color: "red", marginTop: 5 }}>
                            {error.message || "Invalid phone number"}
                        </Text>
                    )}
                </View>
            )}
        />
    );
};

export default PhoneInputField;
