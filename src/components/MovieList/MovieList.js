//import './MovieList.css';
import Movie from '../Movie/Movie'
import ModalMovie from '../ModalMovie/ModalMovie'
import { useState, useEffect } from 'react';

function MovieList(props) {
    
    const [cardInfo, setCardInfo] = useState({});
    const [show,setShow] = useState(false);
    
    const handleClose = ()=>setShow(false);
    return (

        <>

            {
                props.data.length && props.data.map((data, idx) => (
                    <div key={idx} >
                        <Movie data={data} setCardInfo={setCardInfo} setShow={setShow}/>
                    </div>
                ))
            }
            {
                <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />
            }
            {
                !props.data.length && <div><h2>No Data available</h2></div>
            }
        </>
    )
}

export default MovieList; 