import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
  <div className="footer-top">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="/" className="logo d-flex align-items-center">
            <span className="sitename">HCP ELECTRONICS</span>
          </a>
          <div className="footer-contact pt-3">
            <p>A-8, Someshvar Tenament, </p>
            <p>Niraynagar Road, Ranip, Ahmedabad.</p>
            <p className="mt-3">
              <strong>Phone:</strong> <span>+91 8849696356</span>, <span>+91 9979775742</span>
            </p>
            <p>
              <strong>Email:</strong> <span>hcpenterprise@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="#">Buy New AC</a>
            </li>
            <li>
              <a href="#">Book AC Services</a>
            </li>
            <li>
              <a href="#">Buy AC Accessories</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright text-center">
    <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
      <div className="d-flex flex-column align-items-center align-items-lg-start">
        <div>
          © Copyright{" "}
          <strong>
            <span>HCP</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
        
          Designed by <a href="http://http://dyinfosoft.com/.com/" target="_blanck">DY Infosoft</a>
        </div>
      </div>
      <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
        <a href="">
          <i className="bi bi-twitter-x" />
        </a>
        <a href="">
          <i className="bi bi-facebook" />
        </a>
        <a href="">
          <i className="bi bi-instagram" />
        </a>
        <a href="">
          <i className="bi bi-linkedin" />
        </a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer