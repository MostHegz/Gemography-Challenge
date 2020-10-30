import React from 'react';


function RepoDetails({repoData,owner}){
    const {description, open_issues_count, name, html_url, stargazers_count,created_at} = repoData;

    const dayInMilliseconds = 60*60*24*1000;
    const dateDifference = Math.floor((new Date() - new Date(created_at))/ dayInMilliseconds);

    return(
        <div className="dtc v-top pl3-ns pa1 w-80-ns w-70 w-90-l">
            <h1 className="lh-copy mv0 v-top f1-ns f4">
                <a className='dark-gray' href={html_url}>{name}</a>
            </h1>
            <h2 className='f4-ns f6 ma2-ns ma2'>{description}</h2>
            <div className='dib mt2 mt3-ns'>
                <p className='ba bw1 pa1 mv2-ns ma1 di f5 br2'>{`Stars: ${stargazers_count}`}</p>
                <p className='ba bw1 pa1 mv2-ns ma1 di f5 br2'>{`Issues: ${open_issues_count}`}</p>
            </div>
            <div className='dib'> 
                <p className='pa1 f5-ns f7'>
                    <span>{`Submitted ${dateDifference} days ago by `}</span>
                    <a href={owner.html_url}>{owner.login}</a>               
                </p>
            </div>
        </div>
    )
}

export default RepoDetails;