import "./about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <div className="about-img">
          <img src="/images/img1.jpg" alt="img" />
        </div>
        <div className="about-info">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            iste culpa cupiditate distinctio nulla doloribus quia! Incidunt quo
            beatae pariatur! Aperiam perspiciatis deserunt excepturi debitis
            officia quaerat ipsam aut ex. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorem iste culpa cupiditate distinctio nulla
            doloribus quia! Incidunt quo beatae pariatur! Aperiam perspiciatis
            deserunt excepturi debitis officia quaerat ipsam aut ex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
