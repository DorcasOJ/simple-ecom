import { Box } from "@components/ui/box";
import { Text } from "@components/ui/text";
import { MailIcon, MapPin, PhoneIcon, User2Icon } from "lucide-react-native";
import React from "react";
import { TextInput, View } from "react-native";
import { TextInputBoxType } from "../../types/inputBoxType";

import { Controller } from "react-hook-form";

const TextInputBox = ({
  form,
  placeholder,
  fieldName,
  // type,
  icon = null,
  // required = true,
  // minLength = false,
  // minChar = 5,
  // onlyDigit = false,
  // maxLength = true,
  // maxChar = 255,
  textColor,
  bgColor,
  keyboardType = "default",
  secureTextEntry = false,
}: TextInputBoxType) => {
  const hasError = !!form.formState.errors?.[fieldName];

  // Icon size mapping
  const renderIcon = () => {
    switch (icon) {
      case "mail":
        return <MailIcon size={20} color={textColor} />;
      case "address":
        return <MapPin size={20} color={textColor} />;
      case "user":
        return <User2Icon size={22} color={textColor} />;
      case "phone":
        return <PhoneIcon size={22} color={textColor} />;
      default:
        return null;
    }
  };

  return (
    <Box style={{ marginBottom: 12 }}>
      <Box
        style={{
          width: "100%",
          position: "relative",
          justifyContent: "center",
        }}
      >
        {icon && (
          <Box
            className="  "
            style={{
              position: "absolute",
              left: 14,
              top: 15,
              zIndex: 1,
            }}
          >
            {renderIcon()}
          </Box>
        )}
        <Controller
          control={form.control}
          name={fieldName}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View style={{ marginBottom: 12 }}>
              <TextInput
                className="placeholder:text-gray-500"
                style={{
                  borderWidth: 1,
                  borderColor: error ? "red" : bgColor,
                  padding: 10,
                  height: 48,
                  borderRadius: 50,
                  paddingLeft: icon ? 48 : 16,
                }}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
              />

              {form.formState.error && (
                <Text style={{ color: "red" }}>
                  {form.formState.error.message}
                </Text>
              )}
            </View>
          )}
        />
      </Box>
      {/* <Box
        style={{
          width: "100%",
          position: "relative",
          justifyContent: "center",
        }}
      >
        {icon && (
          <Box
            style={{
              position: "absolute",
              left: 14,
              zIndex: 1,
            }}
          >
            {renderIcon()}
          </Box>
        )}

        <TextInput
          placeholder={placeholder}
          {...form.register(`${fieldName}`, {
            required: `${placeholder} is required`,
            ...(minLength && {
              minLength: {
                value: minChar,
                message: `Must be at least ${minChar} characters`,
              },
            }),
            ...(maxLength && {
              maxLength: {
                value: maxChar,
                message: `Must be at most ${maxChar} characters`,
              },
            }),
            ...(onlyDigit && {
              pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers are accepted here",
              },
            }),
          })}
          style={{
            width: "100%",
            height: 48,
            borderRadius: 9999,
            borderWidth: 1,
            borderColor: hasError ? "#EF4444" : bgColor, // error-0 or primary-0
            paddingLeft: icon ? 48 : 16,
            paddingRight: 20,
            backgroundColor: "transparent",
            color: textColor,
          }}
          keyboardType={
            type === "email"
              ? "email-address"
              : type === "number"
              ? "numeric"
              : "default"
          }
          autoComplete={fieldName}
        />
      </Box> */}

      {/* <ErrorMessage
        errors={form.formState.errors}
        name={fieldName}
        render={({ message }) => (
          <Box
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            <Info size={12} color="#EF4444" style={{ marginRight: 4 }} />
            <Text
              style={{ fontSize: 12, color: "#EF4444", textAlign: "center" }}
            >
              {message}
            </Text>
          </Box>
        )}
      /> */}
    </Box>
  );
};

export default TextInputBox;

type FormInputProps = {
  control: any; // from useForm
  name: string;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "number-pad";
  secureTextEntry?: boolean;
};
