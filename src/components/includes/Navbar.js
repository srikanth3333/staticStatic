import React from 'react';
import {Link,NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light position-sticky">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Website</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Solutions
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="/services">Services</Link></li>
                                <li><Link class="dropdown-item" to="/otherServices">Services 2</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pricing
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="/price">Prices</Link></li>
                                <li><Link class="dropdown-item" to="/otherprice">Prices 2</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact activeClassName="active" to="/blog">Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="#">Login</Link>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/contact-us">Contact Us</NavLink>
                        </li>
                        
                    </ul>
                </div>
                <div>
                    <button className="btn btn-danger">Get Started</button>
                </div>
            </div>
        </nav>  
        </>
    )
}

export default Navbar
