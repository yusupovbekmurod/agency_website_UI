import React, { useEffect, useRef } from "react";
import "./Header.css";
import top from "../../images/top.png";
import createGlobe from "cobe";
import Portfolio from "../../images/portfolio.png"
import Fade from 'react-reveal/Fade';
import Navbar from "../Navigation/Navbar";

import bottom from "../../images/buttom.png";

export default function Head() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 460 * 2,
      height: 420 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    // let - = "for"
    <div className="">
      <div className="header-background">
      <Navbar />
      <img src={top} alt="" className="top-img" />
      <img src={bottom} alt="" className="bottom-img" />
      <div className="d-flex style-items container globus">
        <div className="abaut-us">
          <span className="h1 text-light d-block font">
          <Fade top big cascade>
            Biz veb-saytlar, ilovalarni ishlab chiqamiz
          </Fade>
          </span>
          <p className="bio">
          <Fade bottom big cascade>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Fade>
          </p>
          <Fade left big>
          <img src={Portfolio} alt="" className="logo-portfolio"/>
          </Fade>
        </div>
        <Fade top>
        <div>
          <canvas
            ref={canvasRef}
            className="canvas"
            style={{
              width: 500,
              height: 570,
              maxWidth: "100%",
              aspectRatio: 1,
            }}
          />
        </div>
          </Fade>
      </div>
      </div>
    </div>
  );
}
