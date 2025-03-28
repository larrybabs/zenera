import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const menuItems = [
    { id: 'people', label: 'Our People', path: '/our-people' },
    { id: 'brand', label: 'Our Brand', path: '/our-brand' },
    { id: 'lifestyle', label: 'Our Lifestyle', path: '/our-lifestyle' },
    { id: 'recognitions', label: 'Our Recognitions', path: '/our-recognitions' },
    { id: 'insights', label: 'Our Insights', path: '/our-insights' }
  ];

  return (
    <div className=" xl:sticky left-0 top-28 xl:w-72 p-4 mt-8">
      <div className="text-gray-700 mb-4">Menu</div>
      <nav className="flex flex-col space-y-2">
        {menuItems.map(item => (
          <Link
            key={item.id}
            to={item.path}
            className={`
              px-4 py-3 text-left transition-colors duration-200
              ${currentPath === item.path
                ? 'bg-maroon-800 text-white'
                : 'bg-gray text-gray-700 hover:bg-gray-200'
              }
            `}
            style={{
              backgroundColor: currentPath === item.path ? '#800000' : ''
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNavigation;