import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src='./medias/ange.jpg' width={90} height={100} alt='profil-pictures' />
                    <h3>Ange Préval</h3>
                </div>
            </div>
            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink to={'/'} className={(nav) => (nav.isActive ? "active" : "")}>
                            <i className='fa fa-home'></i>
                            <span>Acceuil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/competence'} className={(nav) => (nav.isActive ? "active" : "")}>
                            <i className='fas fa-mountain'></i>
                            <span>Compétence</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/portfolio'} className={(nav) => (nav.isActive ? "active" : "")}>
                            <i className='fa fa-image'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'} className={(nav) => (nav.isActive ? "active" : "")}>
                            <i className='fa fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='socialNetwork'>
                <ul>
                    <li><a href='#https://www.google.com' target={''} rel="noopener noreferrer">
                        <i className='fa fa-linkedin'></i>
                    </a></li>
                    <li><a href='#https://www.google.com' target={''} rel="noopener noreferrer">
                        <i className='fa fa-github'></i>
                    </a></li>
                    <li><a href='#https://www.google.com' target={''} rel="noopener noreferrer">
                        <i className='fa fa-twitter'></i>
                    </a></li>
                    <li><a href='#https://www.google.com' target={''} rel="noopener noreferrer">
                        <i className='fa fa-facebook'></i>
                    </a></li>
                    <li><a href='#https://www.google.com' target={''} rel="noopener noreferrer">
                        <i className='fa fa-codepen'></i>
                    </a></li>
                </ul>
                <div className='signature'>
                    <p>Ange - 2022</p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;