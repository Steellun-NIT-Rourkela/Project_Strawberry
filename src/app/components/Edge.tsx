
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const Edge = () => {
//   const images = [
//     { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723962556/karan-9_pxryar.jpg', alt: 'Image 1' },
//     { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723962612/karan-6_su97qj.jpg', alt: 'Image 2' },
//     { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723962530/karan-6-2_upiycp.jpg', alt: 'Image 3' },
//     // { url: 'https://res.cloudinary.com/dnnomddvo/image/upload/v1723267819/cld-sample-2.jpg', alt: 'Image 4' },
//   ];

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col md:flex-row">
//       {/* Image Slider */}
//       <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
//         <div className="w-full max-w-lg">
//           <Carousel
//             showThumbs={false}
//             showStatus={false}
//             infiniteLoop
//             autoPlay
//             interval={3000}
//             transitionTime={1000}
//           >
//             {images.map((image, index) => (
//               <div key={index}>
//                 <img src={image.url} alt={image.alt} className="rounded-lg" />
//               </div>
//             ))}
//           </Carousel>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
//         <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
//           About EDGE
//         </h1>

//         <p className="text-base md:text-lg text-gray-300 max-w-2xl">
//           EDGE, the flagship event of the Material Advantage chapter of NITR, has been an opportune forum for metallurgy and material science enthusiasts to showcase their scientific, diplomatic, and technical skills. The two-day event's primary focus is to give students exposure to industrial and research-related problems, which would help them develop skills and assimilate greater technical knowledge, thereby bridging the gap between research and technical institutions. It empowers all the local state government colleges by providing them an opportunity to participate in this event and expand their knowledge in the field of metallurgy and materials engineering.

//           The 2-day event includes various Quizzes, Technical paper presentations, Conferences, Guest Talks and many more!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Edge;

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Edge = () => {
  const images = [
    { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723962556/karan-9_pxryar.jpg', alt: 'Image 1' },
    { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723962612/karan-6_su97qj.jpg', alt: 'Image 2' },
    { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723962530/karan-6-2_upiycp.jpg', alt: 'Image 3' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col md:flex-row">
      {/* Image Slider */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
        <div className="w-full max-w-lg">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
            transitionTime={1000}
          >
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                  priority
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
          About EDGE
        </h1>

        <p className="text-base md:text-lg text-gray-300 max-w-2xl">
          EDGE, the flagship event of the Material Advantage chapter of NITR, has been an opportune forum for metallurgy and material science enthusiasts to showcase their scientific, diplomatic, and technical skills. The two-day events primary focus is to give students exposure to industrial and research-related problems, which would help them develop skills and assimilate greater technical knowledge, thereby bridging the gap between research and technical institutions. It empowers all the local state government colleges by providing them an opportunity to participate in this event and expand their knowledge in the field of metallurgy and materials engineering.

          The 2-day event includes various Quizzes, Technical paper presentations, Conferences, Guest Talks and many more!
        </p>
      </div>
    </div>
  );
};

export default Edge;

