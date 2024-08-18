// import React, { useEffect, useState } from 'react';

// const About = () => {
//   const [showAboutUs, setShowAboutUs] = useState(false);
//   const [showOurStory, setShowOurStory] = useState(false);

//   useEffect(() => {
//     const timer1 = setTimeout(() => {
//       setShowAboutUs(true);
//     }, 1000); // 1-second delay for "About Us"

//     const timer2 = setTimeout(() => {
//       setShowOurStory(true);
//     }, 3000); // 2-second delay for "Our Story" after "About Us"

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, []);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center space-y-16">
//       {/* About Us Section */}
//       {showAboutUs && (
//         <div className="text-center animate-fade-in">
//           <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
//             About Us
//           </h2>
//           <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
//           Steellun is the official Material Advantage chapter of NIT Rourkela, established in 2019. Within a year of its foundation, Steellun has left people dumbfounded by its accomplishments. The events conducted by Steellun have been a great hit among the students from all over the country indifferently. With a strong team to back it up, Steellun has taken to itself to do things that are out of the general curriculum, and this has helped students who are indulgent in their activities one way or the other.
//           </p>
//         </div>
//       )}

//       {/* Our Story Section */}
//       {showOurStory && (
//         <div className="text-center animate-fade-in">
//           <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
//             Our Story
//           </h2>
//           <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
//           Founded in 2019, Steellun, the official material advantage chapter of NIT Rourkela, in a short period established itself as an eminent technical club in NITR. Be it guest lectures or the seminars and webinars, the club has remained active even in these unprecedented and arduous times, imparting extensive and practical knowledge to all the material science enthusiasts eager to learn something new. The club has been instrumental in providing a platform for the school students to express their ideas and their views on relevant science-related topics as it conducted Growing Innovators, a K-12 event for two successive years which has been a great success as it served as a media of knowledge dissemination between the institute and the schools. Student members have been tremendously benefited as many of them came in contact with several faculties, researchers and also got an opportunity to work in top-notch universities.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default About;


import React, { useEffect, useState } from 'react';
import './About.css'; // Import the CSS file for additional animations

const About = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showOurStory, setShowOurStory] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowAboutUs(true);
    }, 1000); // 1-second delay for "About Us"

    const timer2 = setTimeout(() => {
      setShowOurStory(true);
    }, 3000); // 2-second delay for "Our Story" after "About Us"

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center space-y-16 px-4 md:px-8">
      {/* About Us Section */}
      {showAboutUs && (
        <div className="text-center max-w-4xl w-full animate-slide-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mx-auto">
            Steellun is the official Material Advantage chapter of NIT Rourkela, established in 2019. Within a year of its foundation, Steellun has left people dumbfounded by its accomplishments. The events conducted by Steellun have been a great hit among the students from all over the country indifferently. With a strong team to back it up, Steellun has taken to itself to do things that are out of the general curriculum, and this has helped students who are indulgent in their activities one way or the other.
          </p>
        </div>
      )}

      {/* Our Story Section */}
      {showOurStory && (
        <div className=" max-w-4xl w-full animate-slide-right">
          <h2 className="text-center text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
            Our Story
          </h2>
          <p className="text-left text-lg md:text-xl text-gray-300 leading-relaxed mx-auto">
            Founded in 2019, Steellun, the official material advantage chapter of NIT Rourkela, in a short period established itself as an eminent technical club in NITR. Be it guest lectures or the seminars and webinars, the club has remained active even in these unprecedented and arduous times, imparting extensive and practical knowledge to all the material science enthusiasts eager to learn something new. The club has been instrumental in providing a platform for the school students to express their ideas and their views on relevant science-related topics as it conducted Growing Innovators, a K-12 event for two successive years which has been a great success as it served as a media of knowledge dissemination between the institute and the schools. Student members have been tremendously benefited as many of them came in contact with several faculties, researchers and also got an opportunity to work in top-notch universities.
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
