import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const Navbar = (props) => {
    return (
        <>
            {/* <nav className={`navbar navbar-expand-lg bg-body-secondary`}> */}
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark `}>
                <div className="container-fluid d-flex">
                    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                        <Link className="navbar-brand" to="/">
                            <img style={{borderRadius:100}} src="https://img.freepik.com/free-psd/isolated-hamburger-with-splash-ink-background_1409-3855.jpg?w=740&t=st=1701801024~exp=1701801624~hmac=0cbdad2315d3df229a5e5423595209f8a2ddf08a35ef1ae0f0510a99bba8551e" alt="logo" height="45" className="d-inline-block align-text-center"/>{props.title}
                        </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/products">{props.page1}</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/blogs">{props.page2}</Link>
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
    home: PropTypes.string.isRequired,
    page1: PropTypes.string.isRequired,
    page2: PropTypes.string.isRequired,
}

//  Set some Default propTypes 
Navbar.defaultProps = {
    title: "Set Title Here",
    home: "Home",
    page1: "Products",
    page2: "Blogs",
}

export default Navbar