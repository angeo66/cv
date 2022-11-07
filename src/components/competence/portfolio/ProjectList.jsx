import React, { Component } from 'react';
import { portfolioData } from '../../../data/portfolioData';
import Projects from './projects';

class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            project: portfolioData,
            radios: [
                { id: 1, value: "tout" },
                { id: 2, value: "react" },
                { id: 3, value: "html/css" },
                { id: 4, value: "php" }
            ],
            selectedRadio: "tout"
        }
        this.handleRadio = (e) => {
            let radio = e.target.value;
            this.setState({ selectedRadio: radio })
        }
    }

    render() {
        let { project, radios, selectedRadio } = this.state;
        return (
            <div className='portfolioContent'>
                <ul className='radioDisplay'>
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.ip}>
                                    <input type={'radio'} name={'name'} checked={
                                        radio.value === selectedRadio} value={radio.value} id={radio.value} onChange={this.handleRadio} />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='projects'>
                    {
                        project
                            .filter(item => item.languages.includes(selectedRadio))
                            .map(item => {
                                return (
                                    <Projects key={item.id} item={item} />
                                )
                            })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;
