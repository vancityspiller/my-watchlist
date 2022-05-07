import React from 'react';
import Star from './images/star.png';
import StarFilled from './images/star-filled.png';

// ======================================================= //

export default function Item({info}) {

    const {name, year, watched, stars} = info;
    const stArr = Array(5);

    for(let i = 0 ; i < 5 ; i++) {
        stArr[i] = i >= stars ? 'unfilled' : 'filled';
    }

    // ------------------------------------------------------- //

    return (
        <div className={watched ? 'item watched' : 'item unwatched'}>
            <span className='mName'>{name}</span>
            <span className='mYear'>{year}</span>

            {watched && <span className='mStars'>
                {stArr.map(element => {
                    return <img src={element === 'filled' ? StarFilled : Star} className='mStar'></img>
                })}
            </span>}
        </div>
    )
}