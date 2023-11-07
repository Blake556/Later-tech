import '../styles/Footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"; // Use free-brands-svg-icons



function Footer() {
  return ( 
    <div className="Footer d-flex align-items-center">
      <div className="row footer-row " >
        <div className="col-5 phone-number d-flex align-items-center">
          <span>Contact: 000-000-0000</span>
        </div>
        <div className="col-2 rights-reserved-box d-flex justify-content-center">
          <span className='arrow'>^</span>
          <span className='rights-reserved'>Latertech @ 2023</span>
        </div>
        <div className="col-3 sign-up-box d-flex justify-content-end align-items-center">
          <input type="text" placeholder='Enter your email...' className="sign-up-field" />
          <button className="btn submit-sign-up">Sign Up</button>
        </div>
        <div className="col-2 social-box d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faTwitter} className="social twitter"  />
          <FontAwesomeIcon icon={faInstagram} className="social"/>
        </div>
      </div>
    </div>
  );
}

export default Footer
