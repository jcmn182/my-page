

import LogoJC from '../../../assets/images/logo-jc.png'
import './index.scss'

const Logo = () => {
  
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoJC}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
