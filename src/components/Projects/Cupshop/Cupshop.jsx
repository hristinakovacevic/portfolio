import React from "react";

import "./Cupshop.model.css";
import figma from "../../../assets/figma-cupshop.png";
import reactCup from "../../../assets/react-cupshop.png";

const Cupshop = () => {
  function openNew() {
    window.open(
      "https://www.figma.com/design/KAQTrVsP3QOHw1kBS7au0T/Cupshop?node-id=0-1&m=dev&t=1sn3RKQierwQWW2F-1"
    );
  }

  function openInNewWindowCup() {
    window.open("https://cupshop.vercel.app/");
  }
  return (
    <div className="container">
      <div className="content__container cupshop__container">
        <div className="content-wrap">
          <div className="img__container">
            <img
              src={figma}
              className="cupshop-img"
              alt="preview desktop cupshop app"
              onClick={openNew}
            />

            <img
              src={reactCup}
              className="cupshop-img"
              alt="cupshop app"
              onClick={openInNewWindowCup}
            />
          </div>
          <div className="text__container">
            <div>
              <h2>Project overview</h2>
              <p>
                The Cupshop app is an innovative web and mobile platform that
                connects cup manufacturers with collectors and enthusiasts. for
                those who cherish their beverage rituals from beautifully
                crafted cups.{" "}
              </p>
            </div>
            <div>
              <h2>Artistic Marketplace</h2>
              <p>
                Provides a space for users to sell their own custom-designed
                cups.
              </p>
            </div>
            <div>
              <h2>Visual design</h2>
              <p>
                Utilized a warm color palette and appiling image to create an
                inviting atmosphere that reflects the coffee shop experience.
              </p>
            </div>
            <div>
              <h2>Outcome</h2>
              <p>
                Feedback from users indicated increased interest in buying cups
                because this platform enables manufacturers and consumers to
                find everything in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cupshop;
