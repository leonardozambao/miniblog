import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./layout/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
