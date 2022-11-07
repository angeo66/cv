import React from 'react';
import ProjectList from '../components/competence/portfolio/ProjectList';
import NavBar from '../components/NavBar';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <NavBar />
            <ProjectList />
        </div>
    );
};

export default Portfolio;