import React from 'react'

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
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Solutions</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
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
