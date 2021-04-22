import React, { useState, useContext } from 'react';
import { AuthContext } from '../index';
import firebase from 'firebase';

const Join = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) Auth.setLoggedIn(true);
            })
            .catch(e => {
                setErrors(e.message);
            });
    };

    const joinWithGoogle = e => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(res => {
                if (res.user) Auth.setLoggedIn(true);
            })
            .catch(e => {
                setErrors(e.message);
            });
    }

    return (
        <div>
            <h1>Join</h1>
            <form onSubmit={e => handleForm(e)}>
                <input 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    placeholder="password"
                />
                <hr />
                <button className="googleBtn" type="button" onClick={e => joinWithGoogle(e)}>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="logo"
                    />
                    Login With Google
                </button>
                <button type="submit">Join</button>
                <span>{error}</span>
            </form>
        </div>
    );
};

export default Join;