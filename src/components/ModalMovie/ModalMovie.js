//import './ModalMovie.css';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';

function ModalMovie({cardInfo, show, handleClose})
{
    return (
        <div>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add It To Favorite</Modal.Title>
            </Modal.Header>
            <Modal.Body className="body">
                <h3>{cardInfo.title}</h3>
                <img alt="Movie poster picture" src={`https://image.tmdb.org/t/p/w500${cardInfo.poster_path}`} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary"> Add To Favorite </Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default ModalMovie; 