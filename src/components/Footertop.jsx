import React, { useEffect } from "react";
import { gsap,ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Footertop = () => {
  useEffect(() => {
    // Fade-in effect for logos
    gsap.from(".logo", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".footer-one",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      
    });

    // Staggered animation for text content
    gsap.from(".inner-footer > *", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".footer-one",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    }),
    gsap.to(".footer-right", {
        opacity: 0,
        scale: 0.8,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: ".footer-one",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    
  }, []);
    return(
        <>
        <div className="footer-one w-full h-[50vh] bg-cyan-100 flex items-center justify-center relative">
            <div className="footer w-[90%] h-[70%] bg-white	flex">
                <div className="footer-left h-full p-10">
                    <h1 className="text-4xl	">Search for other Top Airlines</h1>
                    <div className="inner-footer flex gap-10 h-full">
                    <div className="inner-left-footer flex flex-col justify-evenly h-full">
                        <div className="logo flex gap-4">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fKU5SCpXEJUgMhbBlqtuIAHaHZ%26pid%3DApi&f=1&ipt=aef80668d1d3f9a736d15d7c4a914f8d57d089beca103ee2bc91cd3d96888360&ipo=images" className="w-[30px]" alt="" />
                            <h2>Bimen BD Airlines</h2>
                        </div>
                        <div className="logo flex gap-4">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HI7xRrIfc63vSGHDx9RIMwAAAA%26pid%3DApi&f=1&ipt=72f45055dc1ff883e94ddf8270e28333e48ebdd43e8f36a796e1d35bdd70bc2a&ipo=images" className="w-[30px]" alt="" />
                            <h2>Malaysia Airlines</h2>
                        </div>
                        <div className="logo flex gap-4">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.h0w6E2duvUEf352Fgfir0wHaHa%26pid%3DApi&f=1&ipt=c4fd8466cd1225c3a3b32be3cbd4dc780fe216fbaaf005b90fb5849c20335103&ipo=images" className="w-[30px]" alt="" />
                            <h2>Thai Lion Airlines</h2>
                        </div>

                    </div>
                    <div className="inner-left-footer flex flex-col justify-evenly h-full">
                        <div className="logo flex gap-4">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fcY8xEW-CRZyHRaTdOzW1wHaHa%26pid%3DApi&f=1&ipt=c5f07ea9d06bfba2dd8f10be0f1e97314a2207baf58bf7b763e6b7a96bd89a95&ipo=images" className="w-[30px]" alt="" />
                            <h2>Emirates</h2>
                        </div>
                        <div className="logo flex gap-4">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9O2diIXrsN7LlOJG_BI5vgHaHl%26pid%3DApi&f=1&ipt=1455d62453679a3d4bf3e39e262ef763e92d849ccd99d2ff97f18d5f3c328c8c&ipo=images" className="w-[30px]" alt="" />
                            <h2>Malindo Air</h2>
                        </div>
                        <div className="logo flex gap-4">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rooYH545SKeMzQkTiHyB8QHaGs%26pid%3DApi&f=1&ipt=b91525a50260a01f74ded4274b9f1e1ff8704f826f948bbb828e677dc100ef59&ipo=images" className="w-[30px]" alt="" />
                            <h2>Qatar Airways</h2>
                        </div>

                    </div>
                    </div>
                  
                </div>
               <div className="footer-right absolute right-[5%] bottom-[10%]"></div>
            </div>
        </div>
        </>
    )
}
export default Footertop;