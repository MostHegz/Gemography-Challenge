import React from 'react';
// import './Words.css';


function Words({data,owner}){
    const {description, issuesNumber, repoName, repoURL, starsNumber,timeStamp} = data;

    const dayInMilliseconds = 60*60*24*1000;
    const dateDifference = Math.floor((new Date() - new Date(timeStamp))/ dayInMilliseconds);

    return(
        <div className="dtc v-top pl3-ns pa1 w-80-ns w-70 w-90-l">
            <h1 className="lh-copy mv0 v-top f1-ns f4">
                <a className='dark-gray' href={repoURL}>{repoName}</a>
            </h1>
            <h2 className='f4-ns f6 ma2-ns ma2'>{description}</h2>
            <div className='dib mt2 mt3-ns'>
                <p className='ba bw1 pa1 mv2-ns ma1 di f5 br2'>{`Stars: ${starsNumber}`}</p>
                <p className='ba bw1 pa1 mv2-ns ma1 di f5 br2'>{`Issues: ${issuesNumber}`}</p>
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

export default Words;