import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";
import DashboardChart from "./components/DashboardChart/DashboardChart";
import FormValidation from "./components/FormValidation/Form";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="antialiased bg-white selection:bg-[#C1FF72]">
      <Navbar />
      <Hero />
      <Features />
      <DashboardChart />
      <Button />
      <FormValidation />
      <Footer />
    </div>
  );
}

export default App;
