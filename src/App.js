// import './App.css';
import { Fragment, Component } from 'react';
import Form from './component/form';
import Tabs from './component/tabs';
import Gallery from './component/Gallery/gallery'
class App extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  searchHandler = (search) => {
    this.setState((prevState) => {
      if (prevState.search !== search) {
        return {search};
      }
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Snap Shot</h1>
        <Form search={this.searchHandler} />
        <Tabs search={this.searchHandler} />
        <Gallery searchImage={this.state.search}/>
      </Fragment>
    )
  }
}

export default App;
