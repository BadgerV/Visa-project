
import './App.css';
import Assessment from './components/Assessment/Assessment';
import FAQS from './components/FAQS/FAQS';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LargeImage from './components/LargeImage/LargeImage';
import OfferClients from './components/Offerclients/OfferClients';
import PopularDestination from './components/PopularDestination/PopularDestination';
import Rate from './components/Rate/Rate';
import Testimony from './components/Testimony/Testimony';
import TopDestination from './components/TopDestination/TopDestination';
import VisaConsultants from './components/VisaConsultants/VisaConsultants';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

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
      <FAQS />
      <Assessment />
      <Footer /> 
       <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
