import "./app.css";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
