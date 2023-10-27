import Head from "next/head";
import Hero from "../components/hero";

import { benefitOne, benefitTwo } from "../components/data";

import Benefits from "../components/benefits";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>DAO Stats</title>
      </Head>
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <Footer />
    </>
  );
};

export default Home;
