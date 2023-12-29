import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export const Footerbot = () => {
  useEffect(() => {
    gsap.from(".footerbot-head > *", {
        opacity: 1,
        y: 30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".footerbot-head",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
  
      gsap.from(".footerbot-left", {
        opacity: 1,
        y: 30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".footerbot-left",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
  
      gsap.from(".icons > *", {
        opacity: 1,
        x: -20,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".footerbot-left",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
  
      // Background color change animation
      gsap.to(".footerbot", {
        backgroundColor: "#f0f0f0",
        scrollTrigger: {
          trigger: ".footerbot",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
  
      // Bounce animation for the "Try for Free" button
      gsap.from(".try-for-free-button", {
        y: -10,
        scale: 1.1,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: ".try-for-free-button",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
      
    }, []);
    return(
        <>
        <div className="foooterbot h-[50vh] w-full ">
            <div className="footerbot-head flex flex-col justify-center items-center gap-5">
            <h1 className="text-6xl	p-10 cinzel">Get better Work</h1>
        <p className="w-[60%] text-center	">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias maxime deleniti earum distinctio adipisci porro beatae nobis necessitatibus in quisquam!</p>
        <div className="footer-input flex gap-5">
            <input type="email" className="outline-[5px] border-2 p-1	text-center" placeholder="example@gmail.com"/>
            <button className="bg-indigo-600 text-gray-100	pl-2 pr-2 rounded-[4px] shadow-violet-500	shadow-xl try-for-free-button" >Try for Free</button>
        </div>
            </div>
      <div className="footerbot-down flex w-full h-full p-3 mt-5">
        <div className="footerbot-left w-[25%] flex flex-col h-full justify-center gap-4 items-center">
            <h1 className="text-[30px] font-bold">MRstudio</h1>
            <p className="text-left ml-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem voluptatum labore, laborum necessitatibus dolor!</p>
            <div className="icons flex w-[60%] justify-evenly">
               <Link to='#'><FontAwesomeIcon icon={faFacebookF} className="w-[20px] h-[20px] rounded-full border-1 text-sky-200	"></FontAwesomeIcon></Link> 
              <Link to='#'> <FontAwesomeIcon icon={faInstagram} className="w-[20px] h-[20px] rounded-full border-1 text-sky-200	"></FontAwesomeIcon></Link> 
              <Link to='#'> <FontAwesomeIcon icon={faLinkedin} className="w-[20px] h-[20px] rounded-full border-1 text-sky-200	"></FontAwesomeIcon></Link> 
              <Link to='#'><FontAwesomeIcon icon={faPinterest} className="w-[20px] h-[20px] rounded-full border-1 text-sky-200	"></FontAwesomeIcon></Link>  
            </div>
        </div>
        <div className="footerbot-left w-[25%] flex flex-col h-full justify-center gap-4 items-end">
            <h1 className="text-[18px] font-bold text-left	">Links</h1>
            <div className="icons flex flex-col w-[100%] justify-evenly text-right h-[50%] ">
               <Link to='/' className="text-blue-600	">Home</Link>
               <Link to='/about' className="text-blue-600	">About</Link>
               <Link to='/pricing' className="text-blue-600	">Pricing</Link>
               <Link to='/downloads' className="text-blue-600	">Download</Link>
               <Link to='/services' className="text-blue-600	">Services</Link>


            </div>
        </div>
        <div className="footerbot-left w-[25%] flex flex-col h-full justify-center gap-4 items-end">
        <h1 className="text-[18px] font-bold text-bold text-left">Support</h1>
            <div className="icons flex flex-col w-[100%] justify-evenly text-right  h-[50%] ">
               <Link to='/' className="text-blue-600	">FAQs</Link>
               <Link to='/about' className="text-blue-600	">How it</Link>
               <Link to='/pricing' className="text-blue-600	">Features</Link>
               <Link to='/downloads' className="text-blue-600	">Contact</Link>
               <Link to='/services' className="text-blue-600	">Reporting</Link>


            </div>
        </div>
        <div className="footerbot-left w-[25%] flex flex-col h-full justify-center gap-4  items-end pr-4">
        <h1 className="text-[18px] font-bold ">Contact Us</h1>
            <div className="icons flex flex-col w-[100%] justify-evenly items-end  h-[50%] ">
               <p className="text-blue-600	">9302931857</p>
               <p className="text-blue-600	">pranjalshukla245@gmail.com</p>
               <p className="text-blue-600	">Prayagraj,UP</p>
            </div>
        </div>
        <hr/>
        
      </div>
      <div className="footerbot1 w-full flex justify-around p-9">
            <div className="foo-left">
                <h3>Copyright & Design by MRstudio</h3>
            </div>
            <div className="foo-right flex gap-4">
                <p>Terms and Conditions</p> |
                <p>Privacy Policy</p>

            </div>
        </div>
        </div>
        </>
    )
}
