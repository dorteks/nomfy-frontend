import React from "react";
import "../styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import AppProviders from "../app/providers/index";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <AppProviders pageProps={pageProps}>
      {getLayout(<Component {...pageProps} />)}
    </AppProviders>
  );
};

export default MyApp;
