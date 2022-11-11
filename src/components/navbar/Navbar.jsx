import "./navbar.css";

const Navbar = () => {
  const handleSelected = (e) => {
    const links = document.querySelectorAll(".navbar-ul");
    links.forEach((link) => {
      if (link.classList.contains("selected"))
        link.classList.remove("selected");
    });
    e.classList.add("selected");
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">Logo</div>
      <nav className="navbar-links">
        <ul
          className="navbar-ul selected"
          onClick={(e) => handleSelected(e.target)}
        >
          About
        </ul>
        <ul className="navbar-ul" onClick={(e) => handleSelected(e.target)}>
          Projects
        </ul>
        <ul className="navbar-ul" onClick={(e) => handleSelected(e.target)}>
          Contact
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
