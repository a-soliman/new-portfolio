import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  state = {
    navItems: {
      intro: {
        id: "intro",
        text: "Home"
      },
      about: {
        id: "about",
        text: "About"
      },
      resume: {
        id: "resume",
        text: "Resume"
      },
      skills: {
        id: "skills",
        text: "Skills"
      },
      portfolio: {
        id: "portfolio",
        text: "Portfolio"
      },
      contact: {
        id: "contact",
        text: "Contact"
      }
    }
  };

  generateNavItems = () => {
    const { navItems } = this.state;
    let navList = [];

    for (const item in navItems) navList.push(navItems[item]);

    return navList.map((item, i) => (
      <li className="nav--nav-item" key={i}>
        <Link className="nav--nav-item" to={`#${item.id}`}>
          <i className={`nav--icon ${this.getIcon(item)}`} />
        </Link>
      </li>
    ));
  };

  getIcon = ({ text }) => {
    let className = "";
    text = text.toLowerCase();

    if (text === "home") className = "fa fa-user";
    else if (text === "about") className = "fa fa-briefcase";
    else if (text === "resume") className = "fas fa-id-card";
    else if (text === "skills") className = "fas fa-cogs";
    else if (text === "portfolio") className = "fas fa-pencil-alt";
    else if (text === "contact") className = "fa fa-phone";

    return className;
  };

  render() {
    return (
      <div className="nav">
        <div className="nav--logo-container">
          <img
            className="nav--logo"
            src="/images/logo.png"
            width="58"
            alt="Ahmed Soiman"
          />
        </div>

        <ul className="nav--nav-items-container">{this.generateNavItems()}</ul>
      </div>
    );
  }
}

export default Navigation;
