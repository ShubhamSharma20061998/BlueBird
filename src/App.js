import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";
import Services from "./pages/servicesPage/Services";
import HowWeWork from "./pages/howWeWork/HowWeWork";
import RAndD from "./pages/r&d/RAndD";
import FAQ from "./pages/faq/FAQ";
import ScrollTop from "./ScroolTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/research-developement" element={<RAndD />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
