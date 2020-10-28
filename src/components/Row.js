import React from 'react';
import Avatar from'./Avatar';
import Words from './Words';
// import './Row.css';

function RowList({data}){
    const {owner} = data;
    return(
        <div className="dt pv2 pv2-m pv2-ns w-100 bg-light-blue br4 shadow-3">
            <Avatar owner={owner} />
            <Words data={data}/>
        </div>
    )
}

export default RowList;