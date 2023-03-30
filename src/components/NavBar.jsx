import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from 'react-router-dom'
const NavBar = () => {
  const navRef = useRef(null);
  const comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { backgroundColor: 'transparent' },
        { backgroundColor: 'black' , duration: 1, ease: "power1.out",scrollTrigger: {
          target: navRef,
          scrub: true,
          start: 'top top',
          end: '+=100%'
        } }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      className="w-full flex justify-center items-center h-[60px] sm:h-[80px] fixed top-0 z-50"
      ref={navRef}
    >
      <div className="h-full w-[60%] md:w-[80%] flex justify-center">
        <ul
          className="w-full flex justify-evenly items-center child-hover:scale-[1.15] child:cursor-pointer child:transition-all child:duration-500 rounded-b-full text-white text-lg"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <li className="hidden lg:block">MODEL S</li>
          <li className="hidden lg:block">MODEL 3</li>
          <li className="hidden lg:block">MODEL X</li>
          <li>
            <Link
              to='/'
              className="logo text-4xl"
              style={{ fontFamily: "Tesla, sans-serif" }}
            >
              T E S L A
            </Link>
          </li>
          <li className="hidden lg:block">SHOP</li>
          <li className="hidden lg:block">ACCOUNT</li>
          <li className="hidden lg:block">MENU</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
