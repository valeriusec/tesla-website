import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const CustomOrder = (props) => {
  const [isColor, setIsColor] = useState(0);
  const [interiorColor, setInteriorColor] = useState(0);
  const [isSteering, setIsSteering] = useState(0);

  const [activeColorButton, setActiveColorButton] = useState(0);
  const [activeInteriorButton, setActiveInteriorButton] = useState(0);
  const [activeSteeringButton, setActiveSteeringButton] = useState(0);

  const {
    id,
    menuFrontImage,
    menuSideImage,
    menuWheelImage,
    menuBackImage,
    title,
    autonomy,
    maxSpeed,
    oToHundred,
    interiorImages,
    yokeInteriorImages,
    interiorColors,
    paints,
    steering,
  } = props;

  const handleColorClick = (index) => {
    setActiveColorButton(index);
  };

  const handleInteriorClick = (index) => {
    setActiveInteriorButton(index);
  };

  const handleSteeringClick = (index) => {
    setActiveSteeringButton(index);
  };

  const activeButtonStyle = { outline: "3px solid #3e6ae1" };
  const inactiveButtonStyle = {};

  return (
    <div>
      <div className="w-full pt-20 bg-t-white flex flex-col items-center justify-center relative pb-36">
        <div
          className="absolute top-2 w-[85%] h-fit drop-shadow-xl bg-t-white p-4 z-10 text-[14px] flex"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 flex justify-center items-center mr-2 rounded-sm"
          >
            <path
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.75 14.25a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 1.5 0v4.5zM12 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              fill="#3e6ae1"
            ></path>
          </svg>
          <p className="cursor-default">
            Take delivery of your car by 31 March 2023 and benefit from 5,000 km
            of free Supercharger charging.
            <span className="underline underline-offset-4 ml-2 cursor-pointer">
              Explore ready for delivery.
            </span>
          </p>
        </div>
        <motion.img 
        initial={{x: 100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.1}}
        className="mt-20 sm:mt-4" src={menuFrontImage[`${isColor}`]} />
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "400",
          }}
          className="w-full mt-24 text-center"
        >
          <div
            className="w-full flex justify-center h-fit pt-10 pb-10"
            style={id === "Model3" ? { display: "none" } : {}}
          >
            <div className="w-[80%]  h-fit flex justify-center gap-2">
              <button
                onClick={() => {
                  setIsColor(0), handleColorClick(0);
                }}
                className="w-[52px] h-[52px] rounded-[50%] flex justify-center items-center"
                style={
                  activeColorButton === 0
                    ? activeButtonStyle
                    : inactiveButtonStyle
                }
              >
                <img
                  className="rounded-[50%] w-[85%] h-[85%]"
                  src={paints[0]}
                  alt="white"
                />
              </button>
              <button
                style={
                  activeColorButton === 1
                    ? activeButtonStyle
                    : inactiveButtonStyle
                }
                onClick={() => {
                  setIsColor(1), handleColorClick(1);
                }}
                className="w-[52px] h-[52px] rounded-[50%] flex justify-center items-center"
              >
                <img
                  className="rounded-[50%] w-[85%] h-[85%]"
                  src={paints[1]}
                  alt="black"
                />
              </button>

              <button
                style={
                  activeColorButton === 2
                    ? activeButtonStyle
                    : inactiveButtonStyle
                }
                onClick={() => {
                  setIsColor(2), handleColorClick(2);
                }}
                className="w-[52px] h-[52px] rounded-[50%] flex justify-center items-center"
              >
                <img
                  className="rounded-[50%] w-[85%] h-[85%]"
                  src={paints[2]}
                  alt="gray"
                />
              </button>

              <button
                style={
                  activeColorButton === 3
                    ? activeButtonStyle
                    : inactiveButtonStyle
                }
                onClick={() => {
                  setIsColor(3), handleColorClick(3);
                }}
                className="w-[52px] h-[52px] rounded-[50%] flex justify-center items-center"
              >
                <img
                  className="rounded-[50%] w-[85%] h-[85%]"
                  src={paints[3]}
                  alt="blue"
                />
              </button>

              <button
                style={
                  activeColorButton === 4
                    ? activeButtonStyle
                    : inactiveButtonStyle
                }
                onClick={() => {
                  setIsColor(4), handleColorClick(4);
                }}
                className="w-[52px] h-[52px] rounded-[50%] flex justify-center items-center"
              >
                <img
                  className="rounded-[50%] w-[85%] h-[85%]"
                  src={paints[4]}
                  alt="red"
                />
              </button>
            </div>
          </div>
          <h2
            style={{ fontWeight: "500" }}
            className="w-full text-5xl text-t-very-dark-grey cursor-default"
          >
            {title}
          </h2>
          <p className="w-full mt-4 mb-4 text-sm text-t-dark-grey cursor-default">
            Estimated delivery: Apr - Jun 2023
          </p>
          <div className="w-full flex justify-center mt-8 cursor-default">
            <ul className="w-full sm:w-[60%] flex justify-around">
              <li>
                <div
                  className="text-3xl text-t-very-dark-grey"
                  style={{ fontWeight: "500" }}
                >
                  {autonomy}
                  <span className="text-[16px]">km</span>
                </div>
                <div className="text-sm text-t-dark-grey">Autonomy</div>
              </li>
              <li>
                <div
                  className="text-3xl text-t-very-dark-grey"
                  style={{ fontWeight: "500" }}
                >
                  {maxSpeed}
                  <span className="text-[16px]">km/h</span>
                </div>
                <div className="text-sm text-t-dark-grey">Full speed</div>
              </li>
              <li>
                <div
                  className="text-3xl text-t-very-dark-grey"
                  style={{ fontWeight: "500" }}
                >
                  {oToHundred}
                  <span className="text-[16px]">s</span>
                </div>
                <div className="text-sm text-t-dark-grey">0-100km/h</div>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={id === "Model3" ? { display: "none" } : {}}
          className="w-full mt-6 mb-6"
        >
          <motion.img 
          initial={{y: 100, opacity: 0}}
          whileInView={{y: 0, opacity: 1,}}
          transition={{duration: 0.6}}
          src={menuSideImage[`${isColor}`]} />
        </div>
        <div
          className="flex items-center flex-col"
          style={id === "Model3" ? { marginTop: "10%" } : {}}
        >
          <h3
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "600" }}
            className="text-3xl text-t-very-dark-grey"
          >
            Interior
          </h3>
          <motion.img
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.1}}
            className="mt-10"
            src={
              isSteering === 1
                ? yokeInteriorImages[`${interiorColor}`]
                : interiorImages[`${interiorColor}`]
            }
          />
          <div
            className="w-full flex flex-col items-center justify-center h-fit pt-10 pb-10"
            style={id === "Model3" ? { display: "none" } : {}}
          >
            <div className="w-[80%]  h-fit flex justify-center gap-2">
              <button
                onClick={() => {
                  setInteriorColor(0), handleInteriorClick(0);
                }}
                className="w-[52px] h-[52px] rounded-[50%] flex justify-center items-center"
                style={
                  activeInteriorButton === 0
                    ? activeButtonStyle
                    : inactiveButtonStyle
                }
              >
                <img
                  className="rounded-[50%] w-[85%] h-[85%]"
                  src={interiorColors[0]}
                  alt="white"
                />
              </button>
              <button
                style={
                  activeInteriorButton === 1
                    ? activeButtonStyle
                    : inactiveButtonStyle
                }
                onClick={() => {
                  setInteriorColor(1), handleInteriorClick(1);
                }}
                className="w-[52px] h-[52px] rounded-[50%] flex justify-center items-center"
              >
                <img
                  className="rounded-[50%] w-[85%] h-[85%]"
                  src={interiorColors[1]}
                  alt="black"
                />
              </button>

              <button
                style={
                  activeInteriorButton === 2
                    ? activeButtonStyle
                    : inactiveButtonStyle
                }
                onClick={() => {
                  setInteriorColor(2), handleInteriorClick(2);
                }}
                className={`w-[52px] h-[52px] rounded-[50%] flex justify-center items-center ${
                  id === "ModelY" ? "hidden" : ""
                }`}
              >
                <img
                  className="rounded-[50%] w-[85%] h-[85%]"
                  src={interiorColors[2]}
                  alt="gray"
                />
              </button>
            </div>
            <div
              className={`mt-6 ${
                id === "Model3" || id === "ModelY" ? "hidden" : ""
              }`}
            >
              <h4
                className="text-xl text-t-very-dark-grey"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                }}
              >
                Steering Wheel Controls
              </h4>
              <div className="w-full flex flex-col items-center justify-center h-fit pt-10 pb-10">
                <div className="w-[80%]  h-fit flex justify-center gap-2">
                  <button
                    onClick={() => {
                      setIsSteering(0), handleSteeringClick(0);
                    }}
                    className="w-[52px] h-[52px] rounded-[50%] flex justify-center items-center"
                    style={
                      activeSteeringButton === 0
                        ? activeButtonStyle
                        : inactiveButtonStyle
                    }
                  >
                    <img
                      className="rounded-[50%] w-[85%] h-[85%]"
                      src={
                        id === "ModelS" || id === "ModelX" ? steering[0] : ""
                      }
                      alt="white"
                    />
                  </button>
                  <button
                    style={
                      activeSteeringButton === 1
                        ? activeButtonStyle
                        : inactiveButtonStyle
                    }
                    onClick={() => {
                      setIsSteering(1), handleSteeringClick(1);
                    }}
                    className="w-[52px] h-[52px] rounded-[50%] flex justify-center items-center"
                  >
                    <img
                      className="rounded-[50%] w-[85%] h-[85%]"
                      src={
                        id === "ModelS" || id === "ModelX" ? steering[1] : ""
                      }
                      alt="black"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="flex flex-col w-full p-[10%]"
        >
          <motion.div 
          initial={{x: -100}}
          whileInView={{x: 0}}
          transition={{duration: 0.6, delay: 0.1}}
          className="w-full h-full flex flex-col items-center">
            <h3
              className="text-center text-3xl text-t-very-dark-grey"
              style={{ fontWeight: "600" }}
            >
              Advanced Autopilot
            </h3>
            <span className="mt-4" style={{ fontWeight: "500" }}>
              $3,800
            </span>
            <div className="mt-4 w-full flex flex-col justify-start">
              <ul className="list-disc text-t-very-dark-grey flex flex-col gap-2">
                <li>Navigate on Autopilot</li>
                <li>Automatic lane change</li>
                <li>Autopark</li>
                <li>Summon</li>
                <li>Smart Summon</li>
              </ul>
            </div>
            <div className="flex justify-center gap-6 pt-2 pb-2 mt-4 w-full">
              <button className="text-sm text-t-white rounded-md w-[125px] h-[30px] bg-[#3e6ae1]">
                Add
              </button>
              <button className="text-sm text-t-very-dark-grey rounded-md w-[125px] h-[30px] bg-t-light-grey">
                Characteristics
              </button>
            </div>
          </motion.div>
          <motion.div 
          initial={{x: 100}}
          whileInView={{x: 0}}
          transition={{duration: 0.6, delay: 0.1}}
          className="w-full h-full mt-10 flex flex-col items-center">
            <h3
              className="text-3xl text-center text-t-very-dark-grey"
              style={{ fontWeight: "600" }}
            >
              Autonomous driving to its fullest potential
            </h3>
            <span className="mt-4" style={{ fontWeight: "500" }}>
              $7,500
            </span>
            <div className="mt-4 w-full flex flex-col justify-start">
              <ul className="list-disc text-t-very-dark-grey flex flex-col gap-2">
                <li>All features of Autopilot Basic and Autopilot Advanced</li>
                <li>Control of traffic lights and stop signs</li>
                <li className="list-none"></li>
                <li style={{ fontWeight: "600" }} className="list-none text-sm">
                  Coming soon:
                </li>
                <li>Autosteer system on city streets</li>
              </ul>
            </div>
            <div className="flex justify-center gap-6 pt-2 pb-2 mt-4 w-full">
              <button className="text-sm text-t-white rounded-md w-[125px] h-[30px] bg-[#3e6ae1]">
                Add
              </button>
              <button className="text-sm text-t-very-dark-grey rounded-md w-[125px] h-[30px] bg-t-light-grey">
                Characteristics
              </button>
            </div>
          </motion.div>
          <div className="mt-6">
            <p className="text-[12px]" style={{ fontWeight: "400" }}>
              The currently available functions require active supervision of
              the driver and do not allow autonomous driving of the vehicle.
              Some functions require the activation of the direction indicators
              and have a limited range. The activation and use of these features
              depend on achieving a level of reliability that is far beyond the
              control of a driver, and which is demonstrated by billions and
              billions of miles of road experience, as well as the passage of
              appropriate regulations , which in some jurisdictions could take
              quite a long time. As these autonomous driving features evolve,
              your car will continuously be upgraded through software updates
              via the Internet.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-10">
          <h3
            className="text-center text-3xl text-t-very-dark-grey"
            style={{ fontWeight: "600" }}
          >
            Reload
          </h3>
          <div className="mt-6 w-[80%] flex justify-between text-t-very-dark-grey">
            <div>
              <input
                className="cursor-pointer scale-[1.6]"
                id="reload"
                type={"checkbox"}
              />
              <label
                style={{ fontWeight: "500" }}
                className="cursor-pointer ml-2 text-t-dark-grey"
                for="reload"
              >
                Wall connector
              </label>
            </div>
            <span style={{ fontWeight: "500" }}>$500</span>
          </div>
          <div className="mt-6 w-full flex justify-center">
            <button style={{fontFamily: 'Montserrat, sans-serif'}} className="text-sm rounded-md text-t-very-dark-grey bg-t-light-grey w-[125px] h-[30px]">
              Find out more
            </button>
          </div>
        </div>
        <motion.div 
        initial={{y: 200, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.1}}
        className="w-full flex flex-col items-center mt-20">
          <h2
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "600" }}
            className="text-center text-3xl text-t-very-dark-grey"
          >
            Order your {title}
          </h2>
          <span
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500" }}
            className="mt-2 text-sm"
          >
            Estimated delivery: Apr - Jun 2023
          </span>
          <button
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500" }}
            className="w-[95%] h-[40px] rounded-md bg-[#3e6ae1] text-white text-sm mt-8"
          >
            Go to payment
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomOrder;
