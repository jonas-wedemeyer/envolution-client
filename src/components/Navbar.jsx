import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isHidden, setVisibility] = useState(true);

  const toggleComponent = () => {
    setVisibility(!isHidden);
  };

  return (
    <nav>
      <div>
        <button type='button' onClick={toggleComponent}>
          Picto Navbar
        </button>
        {!isHidden && (
          <Sidebar isHidden={!isHidden} toggleComponent={toggleComponent} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
