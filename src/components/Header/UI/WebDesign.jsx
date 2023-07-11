import React, { useState } from 'react';
import '../../../styles/webdesign.css';
import team2 from '../../../images/heeee.jpg';
import team3 from '../../../images/cookbooklogo.png';
import budget from '../../../images/budget.jpg';
import type1 from '../../../images/Type1.png';
import jerry1 from '../../../images/jerry1.jpeg';
import tissi from '../../../images/tissi.jpg';
import boston from '../../../images/boston.jpg';
import barb from '../../../images/barb.png';

const teamData = [
  {
    image: budget,
    title: "Budget Buddy",
    description: "UX/UI Design",
    category: "Web Design",
    link: "https://www.figma.com/file/oFmZLVmyLg673qE2ZkbMzy/FINAL-PROJECT---kevin-daliri?type=design&node-id=0%3A1&mode=design&t=iTNgnZGC7Srou7EC-1"
  },
  {
    image: team3,
    title: "Cookbook",
    description: "UX/UI Design",
    category: "Web Design",
    link: "https://www.figma.com/file/FM2ekiDuqMBaCxBs8NilMO/High-Fidelity-Prototype?type=design&node-id=17%3A4&mode=design&t=QPcSRYZgbFzEEXkK-1"
  },
  {
    image: team2,
    title: "minimum",
    description: "UX/UI Design",
    category: "Web Design",
    link: "https://www.figma.com/file/KF8LDzBb8LYQh2MKHRwS0n/FINAL-MINIMUM?type=design&node-id=0%3A1&mode=design&t=VJHfrgNXGsoOWZtz-1"
  },
  {
    image: jerry1,
    title: "BEAN RUNS",
    description: "Graphic Design",
    category: "Graphic Design",
    link: "https://www.instagram.com/gele.culture/"
  },
  {
    image: tissi,
    title: "Rosmarie Tissi",
    description: "Graphic Design",
    category: "Graphic Design",
    link: "https://www.kevindaliri.com/copy-of-budget-buddy"
  },
  {
    image: boston,
    title: "street art - boston",
    description: "Graphic Design",
    category: "Graphic Design",
    link: "https://www.kevindaliri.com/copy-of-music"
  },
  {
    image: barb,
    title: "BARBARA KRUGER",
    description: "Graphic Design",
    category: "Graphic Design",
    link: "https://www.instagram.com/daliriart/"
  },
  {
    image: type1,
    title: "Type 1",
    description: "UX/UI Design",
    category: "Web Design",
    link: "https://www.linkedin.com/in/laksh-tyagi-78a046241/"
  }
];

const ProjectItem = React.memo(({ item }) => (
  <div className="project__item">
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <div className="project__img">
        <img src={item.image} alt="" />
        <div className="project__details">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    </a>
  </div>
));

const WebDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Design");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = teamData.filter((item) => item.category === selectedCategory);

  return (
    <section id="web">
      <div className="container">
        <div className="project__content">
          <h6 className="subtitle">Our Work</h6>
          <h2>
            Creating real solutions <span className="highlight">for real people</span>
          </h2>
          <div className="choose__buttons">
            <button
              id="web__button"
              className={selectedCategory === "Web Design" ? "active" : ""}
              onClick={() => handleCategoryChange("Web Design")}
            >
              Web Design
            </button>
            <button
              id="graphic__button"
              className={selectedCategory === "Graphic Design" ? "active" : ""}
              onClick={() => handleCategoryChange("Graphic Design")}
            >
              Graphic Design
            </button>
            <button
              id="dev__button"
              className={selectedCategory === "App Development" ? "active" : ""}
              onClick={() => handleCategoryChange("App Development")}
            >
              App Development
            </button>
          </div>
        </div>
        <div className="project__wrapper">
          {filteredData.map((item, index) => (
            <ProjectItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesign;
