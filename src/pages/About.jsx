function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app designed to search GitHub profiles and view profile details.
        This project is part of the{" "}
        <a href="https://www.udemy.com/courses/react-front-to-back-2022">
          {""}
          React Front To Back
        </a>{" "}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a href="https://twitter.com/hassibmoddasser" className="text-white">
          Hassib Moddasser
        </a>
      </p>
    </div>
  );
}

export default About;
