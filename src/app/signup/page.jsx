"use client";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const SignUpPage = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    if (resp.status === 200) {
      event.target.reset();
    }
  };

  return (
    <div className="container mx-auto px-24 py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height={540}
            width={540}
            alt="login img"
          />
        </div>
        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-primary text-center mb-12">
            SignUp
          </h6>
          <form onSubmit={handleSignUp} action="">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="your Name"
              className="mt-3  input input-bordered w-full "
            />
            <br /> <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="your Email"
              className="mt-3  input input-bordered w-full "
            />
            <br /> <br />
            <label htmlFor="email">Confirm Password</label>
            <br />
            <input
              type="text"
              name="password"
              placeholder="your password"
              className="mt-3  input input-bordered w-full "
            />
            <br />
            <button type="submit" className="btn btn-primary w-full mt-12">
              Sign Up
            </button>
          </form>
          <div>
            <h6 className="my-8 text-center">or sign up with</h6>
            <div className="flex justify-center items-center space-x-3">
              <button className="btn  rounded-full flex items-center justify-center ">
                <FcGoogle className="size-6" />
              </button>
              <button className="btn  rounded-full flex items-center justify-center ">
                <FaGithub className="size-6" />
              </button>
            </div>
            <div>
              <h6 className="my-8 text-center">
                Already have an account?{" "}
                <Link href={"/login"} className="text-primary font-bold">
                  LogIn
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
