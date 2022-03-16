import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { SessionProvider} from 'next-auth/react';

import '../styles/global.scss';

// _app é carregado toda vez que o usuario  muda de tela, por isso o ideal é criar o arquivo _document para fontes ou outros codigos que serao carregados somente uma vez.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
