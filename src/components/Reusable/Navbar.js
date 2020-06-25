import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaHome, FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: [
      {
        id: 1,
        name: "Home",
        link: "/",
        class: "nav-link text-white mt-1",
      },
      {
        id: 2,
        name: "About",
        link: "/about",
        class: "nav-link text-white mt-1",
      },
      {
        id: 3,
        name: "Contact",
        link: "/contact",
        class: "nav-link text-white mt-1",
      },
      {
        id: 4,
        name: <FaCartArrowDown className="cart-icon" />,
        link: "/cart",
        class: "nav-link text-white",
      },
    ],
  }

  menuToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        })
  }

  render() {
    const { menus } = this.state
    return (
      <nav className="navbar navbar-expand-sm bg-theme text-white">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} alt="logo" width="50px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.menuToggler}
        >
          <span className="text-white">menu</span>
        </button>
        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {menus.map(menu => (
              <li className="nav-item" key={menu.id}>
                <Link to={menu.link} className={menu.class}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}
