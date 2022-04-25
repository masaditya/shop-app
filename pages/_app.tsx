import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from 'base/context';
import ContextState from 'base/context/state';

function MyApp({ Component, pageProps }: AppProps) {
  const state = ContextState()
  return (
    <AppContext.Provider value={state}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
