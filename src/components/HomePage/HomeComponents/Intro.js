import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <div className="intro" id="intro">
        <div className="dark-overlay" />
        <div className="intro--video-container">
          <video autoPlay loop id="video-bg" muted className="intro--video">
            <source src="images/my-movie.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="intro--text-container">
          <h2 className="title">Ahmed Soliman</h2>
          <h4 className="subhead">SR. Full Stack Software Engineer.</h4>
          <p className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. labore
            et dolore magna aliqua.labore et dolore magna aliqua. <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    );
  }
}

export default Intro;
