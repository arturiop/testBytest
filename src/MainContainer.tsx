import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { FC } from "react";

const MainContainer: FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta></meta>
        <title>The Movie</title>
      </Head>

      <Box minW="17.5rem" minH="100vh">
        <Box as="header" position="sticky" top="0" zIndex="9999">
          header
        </Box>
        <Box as="main">{children}</Box>
      </Box>
    </>
  );
};

export default MainContainer;
