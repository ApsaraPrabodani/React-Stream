import React from "react";
import { connect } from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends React.Component {
    // state = {
    //     isSignedIn: null
    // };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '336333683713-a25od8f4qfppcsmpe7lr5naf2ro423a3.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({isSignedIn : this.auth.isSignedIn.get()});

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    //follows code used for authenitication without redux
    // onAuthChange = () => {
    //     this.setState({isSignedIn : this.auth.isSignedIn.get()});
    // }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
       // if (this.state.isSignedIn === null) {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn === true){
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="icon google"></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="icon google"></i>
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}
const mapStateToProps = (state) => {
    return {isSignedIn : state.auth.isSignedIn};
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);