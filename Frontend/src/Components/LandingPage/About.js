// // import { useEffect, useState } from "react";
// // import {
// //   faAngular,
// //   faCss3,
// //   faGitAlt,
// //   faHtml5,
// //   faJsSquare,
// //   faReact,
// // } from "@fortawesome/free-brands-svg-icons";
// // import Loader from "react-loaders";
// // // import AnimatedLetters from "../AnimatedLetters";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import "./About.scss";

// // const About = () => {
// //   const [letterClass, setLetterClass] = useState("text-animate");

// //   //   useEffect(() => {
// //   //     return setTimeout(() => {
// //   //       setLetterClass('text-animate-hover')
// //   //     }, 3000)
// //   //   }, [])

// //   return (
// //     <>
// //       <div className="container about-page">
// //         <div className="text-zone">
// //           <h1></h1>
// //           <p>
// //             I'm a very ambitious front-end developer looking for a role in an
// //             established IT company with the opportunity to work with the latest
// //             technologies on challenging and diverse projects.
// //           </p>
// //           <p align="LEFT">
// //             I'm quiet confident, naturally curious, and perpetually working on
// //             improving my chops one design problem at a time.
// //           </p>
// //           <p>
// //             If I need to define myself in one sentence that would be a friendly
// //             person, a sports fanatic, photography enthusiast, and
// //             tech-obsessed!!!
// //           </p>
// //         </div>

// //         <div className="stage-cube-cont">
// //           <div className="cubespinner">
// //             <div className="face1">
// //               <FontAwesomeIcon icon={faAngular} color="#DD0031" />
// //             </div>
// //             <div className="face2">
// //               <FontAwesomeIcon icon={faHtml5} color="#F06529" />
// //             </div>
// //             <div className="face3">
// //               <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
// //             </div>
// //             <div className="face4">
// //               <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
// //             </div>
// //             <div className="face5">
// //               <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
// //             </div>
// //             <div className="face6">
// //               <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <Loader type="pacman" />
// //     </>
// //   );
// // };

// // export default About;

// import { useEffect, useState } from "react";
// import {
//   faAngular,
//   faCss3,
//   faGitAlt,
//   faHtml5,
//   faJsSquare,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons";
// import Loader from "react-loaders";
// // import AnimatedLetters from "../AnimatedLetters";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./About.css";

// const About = () => {
//   const [letterClass, setLetterClass] = useState("text-animate");

//   //   useEffect(() => {
//   //     return setTimeout(() => {
//   //       setLetterClass('text-animate-hover')
//   //     }, 3000)
//   //   }, [])

//   return (
//     <>
//       <div className="container about-page">
//         <div className="text-zone">
//           <h1>

//           </h1>
//           <p>
//             I'm a very ambitious front-end developer looking for a role in an
//             established IT company with the opportunity to work with the latest
//             technologies on challenging and diverse projects.
//           </p>
//           <p align="left">
//             I'm quite confident, naturally curious, and perpetually working on
//             improving my skills one design problem at a time.
//           </p>
//           <p>
//             If I need to define myself in one sentence, that would be a friendly
//             person, a sports fanatic, a photography enthusiast, and
//             tech-obsessed!
//           </p>
//         </div>

//         <div className="stage-cube-cont">
//           <div className="cubespinner">
//             <div className="face1">
//               <FontAwesomeIcon icon={faAngular} color="#DD0031" />
//             </div>
//             <div className="face2">
//               <FontAwesomeIcon icon={faHtml5} color="#F06529" />
//             </div>
//             <div className="face3">
//               <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
//             </div>
//             <div className="face4">
//               <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
//             </div>
//             <div className="face5">
//               <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
//             </div>
//             <div className="face6">
//               <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Loader type="pacman" />
//     </>
//   );
// };

// export default About;
import React from "react";
import "./About.css";
import Image1 from "./f67396fc3cfce63a28e07ebb35d974ac.jpg";
import Image2 from "./make-it-personal.jpg";
import Image3 from "./Synthwave-Postmodern.jpg";

const About = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-paragraph">
          <img src={Image1} alt="Image 1" />
          <div className="paragraph-content">
            <p>
              You are working manda!bha!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae hendrerit eros. Sed venenatis, ligula sit amet blandit
              semper, mi mi gravida dolor, non dignissim lacus metus nec risus.
              Vivamus blandit efficitur eros, sed lacinia mi posuere id.
            </p>
          </div>
        </div>
        <hr className="separator" />
        <div className="about-paragraph">
          <img src={Image2} alt="Image 2" />
          <div className="paragraph-content">
            <p>
              Integer ut volutpat urna, at consequat ante. Nam mattis turpis ut
              nunc commodo, id ultrices nunc tincidunt. Nullam non luctus neque.
              Mauris interdum purus vitae elit faucibus fermentum. Etiam at
              massa ullamcorper, aliquam sapien vitae, faucibus lacus.
            </p>
          </div>
        </div>
        <hr className="separator" />
        <div className="about-paragraph">
          <img src={Image3} alt="Image 3" />
          <div className="paragraph-content">
            <p>
              Vestibulum eu commodo dolor. Sed venenatis tincidunt ante, eget
              ullamcorper quam. Fusce condimentum arcu ac nunc dapibus, at
              dictum dui auctor. Suspendisse potenti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
