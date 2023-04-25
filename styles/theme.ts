import React from "react";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    cover: React.CSSProperties;
    header: React.CSSProperties;
    body: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    cover?: React.CSSProperties;
    header?: React.CSSProperties;
    body?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    cover: true;
    header: true;
    body: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#0971f1',
    },
    secondary: {
      main: "#08E6E7",
    },
  },
  typography: {
    cover: {
      color: "white",
      fontWeight: 400,
      fontFamily: "Mossport",
      textTransform: "uppercase",
      textShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)"
    },
    header: {
      fontFamily: "Mossport",
      fontWeight: 400,
      textTransform: "uppercase",
      color: "white",
    },
    body: {
      fontFamily: "Gotham Pro Regular",
      fontWeight: 400,
    },
  },
});

export default theme;
