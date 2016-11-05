import React, { Component } from 'react';

class LoginContainer extends Component {

    onClick = (e) => {
        e.preventDefault()
        this.props.login({
            email: this.refs.email.value,
            password: this.refs.password.value
        })
    };

    render() {
        return (
            <div className="app app-header-fixed ">
                <div className="container w-xxl w-auto-xs">
                    <a href className="navbar-brand block m-t">Angulr</a>
                    <div className="m-b-lg">
                        <div className="wrapper text-center">
                            <strong>Sign in to get in touch</strong>
                        </div>
                        <form name="form" className="form-validation">
                            <div className="text-danger wrapper text-center">

                            </div>
                            <div className="list-group list-group-sm">
                                <div className="list-group-item">
                                    <input type="email" placeholder="Email" ref="email" className="form-control no-border" required />
                                </div>
                                <div className="list-group-item">
                                    <input type="password" placeholder="Password" ref="password" className="form-control no-border" required />
                                </div>
                            </div>
                            <button type="submit" onClick={this.onClick} className="btn btn-lg btn-primary btn-block">Log in</button>
                            <div className="text-center m-t m-b"><a>Forgot password?</a></div>
                            <div className="line line-dashed"></div>
                            <p className="text-center"><small>Do not have an account?</small></p>
                            <a className="btn btn-lg btn-default btn-block">Create an account</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}