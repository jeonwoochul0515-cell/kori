import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Signature from "./components/Signature";
import Menu from "./components/Menu";
import Ambience from "./components/Ambience";
import Events from "./components/Events";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <Brand />
        <Signature />
        <Menu />
        <Ambience />
        <Events />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
