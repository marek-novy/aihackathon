import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import OrbitProvider from "@kiwicom/orbit-components/lib/OrbitProvider";
import { defaultTheme } from "@kiwicom/orbit-design-tokens";


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <OrbitProvider useId={React.useId} theme={{ orbit: defaultTheme }}>
      <Component {...pageProps} />
      </OrbitProvider>
  );
}

export default MyApp;
