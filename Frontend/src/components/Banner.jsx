import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col space-y-6 md:flex-row">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Welcome to BookStory, Learn something{" "}
              <span className="text-green-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Unlock a world of knowledge and growth with BookStory! Expand your
              horizons, one story at a time. From inspiring tales to insightful
              lessons, there’s always something new to discover. Let’s make
              every day a learning adventure!
            </p>
            <label className="input input-bordered flex items-center gap-2 mr-12  dark:bg-slate-800 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="mt-6 bg-green-500 hover:bg-green-400 px-4 py-2 rounded-md duration-300">
            Subscribe
          </button>
        </div>
        <div className="w-full md:w-1/2 order-1">
          <img
            src="banner.jpg"
            alt="BookStory"
            className="h-92 w-92 mt-20 md:mt-20 rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
