import Head from "next/head";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";

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
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Footer />
    </>
  );
};

export default Home;
