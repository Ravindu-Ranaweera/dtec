import React from 'react'
import Sidebar from '../components/SideBar';
import Navbar from '../components/Navbar';

const Routes = ({ children }) => {
    return (
      <div className="flex w-full overflow-x-hidden">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="min-h-screen  py-24 dark:bg-gray-100 px-7" style={{ width: "calc(100vw - 16rem)" }}>{children}</div>
        </div>
      </div>
    );
  };
  
  export default Routes;
