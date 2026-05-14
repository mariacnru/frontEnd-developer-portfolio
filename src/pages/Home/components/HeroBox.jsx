import gitImg from "/images/hero/git.svg";
import githubImg from "/images/hero/github.svg";
import reactImg from "/images/hero/react.svg";
import tailwindImg from "/images/hero/tailwindcss-48.png";
import jsImg from "/images/hero/js.svg";
import cssImg from "/images/hero/css.svg";
import htmlImg from "/images/hero/html-5.svg";

function HeroBox() {
  const skills = [
    { name: "Git", img: gitImg },
    { name: "GitHub", img: githubImg },
    { name: "React.js", img: reactImg },
    { name: "Tailwindcss", img: tailwindImg },
    { name: "Javascript [ES6]", img: jsImg },
    { name: "CSS 33", img: cssImg },
    { name: "HTML 5", img: htmlImg },
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
