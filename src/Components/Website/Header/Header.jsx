import React, { useState } from "react";
import { NavLink, Link } from 'react-router'
import Logo from '../../../assets/Image/logo.png'
const Header = () => {
    const [isMobileNavActive, setMobileNavActive] = useState(false);
    const [dropdownStates, setDropdownStates] = useState({});

    const toggleMobileNav = () => {
        setMobileNavActive(!isMobileNavActive);
    };

    const toggleDropdown = (dropdownName) => {
        setDropdownStates((prevState) => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName],
        }));
    };

    return (
        <header
            id="header"
            className={`header d-flex align-items-center fixed-top ${isMobileNavActive ? "mobile-nav-active" : ""
                }`}
        >
            <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <div className="">
                    <Link
                        to="/"
                        className="logo d-flex align-items-center me-auto me-xl-0"
                    >
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.png" alt=""> */}
                        <img src={Logo} alt="Logo" />
                        <h1 className="sitename">HCP</h1>
                    </Link>
                </div>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <NavLink to="/" onClick={toggleMobileNav}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={toggleMobileNav}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={toggleMobileNav}>Contact</NavLink>
                        </li>
                        <li
                            className={`dropdown ${dropdownStates["product"] ? "active" : ""
                                }`}
                        >
                            <Link
                                to="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleDropdown("product");
                                }}
                            >
                                <span>Product</span>
                                {/* Toggle between "open" and "close" icon */}
                                <i
                                    className={`bi ${dropdownStates["product"]
                                        ? "bi-chevron-up"
                                        : "bi-chevron-down"
                                        } toggle-dropdown`}
                                />
                            </Link>
                            <ul
                                className={`dropdown-menu ${dropdownStates["product"] ? "dropdown-active" : ""
                                    }`}
                            >
                                <li>
                                    <NavLink to="/newac" onClick={toggleMobileNav}>New AC</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/acparts" onClick={toggleMobileNav}>AC Parts</NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* <li
                            className={`dropdown ${
                                dropdownStates["part"] ? "active" : ""
                            }`}
                        >
                            <a
                                to="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleDropdown("part");
                                }}
                            >
                                <span>Part</span>
                                
                                <i
                                    className={`bi ${
                                        dropdownStates["part"]
                                            ? "bi-chevron-up"
                                            : "bi-chevron-down"
                                    } toggle-dropdown`}
                                />
                            </a>
                            <ul
                                className={`dropdown-menu ${
                                    dropdownStates["part"] ? "dropdown-active" : ""
                                }`}
                            >
                                <li>
                                    <a to="#">New Part</a>
                                </li>
                                <li>
                                    <a to="#">Old Part</a>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                    <i
                        className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? "bi-x" : "bi-list"}`}
                        onClick={toggleMobileNav}
                    />
                </nav>
                <div className="d-flex align-items-center">
                    <Link className="pe-2" to="#">
                        <i className="bi bi-bag-dash fs-2 myicon"></i>
                    </Link>
                    <Link className="ps-2" to="#">
                        <i className="bi bi-person-circle fs-2 myicon"></i>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
