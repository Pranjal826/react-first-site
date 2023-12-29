
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { gsap, ScrollTrigger  } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
export const Overlay=()=>{
    useEffect(() => {
        // GSAP animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".over-div",
            start: "top center",
            end: "bottom center",
            scrub: 1, // Smooth scrubbing effect
          },
        });
    
        // Define animations within the timeline
        tl.from(".over-left", { opacity: 0, x: -100, duration: 1 });
        tl.from(".over-mid", { opacity: 0, y: -50, duration: 1 }, "-=0.5");
        tl.from(".over-right", { opacity: 0, x: 100, duration: 1 }, "-=0.5");
      }, []);
    
    return(
        <>
         <div className="over-div flex  h-2/6 bg-gray-100 gap-1.5 w-9/12	shadow-2xl translate-y-[-5rem]">
                    <div className="over-left p-2 flex flex-col justify-evenly w-4/12">
                        <div className="over-left-top flex items-center justify-between p-10">
                            <h1 className="text-3xl">Facilities</h1>
                            <p className="text-rose-400	">See More</p>
                        </div>
                        <div className="over-left-bottom flex justify-evenly gap-10 ">
                            <div className="first-bot">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F9%2FCommercial-Swimming-Pool-PNG-High-Quality-Image.png&f=1&nofb=1&ipt=4ff22cca941dd21779f69ad14b54f6ce374a7cbaf371f64520c5eeec7ae16f31&ipo=images" className="w-12	h-11" alt="" />
                                <p className="text-center">Swimming <br /> pool</p>
                            </div>
                            <div className="second-bot">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.maCyE6-eUUhcB_mzhv0DFAHaGd%26pid%3DApi&f=1&ipt=90b0e3abb29d1cbe0a9d60e75a37900c288f58725fe3a8a4b3f3c70172bc7315&ipo=images" className="w-11 h-11" alt="" />
                                <p className="text-center">Wifi</p>
                            </div>
                            <div className="third-bot">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fhotel-service-2-3%2F100%2FUntitled-3-32-512.png&f=1&nofb=1&ipt=6d8ec9fe9d5ee95e90e61d96c25b7a6db93ef25b579328abfd030fff3723996a&ipo=images" className="w-13 h-11" alt="" />
                                <p className="text-center">A.C</p>
                            </div>
                            <div className="fourth-bot">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RjoH8OZ3XmotL3x0qSbQEQHaFv%26pid%3DApi&f=1&ipt=4c13f8a7639baca8bef985bf516d65dd0a526f7186f05189e3fddd278e3b59f6&ipo=images" className="w-13 h-11" alt="" />
                                <p className="text-center">Dinner</p>

                            </div>
                        </div>

                    </div>
                    <div className="over-mid flex flex-col justify-evenly items-center w-3/12	">
                        <h1>Hotels for You</h1>
                        <p>5 days 6 nights</p>
                        <p>USD $506.00</p>
                    </div>

                    <div className="over-right flex flex-col justify-evenly w-5/12 p-1">
                        <div className="right-top flex justify-evenly w-full">
                            <p className="text-indigo-200">150 results</p>
                            <FontAwesomeIcon icon={faPen} className="text-blue-300" />
                            <FontAwesomeIcon icon={faSearch} className="text-blue-300	" />

                        </div>
                        <div className="right-bot flex justify-evenly">
                            <img src="https://images.unsplash.com/photo-1697665666330-7acf230fa830?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" className="w-12 h-12 rounded-full" alt="" />
                            <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww" className="w-12 h-12 rounded-full" alt="" />
                            <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww" className="w-12 h-12 rounded-full" alt="" />
                            <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" className="w-12 h-12 rounded-full" alt="" />
                            <img src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" className="w-12 h-12 rounded-full" alt="" />

                        </div>
                    </div>

                </div>
        </>
    )
}
