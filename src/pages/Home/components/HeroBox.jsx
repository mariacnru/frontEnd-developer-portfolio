function HeroBox() {
  const skills = [
    { name: "Git", img: "/frontEnd-developer-portfolio/images/hero/git.svg" },
    {
      name: "GitHub",
      img: "/frontEnd-developer-portfolio/images/hero/github.svg",
    },
    {
      name: "React.js",
      img: "/frontEnd-developer-portfolio/images/hero/react.svg",
    },
    {
      name: "Tailwindcss",
      img: "/frontEnd-developer-portfolio/images/hero/tailwindcss-48.png",
    },
    {
      name: "Javascript [ES6]",
      img: "/frontEnd-developer-portfolio/images/hero/js.svg",
    },
    {
      name: "CSS 33",
      img: "/frontEnd-developer-portfolio/images/hero/css.svg",
    },
    {
      name: "HTML 5",
      img: "/frontEnd-developer-portfolio/images/hero/html-5.svg",
    },
  ];
  return (
    <div className="hero-box">
      {skills.map((skill) => (
        <div key={skill.name} className="hero-item">
          <span>{skill.name}</span>
          <img src={skill.img} alt={skill.name} width={30} />
        </div>
      ))}
    </div>
  );
}

export default HeroBox;
