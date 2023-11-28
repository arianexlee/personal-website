import "./App.css";
import { Navbar } from "./components/Navbar.js";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage.js";
// import { AboutPage } from "./pages/AboutPage";
// import { SpotifyTinderPage } from "./pages/projects/SpotifyTinderPage";
// import { ConstructionPage } from "./pages/ConstructionPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="body w-full">
      <Navbar />
      <HomePage />
      {/* <Routes basename="https://web.stanford.edu/class/cs147/projects/UnintentionalGood/Grapevine"> */}
      {/* <Route path="/" element={<HomePage />} /> */}
      {/* <Route path="/resume" element={<div></div>} /> */}
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* <Route path="/construction" element={<ConstructionPage />} /> */}
      {/* <Route path="/spotify-tinder" element={<SpotifyTinderPage />} /> */}
      {/* </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
