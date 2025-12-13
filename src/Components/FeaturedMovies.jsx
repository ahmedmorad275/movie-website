import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function FeaturedMovies() {
  return (
    <section className="p-2 md:p-3 my-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <p className="font-semibold text-xl">Featured Movies</p>
          <a className="flex items-center gap-2.5 cursor-pointer hover:text-rose-600 transition-colors duration-300 text-rose-700 text-lg">
            See More
            <span>
              <FaChevronRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
