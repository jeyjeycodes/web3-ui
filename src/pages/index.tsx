import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@components/Hero';
import { Main } from '@components/Layout/Main';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> JJs Template web App</title>
        <meta name='description' content='JJs Template web app that has it all' />
      </Head>
      <Main>
        <Hero />
      </Main>
    </div>
  );
};

export default Home;
