"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialSignIn from "@/components/shared/SocialSignIn";

const LogInPage = () => {
  const router = useRouter();
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (resp.status === 200) {
      router.push("/");
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
            SignIn
          </h6>
          <form onSubmit={handleLogin} action="">
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
              Sign in
            </button>
          </form>
          <div>
            <h6 className="my-8 text-center">or sign in with</h6>
            <SocialSignIn />
            <div>
              <h6 className="my-8 text-center">
                not have an account?{" "}
                <Link href={"/signup"} className="text-primary font-bold">
                  Sign Up
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
