// import { Box } from "@components/ui/box";
// import { Eye, EyeOffIcon, KeyRound } from "lucide-react-native";
// import React, { useState } from "react";
// import { TextInput, TouchableOpacity } from "react-native";

// interface PasswordInputBoxProps {
//   form: any;
//   textColor: string;
//   bgColor: string;
// }

// const PasswordInputBox = ({
//   form,
//   textColor,
//   bgColor,
// }: PasswordInputBoxProps) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const hasError = !!form.formState.errors.password;

//   return (
//     <Box style={{ marginBottom: 12 }}>
//       <Box
//         style={{
//           width: "100%",
//           position: "relative",
//           justifyContent: "center",
//         }}
//       >
//         {/* Key Icon */}
//         <Box
//           style={{
//             position: "absolute",
//             left: 14,
//             zIndex: 1,
//           }}
//         >
//           <KeyRound size={23} style={{ color: textColor }} />
//         </Box>

//         {/* Password Input */}
//         <TextInput
//           placeholder="Enter your password"
//           {...form.register("password", {
//             required: "Password is required",
//             pattern: {
//               value:
//                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{5,}$/,
//               message:
//                 "Must contain at least 6 characters, including uppercase, lowercase, number, and special character.",
//             },
//             minLength: {
//               value: 5,
//               message: "Password must be at least 6 alphanumeric",
//             },
//           })}
//           style={{
//             width: "100%",
//             height: 48,
//             borderRadius: 9999,
//             borderWidth: 1,
//             borderColor: hasError ? "#EF4444" : bgColor, // error or primary
//             paddingLeft: 48,
//             paddingRight: 48,
//             backgroundColor: "transparent",
//             color: textColor,
//           }}
//           secureTextEntry={!showPassword}
//           autoComplete="password"
//         />

//         {/* Eye toggle */}
//         <TouchableOpacity
//           onPress={() => setShowPassword((prev) => !prev)}
//           style={{
//             position: "absolute",
//             right: 14,
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100%",
//             paddingHorizontal: 4,
//           }}
//         >
//           {!showPassword ? (
//             <Eye size={20} style={{ color: textColor }} />
//           ) : (
//             <EyeOffIcon size={20} style={{ color: textColor }} />
//           )}
//         </TouchableOpacity>
//       </Box>

//       {/* Error message */}
//       {/* <ErrorMessage
//         errors={form.formState.errors}
//         name="password"
//         render={({ message }) => (
//           <Box
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               marginTop: 8,
//             }}
//           >
//             <Info size={12} color="#EF4444" style={{ marginRight: 4 }} />
//             <Text
//               style={{ fontSize: 12, color: "#EF4444", textAlign: "center" }}
//             >
//               {message}
//             </Text>
//           </Box>
//         )}
//       /> */}
//     </Box>
//   );
// };

// export default PasswordInputBox;

import { Box } from "@components/ui/box";
import { Eye, EyeOffIcon, KeyRound } from "lucide-react-native";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface PasswordInputProps {
  form: any;
  textColor?: string;
  bgColor?: string;
  fieldName?: string; // default: "password"
  placeholder?: string;
}

const PasswordInputBox = ({
  form,
  textColor = "#262627",
  bgColor = "#fff",
  fieldName = "password",
  placeholder = "Enter your password",
}: PasswordInputProps) => {
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
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View style={{ marginBottom: 12 }}>
              <TextInput
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                value={value} // ✅ connect value
                onBlur={onBlur} // ✅ connect onBlur
                onChangeText={onChange} // ✅ connect onChangeText
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

export default PasswordInputBox;
