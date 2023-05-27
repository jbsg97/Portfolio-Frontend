"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark': ''}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">Bryan Sosa</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">Bryan Sosa</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">Web Developer ready to accept new challenges, feel free to contact me!</p>
          </div>
          <div className="text-5xl flex justify-center gap-3 text-gray-600 dark:text-white">
            <AiFillLinkedin/>
            <AiFillGithub/>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Work Experience</h3>
          </div>
        </section>
      </main>
    </div>
  )
}
