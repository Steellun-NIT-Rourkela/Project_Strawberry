import React, { useEffect, useState } from 'react';

const teamMembers = [
  {
    name: 'Amrit Raj',
    position: 'PRESIDENT',
    imageUrl: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1723961403/Amrit_Raj_ppjt7q.png',
  },
  {
    name: 'Renuka Gulhane',
    position: 'VICE PRESIDENT',
    imageUrl: 'https://res.cloudinary.com/dnnomddvo/image/upload/v1723385720/IMG_20240803_162237_hq4jgn.jpg',
  },
  {
    name: 'Shuvam Mohanty',
    position: 'GI CONVENOR',
    imageUrl: 'https://res.cloudinary.com/dafdencvh/image/upload/v1723961199/Shuvam_Mohanty_jewkz5.png',
  },
  
  {
    name: 'Sakshi Jaiswal',
    position: 'EDGE CONVENOR & TECHNICAL HEAD',
    imageUrl: 'https://res.cloudinary.com/dnnomddvo/image/upload/v1723386037/Screenshot_20240523_141335_c0xn2e.jpg',
  },
  {
    name: 'Varun Arora',
    position: 'CONTENT HEAD',
    imageUrl: 'https://res.cloudinary.com/dafdencvh/image/upload/v1723961126/Varun_Arora_kloarp.png',
  },
  {
    name: 'Deepak kumar',
    position: 'PR HEAD',
    imageUrl: 'https://res.cloudinary.com/dafdencvh/image/upload/v1723961113/Deepak_Kumar_Singh_Khuntia_g7w3jx.png',
  },
  {
    name: 'Anuj Gupta',
    position: 'TREASURER & MANAGEMENT HEAD',
    imageUrl: 'https://res.cloudinary.com/dafdencvh/image/upload/v1723961126/Anuj_Gupta_thgbyu.png',
  },
  {
    name: 'Swastik Ranjan Dash',
    position: 'GI CO-CONVENOR',
    imageUrl: 'https://res.cloudinary.com/dafdencvh/image/upload/v1723961404/Swastik_Ranjan_Dash_1_xlcpwm.png',
  },
 
  {
    name: 'Anshuman panda',
    position: 'EDGE CO-CONVENOR',
    imageUrl: 'https://res.cloudinary.com/dafdencvh/image/upload/v1723961401/Anshuman_Panda_irsiyh.png',
  },
  {
    name: 'Nishant Kumar',
    position: 'SECRETARY AND DESIGN HEAD',
    imageUrl: 'https://res.cloudinary.com/dafdencvh/image/upload/v1723961403/Nishant_Kumar_ta1yqa.png',
  },
  // Add more team members as needed
];

const TeamPage = () => {
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    setShowHeading(true); // Trigger the transition effect when the component mounts
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Heading with Transition */}
      <h2
        className={`text-4xl md:text-6xl font-bold mt-16 mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500 transition-opacity duration-1000 ${
          showHeading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Meet Our Team
      </h2>

      {/* Team Members */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-red-500">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl md:text-2xl font-semibold">{member.name}</h3>
            <p className="text-gray-400 text-md md:text-lg">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
