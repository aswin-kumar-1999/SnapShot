import { Component } from 'react';
import style from './tabButton.module.css';

class TabButton extends Component {
    
    getSearchValue = () => {
        this.props.onSearch(this.props.tab);
    }
    render() {
        return (
            <div className={style.btn} onClick={this.getSearchValue}>
                {this.props.tab}
            </div>
        )
    }
}

export default TabButton;