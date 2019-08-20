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
          <img src='/assets/icons/menu_black.svg' alt='back' />
        </button>
        {!isHidden && (
          <Sidebar isHidden={!isHidden} toggleComponent={toggleComponent} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
