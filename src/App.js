import './App.css';
import Navbar from './component/Navbar';
import Landing from "./component/Landing";
import CompeletLanding from './component/Compelet-Landing';
import BrowseTopics from "./component/Browse-Topics";
import HowitWork from './component/HowitWork';
import Faqs from './component/Faqs';
import Contact from './component/Contact';
import FooterList from './component/Footer-list';
import { Route, Routes } from 'react-router-dom';
import WebDesign from './component/Web-Design';
import LandingWeb from './component/landing-Web';
import CompleteWeb from './component/Compelet-Web';
import TopicsList from './component/TopicList';
import TopicPage from './component/TopicPage';
import ConcatList from './component/ConcatList';
import ConcatPage from './component/ConcatPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Landing />
              <CompeletLanding />
              <BrowseTopics />
              <HowitWork />
              <Faqs />
              <Contact />
              <FooterList />
            </>
          }
        />
        <Route
          path="/web-Design"
          element={
            <>
              <Navbar />
              <LandingWeb />
              <WebDesign />
              <CompleteWeb />
              <FooterList />
            </>
          }
        />
        <Route
          path="/Topics-Listing"
          element={
            <>
              <Navbar />
              <TopicsList />
              <TopicPage />
              <FooterList />
            </>
          }
        />
        <Route
          path="/contact-form"
          element={
            <>
              <Navbar />
              <ConcatList />
              <ConcatPage />
              <FooterList/>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
