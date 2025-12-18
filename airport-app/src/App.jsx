import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightArrivals from "./components/FlightArrivals";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<FlightArrivals />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
