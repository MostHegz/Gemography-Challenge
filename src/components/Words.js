import React from 'react';
import './Words.css';
function Words(props){
    return(
        <div className="dtc v-top pl3 pa4">
            <h1 className="lh-copy mv0"> Repo Name </h1>
            <h2 className='f5 ma3 mb4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
            <div className='bottom-line'>
                <span className='stars ba bw2 pa1 ma1'>999 Stars</span>
                <span className='issues ba bw2 pa1 ma1'>999 Issues</span>
                <span className='time pa1'>9:59</span>
                <span className='owner pa1'>by Owner Name</span>
            </div>
        </div>
    )
}

export default Words;