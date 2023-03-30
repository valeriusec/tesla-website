import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import TeslaVideo from "./media/TeslaVideo";
import ScrollArrow from "./elements/ScrollArrow";

import { header } from '../App/constants';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const headerRef = useRef(null);
  const comp = useRef();

  useLayoutEffect(() => {
    let tl = gsap.timeline();

    let ctx = gsap.context(() => {
      tl.fromTo(
        "#title1",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 0.8,
          x: 0,
          duration: 0.8,
          delay: 0.8,
          fontStyle: 'italic',
          ease: "power1.easeinout",
        }
      ),
        tl.fromTo(
          "#title2",
          {
            opacity: 0,
            x: -100,
          },
          {
            opacity: 0.8,
            x: 0,
            duration: 0.8,
            fontStyle: 'italic',
            ease: "power1.easeinout",
          }
        ),
        tl.fromTo(
          "#title3",
          {
            opacity: 0,
            x: -100,
            color: "white",
          },
          {
            opacity: 0.8,
            x: 0,
            duration: 0.8,
            color: "#cc0000",
            fontStyle: 'italic',
            ease: "power1.easeinout",
          },
        );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  

  return (
    <div className="w-full h-screen section">
      <div
        className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] flex flex-col 
        justify-center items-center text-center text-t-light-grey text-7xl lg:text-9xl md:text-8xl sm:text-7xl z-10 child:mt-4 child:drop-shadow-xl child:cursor-default"
        style={{ fontFamily: "Archivo Black, sans-serif", fontWeight: "400" }}
        ref={headerRef}
      >
        {header.map(({ title, id }) => {
          return (
            <span key={title} id={id}>
              {title}
            </span>
          );
        })}
      </div>
      <TeslaVideo />
      <div className="overlay w-full h-screen bg-t-black absolute top-0 opacity-40"></div>
      <div className="w-[100px] h-[100px]">
        <ScrollArrow />
      </div>
    </div>
  );
};

export default Hero;
