import React, { useEffect } from "react";
import { gsap,ScrollTrigger } from "gsap/all";
import Video from './vid.mp4';

gsap.registerPlugin(ScrollTrigger);

const Surprise = () => {
  useEffect(() => {
    // Staggered animation for elements in the left section
    gsap.from(".surprise-left > *", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".surprise-left",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Video animation on the right section
    gsap.from(".surprise-right video", {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: ".surprise-right",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

    return(
        <>
        <div className="surpris w-full h-[70vh] translate-y-[25%] flex">
            <div className="surprise-left w-[50%] h-[100%] p-10 flex flex-col gap-[30px]">
                <h1 className="text-5xl caveat">Resort Surprises</h1>
                <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima quod consectetur dolores a recusandae explicabo? Cum?</p>
                <div className="surprise-lower flex flex-col gap-[20px]">
                <div className="surprise-cont flex gap-[20px] items-center">
                    <div className="img rounded-full w-[40px] h-[40px] border-indigo-300	border-2	">

                    </div>
                    <h1>Infinity Pool</h1>
                </div>
                <div className="surprise-cont flex gap-[20px] items-center">
                    <div className="img1 rounded-full w-[40px] h-[40px] border-indigo-300 border-2		">

                    </div>
                    <h1>The Beach</h1>
                </div>
                <div className="surprise-cont flex gap-[20px] items-center">
                    <div className="img2 rounded-full w-[40px] h-[40px] border-indigo-300 border-2		">

                    </div>
                    <h1>Beach Surprise</h1>
                </div>
                <div className="surprise-cont flex gap-[20px] items-center">
                    <div className="img3 rounded-full w-[40px] h-[40px] border-indigo-300 border-2">

                    </div>
                    <h1>Beach Activities</h1>
                </div>
                </div>
             
            </div>
            <div className="surprise-right p-10">
            <video width="800" height="400"  muted autoPlay loop>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </div>
        </div>
        </>
    )
}
export default Surprise