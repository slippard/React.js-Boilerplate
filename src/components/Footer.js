import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
        <h2 className="footer-content">{this.props.footerMsg}</h2>
      </>
    )
  }
}
