import React from "react";
import { ScrollView } from "react-native";
import { Box } from "./ui/box";

const Container = ({
  children,
  variant,
  colorMode = "light",
}: {
  children: React.ReactNode;
  variant?: "landing" | "small";
  colorMode?: "dark" | "light";
}) => {
  if (!variant) {
    return (
      <ScrollView
        style={{
          width: "100%",
          position: "relative",
          backgroundColor: "transparent",
        }}
      >
        <Box
          className=" sm:px-9"
          style={{
            width: "100%",
            maxWidth: 600,
            marginHorizontal: "auto",
            paddingHorizontal: 7,
          }}
        >
          {children}
        </Box>
      </ScrollView>
    );
  }

  if (variant === "landing") {
    return (
      <Box
        className=" max-w-[1900px]"
        style={{
          width: "100%",
          maxWidth: 600,
          marginHorizontal: "auto",
          paddingHorizontal: 7,
          position: "relative",
        }}
      >
        {children}
      </Box>
    );
  }

  return (
    <ScrollView
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "transparent",
      }}
    >
      <Box
        className=" sm:px-9"
        style={{
          width: "100%",
          maxWidth: 600,
          marginHorizontal: "auto",
          paddingHorizontal: 7,
          position: "relative",
        }}
      >
        {children}
      </Box>
    </ScrollView>
  );
};

export default Container;
