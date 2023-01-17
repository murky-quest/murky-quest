import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { lightTheme } from '@fe/theming';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={lightTheme as any}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
