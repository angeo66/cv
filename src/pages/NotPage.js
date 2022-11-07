import React from 'react';
import {Link} from 'react-router-dom'

const NotPage = () => {
    return (
        <div className='notPage'>
            <div className='notPageContent'>
                <h3>Désolé cette page n'existe pas !</h3>
                <br/>
                <Link to={'/'}>
                    <i className='fa fa-home'></i>
                    <span>Acceuil</span>
                </Link>
            </div>
        </div>
    );
};

export default NotPage;