import React from 'react'

/**
* @author
* @function Hero
**/

const Hero = (props) => {
    return (
        <header className={props.hero}>{props.children}</header>
    )

}

Hero.defaultProps = {
    hero: "defaultHero"
}
export default Hero;