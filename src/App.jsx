import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './common/NavBar';
import MobileActionBar from './components/MobileActionBar';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import DeepCleaning from './pages/deepcleaning/DeepCleaning';
import About from './pages/faq/About';
import FAQ from './pages/faq/FAQ';
import HomePage from './pages/homepage/HomePage';
import MoveinoutCleaning from './pages/moveinoutcleaning/MoveinoutCleaning';
import ComercialCleaning from './pages/comercialcleaning/CommercialCleaning';
import ResidentialCleaning from './pages/residentialcleaning/ResidentialCleaning';
import BathroomCleaning from './pages/rooms/bathroom/BathroomCleaning';
import BedroomCleaning from './pages/rooms/bedroom/BedroomCleaning';
import KitchenCleaning from './pages/rooms/kitchen/KitchenCleaning';
import LivingroomCleaning from './pages/rooms/living/LivingroomCleaning';
import RoutineCleaning from './pages/routinecleaning/RoutineCleaning';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<BathroomCleaning />} path="/bathroom-cleaning" />
        <Route element={<BedroomCleaning />} path="/bedroom-cleaning" />
        <Route element={<KitchenCleaning />} path="/kitchen-cleaning" />
        <Route element={<LivingroomCleaning />} path="/livingroom-cleaning" />
        <Route element={<DeepCleaning />} path="/deep-cleaning" />
        <Route element={<RoutineCleaning />} path="/routine-cleaning" />
        <Route element={<MoveinoutCleaning />} path="/move-in-out-cleaning" />
        <Route element={<ComercialCleaning />} path="/commercial-cleaning" />
        <Route element={<ResidentialCleaning />} path="/residential-cleaning" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<FAQ />} path="/faq" />
      </Routes>
      <MobileActionBar />
    </Router>
  );
};

export default App;
