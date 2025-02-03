import React from "react";
// import "./PricingCard.css";
// import One$SVG from "./SVG/1 $.svg";
// import Five$SVG from "./SVG/5 $.svg";
// import Twenty_five$SVG from "./SVG/25 $.svg";
// import PolygonSVG from "./SVG/Polygon 6.svg";

const PricingCard = () => {
  return (
    <div className="pricing-container">
      {/* Карточка 1 */}
      <div className="pricing-card">
        {/* <div className="one-dollar">
          <img src={One$SVG} alt="one$" />
        </div> */}
        <h2>Start</h2>
        <p>10 minutes</p>
        
        <ul>
          <li>Perfect for quick practice sessions.</li>
          <li>Ideal for beginners who want to dip their toes into English conversation.</li>
          <li>Get personalized feedback to improve your skills.</li>
        </ul>
        <button className="btn">Buy</button>
      </div>

      {/* Карточка 2 */}
      <div className="pricing-card featured">
        {/* <div className="one-dollar">
          <img src={Twenty_five$SVG} alt="five$" />
        </div> */}
        <h2>Old friend</h2>
        <p>1 month</p>
        <ul>
          <li>Unlimited access</li>
          <li>Deep conversations</li>
          <li>Better learning</li>
        </ul>
        <button className="btn">Buy</button>
        <img src={PolygonSVG} alt="figures" class="featured-figures" />
      </div>

      {/* Карточка 3 */}
      <div className="pricing-card">
      {/* <div className="one-dollar">
          <img src={Five$SVG} alt="twenty_five$" />
        </div> */}
        <h2>Introduction</h2>
        <p>60 minutes</p>
        <ul>
          <li>Dive deep with extended practice sessions.</li>
          <li>Great for intermediate and advanced learners looking to refine their skills.</li>
          <li>Receive detailed feedback and language tips after each session.</li>
        </ul>
        <button className="btn">Buy</button>
      </div>
    </div>
  );
};

export default PricingCard;
