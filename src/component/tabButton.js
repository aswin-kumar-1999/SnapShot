import { Component } from 'react';

class TabButton extends Component {

    constructor(props) {
        super();

        console.log("dsa")
    }
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