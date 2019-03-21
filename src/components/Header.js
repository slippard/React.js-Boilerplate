import React, { Component } from 'react'

export default class Header extends Component {
    
    render() {
        return (
        <>
            <h2 className="header-content">{this.props.headerMsg}</h2>
        </>
        )
    }
}
