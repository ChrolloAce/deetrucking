export const theme = {
  colors: {
    primary: "#1E40AF",
    primaryDark: "#1E3A8A",
    primaryLight: "#3B82F6",
    secondary: "#F59E0B",
    background: "#FFFFFF",
    backgroundLight: "#F8FAFC",
    backgroundDark: "#0F172A",
    text: "#0F172A",
    textLight: "#FFFFFF",
    textMuted: "#64748B",
    textSecondary: "#475569",
    border: "#E2E8F0",
    borderLight: "#F1F5F9",
    accent: "#10B981",
    warning: "#EF4444"
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif"
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px"
  },
  container: {
    max: "1200px",
    gutter: "24px"
  },
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "64px"
  }
} as const;

export type Theme = typeof theme;