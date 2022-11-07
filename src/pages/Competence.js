import React from 'react';
import AutresCompetemces from '../components/competence/AutresCompetemces';
import Experience from '../components/competence/Experience';
import Hobbies from '../components/competence/Hobbies';
import Languages from '../components/competence/Languages';
import NavBar from '../components/NavBar';

const Competence = () => {
    return (
        <div className='competence'>
            <NavBar />
            <div className='competenceContent'>
                <Languages />
                <Experience />
                <AutresCompetemces />
                <Hobbies />
            </div>
        </div>
    );
};

export default Competence;