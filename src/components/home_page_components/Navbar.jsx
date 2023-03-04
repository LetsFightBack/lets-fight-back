import React from 'react'
import "./navbar.style.scss";


const Navbar = () => {
  return (
 <>
 <nav className="navbar" style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
    <div className="logo">LOGO</div>
    <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
    <div >
        <ul style={{display:"flex", textDecoration:"none",listStyleType: "none"}}>
            <li >About </li>
            <li >Gallery </li>
            <li >Contact </li>
        </ul>
    </div>
    <button className='loginbtn'><img className='login-icon' src="/assets/loginIcon.svg" alt="" /> Login</button>
    </div>
 </nav>
 
 </>
  )
}

export default Navbar

