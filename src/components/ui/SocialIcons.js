import React, { Component } from "react";

class SocialIcons extends Component {
  state = {
    items: {
      github: {
        name: "github",
        link: "https://github.com/a-soliman"
      },
      linkedin: {
        name: "linkedin",
        link: "https://www.linkedin.com/in/ahmed-soliman/"
      },
      codepen: {
        name: "codepen",
        link: "https://codepen.io/ahmed-soliman/"
      }
    }
  };

  getIcon = item => {
    let icon = "";
    if (item.name === "github") icon = "fab fa-github";
    else if (item.name === "linkedin") icon = "fab fa-linkedin-in";
    else if (item.name === "codepen") icon = "fab fa-codepen";

    return icon;
  };

  render() {
    const socialItems = { ...this.state.items };
    let socialItemsList = [];
    for (let item in socialItems) socialItemsList.push(socialItems[item]);

    return (
      <ul className="social-container">
        {socialItemsList.map((item, i) => (
          <li className="social--item" key={i}>
            <a className="social--link" href={item.link} target="_blank">
              <i className={` social--icon ${this.getIcon(item)}`} />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default SocialIcons;
