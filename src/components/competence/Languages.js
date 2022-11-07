import React, { Component } from 'react';
import ProgessBar from './ProgessBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "JavaScripts", xp: 1.9 },
            { id: 2, value: "Php", xp: 1.3 },
            { id: 3, value: "Html/css", xp: 1.9 },
            { id: 4, value: "Python", xp: 1.2 },
            { id: 5, value: "C++", xp: 1.1 }
        ],
        framworks: [
            { id: 1, value: "React", xp: 1.8 },
            { id: 2, value: "Bootstrap", xp: 2 },
            { id: 3, value: "TailWind", xp: 1.5 },
            { id: 4, value: "Express", xp: 1.2 }
        ]
    }
    render() {
        let { languages, framworks } = this.state;
        return (
            <div className='languages'>
                <div className='languagesFramworks'>
                    <ProgessBar languages={languages} className="languagesDisplay" title="languages" />
                    <ProgessBar languages={framworks} className="framworksDisplay" title="framworks & bibliothèques" />
                </div>
            </div>
        );
    }
}

export default Languages;
