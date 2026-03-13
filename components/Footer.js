import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer(){

return(

<footer className="bg-slate-950 text-gray-400 py-10 border-t border-slate-800">

<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

{/* Left */}

<div>

<h3 className="text-white font-semibold text-lg">
Nakka Srikanth
</h3>

<p className="text-sm">
Data Analyst | Data Scientist Enthusiast
</p>

</div>


{/* Social Links */}

<div className="flex gap-6">

<a
href="https://github.com/srikanthnakka"
target="_blank"
className="hover:text-white"
>

<FaGithub size={22}/>

</a>


<a
href="https://linkedin.com/in/srikanthnakka283"
target="_blank"
className="hover:text-white"
>

<FaLinkedin size={22}/>

</a>


<a
href="https://mail.google.com/mail/?view=cm&fs=1&to=nakkasrikanth798@gmail.com"
target="_blank"
className="hover:text-white"
>

<FaEnvelope size={22}/>

</a>

</div>


{/* Copyright */}

<div className="text-sm text-center md:text-right">

© {new Date().getFullYear()}  
Nakka Srikanth. All rights reserved.

</div>

</div>

</footer>

)

}