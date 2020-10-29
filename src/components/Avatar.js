import React from 'react';
// import './Avatar.css';

function Avatar({owner}){
    const {avatar_url, login} = owner;
    return(
        <div className="dtc pa3 v-mid h-mid">
            <img 
            alt={login}
            src={avatar_url} 
            className = "br4 h-100 avatar"
            />
        </div>
    )
}

export default Avatar;