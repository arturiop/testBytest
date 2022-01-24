import * as React from "react";
import { AppProps } from "next/app";

import { theme } from "../src/styles/themes";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
