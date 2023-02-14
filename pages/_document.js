import { createStylesServer, ServerStyles } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";
import rtlCache from "../shared/util/rtl-cache";

const stylesServer = createStylesServer(rtlCache);

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [initialProps.styles, <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />],
    };
  }

  render() {
    return (
      <Html dir="rtl" lang="ar">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
