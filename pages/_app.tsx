import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendedTheme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
