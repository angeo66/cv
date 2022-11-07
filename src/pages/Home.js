import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div className='home'>
            <NavBar />
            <div className="homeContent">
                <div className='content'>
                    <h1>Ange Préval JOHNSON</h1>
                    <h2>Développeur Web et Mobile Full-stack <br />(React & React-native)</h2>
                    <div className='pdf'>
                        <a href='./../medias/CV.pdf' download="CV Ange">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;