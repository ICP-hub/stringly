import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landingpage from "./pages/landing/landingpage";
import FeaturesPage from "./pages/FeaturesPage";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Privacy from "./pages/Privacy";
import Guidelines from "./pages/Guidelines";
import UseTerms from "./pages/UseTerms";

function App() {
  return (
    <div className="w-full max-w-[1920px] mx-auto flex flex-col">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/guidelines/csae" element={<Guidelines />} />
          <Route path="/guidelines/termsofuse" element={<UseTerms />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
