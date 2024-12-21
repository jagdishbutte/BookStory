import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/book/books`);   
        // console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="text-center items-center justify-center">
          {/* Unwanted component just to adjust the view  */}
          <h1 className="text-2xl md:text-4xl font-semibold">
            <span className="text-white">.</span>
          </h1>

          <h1 className="mt-20 text-2xl md:text-4xl font-semibold">
            We are deighted to have you{" "}
            <span className="text-green-500">here :)</span>
          </h1>
          <p className="mt-12">
            Explore our wide range of courses designed to inspire, educate, and
            empower you. Whether you’re pursuing a new passion or enhancing your
            skills, our curated content is tailored to meet your needs. Dive in
            and start your journey of growth and discovery today!
          </p>
          <Link to={"/"}>
            <button className="mt-6 bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
