import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaHome } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';

const navLinks = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'Timeline', path: '/timeline', icon: <IoTimeOutline /> },
  { name: 'Stats', path: '/stats', icon: <TfiStatsUp /> },
];
const MyNavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition flex items-center gap-4 ${
      isActive ? 'bg-green-800 text-white' : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <div className="relative ">
      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 cursor-pointer"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        {navLinks.map(link => (
          <NavLink key={link.name} to={link.path} className={linkClass}>
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-10 right-0 mt-3 bg-white shadow-lg w-2xs p-4 flex flex-col gap-3 rounded-xl md:hidden">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.icon}

              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyNavLinks;
