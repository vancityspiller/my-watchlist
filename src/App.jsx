import React from 'react';
import Item from './Item';

// ======================================================= //

export default function App() {

    const data = [
        {
            "name": "dexter",
            "year": 2006,
            "watched": false,
        },
        {
            "name": "the batman",
            "year": 2022,
            "watched": true,
            "stars": 5
        }
    ];

    // ------------------------------------------------------- //

    return (
        <div className='main'>
            <div className='title'>my watchlist</div>
            {
                data.map((element) => {
                    return <Item key={element.name} info={element}/>
                })
            }
        </div>
    )
}