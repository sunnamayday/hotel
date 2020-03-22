import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../contex';
import Loading from '../components/Loading';


function RoomContainer({ context }) {
    const { Loading, sortedRooms, rooms } = context;

    if (Loading) {
        return <Loading />
    }
    return (
        <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </div>
    );
}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import { RoomConsumer } from '../contex';
// import Loading from '../components/Loading';

// /**
// * @author
// * @function RoomContainer
// **/

// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const {Loading, sortedRooms, rooms} = value;
//                 if(Loading){
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         <RoomFilter rooms={rooms}/>
//                         <RoomList rooms={sortedRooms}/>
//                     </div>
//                 );
//             }


//             }

//         </RoomConsumer>
//     )

// }

// export default RoomContainer