import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Provider as NextAuthProvider} from 'next-auth/client';

import '../styles/global.scss';

// _app é carregado toda vez que o usuario  muda de tela, por isso o ideal é criar o arquivo _document para fontes ou outros codigos que serao carregados somente uma vez.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
