import "../frontend/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import Layout from "../frontend/components/Layout";
import PublicPreloader from "../frontend/components/PublicPreloader";
import { PublicContextProvider } from "../frontend/contexts/PublicContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <PublicContextProvider>
          <PublicPreloader />
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </PublicContextProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
