import { Link } from 'react-router-dom';

const Navbar = () => {
  const websiteName = "The Nasa App Gallery";

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/nasalogo.png" alt="Logo" style={{ width: '60px', height: 'auto' }} />
      </div>
      <div className='brand'>
        <div className='uniqueName'>
          <span style={{ fontFamily: "'Audiowide', cursive", fontSize: '38px', textShadow: '4px 4px 4px #07b5f4' }}>
            {websiteName}
          </span>
        </div>
      </div>
      <div className='links'>
      <Link to="/home">Home</Link>
      <Link to="/mars-rover">Mars Rover</Link>
        <div className="dropdown">
          <button className="dropbtn">Images</button>
          <div className="dropdown-content">
          <Link to="/image">Picture of the day</Link>
          <Link to="/image-of-the-day">Image of any Day</Link>
            <a href="/">Image 3</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
