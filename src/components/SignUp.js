import React, {useState} from 'react'
import auth from '../Firebase/config';
import {Redirect} from 'react-router-dom';

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null); 
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        try{
            auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);
        } catch(error){
            alert(error);
        }
    };
    if(currentUser){
        return <Redirect to='/dashboard'/>;
    }


    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
