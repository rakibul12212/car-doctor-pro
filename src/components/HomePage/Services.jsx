import React from "react";
import { services } from "../../lib/services";
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
  return (
    <div className="text-slate-800 min-h-screen">
      <div className="text-center container mx-auto">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Services Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard service={service} key={service._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
