function HeroBox() {
  const skills = [
    { name: "Git", img: "/public/images/hero/git.svg" },
    { name: "GitHub", img: "/public/images/hero/github.svg" },
    { name: "React.js", img: "/public/images/hero/react.svg" },
    { name: "Tailwindcss", img: "/public/images/hero/tailwindcss-48.png" },
    { name: "Javascript [ES6]", img: "/public/images/hero/js.svg" },
    { name: "CSS 33", img: "/public/images/hero/css.svg" },
    { name: "HTML 5", img: "/public/images/hero/html-5.svg" },
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
