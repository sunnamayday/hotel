

import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../contex';
import Title from '../components/Title';

/**
* @author
* @function RoomFilter
**/

// get all unique data
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        maxPrice,
        minPrice,
        maxSize,
        minSize,
        breakfast,
        pets
    } = context;
    let types = getUnique(rooms, "type");
    types = ["all", ...types];

    let guests = getUnique(rooms, "capacity");
    guests = [...guests];
    // map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    guests = guests.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* Select type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*Select type end */}

                {/* Guest */}
                <div className="form-group">
                    <label htmlFor="capcity">Guest</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {guests}
                    </select>
                </div>
                {/* Guest end */}

                {/* Price */}
                <div className="form-group">
                    <label htmlFor="price">
                        price ${price}
                    </label>
                    <input type="range"
                        name="price"
                        id="price"
                        min={minPrice}
                        max={maxPrice}
                        onChange={handleChange}
                        value={price}
                    />
                </div>
                {/* Price end */}

                {/* Room size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            className="size-input" 
                            onChange={handleChange}
                            />
                        <input type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            className="size-input"
                            onChange={handleChange} />
                    </div>
                </div>
                {/* Room size end */}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" 
                                name="breakfast" 
                                id="breakfast"
                                checked={breakfast}
                                onChange={handleChange}
                                />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" 
                                name="pets" 
                                id="pets"
                                checked={pets}
                                onChange={handleChange}
                                />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* extras end */}
            </form>

        </section>
    )

}

export default RoomFilter