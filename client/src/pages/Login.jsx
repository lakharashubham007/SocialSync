import React from "react";
import { TbVersionsFilled } from "react-icons/tb";
import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <div className="bg-bgColor w-full h-screen flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* Left */}
        <div className="w-full lg:w=1/2 h-full p-10 2xl:px-20 flex flex-col justify-center">
          {/*Logo & App Name start*/}
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-[#0866ff] rounded text-white">
              <TbVersionsFilled />
            </div>
            <span className="text-2xl text-[#0866ff] font-semibold">
              SocialSync
            </span>
          </div>
          {/*Logo & App Name Ends*/}
          <p className="text-ascent-1 text-base font-semibold">
            Login to your account
          </p>
          <span className="text-ascent-2 mt-2 text-sm">Welcome back</span>
          {/* Form starts Here */}
          <form className="py-8 flex flex-col gap-5">
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              register={register("email", {
                required: "Email Address is required!",
              })}
              styles="w-full rounded-full"
              labelStyle="ml-2"
              error={errors.email ? errors.email.message : ""}
            />
            <TextInput
              name="password"
              placeholder="Password"
              label="Password"
              type="password"
              register={register("password", {
                required: "Password is required!",
              })}
              styles="w-full rounded-full"
              labelStyle="ml-2"
              error={errors.password ? errors.password.message : ""}
            />
          </form>
          {/* Form End Here */}
        </div>
        {/* Right */}
        <div></div>
      </div>
    </div>
  );
};

export default Login;
