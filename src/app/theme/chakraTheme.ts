import {
  extendTheme,
  type ThemeOverride,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const extendedThemeConfig: ThemeOverride = {
  components: {
    Button: {
      variants: {
        primary: { color: "gray.100", backgroundColor: "primary.500" },
      },
    },
  },
  color: {
    primary: {
      100: "#D0D2D8",
      200: "#B1B4BF",
      300: "#62687E",
      400: "#3B435E",
      500: "#141D3E",
      600: "#111834",
      700: "#0D1329",
      800: "#0A0F1F",
      900: "#04060C",
    },
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
  },
};

const theme = extendTheme({ ...config, ...extendedThemeConfig });

export default theme;
