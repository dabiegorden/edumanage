import { About, Features, Footer, Hero, Navigation } from "@/constants";
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <About />
      </main>
      <Footer />
    </main>
  );
};

export default Home;
