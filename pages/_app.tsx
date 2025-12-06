import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import "../src/components/layout.css";
import "../src/components/keyboard.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}
