import React from "react";
import { useForm } from "react-hook-form";

function Contactus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-[600px] items-center justify-center">
        <div className="w-[600px]">
          <div className="">
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="dialog"
              className=""
            >
              <h3 className="font-bold text-lg text-center">Contact Us</h3>
              {/* Name  */}
              <div className="mt-6 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="border rounded-md w-full p-1 outline-none dark:bg-slate-900 dark:text-white"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    *This field is required
                  </span>
                )}
              </div>
              {/* Email  */}
              <div className="mt-6 space-y-2 ">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border rounded-md w-full p-1 outline-none dark:bg-slate-900 dark:text-white"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    *This field is required
                  </span>
                )}
              </div>
              {/* Password  */}
              <div className="mt-6 space-y-2 ">
                <span>Message</span>
                <br />
                <textarea
                  type="text"
                  placeholder="Enter your message"
                  className="border rounded-md w-full p-1 outline-none dark:bg-slate-900 dark:text-white"
                />
              </div>
              <div className="flex justify-between mt-6">
                <button className=" bg-green-500 hover:bg-green-400 px-4 py-2 rounded-md duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
