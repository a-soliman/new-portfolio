import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="about ">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="about--image-container">
                <img src="https://via.placeholder.com/500" alt="Ahmed" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about--text-container">
                <h2 className="med-title">Ahmed Soliman</h2>
                <h4 className="med-subhead">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
                <p className="grey">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam fuga, quod tempora vero expedita sequi facere dolorum
                  aliquid omnis labore natus, quas quasi quisquam excepturi esse
                  accusantium amet maiores blanditiis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
