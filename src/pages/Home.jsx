import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import DashboardChart from "../components/DashboardChart/DashboardChart";

import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DashboardChart />
      <Footer />
    </>
  );
}
