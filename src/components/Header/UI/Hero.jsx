import React from 'react'
import '/Users/kevindaliri/digital-agency/src/styles/hero.css'
import newImage from '/Users/kevindaliri/digital-agency/src/images/finalimage.svg'

const Hero = () => {
    const handleClick = (e) => {
        e.preventDefault();
    
        const targetLink = e.target.closest('.service__link');
    
        if (targetLink) {
            const targetAttr = targetLink.getAttribute('href');
            const targetElement = document.querySelector(targetAttr);
    
            if (targetElement) {
                const location = targetElement.offsetTop;
    
                window.scrollTo({
                    left: 0,
                    top: location - 80,
                    behavior: 'smooth',
                });
            }
        }
    };
  return <section id='hero__section'>
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <div>
                <h2>We're Creating Perfect</h2>
                <h2>Digital Solutions to </h2>
                <h2 className="highlight">Promote Your Brand</h2>
                </div>
                    <p className="description">
Empower your brand with our impeccable digital solutions tailored to drive effective promotion and exponential growth</p>
                    <div className="hero__btns">
                    <a href="#newsletter" onClick={handleClick} className="service__link">
                        <button className="primary__btn">Contact Us</button>
                        </a>
                        <a href="#section" onClick={handleClick} className="service__link">
                        <button className="secondary__btn">Our Services</button>
                        </a>
                    </div>
            </div>
            <div className="hero__img">
                <img src={newImage} alt="hero-img" />
            </div>
        </div>
    </div>
  </section>
}

export default Hero