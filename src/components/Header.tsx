import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-black">SPHERE</span>
          <span className="text-purple-500">.</span>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-black">Home</a>
          <a href="#" className="text-gray-700 hover:text-black">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-black">Events</a>
          <a href="#" className="text-gray-700 hover:text-black">Company</a>
        </nav>

        {/* Login y Botón */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-black hidden md:block">Login</a>
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800">
            Sign Up Now &rarr;
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
