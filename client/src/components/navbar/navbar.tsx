import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { DropdownItem } from '../../../types';
import styles from './navbar.module.css';


const Dropdown: React.FC<{ items: DropdownItem[] }> = ({ items }) => (
  <div className={styles.dropdown}>
    {items.map((item, index) => (
      <Link to={item.path} key={index}>
        <button className={styles.dropdownbutton}>{item.label}</button>
      </Link>
    ))}
  </div>
);

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const allItems: DropdownItem[] = [
    { label: 'All Projects', path: '/projects' },
    { label: 'All Documentation', path: '/docs' },
    { label: 'All Resume Bullets', path: '/resume-bullets' },
  ];

  const newItems: DropdownItem[] = [
    { label: 'New Project', path: '/projects/new' },
    { label: 'New Documentation', path: '/docs/new' },
    { label: 'New Resume Bullet', path: '/resume-bullets/new' },
  ];

  const toggleDropdown = (menu: string) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navrow}>
        <div className={styles.navitemwrapper}>
          <Link to="/">
            <button className={styles.navbutton}>Home</button>
          </Link>
        </div>

        <div
          className={styles.navitemwrapper}
          onMouseEnter={() => setActiveDropdown('all')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className={styles.navbutton} onClick={() => toggleDropdown('all')}>
            All Views
          </button>
          {activeDropdown === 'all' && <Dropdown items={allItems} />}
        </div>

        <div
          className={styles.navitemwrapper}
          onMouseEnter={() => setActiveDropdown('new')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className={styles.navbutton} onClick={() => toggleDropdown('new')}>
            New Forms
          </button>
          {activeDropdown === 'new' && <Dropdown items={newItems} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
