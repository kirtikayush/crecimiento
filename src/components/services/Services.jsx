import React from "react";
import "./Services.css";
import {
  FaChartLine,
  FaSearchDollar,
  FaCogs,
  FaExchangeAlt,
} from "react-icons/fa";

const Services = ({ id }) => {
  const services = [
    {
      title: "Business Strategy Development",
      text: "Transform your vision into actionable strategic plans with clear milestones, resource requirements, and success metrics. We align organizational capabilities with market opportunities to create roadmaps for sustainable competitive advantage.",
      icon: <FaChartLine />,
    },
    {
      title: "Market Research & Competitive Analysis",
      text: "Gain deep understanding of your competitive landscape through comprehensive research methodologies. We analyze market trends, customer behaviors, and competitor strategies to identify white space opportunities and inform strategic positioning.",
      icon: <FaSearchDollar />,
    },
    {
      title: "Operational Efficiency Consulting",
      text: "Streamline processes, eliminate waste, and enhance productivity to drive profitability. Our operational assessments identify bottlenecks and implement solutions that improve efficiency while maintaining quality and customer satisfaction.",
      icon: <FaCogs />,
    },
    {
      title: "Change Management & Implementation",
      text: "Navigate organizational transitions smoothly with structured change management frameworks. We provide implementation support that ensures adoption, minimizes disruption, and accelerates time-to-value for strategic initiatives.",
      icon: <FaExchangeAlt />,
    },

    // {
    //   title: "",
    //   text: "",
    //   icon: "",
    // },
    // {
    //   title: "",
    //   text: "",
    //   icon: "",
    // },
    // {
    //   title: "",
    //   text: "",
    //   icon: "",
    // },
    // {
    //   title: "",
    //   text: "",
    //   icon: "",
    // },
  ];
  return (
    <services id={id} className="services-container">
      <div className="services-main">
        <h1>Our Services</h1>
        <p>
          Crecimiento delivers end-to-end consulting services that address every
          phase of your business journey—from initial strategy development
          through implementation and optimization. Our comprehensive approach
          ensures continuity and alignment across all initiatives.
        </p>
        <ul className="services-list">
          {services.map((item, index) => (
            <li key={index} className="services-item">
              <h4>
                {item.title} <span className="services-icon">{item.icon}</span>
              </h4>

              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </services>
  );
};

export default Services;
