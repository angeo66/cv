import React from 'react';
import outilsData from '../data/dataOutils.json';
import NavBar from '../components/NavBar';

const PortfolioPage = () => {
  const { outils } = outilsData;

  const imageContainerStyle = {
    width: '30%',
    '@media (min-width: 640px)': {
      width: '33.33%',
    },
    '@media (min-width: 768px)': {
      width: '25%',
    },
    '@media (min-width: 1024px)': {
      width: '16.666%',
    },
    padding: '10px',
  };
   const imageStyleImages = {
    display: 'block', 
    width: '100%', 
    height: '152px',
    '@media (max-width: 640px)': {
      height: '100%',
     backgroundColor: 'red',
    },
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#F6F8FA',

  };

  const nameOverlayStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: 'white',
    textAlign: 'center',
    borderRadius: '0 0 8px 8px',

  };

  return (
    <div className='portfolio'>
    <NavBar />
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {outils.map((outil, index) => (
        <div key={index} style={imageContainerStyle}>
          <div style={{ position: 'relative' }}>
            <div style={imageStyle}>
              <img src={outil.image} alt={outil.nom} style={imageStyleImages} />
            </div><br/><br/>
            <div style={nameOverlayStyle}>{outil.nom}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PortfolioPage;