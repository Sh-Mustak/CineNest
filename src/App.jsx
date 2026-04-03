import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import BottomNav from "./components/layout/BottomNav"; 
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import TvShows from "./pages/TvShows";
import Watch from "./pages/Watch";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pb-16 md:pb-0"> {/* ← prevents content hiding behind bottom nav on mobile */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvshows" element={<TvShows />} />
            <Route path="/watch/:type/:id" element={<Watch />} />
            <Route path="/search" element={<Search />} />

            {/* <Route path="/watchlist" element={<Watchlist />} /> */}
          </Routes>
        </div>

        <BottomNav /> 
        <Footer />
      </Router>
    </>
  );
}

export default App;
