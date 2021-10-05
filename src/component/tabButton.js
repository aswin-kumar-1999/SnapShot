import { Component } from 'react';

class TabButton extends Component {
    
    getSearchValue = () => {
        this.props.onSearch(this.props.tab);
    }
    render() {
        return (
            <div onClick={this.getSearchValue}>
                {this.props.tab}
            </div>
        )
    }
}

export default TabButton;