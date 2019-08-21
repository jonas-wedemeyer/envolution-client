import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  background: none;
  position: fixed;
  top: 0;
  z-index: 2;
  margin: 2vh 2vw;
`;

const Navbar = () => {
  const [isHidden, setVisibility] = useState(true);

  const toggleComponent = () => {
    setVisibility(!isHidden);
  };

  return (
    <Nav>
      <div>
        <button type='button' onClick={toggleComponent}>
          <img src='/assets/icons/menu_black.svg' alt='back' height='30px' />
        </button>
        {!isHidden && (
          <Sidebar isHidden={!isHidden} toggleComponent={toggleComponent} />
        )}
      </div>
      {/* <div>
        <button type='button' onClick={toggleComponent}>
          <img src='/assets/icons/icon_back.svg' alt='back' />
        </button>
      </div> */}
    </Nav>
  );
};

export default Navbar;
