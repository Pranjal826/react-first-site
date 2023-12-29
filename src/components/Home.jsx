import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import './App.css'
import Div3 from "./Div3";
import Div4 from "./Div4";
import { Overlay } from "./Overlay";
import Footertop from "./Footertop";
import Surprise from "./Surprise";
import { Footerbot } from "./Footerbot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
        // Example GSAP animations (adjust as needed)
        gsap.from(".left, .div3, .text-2xl", {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            delay: 0.5, // Adjust the delay as needed
            scrollTrigger: {
                trigger: ".left",
                start: "top center",
                end: "bottom center",
                scrub: 1,
            },
        });
    }, []);
    return (
        <>
            <div className="w-full h-max flex flex-col items-center">
                <div className="div1 flex w-full justify-start">
                    <div className="left p-10 w-6/12 h-full bg-gradient-to-r from-blue-300 to-blue-20 flex justify-evenly flex-col	">
                        <h1 className="text-7xl	text-left tracking-wider questrial">Enjoy your <br></br> dream vacation</h1>
                        <h4 className="mt-10 m-plus text-2xl mb-[80px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, ratione laborum maiores eveniet eos quaerat voluptatem! Facilis maxime labore accusamus.</h4>
                        <div className="hotel-name flex items-center gap-4 mb-[80px]">
                            <div className="circle w-12 h-12 border-indigo-50 border-2 rounded-full	">
                            </div>
                            <h1 className="text-2xl text-teal-800 ">Warwick Hotels and Resorts</h1>
                        </div>
                    </div>

                </div>
               <Overlay/>
                <Div3/>
                <Surprise/>
                <Div4/>
                <Footertop/>
                <Footerbot/>
            </div>

        </>
    )
};

export default Home;
