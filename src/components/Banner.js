import React from 'react'

/**
* @author
* @function Banner
**/

const Banner = (props) => {
    return (
        <div className="banner">
            <h1>{props.title}</h1>
            <div></div>
            <p>{props.subtitle}</p>
            {props.children}
        </div>
    )

}

export default Banner