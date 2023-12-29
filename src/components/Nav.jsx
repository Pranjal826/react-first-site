import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap, Power2 } from "gsap";

const Nav = () => {
  useEffect(() => {
    // GSAP animation
    gsap.from("nav", { opacity: 0, duration: 1.5, ease: Power2.easeInOut });
    gsap.from("nav a", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: Power2.easeInOut,
      stagger: 0.5, // Stagger the links by 0.2 seconds
    });
  }, []);

  return (
    <nav className="flex justify-between bg-red-50 fixed w-screen z-10">
      <h1 className="p-5">MdStudio</h1>
      <div className="flex justify-end p-5 gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/house">Types of House</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">
          <button className="rounded-lg border-grey px-4 border-2">Login</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
