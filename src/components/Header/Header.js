//import './Header.css';
import {Link} from 'react-router-dom';
function Header()
{
    return (
        <nav className="headerStyle">
        <Link to = '/' className='home'> Home </Link>
        <h1 className="welcoming">NetFlex</h1>
        </nav>
    )
}

export default Header; 