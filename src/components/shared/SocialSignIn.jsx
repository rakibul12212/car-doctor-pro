"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SocialSignIn = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = (provider) => {
    const resp = signIn(provider, { redirect: false });
  };
  if (session.status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="flex justify-center items-center space-x-3">
      <button
        onClick={() => handleSocialLogin("google")}
        className="btn  rounded-full flex items-center justify-center "
      >
        <FcGoogle className="size-6" />
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="btn  rounded-full flex items-center justify-center "
      >
        <FaGithub className="size-6" />
      </button>
    </div>
  );
};

export default SocialSignIn;
