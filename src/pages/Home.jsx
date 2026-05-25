import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import DashboardChart from "../components/DashboardChart/DashboardChart";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <Features />
      <DashboardChart />
      <Footer />
    </div>
  );
};

export default Home;
