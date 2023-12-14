import NavbarTwo from '../components/NavbarTwo';
import './Skill.css';
const Skill = () => {

    const techStack1 = ["React", "Node.js", "Express.js", 'EJS', "MongoDB", "HTML", "CSS", 'git', "REST API's", "Redux", "`Next.js"];
    const techStack2 = ["React", "HTML", "CSS", 'EJS', 'Python', 'Machinelearning'];

    return (
        <div className="skills">

            <NavbarTwo />

            <div className="summary">
                "I am a motivated and dedicated full-stack JavaScript developer with 1 years of professional experience in React.js and python. My journey in web development began with a strong foundation in these technologies, and I have continued to grow my skills through dedicated learning and hands-on training."
            </div>
            <div className="exp1">
                <b>Software developer-infoxtechnologies infopark</b>
                <div>Developed and maintained web applications using Python and React.js,
                    I was a team member of a machine learning project and after that I worked on some static project based on Reactjs.</div>
                <div className="tech">  {techStack2.map((item, index) => (
                    <div key={index} className="tech-stack-item">
                        {item}
                    </div>
                ))}</div>
            </div>
            <div className="exp2">
                <b>Fullstack developer trainee-Attainu</b>
                <div>
                    Completed a comprehensive full-stack JavaScript developer program covering various technologies and tools.
                    Gained hands-on experience through real-world projects and assignments.
                    worked as a mentor too.
                    <div className="tech">  {techStack1.map((item, index) => (
                        <div key={index} className="tech-stack-item">
                            {item}
                        </div>
                    ))}</div>
                </div>
            </div>

        </div>
    );
}

export default Skill;