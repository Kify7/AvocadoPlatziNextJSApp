import { AppProps } from 'next/app';
import '../../styles/globals.css';
import 'tailwindcss/tailwind.css';

import CartProvider from '@store/Cart';

export default function MyApp({ Component, pageProps }: AppProps) {
  /* Providers -- Context/ Providers/ Themes data */
  /* Layout */
  /* props adicionales*/
  /* props adicionales*/
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
