"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SocialSignIn = () => {
  const router = useRouter();
  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider);
    if (resp.status === 200) {
      router.push("authenticated");
    }
  };
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
