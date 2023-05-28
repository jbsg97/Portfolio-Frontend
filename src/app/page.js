"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  function FormContactSubmit(data) {
    axios
      .post("https://figj2tth35.execute-api.us-west-1.amazonaws.com/default/EmailContact", data)
      .then((response) => {
        setSuccessMessage(
          `Thanks for contacting me!`
        );
        reset();
      })
      .catch((e) => console.error(e));
  }

  return (
    <div className={darkMode ? 'dark': ''}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 min-h-screen">
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">Bryan Sosa</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://public-portfolio-files.s3.us-west-1.amazonaws.com/Bryan+Sosa+Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">Bryan Sosa</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">Web Developer ready to accept new challenges, feel free to contact me!</p>
          </div>
          <div className="text-5xl flex justify-center gap-3 text-gray-600 dark:text-white">
            <a href="https://www.linkedin.com/in/jose-bryan-sosa-galindo/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/jbsg97" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="cursor-pointer"/>
            </a>
          </div>
        </section>

        <section>
          <div className="h-10 py-10">
            <h3 className="text-2xl text-left dark:text-white">Work Experience</h3>
          </div>
          <div className="text-md py-5 leading-8 mx-auto">   
            <ol
              className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">

              <li>
                <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                  <div
                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                  March 2022 – April 2023
                  </p>
                </div>
                <div className="ml-4 mt-2 pb-5 md:ml-0">
                  <h4 className="mb-1.5 text-xl font-semibold dark:text-white">Semi Sr Python Developer in Gentera</h4>
                  <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Deliver high-quality, robust production flask microservice application, 
                  allowing other microservices to make online banking transaccions and service payments.
                  </p>
                </div>
              </li>


              <li>
                <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                  <div
                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                  May 2021 – March 2022
                  </p>
                </div>
                <div className="ml-4 mt-2 pb-5 md:ml-0">
                  <h4 className="mb-1.5 text-xl font-semibold dark:text-white">Jr Database Administrator in Grupo Alerta</h4>
                  <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Helped the company to move from on-premise servers to Google Cloud Services, 
                  migrating existing databases to Google Cloud SQL, 
                  wordpress websites to Google Compute instances and much more.
                  </p>
                </div>
              </li>


              <li>
                <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                  <div
                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                  Jan 2019 – May 2021
                  </p>
                </div>
                <div className="ml-4 mt-2 pb-5 md:ml-0">
                  <h4 className="mb-1.5 text-xl font-semibold dark:text-white">Python Developer in Distribuciones a Detalles</h4>
                  <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Developed, maintained and deployed a Python RestAPI, 
                  which allowed our users to improve their work productivity 
                  by replacing an outdated legacy application
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Lets meet each other!</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Send me a email and i´ll responde ASAP</p>
            <form className="space-y-8" method="post" onSubmit={handleSubmit(FormContactSubmit)}>
              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input {...register("email", { required: true })} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@domain.com" required/>
              </div>
              <div>
                <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input {...register("subject", { required: true })} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Job Opportunity" required/>
              </div>
              <div className="sm:col-span-2">
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea {...register("message", { required: true })} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
              </div>
              <button type="submit" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md">{isSubmitting ? "Message sent" : "Send message"}</button>
              {successMessage && <p>{successMessage}</p>}
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
