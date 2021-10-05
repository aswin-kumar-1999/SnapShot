import React, { Component } from 'react'

class picture extends Component {
    render() {
        return <img alt="" src={this.props.srcPath} width="300px" height="300px"></img>
    }
}

export default picture
