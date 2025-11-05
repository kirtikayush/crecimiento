import React from "react";
import "./About.css";
import { FaBullseye, FaLightbulb, FaBalanceScale } from "react-icons/fa";

const About = () => {
  const cards = [
    {
      title: "Strategic Focus",
      text: "We strive to empower organizations with data-driven insights, helping them translate challenges into measurable growth and sustainable success.",
      icon: <FaBullseye />,
    },
    {
      title: "Industry Versatility",
      text: "Serving diverse industries with customized approaches that deliver measurable results.",
      icon: <FaLightbulb />,
    },
    {
      title: "Evidence-Based",
      text: "Delivering data-driven insights and program management excellence across all engagements.",
      icon: <FaBalanceScale />,
    },
  ];

  return (
    <div className="about-container">
      <h1>Who We Are?</h1>

      <div className="about-content">
        <h2>Our Foundation</h2>
        <p>
          Founded with a clear vision to drive measurable business success,
          Crecimiento Consulting Services combines deep industry expertise with
          innovative thinking. We believe every organization has untapped
          potential waiting to be unlocked through strategic guidance and expert
          implementation.
        </p>
        <p>
          Our commitment extends beyond traditional consulting—we become
          invested partners in your success story, bringing evidence-based
          insights and program management excellence to every engagement.
        </p>
      </div>

      <div className="about-detail-container">
        {cards.map((card, i) => (
          <div className="about-details" key={i}>
            <h3>
              {card.title} <span className="about-icon">{card.icon}</span>
            </h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
