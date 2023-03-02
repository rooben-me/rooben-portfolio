import type { NextPage } from "next";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Crystals from "../components/Crystals";
import RecentWork from "../components/RecentWork";

const Home: NextPage = () => {
  return (
    <div>
      <section className="p-4 font-monda overflow-hidden relative">
        <div className="container mx-auto">
          <Navbar />
          <Header />
          <RecentWork />
        </div>
        <Crystals />
      </section>
    </div>
  );
};

export default Home;
