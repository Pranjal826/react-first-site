import React, { useEffect } from "react";
import { gsap,ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Div4 = () => {
  useEffect(() => {
    // Fade-in effect for images
    gsap.from(".pleasure-left img", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".pleasure-left",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Staggered animation for text content
    gsap.from(".pleasure-right > *", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".pleasure-right",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

    return(
        <>
        <div className="pleasure caveat w-full h-[55%]  mt-[20vh] flex " >
            <div className="pleasure-left w-[50%] h-full p-10 flex gap-[20px]">
                <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" className="w-[14vw] h-[50vh] rounded-3xl	" alt="" />
                <img src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" className="w-[14vw] h-[50vh] rounded-3xl translate-y-[-30%]	" alt="" />
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" className="w-[14vw] h-[50vh] rounded-3xl	" alt="" />

            </div>
            <div className="pleasure-right flex flex-col w-[50%] p-5">
                <h1 className="text-2xl text-red-300	">Welcome to MRstudio Resort</h1>
                <h1 className="text-6xl">Relaxing Pleasure</h1>
                <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti id minima repudiandae labore doloremque atque, quae eum cum commodi vitae, officia libero, hic asperiores? Fugiat dolorum voluptatem earum ut voluptas quod quas ea vel error autem, deleniti animi et suscipit itaque recusandae. In corporis quasi doloribus error. Eum quia veniam repellat rerum quasi aliquid cupiditate, suscipit odio illum soluta!</p>
            </div>
        </div>
        </>
    )
}
export default Div4