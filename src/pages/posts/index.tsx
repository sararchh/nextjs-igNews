import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | IgNews</title>
      </Head>

      <main>
        <div>
          <a href="">
            <time>06 de Abril de 2022</time>
            <strong>Aqui vai estar um titulo</strong>
            <p>Aqui vai estar um paragrafo</p>
          </a>
          <a href="">
            <time>06 de Abril de 2022</time>
            <strong>Aqui vai estar um titulo</strong>
            <p>Aqui vai estar um paragrafo</p>
          </a>
          <a href="">
            <time>06 de Abril de 2022</time>
            <strong>Aqui vai estar um titulo</strong>
            <p>Aqui vai estar um paragrafo</p>
          </a>
        </div>
      </main>
    </>
  );
}