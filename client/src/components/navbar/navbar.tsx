import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { DropdownItem } from '../../../types';

interface DropdownProps {
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => (
  <ul className="dropdown">
    {items.map((item, index) => (
      <li key={index}>
        <Link to={item.path}>{item.label}</Link>
      </li>
    ))}
  </ul>
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
    <div className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li
          onMouseEnter={() => setActiveDropdown('all')}
          onMouseLeave={() => setActiveDropdown(null)}
          onClick={() => toggleDropdown('all')}
        >
          All Views
          {activeDropdown === 'all' && <Dropdown items={allItems} />}
        </li>

        <li
          onMouseEnter={() => setActiveDropdown('new')}
          onMouseLeave={() => setActiveDropdown(null)}
          onClick={() => toggleDropdown('new')}
        >
          New Forms
          {activeDropdown === 'new' && <Dropdown items={newItems} />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
