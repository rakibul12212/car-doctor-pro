import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialSignIn = () => {
  const handleSocialLogin = async () => {};
  return (
    <div className="flex justify-center items-center space-x-3">
      <button className="btn  rounded-full flex items-center justify-center ">
        <FcGoogle className="size-6" />
      </button>
      <button className="btn  rounded-full flex items-center justify-center ">
        <FaGithub className="size-6" />
      </button>
    </div>
  );
};

export default SocialSignIn;
