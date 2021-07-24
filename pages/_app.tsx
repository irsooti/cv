import '@/shared/global.css';
import type { AppProps } from 'next/app';
import '@/shared/i18n';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
