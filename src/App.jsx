import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {

  return (
    <main>
        
          <Navbar />
          <Herosection />
          <About />
          <Skills />
        
    </main>
  );
};

export default App; 