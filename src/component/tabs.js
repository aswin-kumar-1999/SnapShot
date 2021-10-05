import { Fragment, Component } from 'react';
import TabButton from './tabButton';

class Tabs extends Component {
    constructor() {
        super();
        this.state = {
            findImage: ''
        }
        this.tags = ["Mountain", "Beaches", "Birds", "Food"];

    }


    render() {
        return (
            <Fragment>
                <div>hii</div>
                <div>
                    {this.tags.map((elem) => (
                        <TabButton tab={elem} onSearch={this.props.search} />
                    ))}
                </div>

            </Fragment>
        )
    }
}

export default Tabs;
