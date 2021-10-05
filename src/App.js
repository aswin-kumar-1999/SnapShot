// import './App.css';
import { Fragment, Component } from 'react';
import Form from './component/form';
import Tabs from './component/tabs';
import Gallery from './component/Gallery/gallery'
class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      findImage: ''
    }
  }

  componentDidMount() {
    // console.log("mount")
    this.setState({ findImage: this.state.search });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.findImage !== this.state.search) {
      // console.log("update")
      this.setState({ findImage: this.state.search });
    }
  };


  searchHandler = (search) => {
    this.setState({ search: search });
  }



  render() {
    return (
      <Fragment>
        <h1>Snap Shot</h1>
        <Form search={this.searchHandler} />
        <Tabs search={this.searchHandler} />
        {this.state.findImage && <Gallery searchImage={this.state.findImage} />}
      </Fragment>
    )
  }
}

export default App;
