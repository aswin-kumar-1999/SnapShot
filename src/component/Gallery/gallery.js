import React, { Component } from 'react'
import axios from 'axios';
import Picture from './picture';
import Loading from '../loading';
import NotFound from '../notFound';
import style from './gallery.module.css';

class gallery extends Component {

    constructor(props) {
        super();
        this.state = {
            imageURL: [],
            imgName: '',
            imageFound: ''
        };
        console.log("Inside gallery", props.searchImage);
    }

    componentDidMount() {
        this.setState({ imgName: this.props.searchImage });

        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=874723272ab0b8c11a40fc8c0769153f&tags=${this.props.searchImage}&per_page=24&page=1&format=json&nojsoncallback=1`)
            .then(function (response) {
                // console.log(response.data)
                return response.data;
            })
            .then(function (data) {
                let imageURL = data.photos.photo.map((pic) => {
                    return 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
                })
                this.setState({ imageURL });
            }.bind(this))
            .catch(err => {
                console.log("Not Found URL")
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.imgName !== this.props.searchImage) {
            this.setState({ imageFound: "" })
            this.setState({ imgName: this.props.searchImage })
            axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=874723272ab0b8c11a40fc8c0769153f&tags=${this.props.searchImage}&per_page=24&page=1&format=json&nojsoncallback=1`)
                .then(function (response) {
                    // console.log(response.data)
                    return response.data;
                })
                .then(function (data) {
                    let imageURL = data.photos.photo.map((pic) => {
                        return 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
                    })
                    this.setState({ imageURL });
                }.bind(this))
                .catch(err => {
                    console.log("Not Found URL")
                })
                .finally(() => {
                    if (this.state.imageURL.length === 0) {
                        this.setState({ imageFound: "1" })
                    }
                    else {
                        this.setState({ imageFound: "2" })

                    }
                })
        }
    }

    render() {
        return (
            <div className={style.gallery}>
                {this.state.imageURL.map((elem,index) =>
                    <Picture key={index} srcPath={elem} />
                )}
                {this.state.imageFound === '1' && <NotFound />}
                {this.state.imageFound === '' && <Loading />}
            </div>
        )
    }
}

export default gallery
