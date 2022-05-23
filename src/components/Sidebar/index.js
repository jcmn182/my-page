import {useState} from 'react';
import './index.scss'
import LogoJC from '../../assets/images/logo-jc.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faBriefcase, faScrewdriverWrench, faBars} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import {useSizeScreen} from '../../hooks/useSizeScreen';

const Sidebar = () => {

  const {widthSize} = useSizeScreen();
  const [isVisible, setIsVisible] = useState(false);

  const setMenu = () => {
    if(isVisible===false){
      setIsVisible(true)
    }
    else{
      setIsVisible(false)
    }
  }

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoJC} alt="Logo" />
      </Link>
      <FontAwesomeIcon icon={faBars} className="icon-menu" onClick={()=>setMenu()}/>
      {widthSize>940 ?(
        <nav className="nav">
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="work-link" to="/work">
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
        </NavLink>
        </nav>):
        (<nav className={isVisible?"nav-responsive-in":"nav-responsive-out"}>
        <div className="container-mobile-nav">
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="work-link" to="/work">
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
        </NavLink>
        </div>
        </nav>)}
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/juan-carlos-macias-najera-317aa321b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jcmn182"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
