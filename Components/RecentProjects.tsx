"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../data";
import { useState } from "react";
import MagicButton from "./MagicButton";

const RecentProjects = () => {
  const [amount, setAmount] = useState(3);

  const handleProjectsArr = () => {
    if (amount === 3) {
      setAmount(projects.length);
    } else {
      setAmount(3);
    }
  };

  return (
    <div className="py-20 grid justify-items-center" id="projects">
      <h1 className="heading">Recent Projects</h1>

      <div
        className="flex flex-wrap items-center justify-center p-4 gap-16 lg:gap-8
      mt-10"
      >
        {projects.slice(0, amount).map((item) => (
          <div
            className="lg:min-h-[30rem] h-[22rem] flex items-start justify-center sm:w-96 w-[80vw] bg-black-200 rounded-lg cursor-pointer overflow-hidden "
            key={item.id}
          >
            <div>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-5">
                <div
                  className="relative w-full  overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                ></div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute -top-1"
                />
              </div>

              <h1 className="font-bold lg:text-lg md:text-xl text-base line-clamp-1 px-3">
                {item.title}
              </h1>

              <p
                className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2 px-3"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.info}
              </p>

              <div className="flex items-center justify-between px-3 mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-9 lg:h-9 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 flex-col justify-center items-center">
                  <div className="flex items-center">
                    <a
                      href={item.demo}
                      target="_blank"
                      className="flex lg:text-sm md:text-xs text-sm text-purple"
                    >
                      Check Live Site
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>

                  <div className="flex items-center">
                    <a
                      href={item.github}
                      target="_blank"
                      className="flex lg:text-sm md:text-xs text-sm text-purple"
                    >
                      Github Repo
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="#projects" className="cursor-pointer">
        <MagicButton
          otherClasses="w-fit"
          title={amount < 4 ? "More Projects" : "Less Projects"}
          handleClick={handleProjectsArr}
        />
      </a>
    </div>
  );
};

export default RecentProjects;
