import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Movies from "./pages/ Movies";
import Home from "./pages/Home";
import {BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Watch from "./pages/Watch";

function App() {
  return (
    <>
       <Router>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
           <Route path="/watch" element={<Watch />} />
          {/* <Route path="/series" element={<Series />} /> */}
          {/* <Route path="/watch/:id" element={<Watch />} /> */}
          {/* <Route path="/watchlist" element={<Watchlist />} /> */}
          {/* <Route path="/search" element={<Search />} /> */}
        </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;
