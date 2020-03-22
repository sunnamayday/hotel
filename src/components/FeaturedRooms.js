import React, { Component } from 'react'
import { RoomContext } from '../contex';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

/**
* @author
* @class FeaturedRooms
**/

class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })

        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>

        )
    }
}


export default FeaturedRooms