// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Design from "./pages/Design";
import DetailPageArtikel from "./components/common/DetailPageArtikel";
import Blog from "./pages/Blog";


function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20 px-8">
        {" "}
        {/* Padding-top untuk ruang di bawah Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/design" element={<Design />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* Tambahkan rute lain sesuai kebutuhan */}
        <Route path="project/:id" element={<DetailPageArtikel />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
