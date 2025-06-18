import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/styles/theme.css";
import 'swiper/css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
