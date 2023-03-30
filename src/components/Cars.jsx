import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { teslaCars } from "../App/constants";
import CustomOrder from "./CustomOrder";
import ScrollArrow from "../components/elements/ScrollArrow";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Cars = () => {
  const imagesRef = useRef([]);
  const sectionRef = useRef([]);
  const infoContainerRef = useRef([]);
  const carCardRef = useRef([]);

  const [showCustomOrder, setShowCustomOrder] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //Add a listener for changes to the screen size

    const mediaQuery = window.matchMedia("(min-width: 640px)");
    setIsMobile(mediaQuery.matches);

    //Set the initial value of the `isMobile` state variable

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    //Define a callback function to handle changes to the media query

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //Remove the listener when the component is unmounted

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray(".section");

    const scrolling = {
      enabled: true,
      events: "scroll, wheel, touchmove, pointermove".split(","),
      prevent: (e) => e.preventDefault(),
      disable() {
        if (scrolling.enabled) {
          scrolling.enabled = false;
          window.addEventListener("scroll", gsap.ticker.tick, {
            passive: true,
          });
          scrolling.events.forEach((e, i) =>
            (i ? document : window).addEventListener(e, scrolling.prevent, {
              passive: false,
            })
          );
        }
      },
      enable() {
        if (!scrolling.enabled) {
          scrolling.enabled = true;
          window.removeEventListener("scroll", gsap.ticker.tick);
          scrolling.events.forEach((e, i) =>
            (i ? document : window).removeEventListener(e, scrolling.prevent)
          );
        }
      },
    };

    function goToSection(section, anim, i) {
      if (scrolling.enabled) {
        scrolling.disable();
        gsap.to(window, {
          scrollTo: { y: section, autoKill: false },
          onComplete: scrolling.enable,
          duration: 0.6,
        });
        gsap.fromTo(
          section,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          }
        );
        anim && anim.restart();
      }
    }
    sections.forEach((section, i) => {
      let tl = gsap.timeline();
      const intoAnim = tl
        .fromTo(
          section.querySelector(".bg"),
          {
            scale: 0.8,
          },
          {
            scale: 1,
            duration: 0.8,
          }
        )
        .fromTo(
          section.querySelectorAll(".section-heading"),
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.4,
          }
        )
        .fromTo(
          section.querySelectorAll(".buttons"),
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.5,
          }
        )
        

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () => goToSection(section, intoAnim),
        onEnterBack: () => goToSection(section, intoAnim),
      });
    });
  }, []);

  const hideOverflow = () => {
    const body = document.getElementsByTagName("html")[0];

    {
      !showCustomOrder
        ? (body.style.overflow = "hidden")
        : (body.style.overflow = "auto");
    }
  };

  const activeSection = (section, subsection) => {
    section.classList.add("active");
    subsection.classList.add("active");
  };

  const removeActiveSection = (section, subsection) => {
    section.classList.remove("active");
    subsection.classList.remove("active");
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let activeContainer = document.querySelector(".info-container.active");
      let activeCard = document.querySelector(".car-card.active");

      gsap.fromTo(
        activeContainer,
        {
          backgroundColor: "#232323",
          ease: "bounce",
        },
        {
          backgroundColor: "black",
          ease: "bounce",
        }
      );

      gsap.fromTo(
        activeCard,
        {
          scale: 0.8,
        },
        {
          scale: 1,
          delay: 0.1,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(document.querySelectorAll('.scroll-arrow'), {
        opacity: 1,
      }, {
        opacity: 0,
        scrollTrigger: {
          trigger: activeCard,
          scroller: activeCard,
          start: 'top top',
          end: '+=100',
          scrub: true,
        }
      })
    });

    return () => ctx.revert();
  });

  return (
    <>
      {teslaCars.map((model, i) => (
        <section key={model.id} className="section h-screen w-full">
          <div
            ref={(e) => (sectionRef.current[i] = e)}
            className="outer w-full h-full overflow-y-hidden"
          >
            <div className="inner w-full h-full overflow-y-hidden flex justify-center items-center">
              <div
                style={
                  showCustomOrder ? { display: "flex" } : { display: "none" }
                }
                ref={(e) => (infoContainerRef.current[i] = e)}
                className="info-container absolute w-full h-full z-10 justify-center items-center hidden"
              >
                <div
                  ref={(e) => (carCardRef.current[i] = e)}
                  className="car-card relative w-[95%] sm:w-[80%] md:w-[70%] h-[80%] z-10 bg-t-white rounded-lg overflow-y-scroll overflow-x-hidden"
                >
                  <div className="scroll-arrow absolute w-10 h-10 right-[5%] bottom-[10px] z-10"
                  >
                    <ScrollArrow />
                  </div>
                  <div className="bg-t-white w-full h-[6%] sticky top-0 flex items-center justify-end z-20 pl-6 pt-6 pb-6 pr-2">
                    <button
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "500",
                      }}
                      className="text-center block w-[36px] h-[36px] text-lg rounded-[50%] bg-t-light-grey text-t-very-dark-grey drop-shadow-lg hover:bg-t-medium-grey transition-all duration-700"
                      onClick={() => {
                        setShowCustomOrder(!showCustomOrder);
                        hideOverflow();
                        removeActiveSection(
                          infoContainerRef.current[i],
                          carCardRef.current[i]
                        );
                      }}
                    >
                      X
                    </button>
                  </div>
                  <CustomOrder
                    id={model.id}
                    paints={model.paints}
                    menuFrontImage={model.frontColors}
                    menuSideImage={model.sideColors}
                    menuWheelImage={model.wheelColors}
                    menuBackImage={model.backColors}
                    title={model.title}
                    autonomy={model.autonomy}
                    maxSpeed={model.maxSpeed}
                    oToHundred={model.oToHundred}
                    interiorImages={model.interiorImages}
                    yokeInteriorImages={model.yokeInteriorImages}
                    interiorColors={model.interiorColors}
                    steering={model.steering}
                  />
                </div>
              </div>
              <div
                ref={(e) => (imagesRef.current[i] = e)}
                className={`bg scale-[0.8] flex items-start sm:items-end justify-center absolute w-full  h-full bg-cover bg-center`}
                style={{
                  backgroundImage: `url(${
                    isMobile ? model.mainImage : model.mainImageMobile
                  })`,
                }}
              >
                <div className="section-heading text-t-white flex flex-col items-center text-center mt-[20%] sm:mt-0 h-fit w-[80%] sm:w-[70%] opacity-0">
                  <h2
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "600",
                    }}
                    className="w-full text-5xl mb-4 cursor-default"
                  >
                    {model.title}
                  </h2>
                  <p
                    className="w-full text-sm underline underline-offset-2 cursor-pointer hover:scale-[1.1] transition-all duration-500"
                    style={{
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    Book a test drive
                  </p>
                  <div
                    style={{
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: "600",
                    }}
                    className="buttons w-full flex flex-col sm:flex-row justify-around items-center p-4 opacity-0"
                  >
                    <button className="button-explore bg-t-medium-grey text-t-very-dark-grey hover:bg-t-light-grey pl-8 pr-8 pt-2 pb-2 rounded-md w-[80%] sm:w-[45%] mt-2 mb-2 sm:mb-4 sm:mt-4 drop-shadow-xl transition-all duration-500">
                      Explore
                    </button>

                    <button
                      className="button-order bg-t-very-dark-grey pl-8 pr-8 pt-2 pb-2 rounded-md w-[80%] sm:w-[45%] mt-2 mb-2 sm:mb-4 sm:mt-4 drop-shadow-xl hover:bg-neutral-800 text-t-light-grey hover:text-white transition-all duration-500"
                      onClick={() => {
                        setShowCustomOrder(!showCustomOrder);
                        hideOverflow();
                        activeSection(
                          infoContainerRef.current[i],
                          carCardRef.current[i]
                        );
                      }}
                    >
                      Custom Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Cars;
