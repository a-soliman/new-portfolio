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
        <a
          className="nav--nav-item"
          href={`/#${item.id}`}
          onMouseEnter={this.onHoverHandler}
          onMouseLeave={this.onMouseOutHandler}
        >
          <i className={`nav--icon ${this.getIcon(item)}`} />
          <div className="nav--off-set">{item.text}</div>
        </a>
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

  onHoverHandler = event => {
    let element = this.getNavElement(event);
    element.classList.add("nav--active");

    let offSetDiv = Array.from(element.children)[1];
    offSetDiv.style = "width: 106px";
  };

  onMouseOutHandler = event => {
    let element = this.getNavElement(event);
    element.classList.remove("nav--active");
    let offSetDiv = Array.from(element.children)[1];
    offSetDiv.style = "width: 0";
  };

  getNavElement = event => {
    let item;
    let element = event.target;

    if (element.classList.contains("nav--nav-item")) item = element;
    else {
      while (element.parentNode) {
        let parent = element.parentNode;

        if (parent.classList.contains("nav--nav-item")) {
          item = parent;
          break;
        } else {
          element = parent;
        }
      }
    }
    return item;
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
