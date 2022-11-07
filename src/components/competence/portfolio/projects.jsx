import React, { Component } from 'react'

export default class projects extends Component {

    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo })
    }
    render() {
        let { id, name, info, picture, languages, languagesIcons, source } = this.props.item;
        return (
            <div className='project'>
                <div className='icons'>
                    {
                        languagesIcons.map(icon => <i className={icon} key={icon}></i>)
                    }
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="Erreur de chargement d'image " onClick={this.handleInfo} />
                <span className='infos' onClick={this.handleInfo}><i className='fas fa-plus-circle'></i></span>

                {
                    this.state.showInfo && (
                        <span className='showInfo'>
                            <div className='infosContent'>
                                <div className='head'><h2>{name}</h2>
                                    <div className='sourceCode'><a href={source ? source : "#"} className="button" target={source ? '_blank' : ''} rel="noopener noreferrer">
                                        {source ? "Site Web" : "Code source"}
                                    </a></div>
                                </div>

                                <p className='tex'>{info}</p>

                                <div className='return button' onClick={this.handleInfo}>
                                    Retourner sur la page
                                </div>
                            </div>
                        </span>
                    )
                }
            </div>
        )
    }
}
