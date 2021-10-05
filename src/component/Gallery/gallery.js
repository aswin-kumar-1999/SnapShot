import React, { Component } from 'react'
import axios from 'axios';
import Picture from './picture';
import NotFound from '../../notFound';

class gallery extends Component {

    constructor(props) {
        super();
        this.state = {
            imageURL: [],
            img: ''
        };
        console.log(props.searchImage);
    }

    componentDidMount() {
        this.setState({ img: this.props.searchImage });

        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=874723272ab0b8c11a40fc8c0769153f&tags=${this.props.searchImage}&per_page=24&page=1&format=json&nojsoncallback=1`)
            .then(function (response) {
                console.log(response.data)
                return response.data;
            })
            .then(function (j) {
                let imageURL = j.photos.photo.map((pic) => {
                    return 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
                })
                this.setState({ imageURL });
            }.bind(this))
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updating", prevState.img, this.props.searchImage);
        if (prevState.img !== this.props.searchImage) {
            this.setState({ img: this.props.searchImage })
            axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=874723272ab0b8c11a40fc8c0769153f&tags=${this.props.searchImage}&per_page=24&page=1&format=json&nojsoncallback=1`)
                .then(function (response) {
                    console.log(response.data)
                    return response.data;
                })
                .then(function (j) {
                    let imageURL = j.photos.photo.map((pic) => {
                        return 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
                    })
                    this.setState({ imageURL });
                }.bind(this))
        }
    }

    render() {
        return (
            <div>
                {this.state.imageURL.map((elem) =>
                    <Picture srcPath={elem} />
                )}
                {this.state.imageURL.length === 0 && <NotFound/>}
            </div>
        )
    }
}

export default gallery
