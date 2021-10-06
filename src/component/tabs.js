import { Fragment, Component } from 'react';
import TabButton from './tabButton';
import style from './tabs.module.css';

class Tabs extends Component {
    constructor() {
        super();
        this.state = {
            findImage: ''
        }
        this.tags = ["Mountain", "Beach", "Birds", "Food"];

    }


    render() {
        return (
            <div className={style["tab-container"]}>
                <div className={style.tab}>
                    {this.tags.map((elem) => (
                        <TabButton tab={elem} onSearch={this.props.search} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Tabs;
