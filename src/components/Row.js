import React from 'react';
import Avatar from'./Avatar';
import Words from './Words';
import './Row.css';

function RowList(props){
    return(
        <div className="dt center pv2 pv2-m pv2-ns ba auto">
            <Avatar />
            <Words />
        </div>
    )
}

export default RowList;