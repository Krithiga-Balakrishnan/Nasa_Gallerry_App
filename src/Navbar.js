const Navbar =()=>{
  const websiteName = "The Nasa App Galary";

  return(
    <nav className="navbar">
       <div className="logo">
        <img src="/nasalogo.png" alt="Logo"  style={{ width: '100px', height: 'auto' }} />
      </div>
       <div className="uniqueName">
        
       <span style={{ fontFamily: "'Audiowide', cursive", fontSize: '38px', textShadow: '4px 4px 4px #07b5f4' }}>
          {websiteName}
        </span>
      </div>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/'>Images</a>
      </div>
    </nav>
  )
}
export default Navbar;