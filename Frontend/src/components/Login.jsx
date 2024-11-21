import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg text-center">Login</h3>
            {/* Email  */}
            <div className="mt-6 space-y-2 ">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="border rounded-md w-full p-1 outline-none  dark:bg-slate-900 dark:text-white"
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
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                className="border rounded-md w-full p-1 outline-none  dark:bg-slate-900 dark:text-white"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  *This field is required
                </span>
              )}
            </div>
            <div className="flex justify-between mt-6">
              <button className=" bg-green-500 hover:bg-green-400 px-4 py-2 rounded-md duration-300">
                Login
              </button>
              <p className="py-2">
                Not registered?{" "}
                <Link
                  to={"/signup"}
                  className="underline text-green-500 hover:text-green-400 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
