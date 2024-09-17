import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import About from "./components/About";


const App = () => {

  return (
    <main>
        
          <Navbar />
          <Herosection />
          <About />
        
    </main>
  );
};

export default App; 