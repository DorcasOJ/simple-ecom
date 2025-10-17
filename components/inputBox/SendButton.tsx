import { Button, ButtonText } from "@components/ui/button";
import { ButtonProps } from "@types/AuthType";
import React from "react";
import { ActivityIndicator, Platform, Text } from "react-native";

const SendButton = ({
  isLoading,
  actionWord,
  // handleSubmit?,
  textColor,
  bgColor,
}: ButtonProps) => {
  return (
    <Button
      // onPress={handleSubmit}
      disabled={isLoading}
      style={{
        backgroundColor: bgColor, // primary-0
        borderRadius: 9999,
        width: "100%",
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        opacity: isLoading ? 0.9 : 1,

        ...Platform.select({
          android: {
            height: 50,
          },
        }),
      }}
    >
      <ButtonText
        style={{
          ...Platform.select({
            android: {
              lineHeight: 40,
            },
          }),
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={textColor} />
        ) : (
          <Text style={{ color: textColor, fontSize: 16, fontWeight: "600" }}>
            {actionWord}
          </Text>
        )}
      </ButtonText>
    </Button>
  );
};

export default SendButton;
