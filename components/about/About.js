import Image from "next/image";
import React from "react";

export default function about() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-20">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest ">About</p>
          <h2 className="py-4 text-3xl">Who I Am</h2>
          <p className="md:leading-8 py-2 md:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nobis
            minima quaerat sit sequi deserunt provident. Vitae, ad inventore
            esse placeat maxime reiciendis doloremque labore sed qui mollitia
            laboriosam expedita! Ex minima quaerat saepe iusto, sit doloribus
            dolor veniam officiis repudiandae beatae consequatur expedita
            similique cupiditate nobis aliquid eveniet illum. Omnis hic
            doloribus tempore ratione obcaecati vero commodi error dolorem?
          </p>
          <p className="md:leading-8 py-2 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            reiciendis molestiae maiores iusto veniam sit voluptatem pariatur ea
            libero! Corrupti dolores possimus odit, voluptatem labore fugit
            explicabo consequuntur iusto. Aliquid!
          </p>
          <p className="md:leading-8 py-2 md:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            non. Ipsa incidunt dolore eius esse illum exercitationem repellendus
            accusamus unde, dignissimos architecto quia ratione provident
            eveniet veniam aspernatur et assumenda?
          </p>
        </div>
        <div className="w-full h-auto m-auto border rounded-xl flex items-center justify-center p-4 mt-10 md:mt-0 ">
          <Image src="/user.png" alt="" width={300} height={400} />
        </div>
      </div>
    </div>
  );
}
