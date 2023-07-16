import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from '../redux/slices/modeSlice';

const Header = () => {
    const { darkMode } = useSelector((store) => store.mode);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleMode());
    };
    console.log('Mode:', darkMode); 
    return (
        <header>
            <h1 className={`${darkMode === 'dark' ? 'text-darkMain':'text-lightMain' }`}>Luis Sanchez</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio" className={`${darkMode === 'dark' ? 'text-darkMain':'text-lightMain' }`}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                        <button onClick={handleClick} className={`${darkMode === 'dark' ? 'text-darkMain':'text-lightMain' }`}>
                            {darkMode === 'light' ? 'dark' : 'light'}
                        </button>
                    </li>
                </ul>

            </nav>
        </header>
    );
    }

export default Header;