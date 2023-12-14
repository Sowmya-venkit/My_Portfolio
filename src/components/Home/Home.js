import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
const Home = () => {

    const navigate = useNavigate();

    const [home, setHome] = useState([])
    const [project, setProject] = useState([])
    const [contact, setContact] = useState([])
    const [skill, setSkill] = useState([])

    const handleSubmitOne = (e) => {
        navigate("/")
    }
    const handleSubmitTwo = (e) => {
        navigate("/project")
    }

    const handleSubmitThree = (e) => {
        navigate("/contacts")
    }
    const handleSubmitFour = (e) => {
        navigate("/skill")
    }
    const handleResume = (e) => {
        window.open("Sowmya_KV_CV .pdf", "_blank")

    }
    return (
        <div className="home">
            <div className='Home1'>
                <div className="Navbar">
                    <div className="name">
                        <div className='name1'>SKV </div>
                        <div className='name'>Web Developer</div>
                        <div className='logs'>
                            <div><img className="git" onClick={() => window.open("https://github.com/Sowmya-venkit", "_blank")} src="git.png" alt="git" /> </div>
                            <div><img className="linkedin" onClick={() => window.open("https://www.linkedin.com/in/sowmya-k-v-3371891a8/", "_blank")} src="linkedIn.png" alt="linkedin" /> </div>
                        </div>
                    </div>
                    <div className="options">
                        <div className='a1' onClick={() => { handleSubmitOne() }}>About</div>
                        <div className='a1' onClick={() => { handleSubmitTwo() }}>Projects</div>
                        <div className='a1' onClick={() => { handleSubmitFour() }}>Experience</div>
                        <div className='tab' onClick={() => { handleResume() }}>Resume</div>
                    </div>
                </div>
                <div className='content'>
                    <div className='content1'>
                        <div className='n1'>Sowmya K V</div>
                        <div>
                            I'm a Fullstack web developer
                        </div>
                        <footer className="footer">
                            sowmyakv22@gmail.com,
                            8113922088
                        </footer>
                    </div>
                    <div className='content1'>
                        I'm a passionate and results-driven full-stack developer with 2 year of experience. My expertise lies in building web applications that are both functional and aesthetically pleasing. I love tackling complex problems and turning them into simple, elegant solutions.
                    </div>

                    {/* <div>
                            <TypeAnimation
                                sequence={[
                                    "I'm a frontEnd developer .\n I'm from India.",
                                    1000, "",
                                ]}
                                speed={50}
                                style={{ whiteSpace: 'pre-line', fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div> */}
                </div>
``
            </div>
        </div >
    );
}

export default Home;