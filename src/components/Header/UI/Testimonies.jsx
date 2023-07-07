
import React from 'react'
import '/Users/kevindaliri/digital-agency/src/styles/testimonies.css'

import Slider from 'react-slick'

import avatarImage from "/Users/kevindaliri/digital-agency/src/images/ben.png"
import rando1 from "/Users/kevindaliri/digital-agency/src/images/rando.jpg"
import rando2 from "/Users/kevindaliri/digital-agency/src/images/rando2.jpg"

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToScroll: true
}

const Testimonies = () => {
  return <section id='testimony'>
    <div className="container">
        <div className="slider__content-top">
            <h6 className="subtitle">Reviews</h6>
            <h2>Trusted by more than {" "}
                <span className="highlight">5,000 customers</span>
                </h2>
        </div>
        <div className="slider__wrapper">
        <Slider {...settings}>
        <div className="slider__item">
            <p className="description"> "I had the privilege of working closely with Kevin, and I can't emphasize enough how transformative it was for my business. His unparalleled expertise and unwavering dedication led to outstanding results. I wholeheartedly recommend Kevin for his exceptional support, guidance, and commitment to success"</p>
            <div className="customer__details">
                <div className="customer__img">
                    <img src={avatarImage} alt="" />
                </div>
                <div>
                <h5 className="customer__name">Ben Kelly</h5>
                <p className="description">Financial Analyst</p>
                </div>
            </div>
        </div>

        <div className="slider__item">
            <p className="description">"Working closely with their team was a game-changer for my business. Their expertise and unwavering dedication led to exceptional results. I am immensely grateful for their support, guidance, and commitment to achieving remarkable success. I highly recommend their services."</p>
            <div className="customer__details">
                <div className="customer__img">
                    <img src={rando1} alt="" />
                </div>
                <div>
                <h5 className="customer__name">Alexander Davis</h5>
                <p className="description">Operations Manager</p>
                </div>
            </div>
        </div>

        <div className="slider__item">
            <p className="description">"My collaboration with their team was a revelation. Their unwavering commitment, tailored approach, and profound expertise had an extraordinary impact on my business growth. I wholeheartedly endorse their exceptional services for remarkable results and an unparalleled client experience."</p>
            <div className="customer__details">
                <div className="customer__img">
                    <img src={rando2} alt="" />
                </div>
                <div>
                <h5 className="customer__name">Nathan Thompson</h5>
                <p className="description">Product Manager</p>
                </div>
            </div>
        </div>
    </Slider>
        </div>
    </div>
  </section>
}

export default Testimonies