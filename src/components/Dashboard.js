import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';
import auth from '../Firebase/config';

const Dashboard = () => {
    const {currentUser} = useContext(AuthContext);
    if (!currentUser){
        return <Redirect to= '/login'/>;
    }
    return (
        <div>
            <h1>Welcome</h1>
            <p>this is the dashboard, if you can see this you're logged in</p>
            <button onClick={() => auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Dashboard
