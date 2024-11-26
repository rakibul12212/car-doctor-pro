import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const ServiceCard = ({ service }) => {
  const { title, img, price } = service || {};
  return (
    <div className="p-4 border-2 border-slate-100 rounded-xl">
      <div className=" bg-base-100 w-96 ">
        <figure>
          <Image
            height={120}
            width={430}
            src={img}
            alt={title}
            className="rounded-xl"
          />
        </figure>
        <div className="pt-5">
          <h2 className="font-bold text-xl pb-3">{title}</h2>

          <div className="card-actions justify-between items-center">
            <h6 className="text-primary font-semibold">Price : ${price}</h6>
            <button className="text-primary">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
 