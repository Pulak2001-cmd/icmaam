import { Route, Routes } from "react-router-dom"
import Home from './components/Home';
import ConferenceAbout from './components/ConferenceAbout';
import DepartmentAbout from './components/DepartmentAbout';
import UniversityAbout from './components/UniversityAbout';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Organization from './components/Organization';
import Speakers from './components/Speakers';
import Travel from './components/Travel';
import Dumdum from './components/Dumdum';
import Howrah from './components/Howrah';
import Sealdah from './components/Sealdah';
import Kolkata from './components/Kolkata';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import Menu from './components/Menu';

function App() {

  return (
    <>
    <TopBar />
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conference" element={<ConferenceAbout />} />
      <Route path="/department" element={<DepartmentAbout />} />
      <Route path="/university" element={<UniversityAbout />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/dumdum" element={<Dumdum />} />
      <Route path="/howrah" element={<Howrah />} />
      <Route path="/sealdah" element={<Sealdah />} />
      <Route path="/kolkata" element={<Kolkata />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
