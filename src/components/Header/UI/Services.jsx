import React from 'react';
import '/Users/kevindaliri/digital-agency/src/styles/service.css';


const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        desc:
            'Experience innovative, user-friendly app development. Embrace cutting-edge tech, tailored creative solutions. Elevate your digital presence and stay ahead with our expertise and seamless experiences.',
        href: '#web', // Set href to the contact page
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        desc:
            'Immerse in striking web design, creating captivating online experiences. Discover our creative solutions, blending aesthetics with functionality, for an unforgettable digital presence.',
        href: '#web', // Set href to the contact page
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphic Design',
        desc:
            'Discover captivating design that powerfully conveys your message. Stunning visuals, compelling messaging, impactful branding. Elevate and transform your visual identity through exceptional design.',
        href: '#web', // Set href to the contact page
    },
];

const Services = () => {
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
    return (
        <section id="section">
            <div className="container">
                <div className="services__top_content">
                    <h6 className="subtitle">Our Services</h6>
                    <h2>Save time managing your business with</h2>
                    <h2 className="highlight">our best services</h2> 
                </div>

                <div className="service__item_wrapper">
                    {serviceData.map((item, index) => (
                        <div className="services__item" key={index}>
                            <div className="service__item" key={index}>
                                <a href={item.href} onClick={handleClick} className="service__link">
                                    <span className="service__icon">
                                        <i className={item.icon}></i>
                                    </span>
                                    <h3 className="service__title">{item.title}</h3>
                                    <p className="description">{item.desc}</p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
