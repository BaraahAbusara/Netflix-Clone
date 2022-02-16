
import { Link } from 'react-router-dom';
function NavBar(props) {
    if (props.inHome) {
        return (
            
            <nav className="headerStyle">
                
                <Link to='/myFavMovies' className='FavList'> <button onClick={props.handleShow}>My Favourite Movies</button> </Link>
            </nav>


        )
    }
    else {
        
        return (
            <nav className="headerStyle">
                
                <Link to='/' className='home'> <button onClick={props.handleShow}>Home</button> </Link>
            </nav>

        )

    }
}


export default NavBar; 