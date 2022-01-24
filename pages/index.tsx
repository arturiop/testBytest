import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Script from "next/script";
interface UserLogin {
  auth_date: number;
  first_name: string;
  hash: string;
  id: number;
  photo_url: number;
  username: string;
}
declare global {
  interface Window {
    TelegramLoginWidget: {
      dataOnauth: (user: UserLogin) => void;
    };
  }
}

const Home: NextPage = () => {
  const onTelegramAuth = (user: UserLogin) => {
    console.log(user);
  };

  if (typeof window !== undefined) {
    window.TelegramLoginWidget = {
      dataOnauth: (user) => onTelegramAuth(user),
    };
  }

  return (
    <Box>
      hello world
      <Script
        src="https://telegram.org/js/telegram-widget.js?15"
        id="telegram-auth"
        data-telegram-login="SCHart_bot"
        data-size="large"
        data-radius="14"
        data-request-access="write"
        data-userpic="false"
        data-lang="ru"
        data-onauth="onTelegramAuth"
      />
    </Box>
  );
};

export default Home;
