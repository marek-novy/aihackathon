import { OrbitProvider, getTokens } from "@kiwicom/orbit-components";
import { useId } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  }
`;

const tokens = getTokens();

// @ts-ignore
export default function App({ Component, pageProps }) {
  return (
    <OrbitProvider useId={useId} theme={{ orbit: tokens }}>
      <ThemeProvider theme={{ orbit: tokens }}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </OrbitProvider>
  );
}
