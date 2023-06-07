import React from 'react';
import '../../App.css';
import '../../fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
    return (

        <footer className="footer">
          <h1><a href="https://github.com/FCarter09"className="githubBtn"><FontAwesomeIcon icon={['fab', 'github']} style={{ color: 'rgb(24, 94, 119)' }} /></a></h1>
        </footer>
        
    );
}

// code below also works for github icon
//  <i className="fab fa-github" style={{ color: 'rgb(24, 94, 119)' }}></i> 

export default Footer;