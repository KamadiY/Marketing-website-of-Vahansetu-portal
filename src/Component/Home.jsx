import React from "react";
import car from "./img/carmy.png";
// import News from "./News"
// import Testimonial from "./Testimonial"

export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${car})`,
    backgroundOpacity: 0.1,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "17%"
  };
  
  const leftAlignText = {
    // position: "absolute",
    textAlign: "Center",
    marginLeft: 20,
    top: 0, // Move the text to the top of the background image
    zIndex: 1,
    marginTop: "-5%"
  };

  return (
    <>
      <div className="bg-white" style={backgroundStyle} id="home">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto flexDisplay max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center textArea">
              <h1
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                style={leftAlignText}
              >
                Vahansetu: Your Vehicle's Companion
              </h1>
              <p
                className="mt-6 text-lg leading-8 text-black-600"
                style={leftAlignText}
              >
                Stay connected with your vehicle using Vahansetu, the smart app
                that ensures the safety and privacy of your vehicle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
