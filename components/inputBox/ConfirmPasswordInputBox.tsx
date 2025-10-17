import { Box } from "@components/ui/box";
import { Eye, EyeOffIcon, KeyRound } from "lucide-react-native";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface ConfirmPasswordInputProps {
  form: any;
  passwordFieldName?: string; // the original password field name
  fieldName?: string; // default: "confirmPassword"
  placeholder?: string;
  textColor?: string;
  bgColor?: string;
}

const ConfirmPasswordInputBox = ({
  form,
  passwordFieldName = "password",
  fieldName = "confirmPassword",
  placeholder = "Confirm your password",
  textColor = "#262627",
  bgColor = "#fff",
}: ConfirmPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box style={{ marginVertical: 8 }}>
      <View
        style={{
          width: "100%",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 14,
            top: 13,
            zIndex: 10,
          }}
        >
          <KeyRound size={23} color={textColor} />
        </View>

        <Controller
          control={form.control}
          name={fieldName}
          rules={{
            required: "Confirm Password is required",
            validate: (value: string) =>
              value === form.getValues(passwordFieldName) ||
              "Passwords do not match",
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View style={{ marginBottom: 12 }}>
              <TextInput
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholderTextColor="#6B7280"
                style={{
                  width: "100%",
                  height: 48,
                  paddingLeft: 50,
                  paddingRight: 40,
                  borderRadius: 9999,
                  borderWidth: 1,
                  borderColor: error ? "#EF4444" : bgColor,
                  color: textColor,
                  fontSize: 16,
                }}
              />

              {error && (
                <Text style={{ color: "#EF4444", marginTop: 4, fontSize: 12 }}>
                  {error.message}
                </Text>
              )}
            </View>
          )}
        />

        <TouchableOpacity
          onPress={() => setShowPassword((prev) => !prev)}
          style={{ position: "absolute", right: 10, zIndex: 10 }}
        >
          {showPassword ? (
            <EyeOffIcon size={20} color={textColor} />
          ) : (
            <Eye size={20} color={textColor} />
          )}
        </TouchableOpacity>
      </View>

      {form.formState.errors[fieldName] && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            marginTop: 4,
          }}
        >
          <Eye size={12} color="#EF4444" />
          <Text style={{ fontSize: 12, color: "#EF4444" }}>
            {form.formState.errors[fieldName]?.message}
          </Text>
        </View>
      )}
    </Box>
  );
};

export default ConfirmPasswordInputBox;
