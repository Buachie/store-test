import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';
import auth from '../Firebase/config';


const LogIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        try {
            auth().signInWithEmailAndPassword(email.value, password.value)
        } catch (error) {
            alert(error);
        }
    };

    const {currentUser} = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to='/dashboard'/>
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LogIn
