import React, { Component } from 'react';
import Title from '../components/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
/**
* @author
* @class Services
**/

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktail",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio."
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio."
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Service" />
                <div className="service-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}


Services.propTypes = {}
export default Services