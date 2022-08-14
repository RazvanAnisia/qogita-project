import type { AppProps } from "next/app";
import { AppProvider } from "../contexts/index";

import "../global.css";

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
);

export default QogitaApp;
