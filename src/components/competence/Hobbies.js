import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
           <h3>Intérêts</h3>
           <ul>
            <li className='hobby'>
                <i className='fas fa-running'></i>
                <span>Sports</span>
            </li>
            <li className='hobby'>
                <i className='fas fa-hiking'></i>
                <span>Randonnés</span>
            </li>
            <li className='hobby'>
                <i className='fas fa-seedling'></i>
                <span>Permaculture</span>
            </li>
            <li className='hobby'>
                <i className='fa fa-bitcoin'></i>
                <span>Crypto-monnaies</span>
            </li>
            <li className='hobby'>
                <i className='fa fa-rocket'></i>
                <span>Espace</span>
            </li>
           </ul>
        </div>
    );
};

export default Hobbies;