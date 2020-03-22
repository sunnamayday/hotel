import React from 'react';
import imageGif from '../images/gif/loading-gear.gif';

/**
* @author
* @function Loading
**/

const Loading = (props) => {
    return (
        <div className="loading">
            <h4>rooms data loading</h4>
            <img src={imageGif} alt=""/>
        </div>
    )

}

export default Loading