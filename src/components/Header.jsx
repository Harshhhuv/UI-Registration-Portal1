import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router'
const Header = () => {
    const navigate=useNavigate() 
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-yellow-400 transition duration-300">MyWebsite</a>
        </div>

      
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li><Link to="/Home"   className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                     }
                                     >
            Home
            </Link>
            </li>
            <li><Link to="/About"  className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                     }>About</Link></li>
            <li><Link to="/Contact" className="hover:text-yellow-400 transition duration-300">Contact</Link></li>
            <li><Link to="/Privacy" className="hover:text-yellow-400 transition duration-300">privacy&policy</Link></li>
          </ul>
        </nav>

        
        <div>
          <Link to="/page/login" className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition duration-300">Login</Link>
        </div>
      </div>
    </header>
  )
}

export default Header