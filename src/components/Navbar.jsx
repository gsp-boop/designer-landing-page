import React from "react";
import "../styles/navbar.css";
import { NAV_BAR } from "../js/nav";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
class Navbar extends React.Component {
  state = { active: false };

  hamburgerClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { active } = this.state;
    return (
      <nav>
        <div className="logo-container">
          <img src="/lalyssite_assets 2/Logo.png" alt="" srcset="" />
        </div>
        <ul className={active ? "nav-links active" : "nav-links"}>
          {
          NAV_BAR.map((item) => (
            <li className={item.class}>
              <a href={item.navigateTo}>{item.name}</a>
            </li>
          ))
          }

        </ul>
        <div onClick={this.hamburgerClick} className="hamburger">
          {active ? <GrClose /> : <GiHamburgerMenu />}
        </div>
      </nav>
    );
  }
}

export default Navbar;
