import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">Content</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
