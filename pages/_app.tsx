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

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
