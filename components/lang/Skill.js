import React from "react";
import Image from "next/image";

export default function Skill({ img, name }) {
  return (
    <div>
      <div className="p-6    hover:scale-105 ease-in duration-300 ">
        <div className="grid grid-cols-2 gap-4  justify-center items-center ">
          <div className="m-auto ">
            <Image src={img} alt="" width={64} height={64} className="" />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <h3 className="font-semibold   text-xl">{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
