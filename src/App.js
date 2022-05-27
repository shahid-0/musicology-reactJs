import AmazingDance from './components/AmazingDanceComponents/AmazingDance';
import BestDance from './components/AmazingDanceComponents/BestDance';
import OurStatistics from './components/ourStatistics/OurStatistics';
import HerberSimon from './components/herberSimon/HerberSimon';
import Pricing from './components/pricingComponents/Pricing';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';
import DanceTour from './components/DanceTour';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <DanceTour />
      <Pricing />
      <AmazingDance />
      <BestDance />
      <OurStatistics />
      <HerberSimon />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
