
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './common/NavBar';
import HomePage from './pages/homepage/HomePage';
import About from './pages/About';
import BathroomCleaning from './pages/rooms/bathroom/BathroomCleaning';
import BedroomCleaning from './pages/rooms/bedroom/BedroomCleaning';
import KitchenCleaning from './pages/rooms/kitchen/KitchenCleaning';
import LivingroomCleaning from './pages/rooms/living/LivingroomCleaning';
import DeepCleaning from './pages/deepcleaning/DeepCleaning';
import RoutineCleaning from './pages/routinecleaning/RoutineCleaning'
import MoveinoutCleaning from './pages/moveinoutcleaning/MoveinoutCleaning';
import CommercialCleaning from './pages/comercialcleaning/CommercialCleaning';
import ResidentialCleaning from './pages/residentialcleaning/ResidentialCleaning';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/bathroom-cleaning" element={<BathroomCleaning />} />
        <Route path="/bedroom-cleaning" element={<BedroomCleaning />} />
        <Route path="/kitchen-cleaning" element={<KitchenCleaning />} />
        <Route path="/livingroom-cleaning" element={<LivingroomCleaning />} />
        <Route path="/deep-cleaning" element={<DeepCleaning />} />
        <Route path="/routine-cleaning" element={<RoutineCleaning />}/>
        <Route path="/move-in-out-cleaning" element={<MoveinoutCleaning />} />
        <Route path="/commercial-cleaning" element={<CommercialCleaning />} />
        <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
