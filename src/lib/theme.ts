export const theme = {
  colors: {
    primary: "#2E7BFF",
    primaryDark: "#0E3C7E",
    primaryLight: "#5B9BFF",
    background: "#FFFFFF",
    backgroundDark: "#0B1E38",
    backgroundLight: "#F8FAFC",
    text: "#1E1E1E",
    textLight: "#FFFFFF",
    textMuted: "#B0B0B0",
    border: "#E5E5E5"
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