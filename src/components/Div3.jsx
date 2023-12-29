import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { gsap,ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Div3 = () => {
  useEffect(() => {
    gsap.from(".card1, .card2, .card3", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".city-name",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    gsap.from(".lower", {
      scaleX: 0,
      transformOrigin: "left",
      duration: 1,
      scrollTrigger: {
        trigger: ".lower",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);
    return(
        <>
        <div className="city-name h-[32rem]	w-full flex flex-col items-center justify-evenly ">
                    <h1 className="text-7xl caveat">Enter City of Choice</h1>
                    <div className="cards w-full h-3/5 flex justify-evenly items-center">
                        <div className="card1 flex flex-col w-3/12	h-full">
                            <div className="card1-img flex justify-between p-3">
                                <h2 className=" text-teal-50 tracking-[5px]">MIRACLE RESORT</h2>
                                <FontAwesomeIcon icon={faPen} className="w-[20px] h-[20px] rounded-full border-2 text-violet-50	"></FontAwesomeIcon>

                            </div>
                            <div className="card-cont flex justify-between items-center bg-neutral-100 shadow-2xl">
                                <div className="left-cont p-4 ">
                                    <h1 className="text-red-500	">$600.00</h1>
                                    <h1 className="font-bold">Booking Id:82828917</h1>
                                    <p className="text-violet-500">Turky Resort</p>
                                </div>
                                <div className="right-cont circle w-12 h-12 border-indigo-50 border-2 rounded-full">

                                </div>
                            </div>
                        </div>
                        <div className="card2 flex flex-col w-3/12	h-full">
                            <div className="card2-img flex justify-between p-3">
                                <h2 className=" text-teal-50 tracking-[5px]">Warwick Hotels and Resorts</h2>
                                <FontAwesomeIcon icon={faPen} className="w-[20px] h-[20px] rounded-full border-2 text-violet-50	"></FontAwesomeIcon>

                            </div>
                            <div className="card-cont flex justify-between items-center bg-neutral-100 shadow-2xl">
                                <div className="left-cont p-4 ">
                                    <h1 className="text-red-500	">$600.00</h1>
                                    <h1 className="font-bold">Booking Id:82828917</h1>
                                    <p className="text-violet-500">Turky Resort</p>
                                </div>
                                <div className="right-cont circle w-12 h-12 border-indigo-50 border-2 rounded-full">

                                </div>
                            </div>
                        </div>
                        <div className="card3 flex flex-col w-3/12	h-full">
                            <div className="card3-img flex justify-between p-3">
                                <h2 className=" text-teal-50 tracking-[5px]">MIRACLE RESORT</h2>
                                <FontAwesomeIcon icon={faPen} className="w-[20px] h-[20px] rounded-full border-2 text-violet-50	"></FontAwesomeIcon>

                            </div>
                            <div className="card-cont flex justify-between items-center bg-neutral-100 shadow-2xl">
                                <div className="left-cont p-4 ">
                                    <h1 className="text-red-500	">$600.00</h1>
                                    <h1 className="font-bold">Booking Id:82828917</h1>
                                    <p className="text-violet-500">Turky Resort</p>
                                </div>
                                <div className="right-cont circle w-12 h-12 border-indigo-50 border-2 rounded-full">

                                </div>
                            </div>
                        </div>
                        <div className="lower w-[95%] h-[20rem] bg-indigo-200 shadow-2xl	 rounded-[10px] absolute top-[50%] z-[-1]">

                        </div>
                    </div>

                </div>
        </>
    )
}
export default Div3