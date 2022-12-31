import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar.js';
import { Route, Routes } from 'react-router-dom';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage'
import { SpotifyTinderPage } from './pages/projects/SpotifyTinderPage';
import { ConstructionPage } from './pages/ConstructionPage';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className= "body w-full">
      <Navbar/>
      <Routes>
        <Route path='/' element={<WorkPage/>}/>
        <Route path='/resume' element={<div></div>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/construction' element={<ConstructionPage/>}/>
        <Route path='/spotify-tinder' element={<SpotifyTinderPage/>}/>
      </Routes>
      <Footer/>
    </div>


  );
}

const styles= {
  body: {
    width: '100%'
  },

}
export default App;
