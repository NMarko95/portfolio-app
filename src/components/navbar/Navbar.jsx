import "./navbar.css";

const Navbar = ({ handleSelected }) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">Marko Nikolic</div>
      <nav className="navbar-links">
        <ul
          className="navbar-ul selected"
          onClick={(e) => {
            handleSelected(e.target, true);
          }}
          name="about"
        >
          About
        </ul>
        <ul
          className="navbar-ul"
          name="projects"
          onClick={(e) => {
            handleSelected(e.target, true);
          }}
        >
          Projects
        </ul>
        <ul
          className="navbar-ul"
          name="contact"
          onClick={(e) => {
            handleSelected(e.target, true);
          }}
        >
          Contact
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
