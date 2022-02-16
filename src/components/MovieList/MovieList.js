//import './MovieList.css';
import Movie from '../Movie/Movie'

import { useState, useEffect } from 'react';

function MovieList(props) {
    

    return (

        <>

            {
                props.data.length && props.data.map((data, idx) => (
                    <div key={idx} >
                        <Movie data={data}/>
                    </div>
                ))
            }

            {
                !props.data.length && <div><h2>No Data available</h2></div>
            }
        </>
    )
}

export default MovieList; 