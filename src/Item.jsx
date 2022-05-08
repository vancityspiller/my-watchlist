import React from 'react';
import Star from './images/star.png';
import StarFilled from './images/star-filled.png';

// ======================================================= //

export default function Item({info}) {

    const {name, year, watched, stars, imdb} = info;
    const stArr = Array(5);

    for(let i = 0 ; i < 5 ; i++) {
        stArr[i] = i >= stars ? 'unfilled' : 'filled';
    }

    // ------------------------------------------------------- //

    return (
        <div className={watched ? 'item watched' : 'item unwatched'} onClick={() => { watched && imdb ? window.open(`https://www.imdb.com/title/${imdb}/`) : ' ' }}>
            <span className='mName'>{name}</span>
            <span className='mYear'>{year}</span>

            {watched && <span className='mStars'>
                {stArr.map((element, idx) => {
                    return <img key={idx} src={element === 'filled' ? StarFilled : Star} className='mStar'></img>
                })}
            </span>}
        </div>
    )
}