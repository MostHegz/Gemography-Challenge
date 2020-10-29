// import React from 'react';
// import Row from '../components/Row';

// function RowList({metaData}){

//     const rows = metaData.map((item,index) => {
//         const data = {
//             repoName: item.name,
//             description: item.description,
//             starsNumber: item.stargazers_count,
//             issuesNumber: item.open_issues_count,
//             timeStamp: item.created_at,
//             repoURL:item.html_url,
//             id: item.id
//         }
//         const {owner} = item;
//         if (metaData.length === index+1) {
//             return <Row key={data.id} data={data} owner={owner} />
//         }
//         return <Row key={data.id} data={data} owner={owner} />
//     })
    
//     return rows;
// }


// export default RowList;