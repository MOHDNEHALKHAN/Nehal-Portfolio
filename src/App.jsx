import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Blogs from "./components/Blogs";

const App = () => {
  return (
  <main className="w-full">
      <Navbar />
      <Herosection />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Blogs />
    </main>
  );
};

export default App; 