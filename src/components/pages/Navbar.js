import React from 'react';

const Navbar = () => {
    return (
        <div className="container-fluid bg-white">
            <nav className="navbar fixed-top navbar-expand-md navbar-dark d-flex justify-content-center">
                <div>
                    <a href="#" className="navbar-brand text-white ms-5">
                        <span className="fs-1 fw-bold">AuraFest</span>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
