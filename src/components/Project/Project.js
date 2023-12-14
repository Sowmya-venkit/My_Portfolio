import NavbarTwo from '../NavbarTwo';
import './Project.css';
const Project = () => {
    const techStack = ["Node", "Express", "MongoDB", "EJS", "HTML", "CSS", "Chartjs"];
    const techStack1 = ["React", "Node", "Express", 'EJS', "MongoDB", "HTML", "CSS"];
    const techStack2 = ["React", "HTML", "CSS", 'EJS'];

    return (
        <div className="projects">
            <div>
                <NavbarTwo />
            </div>
            <div className="pro">
                <div className="one">
                    <h2>ExpenseTracker</h2>
                    <p>I have built an application to track the expenses of a person. After login we can add expenses and the month of
                        the expense. We can also see them in charts in the analytics page.
                        <div className="tech">  {techStack.map((item, index) => (
                            <div key={index} className="tech-stack-item">
                                {item}
                            </div>
                        ))}</div>
                    </p>
                    <p>Deployed Link -<a href="https://expense-tracker-frontend-6ph6.onrender.com/" target="_blank" className="deployLink"> Click Here...</a></p>

                </div>
                <div className="one">
                    <h2>Project Management App</h2>
                    <p>I have built an application to track the lifecycle of a Project. After login we will be able to add a project and it's
                        participants, add bugs and tasks for them as well as add any documents required for the project.
                        <div className="tech">  {techStack1.map((item, index) => (

                            <div key={index} className="tech-stack-item">

                                {item}
                            </div>
                        ))}</div>
                    </p>
                    <p> Deployed Link -<a href="https://project-management-frontend-u6fe.onrender.com" target="_blank" className="deployLink"> Click Here...</a></p>

                </div>
                <div className="one">
                    <h2>Cryptocurrency Tracker</h2>
                    <p>I have built an application to track the price and movement of Crypto Currencies with the help of a free API.

                        <div className="tech">  {techStack2.map((item, index) => (

                            <div key={index} className="tech-stack-item">

                                {item}
                            </div>
                        ))}</div>
                    </p>
                    <p>Deployed Link -<a href="https://cool-dolphin-7f6b27.netlify.app/" target="_blank" className="deployLink"> Click Here...</a></p>
                </div>
                <div className="one">
                    <h2>GeoQuake</h2>
                    <p>I have developed a system that can efficiently store, retrieve, and visualize earthquake data from an API, allowing users to access and visualize the information on a map for analysis and understanding.
                        <div className="tech">  {techStack2.map((item, index) => (

                            <div key={index} className="tech-stack-item">

                                {item}
                            </div>
                        ))}</div>
                    </p>
                    <p>Deployed Link -<a href=" https://geoquake-frontend.onrender.com/" target="_blank" className="deployLink"> Click Here...</a></p>

                </div>


            </div>

        </div>
    );
}

export default Project;