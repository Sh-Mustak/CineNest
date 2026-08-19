import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";

import BottomNav from "./components/layout/BottomNav";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import TvShows from "./pages/TvShows";
import Watch from "./pages/Watch";
import WatchList from "./pages/WatchList";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";


function AppLayout() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!isAuthPage && <Navbar />}

      <div className="pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/watch/:type/:id" element={<Watch />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<WatchList />} />

          {/* AUTH */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      {!isAuthPage && <BottomNav />}
      {!isAuthPage && <Footer />}
    </>
  );
}


function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;