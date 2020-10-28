import React from 'react';
import './Avatar.css';

function Avatar(props){
    return(
        <div className="tc v-top pa3">
            <img 
            alt='JorgeCastilloPrz' 
            src='https://avatars1.githubusercontent.com/u/6547526?v=4' 
            className = "br4 dib avatar"
            />
        </div>
    )
}

export default Avatar;