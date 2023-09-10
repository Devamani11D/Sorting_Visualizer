import React from 'react'
import "./Visualize.css"
const Visualize = () => {
  return (
    <div className="bar">
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side right">
              {/* <div
                className="color-bar right-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }} */}
              {/* ></div> */}
            </div>
            <div className="side left">
              {/* <div
                className="color-bar left-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }} */}
              {/* ></div> */}
            </div>
            <div className="side front">
              {/* <div
                className="color-bar front-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div> */}
            </div>
            <div className="side back">
              {/* <div
                className="color-bar back-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div> */}
            </div>
          </div>
  )
}

export default Visualize;
