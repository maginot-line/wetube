import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto w-full max-w-xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
