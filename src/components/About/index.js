import React from 'react';
import '../../App.css';
// import your fontawesome library
import '../../fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function About() {
    return (
        <section className='about-section'>
            <h1 className="page-header">About Me</h1>
            <div>
                <h1 className="userIcon"><FontAwesomeIcon icon={faUser} size="6x" style={{ color: 'white' }}/></h1>
            </div>
            <p className='about-me'>
                Hi, my name is Forest Carter. I am from Buckingham County, Virginia. 
                I am currently working towards the goal of becoming a certified web developer. 
                I am attending a coding bootcamp through the Richmond University to learn about web development and help prepare me for a career in the software development field. 
                I look forward to continuing learning process and my growth in respects to web development.

            </p>
        </section>
        
    );
}

export default About;