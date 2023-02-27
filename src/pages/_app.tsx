import { AppProps } from 'next/app';
import Layout from 'src/components/Layout/Layout';
import '../../styles/globals.css';
import 'tailwindcss/tailwind.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  /* Providers -- Context/ Providers/ Themes data */
  /* Layout */
  /* props adicionales*/
  /* props adicionales*/
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
