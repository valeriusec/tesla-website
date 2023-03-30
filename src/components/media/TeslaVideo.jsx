import React, { useEffect, useRef, useState } from "react";
import { teslaVideoDesktop } from "../../assets";

const TeslaVideo = () => {
  const videoRef = useRef(null);

  const [isSuspend, setIsSuspend] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //Add a listener for changes to the screen size

    const mediaQuery = window.matchMedia("(max-width: 500px)");
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
    // Add event listeners
    const videoElement = videoRef.current;
    videoElement.addEventListener("suspend", handleSuspend);
    videoElement.addEventListener("play", handlePlay);

    // Set playing property
    if (!Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, "playing")) {
      Object.defineProperty(HTMLMediaElement.prototype, "playing", {
        get: function () {
          return !!(
            this.currentTime > 0 &&
            !this.paused &&
            !this.ended &&
            this.readyState > 2
          );
        },
      });
    }

    // Remove event listeners on cleanup
    return () => {
      videoElement.removeEventListener("suspend", handleSuspend);
      videoElement.removeEventListener("play", handlePlay);
    };
  }, []);

  const handleSuspend = () => {
    setIsSuspend(true);
  };

  const handlePlay = () => {
    setIsSuspend(false);
  };
  return (
      <video
        ref={videoRef}
        src={teslaVideoDesktop}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover"
        data-wf-ignore="true"
        data-object-fit="cover"
      ></video>
  );
};

export default TeslaVideo;
