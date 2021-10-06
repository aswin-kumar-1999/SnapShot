import { Fragment, Component } from 'react';
import style from './form.module.css'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            findImage: ''
        }
    }

    blurHandler = (event) => {
        this.setState({ findImage: event.target.value });
    }
    getSearchValue = () => {
        this.props.search(this.state.findImage);
    }
    render() {
        return (
            <div className={style["search-btn"]}>
                <input type="text" onBlur={this.blurHandler} placeholder="Search" />
                <i class="fas fa-search btn" onClick={this.getSearchValue}></i>
            </div>
        )
    }
}

export default Form;