import React, { Component } from 'react';
import ProgessBar from './ProgessBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Html/css", xp: 1.9 },
            { id: 1, value: "JavaScripts", xp: 1.9 },
            { id: 3, value: "Php", xp: 1.3 },
            { id: 4, value: "Python", xp: 1.2 },
            { id: 5, value: "C++", xp: 1.1 }
        ],
        framworks: [
            { id: 1, value: "React Js", xp: 1.8 },
            { id: 2, value: "Next Js", xp: 1.1 },
            { id: 3, value: "TailWind css", xp: 1.5 },
            { id: 4, value: "Express Js", xp: 1.2 },
            // { id: 5, value: "Bootstrap", xp: 2 },
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
