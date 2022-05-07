import React from 'react';

// ======================================================= //

export default function Item({info}) {

    const {name, year, watched, stars} = info;

    // ------------------------------------------------------- //

    return (
        <div className={watched ? 'item watched' : 'item unwatched'}>
            <span className='mName'>{name}</span>
            <span className='mYear'>{year}</span>

            
        </div>
    )
}