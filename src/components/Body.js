import React, { Component } from 'react'

export default class Body extends Component {

    render() {
        return (
            <>
                <h2 className="body-content">{this.props.bodyMsg}</h2>
            </>
        )
    }
}
