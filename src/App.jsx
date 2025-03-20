import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Review from "./pages/Review";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./components/Cart/Cart";
import DataProvider from "./Context/DataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter future={{ v7_startTransition: true , v7_relativeSplatPath:true}}>
        <ScrollToTop />
        <div className="min-h-screen w-full bg-gray-50">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/review" element={<Review />} />
              <Route path="/cart" element={<Cart />} />
              {/* Add other routes here */}
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
