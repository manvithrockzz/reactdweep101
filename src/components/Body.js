import React from "react";
import Image from "./dweep io 1.png";
import "./Body.css";
// import myImage from "./dweep io 1.png"

export default function Body() {
  return (
    <>
      <div className="container" style={{ background: "#FFCD9E" }}>
        <div className="heading">
          <h1 style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
            An inspiring design delivered to
            <br />
            your inbox every morning
          </h1>
          <p className="message">
            Our team scouts the internet for the best designs, <br />
            illustrations and art and delivers a truly inspiring
            <br />
            one every day to your inbox
          </p>
          <p className="Show" style={{ fontWeight: "bold", marginTop: "0%" }}>
            Show me how it looks
          </p>
          <div>
            <form className="form">
              <input type="text" name="" placeholder="Your e-mail address" />
              <input type="submit" name="" value="Register Now" />
            </form>
            <p className="bottomtext" style={{ color: "#FFFFFF" }}>
              Free - No Spam - No Data Sharing
            </p>
          </div>
        </div>
        <div className="img">
        <img className="image" alt="" src={Image} />
      </div>

      </div>

      
    </>
  );
}
