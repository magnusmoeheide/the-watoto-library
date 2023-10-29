import React, { useState } from 'react';

function NavbarJs() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(true); // Assuming "activate-menu" is shown by default

  const handleToggle = () => {
    setIsNavVisible(!isNavVisible);
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Menu</button>

      <div id="nav" style={{ display: isNavVisible ? 'block' : 'none' }}>
        {/* Nav content */}
      </div>

      <div id="nav2" style={{ backgroundColor: isMenuActive ? '#1ba0f2' : '#1565C0' }}>
        <div id="activate-menu" style={{ display: isMenuActive ? 'block' : 'none' }}>
          {/* activate-menu content */}
        </div>

        <div id="deactivate-menu" style={{ display: isMenuActive ? 'none' : 'block' }}>
          {/* deactivate-menu content */}
        </div>
      </div>
    </div>
  );
}

export default NavbarJs;
