import React from 'react';
import Row from '../components/Row';

function RowList({metaData}){
    if(!metaData.length){
        return <h1>LOADING</h1>
    }
    const firstItem = metaData[0];
    let data = {
        repoName: '',
        description: '',
        starsNumber: '',
        issuesNumber: '',
        timeStamp: '',
        owner: '',
        repoURL:''
    }

    data.repoName = firstItem.name;
    data.description = firstItem.description;
    data.starsNumber = firstItem.stargazers_count;
    data.issuesNumber = firstItem.open_issues_count;
    data.timeStamp = firstItem.created_at;
    data.owner = firstItem.owner;
    data.repoURL = firstItem.html_url


    return <Row data={data} />
}

export default RowList;