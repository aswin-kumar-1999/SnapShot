import { Fragment, Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            findImage: ''
        }
    }

    blurHandler = (event) => {
        this.setState({findImage:event.target.value});
    }
    getSearchValue=()=>{
        this.props.search(this.state.findImage);
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" onBlur={this.blurHandler} />
                    <i class="fas fa-search" onClick={this.getSearchValue}></i>
                </div>
            </Fragment>
          
        )
    }
}

export default Form;
