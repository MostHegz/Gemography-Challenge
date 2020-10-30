import React from 'react';
import Avatar from'./Avatar';
import RepoDetails from './RepoDetails';


function RowList({repoData,owner}){
    return(
        <div className="dt pv2 pv2-m pv2-ns w-95 bg-light-gray br4 shadow-3 ma3 grow">
            <Avatar owner={owner} />
            <RepoDetails repoData={repoData} owner={owner}/>
        </div>
    )
}

export default RowList;