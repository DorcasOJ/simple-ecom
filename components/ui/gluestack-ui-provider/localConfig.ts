// // config.ts
// "use client";
// import { vars } from "nativewind";

// /**
//  * Convert your RGB triplets into HEX so that both Web (CSS) and React Native
//  * can interpret them properly.
//  *
//  * React Native does not understand CSS variables or "r g b" strings,
//  * so we replace them with #RRGGBB hex format.
//  */

// export const config = {
//   light: vars({
//     "--color-primary-0": "#AAC9AF",
//     "--color-primary-50": "#82A78C",
//     "--color-primary-100": "#6E967D",
//     "--color-primary-200": "#5A856E",
//     "--color-primary-300": "#4B7862",
//     "--color-primary-400": "#406C56",
//     "--color-primary-500": "#34604A",
//     "--color-primary-600": "#2A5240",
//     "--color-primary-700": "#204434",
//     "--color-primary-800": "#183428",
//     "--color-primary-900": "#12271E",
//     "--color-primary-950": "#0C1C16",

//     "--color-secondary": "#8C8B61",
//     "--color-warning": "#FFAE00",
//     "--color-error": "#BE0D0D",
//     "--color-success": "#37965A",
//     "--color-info": "#00FFBF",

//     "--color-background-0": "#FFFFFF",
//     "--color-background-900": "#272625",
//     "--color-typography-900": "#262627",
//   }),

//   dark: vars({
//     "--color-primary-0": "#1C3628",
//     "--color-primary-50": "#2E523C",
//     "--color-primary-100": "#406850",
//     "--color-primary-200": "#528664",
//     "--color-primary-300": "#64A078",
//     "--color-primary-400": "#4E8567",
//     "--color-primary-500": "#386756",
//     "--color-primary-600": "#275443",
//     "--color-primary-700": "#1C4033",
//     "--color-primary-800": "#142E25",
//     "--color-primary-900": "#0E211B",
//     "--color-primary-950": "#0A1813",

//     "--color-secondary": "#8C8B61",
//     "--color-warning": "#FFAE00",
//     "--color-error": "#BE0D0D",
//     "--color-success": "#37965A",
//     "--color-info": "#00FFBF",

//     "--color-background-0": "#121212",
//     "--color-background-900": "#F6F6F6",
//     "--color-typography-900": "#F5F5F5",
//   }),
// };

import { vars } from "nativewind";
import { Platform } from "react-native";

// ✅ Define hardcoded native colors
const nativeLight = {
  "--color-primary-0": "#AAC9AF",
  "--color-primary-50": "#82A78C",
  "--color-primary-100": "#6E967D",
  "--color-primary-200": "#5A856E",
  "--color-primary-300": "#4B7862",
  "--color-primary-400": "#406C56",
  "--color-primary-500": "#34604A",
  "--color-primary-600": "#2A5240",
  "--color-primary-700": "#204434",
  "--color-primary-800": "#183428",
  "--color-primary-900": "#12271E",
  "--color-primary-950": "#0C1C16",

  "--color-secondary": "#8C8B61",
  "--color-warning": "#FFAE00",
  "--color-error": "#BE0D0D",
  "--color-success": "#37965A",
  "--color-info": "#00FFBF",

  "--color-background-0": "#FFFFFF",
  "--color-background-900": "#272625",
  "--color-typography-900": "#262627",
};

const nativeDark = {
  "--color-primary-0": "#1C3628",
  "--color-primary-50": "#2E523C",
  "--color-primary-100": "#406850",
  "--color-primary-200": "#528664",
  "--color-primary-300": "#64A078",
  "--color-primary-400": "#4E8567",
  "--color-primary-500": "#386756",
  "--color-primary-600": "#275443",
  "--color-primary-700": "#1C4033",
  "--color-primary-800": "#142E25",
  "--color-primary-900": "#0E211B",
  "--color-primary-950": "#0A1813",

  "--color-secondary": "#8C8B61",
  "--color-warning": "#FFAE00",
  "--color-error": "#BE0D0D",
  "--color-success": "#37965A",
  "--color-info": "#00FFBF",

  "--color-background-0": "#121212",
  "--color-background-900": "#F6F6F6",
  "--color-typography-900": "#F5F5F5",
};
//
// ✅ Export config with platform check
export const config = {
  light:
    Platform.OS === "web"
      ? vars({
          "--color-primary-0": "#AAC9AF",
          "--color-primary-50": "#82A78C",
          "--color-primary-100": "#6E967D",
          "--color-primary-200": "#5A856E",
          "--color-primary-300": "#4B7862",
          "--color-primary-400": "#406C56",
          "--color-primary-500": "#34604A",
          "--color-primary-600": "#2A5240",
          "--color-primary-700": "#204434",
          "--color-primary-800": "#183428",
          "--color-primary-900": "#12271E",
          "--color-primary-950": "#0C1C16",

          "--color-secondary": "#8C8B61",
          "--color-warning": "#FFAE00",
          "--color-error": "#BE0D0D",
          "--color-success": "#37965A",
          "--color-info": "#00FFBF",

          "--color-background-0": "#FFFFFF",
          "--color-background-900": "#272625",
          "--color-typography-900": "#262627",
        })
      : nativeLight,
  dark:
    Platform.OS === "web"
      ? vars({
          "--color-primary-0": "#1C3628",
          "--color-primary-50": "#2E523C",
          "--color-primary-100": "#406850",
          "--color-primary-200": "#528664",
          "--color-primary-300": "#64A078",
          "--color-primary-400": "#4E8567",
          "--color-primary-500": "#386756",
          "--color-primary-600": "#275443",
          "--color-primary-700": "#1C4033",
          "--color-primary-800": "#142E25",
          "--color-primary-900": "#0E211B",
          "--color-primary-950": "#0A1813",

          "--color-secondary": "#8C8B61",
          "--color-warning": "#FFAE00",
          "--color-error": "#BE0D0D",
          "--color-success": "#37965A",
          "--color-info": "#00FFBF",

          "--color-background-0": "#121212",
          "--color-background-900": "#F6F6F6",
          "--color-typography-900": "#F5F5F5",
        })
      : nativeDark,
};
