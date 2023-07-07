
import React from 'react'
import '/Users/kevindaliri/digital-agency/src/styles/footer.css'

const year = new Date().getFullYear()


const Footer = () => {
  return <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <h2>omidia</h2>
            </div>

            <div className="footer__icons">
            <span className="footer__icon1"><a href="https://www.linkedin.com/company/omidia/?viewAsMember=true" target="_blank"><i class="ri-linkedin-line"></i></a></span>
            </div>
        </div>
        <p className="copyright">Copyright {year}, developed by Kevin Daliri. All rights reserved. {" "} </p>
    </div>
  </footer>
}

export default Footer