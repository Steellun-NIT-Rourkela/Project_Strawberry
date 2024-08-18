// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const GIPage = () => {
//   const images = [
//     { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723963312/IMG_1524_vcffh1.jpg', alt: 'Image 1' },
//     { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723963330/IMG_1504_cttf9z.jpg', alt: 'Image 2' },
//     { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723963312/gi_cm42qd.jpg', alt: 'Image 3' },
//     // { url: 'https://res.cloudinary.com/dnnomddvo/image/upload/v1723267819/cld-sample-2.jpg', alt: 'Image 4' },
   
//   ];

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col items-center">
//       {/* Heading */}
//       <h1 className="text-4xl md:text-6xl font-bold mt-16 mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
//         GROWING INNOVATORS
//       </h1>

//       {/* Paragraph */}
//       <p className="text-lg md:text-xl text-gray-300 max-w-3xl text-center mb-16">
        
// One-of-a-kind event, Growing Innovators, came into existence in 2019 when Team Steellun conducted the Inaugural event. Based on an aptitude test conducted in various schools by Team Steellun, 50 students from the 9th and 11th classes were shortlisted for the main event conducted within the college premises. A day-long event, comprised of some engaging group discussions and brainstorming problem-solving rounds, made it an ideal platform for students to learn and absorb knowledge. This made the inaugural edition a grand success as the event served as a channel for knowledge dissemination. 
//       </p>

//       {/* Image Slider */}
//       <div className="w-full max-w-4xl">
//         <Carousel
//           showThumbs={false}
//           showStatus={false}
//           infiniteLoop
//           autoPlay
//           interval={3000}
//           transitionTime={1000}
//         >
//           {images.map((image, index) => (
//             <div key={index}>
//               <img src={image.url} alt={image.alt} className="rounded-lg" />
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default GIPage;
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GIPage = () => {
  const images = [
    { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723963312/IMG_1524_vcffh1.jpg', alt: 'Image 1' },
    { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723963330/IMG_1504_cttf9z.jpg', alt: 'Image 2' },
    { url: 'https://res.cloudinary.com/dafdencvh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723963312/gi_cm42qd.jpg', alt: 'Image 3' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mt-16 mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
        GROWING INNOVATORS
      </h1>

      {/* Paragraph */}
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl text-center mb-16">
        One-of-a-kind event, Growing Innovators, came into existence in 2019 when Team Steellun conducted the inaugural event. Based on an aptitude test conducted in various schools by Team Steellun, 50 students from the 9th and 11th classes were shortlisted for the main event conducted within the college premises. A day-long event, comprised of some engaging group discussions and brainstorming problem-solving rounds, made it an ideal platform for students to learn and absorb knowledge. This made the inaugural edition a grand success as the event served as a channel for knowledge dissemination.
      </p>

      {/* Image Slider */}
      <div className="w-full max-w-4xl">
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
  );
};

export default GIPage;

