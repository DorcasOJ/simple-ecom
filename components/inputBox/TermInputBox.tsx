// import { TermInputProps } from "@types/AuthType";
// import { Link } from "expo-router";
// import { Controller } from "react-hook-form";

// const TermsInput = ({ form, name }: TermInputProps) => {
//   return (
//     <div className="flex flex-col items-start justify-start  ">
//       <div className="flex items-start justify-center gap-x-3 px-3 text-base-content">
//         <Controller
//           name={name}
//           control={form.control}
//           rules={{
//             required: "You must accept the terms and conditions",
//           }}
//           render={({ field }) => (
//             <label>
//               <input
//                 type="checkbox"
//                 checked={!!field.value}
//                 onChange={field.onChange}
//               />{" "}
//               {"  "}
//               By signing up, you agree to the{" "}
//               <Link
//                 href={"/"}
//                 className="hover:text-tertiary-650/50 text-primary-500 "
//               >
//                 {" "}
//                 Terms of Service{" "}
//               </Link>
//               and{" "}
//               <Link
//                 href={"/"}
//                 className="hover:text-tertiary-650/50 text-primary-500 "
//               >
//                 Condition Agreement
//               </Link>
//             </label>
//           )}
//         />
//       </div>
//     </div>
//   );
// };

// export default TermsInput;

import { Box } from "@components/ui/box";
import React from "react";
import { Controller } from "react-hook-form";
import { Pressable, Text, View } from "react-native";

interface TermsInputProps {
  form: any;
  name: string;
}

const TermsInput = ({ form, name }: TermsInputProps) => {
  return (
    <Box
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        marginVertical: 8,
      }}
    >
      <Controller
        name={name}
        control={form.control}
        rules={{
          required: "You must accept the terms and conditions",
        }}
        render={({ field: { value, onChange } }) => (
          <Pressable
            onPress={() => onChange(!value)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              paddingHorizontal: 4,
            }}
          >
            {/* Checkbox */}
            <View
              style={{
                width: 20,
                height: 20,
                borderWidth: 1,
                borderColor: "#262627",
                borderRadius: 4,
                backgroundColor: value ? "#4B7862" : "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {value && (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: "#fff",
                    borderRadius: 2,
                  }}
                />
              )}
            </View>

            {/* Terms Text */}
            <Text style={{ fontSize: 14, color: "#262627", flexShrink: 1 }}>
              By signing up, you agree to the{" "}
              <Text
                onPress={() => form.setValue(name, value)} // replace with navigation
                style={{ color: "#3B82F6" }}
              >
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text
                onPress={() => form.setValue(name, value)} // replace with navigation
                style={{ color: "#3B82F6" }}
              >
                Condition Agreement
              </Text>
            </Text>
          </Pressable>
        )}
      />

      {form.formState.errors[name] && (
        <Text style={{ color: "#EF4444", fontSize: 12, marginTop: 4 }}>
          {form.formState.errors[name]?.message}
        </Text>
      )}
    </Box>
  );
};

export default TermsInput;
