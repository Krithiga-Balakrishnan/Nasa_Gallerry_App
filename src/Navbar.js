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
        <a href='/home'>Home</a>
        <a href='/mars-rover'>Mars rover Photos</a>
        <div className="dropdown">
          <button className="dropbtn">Images</button>
          <div className="dropdown-content">
            <a href="/Image">Picture of the day</a>
            <a href="/image-of-the-day">Image of any Day</a>
            <a href="/">Image 3</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
