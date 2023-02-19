
import './App.css';
import Header from './components/Header/Header';
import LargeImage from './components/LargeImage/LargeImage';
import OfferClients from './components/Offerclients/OfferClients';
import PopularDestination from './components/PopularDestination/PopularDestination';
import Rate from './components/Rate/Rate';
import Testimony from './components/Testimony/Testimony';
import TopDestination from './components/TopDestination/TopDestination';
import VisaConsultants from './components/VisaConsultants/VisaConsultants';

function App() {
  return (
    <div className="App">
      <Header />
      <LargeImage />
      <Rate />
      <VisaConsultants />
      <OfferClients />
      <TopDestination />
      <PopularDestination />
      <Testimony />
    </div>
  );
}

export default App;
