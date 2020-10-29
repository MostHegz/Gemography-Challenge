import React from 'react';
import Row from '../components/Row';

function RowList({metaData}){
    if(!metaData.length){
        return <h1>LOADING</h1>
    }

    const rows = metaData.map(item => {
        const data = {
            repoName: item.name,
            description: item.description,
            starsNumber: item.stargazers_count,
            issuesNumber: item.open_issues_count,
            timeStamp: item.created_at,
            repoURL:item.html_url,
            id: item.id
        }
        const {owner} = item;
        return <Row key={data.id} data={data} owner={owner} />
    })
    
    return rows;
}

export default RowList;