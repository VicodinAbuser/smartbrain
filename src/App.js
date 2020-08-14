import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation.js';
// import Logo from './components/logo/Logo.js';
import SignIn from './components/signin/SignIn.js';
import Register from './components/register/Register.js';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm.js';
import FaceRecognition from './components/faceRecognition/FaceRecognition.js';
import Footer from './components/footer/Footer.js';
import Rank from './components/rank/Rank.js';
import Particles from 'react-particles-js';


const particleOptions = {
    particles: {

        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 400
            }
        }
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            imageURL: '',
            boxes: [],
            route: 'signin',
            isSignedIn: false,
            user: {
                id: '',
                name: '',
                email: '',
                entries: 0,
                joined: ''
            }
        }
    }

    componentDidMount() {
        fetch('https://shielded-temple-15977.herokuapp.com/')
        .then(response => response.json())
        .then(console.log)
    }

    updateUser = (user) => {
        const { id, name, email, entries, joined } = user;
        this.setState({
            user: {
                id,
                name,
                email,
                entries,
                joined
            }
        });
    }

    calculateFaceLocation = (data) => {
        const faceBoxes = []
        if(data.outputs[0].data.regions) {
            data.outputs[0].data.regions.forEach((region, i) => {
                const clarifaiFace = region.region_info.bounding_box;
                const image = document.getElementById('inputimage');
                const width = Number(image.width);
                const height = Number(image.height);
                faceBoxes.push({
                    leftColumn: clarifaiFace.left_col*width,
                    rightColumn: width - clarifaiFace.right_col*width,
                    topRow: clarifaiFace.top_row*height,
                    bottomRow: height - clarifaiFace.bottom_row*height
                });
            });
        }

        return faceBoxes;

    }

    displayFaceBox = (box) => {
        this.setState({boxes: box})
    }

    onInputChange = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    onSubmit = () => {
        this.setState({imageURL: this.state.input})

        fetch('https://shielded-temple-15977.herokuapp.com/imageurl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({input: this.state.input})
        })
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            if(response) {
                fetch('https://shielded-temple-15977.herokuapp.com/image', {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        id: this.state.user.id
                    })
                }).then(response => response.json())
                .then(count => {
                    this.setState(Object.assign(this.state.user, {entries: count}))
                })
                .catch(err => console.log(err))
            }
              this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch((err) => {
            console.log(err)
        });
    }

    onRouteChange = (route) => {
        if(route === 'home') {
            this.setState({isSignedIn: true, route: route})
        } else {
            this.setState({
                isSignedIn: false,
                route: route,
                user: {},
                input: '',
                imageURL: '',
                boxes: []
            })
        }
    }

    render() {
        const { isSignedIn, imageURL, boxes, route, user } = this.state;
        return (
          <div className="App">
          <Particles className='particles'
            params={particleOptions}
          />
            <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>

            {route === 'signin'
            ? <SignIn updateUser={this.updateUser} onRouteChange={this.onRouteChange}/>
            : route === 'register'
                ? <Register updateUser={this.updateUser} onRouteChange={this.onRouteChange}/>
                :
                  <div>

                    <Rank username={user.name} faces={boxes.length}/>
                    <ImageLinkForm onButtonSubmit={this.onSubmit} onInputChange={this.onInputChange} />
                    <FaceRecognition boxes={boxes} imageURL={imageURL}/>
                  </div>
            }

          </div>
        );
    }

}

export default App;
