import React from "react";

function Aboutus() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col space-y-6 md:flex-row">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-6 md:mr-6">
            <h1 className="text-4xl font-bold">
              Wha is a BookStory?
              <br />
              <span className="text-green-500">Way to learn something new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              voluptatibus nemo quos eveniet neque autem, ullam maiores magni
              quam fugiat.
            </p>
            <hr />
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius pariatur iure veniam nemo sunt cum impedit numquam inventore iusto! Saepe similique autem quibusdam in sunt. Voluptatem exercitationem officia fuga?
            </p>
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

export default Aboutus;
