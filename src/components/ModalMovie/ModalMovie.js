//import './ModalMovie.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {useRef} from 'react';
import axios from 'axios';

function ModalMovie({ cardInfo,setCardInfo, show,setShow, handleClose }) {

    const commentInputRef = useRef("");
    const addToFav = async ()=>{
        let comment = commentInputRef.current.value;
       let fav = {title:cardInfo.title, release_date:cardInfo.release_date, overview:cardInfo.overview, poster_path:cardInfo.poster_path, comment:comment}
      
       await axios.post(`https://newmoviesbybaraah.herokuapp.com/addMovie`,fav)
                  .then(()=>{
                      console.log("Movie is added successfully");
                  }).catch((err)=>{
                      console.log(err);
                  });
  
   }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{cardInfo.title}</h3>
                    <img alt="Movie poster picture" src={`https://image.tmdb.org/t/p/w500${cardInfo.poster_path}`} />
                    <p>{cardInfo.release_date}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        onClick={() => {
                            addToFav();
                        handleClose();
                        }}> 
                            Add To MyFavorites
                 </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalMovie; 