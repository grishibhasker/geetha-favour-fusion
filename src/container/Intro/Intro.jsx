import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"; // corrected import path for icons
import { meal } from "../../constants"; // assumed this is a path to the video source
import "./Intro.css";

const Intro = () => {
  // Corrected initialization of useState with a boolean value (initially set to false)
  const [playVideo, setPlayVideo] = useState(false);

  // Ref for the video element
  const vidRef = useRef(null);

  const handleVideo = () => {
    // Toggle the play/pause state
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      {/* Video source and reference */}
      <video src={meal} ref={vidRef} type="video/mp4" loop controls={false} />

      {/* Overlay with play/pause button */}
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
