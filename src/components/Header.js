import React from "react";
import VideoSVG from "./SVG/picture.svg";
import './Header.css'; // Импорт файла стилей

const Header = () => {
  return (
    <div className="header-container">
      <div className="video">
        <img src={VideoSVG} alt="Video" />
        <div className="overlay"></div> {/* Затемнение изображения */}
        <div className="content">
          <h1>Welcome to Time to <br />Talk!</h1>
          <p>
            Meet Jim - your personal companion who’s always ready to chat on any topic, anytime. <br />
            You can talk to him just like with a close friend, and he will help in crafting your thoughts <br />
            and sentences more accurately.
          </p>
          <div className="buttons">
            <button className="btn primary">Try for Free &#8594;</button>
            <button className="btn secondary">Video Tour</button>
          </div>
        </div>
      </div>
      <div className="section-title">
        <h2>Choose Your Plan</h2>
      </div>
    </div>
  );
};

export default Header;
