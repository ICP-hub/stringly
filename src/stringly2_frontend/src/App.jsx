import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landingpage from './pages/landingpage';
import FeaturesPage from './pages/FeaturesPage';
import About from './pages/About';
// import { stringly2_backend } from 'declarations/stringly2_backend';

function App() {


  return (
    <div className='flex flex-col items-center justify-center'>
      <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/features' element={<FeaturesPage/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
