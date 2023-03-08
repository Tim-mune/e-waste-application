import { LandingHeader, Hero, Action, Footer } from "../components";
import axios from "axios";
import { useEffect } from "react";

const Landing = () => {
  return (
    <div className="container min-h-screen">
      <LandingHeader />
      <Hero />
      <Action />
      <Footer />
    </div>
  );
};

export default Landing;
