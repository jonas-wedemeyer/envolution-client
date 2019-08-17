import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isHidden, setVisibility] = useState(true);

  const toggleSidebar = () => {
    setVisibility(!isHidden);
  };

  return (
    <nav>
      <div>
        <button type='button' onClick={toggleSidebar}>
          Picto Navbar
        </button>
        {!isHidden && (
          <Sidebar isHidden={!isHidden} toggleSidebar={toggleSidebar} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
