import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="about--image-container">Image</div>
            </div>
            <div className="col-md-6">
              <div className="about--text-container">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam fuga, quod tempora vero expedita sequi facere dolorum
                  aliquid omnis labore natus, quas quasi quisquam excepturi esse
                  accusantium amet maiores blanditiis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
