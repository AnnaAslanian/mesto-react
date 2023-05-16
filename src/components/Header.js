import React from "react"
import logo from "../images/Vector.svg"

function Header () {
    return (
        <div className="header">
        <img src={logo} alt="Логотип" className="header__logo" />
      </div>
    )
}

export default Header;