
import React from 'react';

const Experience = () => {
    let hauteur = window.innerHeight
    let largeur = window.innerWidth
    return (
        <div className='experience'>
            <h3>Expérience</h3>
            <div className='exp-1'>
                <h4>Stagiaire Web Diffusion</h4>
                <h5 style={{ color: "black" }}>2020-2021</h5>
                <p>
                    {/* {hauteur} et {largeur} */}
                    Travailler avec les développeurs senior pour gérer des
                    projets complexes de conception, de grandes entreprises
                    pour les clients.
                </p>
            </div>
            <div className='exp-2'>
                <h4>Stage Concepts Traning & Consultancy</h4>
                <h5 style={{ color: "black" }}>2021-2022</h5>
                <p>
                Collaborer avec des designers, programmeurs pour
                créer des interfaces propres et simples, les
                interactions intuitives et expériences. <br />
                Développer des concepts de projet et maintenir flux
                de travail optimal.
                </p>
            </div>
        </div>
    );
};

export default Experience;