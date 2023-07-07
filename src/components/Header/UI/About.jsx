import React from 'react'
import '../../../styles/about.css'

import aboutImage from '/Users/kevindaliri/digital-agency/src/images/up.svg'

const chooseData = [
    {
        icon: "ri-wifi-line",
        title: "First Working Progress",
        desc: "Innovative solutions for your financial needs. Expert guidance and personalized services to drive your success"
    },

    {
        icon: "ri-team-line",
        title: "Dedicated Team",
        desc: "Our dedicated team is committed to delivering exceptional results. Trust us to go above and beyond for your success"
    },

    {
        icon: "ri-customer-service-2-line", 
        title: "24/7 Hours Support",
        desc: "Count on our 24/7 support to assist you anytime. We're here around the clock to address your needs and provide prompt solutions"
    },
]

const About = () => {
  return <section id="about">
    <div className="container">
        <div className="about__wrapper">
             <div className="about__content">
                <h6 className='subtitle'>Why choose us?</h6>
                <h2>Specialist in aiding clients on</h2>
                <h2 className="highlight">financial services</h2>
                <p className="description about__content_desc">Unlock your financial potential with our specialized services. Our expert team provides tailored solutions, empowering clients to achieve their goals and thrive in today's dynamic market</p>

                <div>
                    {
                        chooseData.map((item, index) => (
                            <div className="choose__us-item" key={index}>
                    <span className="choose__us-icon"><i class={item.icon}></i></span>
                    <div>
                        <h4 className="choose__us-title">{item.title}</h4>
                        <p className="description">{item.desc}</p>
                     </div>
                </div>
                        ))
                    }
                </div>
             </div>
             <div className="about__img">
                <img src={aboutImage} alt="" />
             </div>
        </div>
    </div>
  </section>
}
 
export default About