import About from "./components/about";
import Fotter from "./components/fotter";
import Hero from "./components/hero";
import NavBar from "./components/navBar";
import Services from "./components/services";
import Tours from "./components/tours";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Fotter />
    </div>
  );
}

export default App;
