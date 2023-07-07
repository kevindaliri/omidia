
import React from 'react'
import '../../../styles/team.css'
import team1 from '/Users/kevindaliri/digital-agency/src/images/kevin.png'
import team2 from '/Users/kevindaliri/digital-agency/src/images/Potrait.jpeg'
import team3 from '/Users/kevindaliri/digital-agency/src/images/jerry.png'

const teamData = [
    {
        image: team2,
        title: "Laksh Tyagi",
        description: "Product Designer",
        link1: "https://www.linkedin.com/in/laksh-tyagi-78a046241/",
        link2: "https://twitter.com/Laksh_Tyagi",
        icon2: "ri-twitter-line"
    },

        {
        image: team1,
        title: "Kevin Daliri",
        description: "Founder & Product Manager",
        link1: "https://www.linkedin.com/in/kevindaliri/",
        link2: "https://www.kevindaliri.com/",
        icon2: "ri-user-line"
    },

    {
        image: team3,
        title: "Jerry Wu",
        description: "Front-end & Web3 Developer, Graphic Designer",
        link1: "https://www.linkedin.com/in/jerry-wu-b811a5207/",
        link2: "https://www.instagram.com/weiwu2000/",
        icon2: "ri-instagram-line"
    },
]

const Team = () => {
  return <section id='our__team'>
    <div className="container">
        <div className="team__content">
            <h6 className="subtitle">Our Team</h6>
            <h2>Meet with <span className="highlight">our team</span></h2>
        </div>
        <div className="team__wrapper">
                {
                    teamData.map((item, index) => (

                        <div className="team__item" key={index}>
                            <div className="team__img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="team__details">
                                <h4>{item.title}</h4>
                                <p className="description">{item.description}</p>
            
                                <div className="team__member-social">
                                    <span><a href={item.link1} target="_blank"><i class="ri-linkedin-line"></i></a></span>
                                    <span><a href={item.link2} target="_blank"><i class={item.icon2}></i></a></span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
    </div>
  </section> 
}

export default Team