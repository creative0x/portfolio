import React from "react";
import Project from "./Project";
import netflixImg from "../../public/netflix.png";
import cryptoImg from "../../public/crypto.png";
import roofingImg from "../../public/roofing.jpg";

export default function Portfolio() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase ">Projects</p>
        <h2 className="py-4 text-3xl">What I&apos;ve Created</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Project
            title="Netflix Social"
            backgroundImg={netflixImg}
            projectUrl="/property"
            tech="Next Js Web App"
          />
          <Project
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="User Interface Design"
          />
          <Project
            title="Roofing Home Page"
            backgroundImg={roofingImg}
            projectUrl="/netflix"
            tech="Static home page for roofing company"
          />
        </div>
      </div>
    </div>
  );
}
