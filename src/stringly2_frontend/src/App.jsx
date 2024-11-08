import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landingpage from './pages/landingpage';
import FeaturesPage from './pages/FeaturesPage';
import About from './pages/About';

function App() {
  return (
    <div className="w-full max-w-[1540px] mx-auto flex flex-col">

        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </HashRouter>
    </div>

  );
}

export default App;
