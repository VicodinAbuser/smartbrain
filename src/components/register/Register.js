import React from 'react';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: ''
        }
    }

    onNameChange = (event) => {
        this.setState({registerName: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({registerEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({registerPassword: event.target.value})
    }

    onRegister = () => {
        const { registerName, registerEmail, registerPassword } = this.state;
        fetch('https://shielded-temple-15977.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: registerName,
                email: registerEmail,
                password: registerPassword
            })
        }).then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.updateUser(user);
                this.props.onRouteChange('home')
            }
        })
    }
    render() {
        const { onRouteChange } = this.props;

        return(
            <article className="br3 shadow-4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
              <div className="measure ">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0">Register</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f3" htmlFor="name">Username</label>
                    <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" required />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
                    <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" required />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
                    <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" required />
                  </div>
                </fieldset>
                <div className="">
                  <input onClick={this.onRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Register" />
                </div>
                <div className="lh-copy mt3">
                  <p onClick={() => onRouteChange('signin')} className="f5 link pointer dim black db">Sign In</p>
                </div>
              </div>
            </main>
            </article>
        )
    }

}

export default Register;
