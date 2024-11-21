import React from "react";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="text-center items-center justify-center">
          {/* Unwanted component just to adjust the view  */}
          <h1 className="text-2xl md:text-4xl font-semibold">
            <span className="text-white">.</span>
          </h1>

          <h1 className="mt-20 text-2xl md:text-4xl font-semibold">What is a{" "} <span className="text-green-500">BookStory?</span></h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            a doloremque quos, dolores optio temporibus minima sed culpa saepe,
            quidem hic aperiam, porro facilis expedita neque libero! Quod optio
            tempore facilis consequatur, maiores voluptate itaque laudantium
            culpa veritatis. Deserunt, eius. Nobis provident inventore vitae
            praesentium sed perferendis laboriosam neque tenetur.
          </p>
          <Link to={"/"}>
            <button className="mt-6 bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md duration-300">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
