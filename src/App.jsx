import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Add from './Add';
import Item from './Item';

// ======================================================= //

export default function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios   .get('https://spiller.vcmp.net/api-wl/api/list')
                .then(response => {
                    setData(response.data);
                })
                .catch(e => console.log('ERR: Failed to fetch data'));
    }, []);

    // ------------------------------------------------------- //

    return (
        <div className='main'>
            <div className='title'>my watchlist</div>
            <div className='list'>
            {
                data.map((element) => {
                    return <Item key={element.name} info={element}/>
                })
            }
            </div>
            <div className='footer'>click to open imdb page</div>
            <Add />
        </div>
    )
}