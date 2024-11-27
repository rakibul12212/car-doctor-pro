import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service || {};
  return (
    <div className="p-4 border-2 border-slate-100 rounded-xl">
      <div className=" bg-base-100 w-96 ">
        <figure>
          <Image
            layout="responsive"
            width={16}
            height={9}
            src={img}
            alt={title}
            className="rounded-xl"
          />
        </figure>
        <div className="pt-5">
          <h2 className="font-bold text-xl pb-3">{title}</h2>

          <div className="card-actions justify-between items-center">
            <h6 className="text-primary font-semibold">Price : ${price}</h6>
            <Link href={`/services/${_id}`}>
              <button className="text-primary">
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
