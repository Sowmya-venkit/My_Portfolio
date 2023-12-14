import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
const NavbarTwo = () => {

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
        <div className="nav">
            <div className="opt">
                <div className='a2' onClick={() => { handleSubmitOne() }}>About</div>
                <div className='a2' onClick={() => { handleSubmitTwo() }}>Projects</div>
                <div className='a2' onClick={() => { handleSubmitFour() }}>Experience</div>
                <div className='tab' onClick={() => { handleResume() }}>Resume</div>

            </div>
        </div >
    );
}

export default NavbarTwo;