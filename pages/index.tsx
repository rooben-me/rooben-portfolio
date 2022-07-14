import type { NextPage } from "next";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Crystals from "../components/Crystals";

const Home: NextPage = () => {
  return (
    <div>
      <section className="px-4 py-8 font-monda overflow-hidden relative">
        <div className="container mx-auto">
          <Navbar />
          <Header />
        </div>
        <Crystals />
      </section>
    </div>
  );
};

export default Home;
