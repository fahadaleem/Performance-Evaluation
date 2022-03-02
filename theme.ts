import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
const theme = {
  colors: {
    brand: {
      primary: "#48AEB3",
      seconday: "#fff",
      error: "#FF3333",
    },
  },
  fonts: {
    text: "poppins",
    body: "poppins",
    heading: "poppins",
  },
};

export const extendedTheme = extendTheme(theme);
