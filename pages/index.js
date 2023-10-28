import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

import { benefitOne, benefitTwo } from "../components/data";

import Benefits from "../components/benefits";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>DAOZen</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <Footer />
    </>
  );
};

export default Home;
