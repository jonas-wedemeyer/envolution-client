import React from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  function handleClick(e) {
    e.preventDefault();
    // change classname toggle conditionally // or just change the width conditionnally
  }

  return (
    <nav>
      <div>
        <button type='button' onClick={handleClick}>
          Picto Navbar
        </button>
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navbar;
