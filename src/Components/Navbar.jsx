// import React from 'react';
// import "./NavbarStyle.css";


// const Navbar = () => {
//   return (
//     <nav>
//       <a href="index.html">
//         <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#8758FF"></path>
//           <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#FF7D29"></path>
//         </svg>
//       </a>
//       <div>
//         <ul id='navbar'>
//           <li><a href="#todos">Todos</a></li>
//           <li><a href="#inprogress">In Progress</a></li>
//           <li><a href="#completed">Completed</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="index.html">
        <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#8758FF"></path>
          <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#FF7D29"></path>
        </svg>
      </a>
      <ul id='navbar'>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/in-progress">In Progress</Link></li>
        <li><Link to="/completed">Completed</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

