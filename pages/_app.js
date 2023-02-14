import { MantineProvider } from "@mantine/core";
import rtlCache from "../shared/util/rtl-cache";

const MyApp = ({ Component, pageProps }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={rtlCache}
      theme={{
        dir: "rtl",
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
