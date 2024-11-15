import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {

  const [collapsed, setCollapsed ] = useState(true);

  const sidebarItems = ['Tablero', 'Opciones', 'Perfil', 'Salir'];

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>     
      <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <GiHamburgerMenu/> : <><GiHamburgerMenu/> <GiHamburgerMenu/> <GiHamburgerMenu/> </>}
      </button>
      <ul className="sidebar-list">
        {sidebarItems.map((item, index) => (
          <li key={index} className="sidebar-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;