import React, { Component } from 'react';
import style from './picture.module.css';

class picture extends Component {
    render() {
        return (
            <div className={style["image-container"]}>
                <img alt="" src={this.props.srcPath} width="250px" height="250px"></img>
            </div>
        )
    }
}

export default picture
