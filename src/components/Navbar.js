import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">{props.contact}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

// To set propTypes (propTypes are used to declare the data as well as to set some mandatory props like website's Title, Contact Us, About Us etc.)
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
}

//  Set some Default propTypes 
Navbar.defaultProps = {
    title: "Set Title Here",
    about: "About",
    contact: "Contact",
    home: "Home"
}

export default Navbar