import React from "react";
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from "@tanstack/react-query";
import theme from "../theme/chakraTheme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = { children: React.ReactNode; pageProps: any };

const AppProviders = ({ children, pageProps }: Props) => {
  const queryClient = React.useRef<any>(null);

  if (!queryClient.current)
    queryClient.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          retryOnMount: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
        },
      },
    });

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default AppProviders;
