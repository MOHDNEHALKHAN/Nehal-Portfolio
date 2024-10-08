import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";

const App = () => {

  return (
    <main>
        
          <Navbar />
          <Herosection />
          <About />
          <Skills />
          <Blogs />
        
    </main>
  );
};

export default App; 