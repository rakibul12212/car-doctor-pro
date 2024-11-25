import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto text-slate-900 my-36 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="relative">
          <Image
            src="/assets/images/about_us/person.jpg"
            alt="about img 1"
            height={550}
            width={523}
            className="rounded-lg "
          />

          <Image
            src="/assets/images/about_us/parts.jpg"
            alt="about img 2"
            height={432}
            width={380}
            className="absolute bottom-0 left-20  transform translate-x-36 translate-y-5  border-8 border-white"
          />
        </div>

        <div className="space-y-8 ">
          <h1 className="font-bold text-primary">About Us</h1>
          <h3 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary px-6">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
