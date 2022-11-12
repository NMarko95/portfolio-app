import "./app.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  const handleSelected = (e, indicator) => {
    const links = document.querySelectorAll(".navbar-ul");
    links.forEach((link) => {
      if (link.classList.contains("selected"))
        link.classList.remove("selected");
    });
    e.classList.add("selected");
    if (indicator) {
      const div = document.getElementById(e.getAttribute("name"));
      div.scrollIntoView();
    }
  };

  const scrollHandler = () => {
    const aboutDiv = document.querySelector(".about").offsetHeight;
    const projectsDiv = document.querySelector(".projects").offsetHeight;
    const navbarLinks = document.querySelectorAll(".navbar-ul");
    const currentHeight = window.scrollY;
    if (currentHeight >= 0 && currentHeight < aboutDiv) {
      handleSelected(navbarLinks[0], false);
    } else if (
      currentHeight > aboutDiv &&
      currentHeight < aboutDiv + projectsDiv
    ) {
      handleSelected(navbarLinks[1], false);
    } else {
      handleSelected(navbarLinks[2], false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <div className="app">
      <Navbar handleSelected={handleSelected} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
