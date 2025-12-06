import type { AppProps } from "next/app";
import "../src/components/layout.css";
import "../src/components/keyboard.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
