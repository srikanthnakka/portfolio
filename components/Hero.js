"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Hero() {

  return (
    <section id="home" className="min-h-screen flex items-center bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

        {/* LEFT SIDE */}

        <div>
        <div className="inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full text-sm text-gray-300 mb-0 mt-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for opportunities
          </div>
          

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m <span className="text-cyan-400">Srikanth Nakka</span>
          </h1>

          <h2 className="text-2xl mt-4 text-gray-300">
           Data Analyst | Data Science Enthusiast </h2>
          <h2 className="text-2xl  text-gray-300">
           Python • SQL • Power BI • Machine Learning
          </h2>


          <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
          I specialize in data analytics using Python, SQL, Power BI, and machine learning.
I transform raw data into meaningful insights that help businesses make smarter, data-driven decisions.
          </p>

          <div className="flex gap-4 mt-4">

            <a
              href="#contact"
              className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-cyan-300 transition"
            >
              Let's Connect
            </a>

            <a
              href="/resume.pdf"
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}

<div className="flex gap-6 mt-4">

<a
href="https://github.com/srikanthnakka"
target="_blank"
className="hover:text-white"
>

<FaGithub size={30}/>

</a>


<a
href="https://linkedin.com/in/srikanthnakka283"
target="_blank"
className="hover:text-white"
>

<FaLinkedin size={30}/>

</a>


<a
href="https://mail.google.com/mail/?view=cm&fs=1&to=nakkasrikanth798@gmail.com"
target="_blank"
className="hover:text-white"
>

<FaEnvelope size={30}/>

</a>



</div>


        </div>


        {/* RIGHT SIDE */}

        

           <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-cyan-400">6+</h3>
              <p className="text-gray-400 mt-2">Data Projects</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
              <p className="text-gray-400 mt-2">Tools & Technologies</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-cyan-400">1+</h3>
              <p className="text-gray-400 mt-2">Years Learning Data Science</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-400 mt-2">Passionate About Data</p>
            </div>

          </div>



      </div>

    </section>
  )
}