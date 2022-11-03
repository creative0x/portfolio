import Image from "next/image";
import React from "react";
import Skill from "./Skill";

export default function Lang() {
  return (
    <div className="w-full lg:h-screen p-2 mt-20 md:mt-0">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase">Skills</p>
        <h2 className="py-4 pb-10 text-3xl">Software and Tech</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <Skill img="/photoshop.png" name="Adobe Photoshop" />
          <Skill img="/premier.png" name="Adobe Premiere" />
          <Skill img="/effects.png" name="After Effects" />
          <Skill img="/xd.png" name="Adobe XD" />
          <Skill img="/html.png" name="HTML" />
          <Skill img="/css.png" name="CSS" />
          <Skill img="/javascript.png" name="JavaScript" />
          <Skill img="/jquery.png" name="JQuery" />
          <Skill img="/node.png" name="Node.Js" />
          <Skill img="/react.png" name="React.Js" />
          <Skill img="/nextjs.png" name="Next.Js" />
          <Skill img="/tailwind.png" name="Tailwind" />
          <Skill img="/mongo.png" name="Mongo DB" />
          <Skill img="/firebase.png" name="Firebase" />
          <Skill img="/mysql.png" name="My SQL" />
          <Skill img="/github1.png" name="Github" />
          <Skill img="/python.png" name="Python" />
          <Skill img="/office.png" name="Microsoft Office" />
        </div>
      </div>
    </div>
  );
}
