
import React from 'react'
import '../../../styles/contact.css'
import contactImage from '../../../images/realimage.svg'

const Contact = () => {
  return <section id="newsletter">
    <div className="container">
        <div className="newsletter__wrapper">
            <div className="newsletter__content">
                <h6 className="subtitle">Let's work</h6>
                <h2 className="contact__header">Explore the <span className="highlight">hidden ideas {" "}</span>and get in contact today!</h2>
                <p className="description about__content_desc">Come and join our creators' discord server to connect with us for any inquiries or issues you may have. If you have any business-related questions, please create a ticket after joining the server, and a member of our agency team will be available to assist you promptly.</p>
                <a href= "https://discord.com/channels/1126240702733488149/1126241725023789197" target="_blank">
                <div className="newsletter__button"> 
            <button className="secondary__btn"><span className="discord__icon"><i class="ri-discord-line"></i></span>{"   "}Contact Us</button>
            </div>
            </a>
            </div>

            <div className="contact__img">
                <img src={contactImage} alt="" />
            </div>
        </div>
    </div>
  </section>
}

export default Contact
