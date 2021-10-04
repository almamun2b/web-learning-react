import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header ">
            <nav className="bg-primary">
                <Navbar.Brand><h1 className='text-white bg-dark p-3'>Learn Complete Web Development with Us</h1></Navbar.Brand>

                <NavLink to="/home">Home</NavLink>
                <NavLink to="/allcourses">Courses</NavLink>
                <NavLink to="/instructors">Our Instructors</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;