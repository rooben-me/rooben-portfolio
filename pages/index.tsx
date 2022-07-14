import type { NextPage } from "next";

import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <section className="container mx-auto px-4 py-8 font-monda">
        <Navbar />
        <Header />
      </section>
    </div>
  );
};

export default Home;
