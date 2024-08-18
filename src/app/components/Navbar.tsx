

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white py-4">
//       <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
//         {/* Left Side: Logo and Name */}
//         <div className="flex items-center space-x-4 mb-4 md:mb-0">
//           <img src="https://res.cloudinary.com/dnnomddvo/image/upload/v1723385472/Copy_of_Steellun_OfficialLogo_lep6dd.png" alt="Logo" className="h-12 w-12" />
//           <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
//             Steellun
//           </span>
//         </div>

//         {/* Middle: Navigation Options */}
//         <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center">
//           <a href="#about" className="text-lg md:text-xl font-bold hover:text-red-500 transition duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
//             About Us
//           </a>
//           <a href="#gi" className="text-lg md:text-xl font-bold hover:text-red-500 transition duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
//             GI
//           </a>
//           <a href="#edge" className="text-lg md:text-xl font-bold hover:text-red-500 transition duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
//             Edge
//           </a>
//           <a href="#team" className="text-lg md:text-xl font-bold hover:text-red-500 transition duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
//             Our Team
//           </a>
//           <a href="#contact" className="text-lg md:text-xl font-bold hover:text-red-500 transition duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
        {/* Left Side: Logo and Name */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img 
            src="https://res.cloudinary.com/dnnomddvo/image/upload/v1723385472/Copy_of_Steellun_OfficialLogo_lep6dd.png" 
            alt="Logo" 
            className="h-16 w-26 filter brightness-155" 
          />
          <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
            Steellun
          </span>
        </div>

        {/* Middle: Navigation Options */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center">
          <a href="#about" className="text-lg md:text-xl font-bold hover:text-red-500 transition duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
            About Us
          </a>
          <a href="#gi" className="text-lg md:text-xl font-bold hover:text-red-500 transition duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
            GI
          </a>
          <a href="#edge" className="text-lg md:text-xl font-bold hover:text-red-500 transition duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
            Edge
          </a>
          <a href="#team" className="text-lg md:text-xl font-bold hover:text-red-500 transition duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
            Our Team
          </a>
          <a href="#contact" className="text-lg md:text-xl font-bold hover:text-red-500 transition duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
