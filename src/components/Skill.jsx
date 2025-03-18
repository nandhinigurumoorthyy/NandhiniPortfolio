import SkillCard from "./SkillCard";
import cssIcon from "../assets/css3.svg";
import htmlIcon from "../assets/html.svg";
import jsIcon from "../assets/javascript.svg";
import nodeIcon from "../assets/nodejs.svg";
import expressIcon from "../assets/expressjs.svg";
import mongoIcon from "../assets/mongodb.svg";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import colabIcon from "../assets/colab.png";
import vsIcon from "../assets/vs_code.png";

const skillItem = [
    { imgSrc: htmlIcon, label: "HTML", desc: "Markup language" },
    { imgSrc: cssIcon, label: "CSS", desc: "User Interface" },
    { imgSrc: jsIcon, label: "JavaScript", desc: "Interaction" },
    { imgSrc: nodeIcon, label: "NodeJS", desc: "Web Server" },
    { imgSrc: expressIcon, label: "ExpressJS", desc: "Node Framework" },
    { imgSrc: mongoIcon, label: "MongoDB", desc: "Database" },
    { imgSrc: reactIcon, label: "React", desc: "Library" },
    { imgSrc: tailwindIcon, label: "TailwindCSS", desc: "Styling Framework" },
    { imgSrc: vsIcon, label: "VS Code", desc: "Code Editor" },
    { imgSrc: colabIcon, label: "Google Colab", desc: "Python Notebook" }
];

const Skill = () => {
    return (
        <section className="section mb-4 px-4 mx-auto lg:px-8 xl:max-w-6xl">
            <h2 className="headline-2 text-3xl lg:text-4xl lg:leading-tight font-semibold max-w-max">
                Essential Tools I Use
            </h2>
            <p className="mt-3 mb-8 md:max-w-[70ch] lg:max-w-full text-2xl">Unlocking creativity and efficiency with powerful technologies to build seamless, high-performance web applications.</p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {skillItem.map(({ imgSrc, label, desc }, index) => (
                    <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Skill;
