import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicCliente } from '../../services/prismic';
import styles from './styles.module.scss';

import Prismic from '@prismicio/client';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | IgNews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicCliente()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(response);

  return {
    props: {

    }
  }
}