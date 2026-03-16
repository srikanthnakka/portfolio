"use client"

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Hero() {

return(

<section id="home" className="min-h-screen flex items-start md:items-center pt-28 md:pt-0 bg-slate-950 text-white">

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">

{/* LEFT SIDE */}

<div>

<div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full text-xs sm:text-sm text-gray-300 mt-8 mb-4 w-fit">
<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
Available for opportunities
</div>

<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
Hi, I'm <span className="text-cyan-400">Srikanth Nakka</span>
</h1>

<h2 className="text-xl sm:text-2xl mt-4 text-gray-300">
Data Analyst | Data Science Enthusiast
</h2>

<h2 className="text-xl sm:text-2xl text-gray-300">
Python • SQL • Power BI • Machine Learning
</h2>

<p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
I specialize in data analytics using Python, SQL, Power BI, and machine learning.
I transform raw data into meaningful insights that help businesses make smarter,
data-driven decisions.
</p>

{/* Buttons */}

<div className="flex flex-wrap gap-4 mt-6">

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

{/* Social Icons */}

<div className="flex gap-6 mt-6">

<a href="https://github.com/srikanthnakka" target="_blank">
<FaGithub size={26}/>
</a>

<a href="https://linkedin.com/in/srikanthnakka283" target="_blank">
<FaLinkedin size={26}/>
</a>

<a href="https://mail.google.com/mail/?view=cm&fs=1&to=nakkasrikanth798@gmail.com" target="_blank">
<FaEnvelope size={26}/>
</a>

</div>

</div>

{/* RIGHT SIDE */}

<div className="grid grid-cols-2 gap-6 mt-10 md:mt-0">

<div className="bg-slate-800 p-5 sm:p-6 rounded-xl text-center">
<h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">6+</h3>
<p className="text-gray-400 mt-2 text-sm sm:text-base">Data Projects</p>
</div>

<div className="bg-slate-800 p-5 sm:p-6 rounded-xl text-center">
<h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">10+</h3>
<p className="text-gray-400 mt-2 text-sm sm:text-base">Tools & Technologies</p>
</div>

<div className="bg-slate-800 p-5 sm:p-6 rounded-xl text-center">
<h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">1+</h3>
<p className="text-gray-400 mt-2 text-sm sm:text-base">Years Learning Data Science</p>
</div>

<div className="bg-slate-800 p-5 sm:p-6 rounded-xl text-center">
<h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">100%</h3>
<p className="text-gray-400 mt-2 text-sm sm:text-base">Passionate About Data</p>
</div>

</div>

</div>

</section>

)

}