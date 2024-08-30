// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <div className="bg-dark footer text-light text-center py-3 ">
//       <h1>Hi, welcome to the footer page</h1>
//       <h4>All Rights Reserved &copy; TechCompany</h4>
//       <div className="mt-3">
//         <a href="/contact" style={{ textDecoration: 'none', paddingRight: '.5%' }}>
//           Contact Us
//         </a>
//         <a href="/about" style={{ textDecoration: 'none', paddingRight: '.5%' }}>
//           About Us
//         </a>
//         <a href="/policies" style={{ textDecoration: 'none', paddingRight: '.5%' }}>
//           Policies
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#3A1078' }} className="text-center text-white mt-auto">
      <Container className="p-5">
        {/* Section: Social media */}
        <section className="mb-4">
          <Button variant="outline-primary" className="btn-floating m-1 border border-white" href="#!" role="button">
            <FontAwesomeIcon icon={faFacebookF} className="text-white" />
          </Button>
          <Button variant="outline-primary" className="btn-floating m-1 border border-white" href="#!" role="button">
            <FontAwesomeIcon icon={faTwitter} className="text-white" />
          </Button>
          <Button variant="outline-primary" className="btn-floating m-1 border border-white" href="#!" role="button">
            <FontAwesomeIcon icon={faGoogle} className="text-white" />
          </Button>
          <Button variant="outline-primary" className="btn-floating m-1 border border-white" href="#!" role="button">
            <FontAwesomeIcon icon={faInstagram} className="text-white" />
          </Button>
          <Button variant="outline-primary" className="btn-floating m-1 border border-white" href="#!" role="button">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
          </Button>
          <Button variant="outline-primary" className="btn-floating m-1 border border-white" href="#!" role="button">
            <FontAwesomeIcon icon={faGithub} className="text-white" />
          </Button>
        </section>
      </Container>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright :
        <a className="text-white" style={{paddingLeft:".5%"}} href="https://youtube.com/">
          mywebsite.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
