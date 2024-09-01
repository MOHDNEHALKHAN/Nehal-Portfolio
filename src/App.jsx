import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";

const App = () => {
  return (
  <main className="w-full">
      <Navbar />
      <Herosection />
    </main>
  );
};

export default App; 