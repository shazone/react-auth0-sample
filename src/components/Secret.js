import React from 'react'
import LogoutButton from './LogoutButton'
import { useAuth0 } from "@auth0/auth0-react";

function Secret() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return <div>Loading ...</div>;
    }    
    return (
        isAuthenticated ? (        
            <div>
                <p>This is secret area, Only Succesfully Logged In User can enter.</p> 
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p><LogoutButton /></p>
            </div>
        )
        : "UnAuthorized Access!"
    )
}

export default Secret
