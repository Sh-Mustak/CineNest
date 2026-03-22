import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import BlockCounter from "./components/BlockCounter"; // ← Add
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { useAdBlockerContext } from "./context/useAdBlockerContext"; // ← Add
import Movies from "./pages/ Movies";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function App() {
  const { blockedCount } = useAdBlockerContext(); // ← Add

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/watch/:type/:id" element={<Watch />} />
        </Routes>
        <Footer />
        {/* 🛡️ Global ad block badge */}
        <BlockCounter count={blockedCount} position="bottom-right" />{" "}
        {/* ← Add */}
      </Router>
    </>
  );
}

export default App;
