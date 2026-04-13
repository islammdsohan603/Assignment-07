import React from 'react';
import MyNavLinks from './MyNavLinks';

const Navbar = () => {
  return (
    <div>
      <header className="bg-white shadow py-3">
        <nav className="w-10/12 mx-auto flex items-center justify-between">
          <h1 className="text-xl md:text-3xl  font-bold text-orange-600 drop-shadow-sm drop-shadow-amber-600">
            Keen<span className="text-gray-600">Keeper</span>
          </h1>

          <MyNavLinks />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
