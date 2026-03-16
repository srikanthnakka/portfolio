"use client"

import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact(){

const form = useRef()

const sendEmail = (e) => {

e.preventDefault()

emailjs.sendForm(
"service_6ufnpwh",
"template_7manvod",
form.current,
"bk0pw5EM8pcrr-KO7"
)

alert("Message Sent Successfully!")

}

return(

<section id="contact" className="py-24 bg-slate-950 text-white">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-4">
Let's <span className="text-cyan-400">Connect</span>
</h2>

<p className="text-center text-gray-400 mb-16">
I'm currently looking for Data Analyst opportunities.
Feel free to reach out for collaboration or project discussions.
</p>

<div className="grid md:grid-cols-2 gap-16">

{/* LEFT SIDE */}

<div>

<h3 className="text-2xl font-semibold mb-4">
Let's work together
</h3>

<p className="text-gray-400 mb-8">
I’m a Data Analyst passionate about turning data into insights.
If you have a project, opportunity, or question, feel free to reach out.
</p>

{/* EMAIL */}

<div className="bg-slate-800 p-6 rounded-xl flex items-center gap-4 mb-6">

<FaEnvelope className="text-cyan-400 text-xl"/>

<div>
<p className="text-gray-400 text-sm">Email</p>
<p className="font-medium">
nakkasrikanth798@gmail.com
</p>
</div>

</div>

{/* LOCATION */}

<div className="bg-slate-800 p-6 rounded-xl flex items-center gap-4 mb-8">

<FaMapMarkerAlt className="text-cyan-400 text-xl"/>

<div>
<p className="text-gray-400 text-sm">Location</p>
<p className="font-medium">
Hyderabad, Telangana, India
</p>
</div>

</div>

{/* SOCIAL */}

<div className="flex gap-6">

<a
href="https://github.com/srikanthnakka"
target="_blank"
className="hover:text-cyan-400"
>
<FaGithub size={26}/>
</a>

<a
href="https://linkedin.com/in/srikanthnakka283"
target="_blank"
className="hover:text-cyan-400"
>
<FaLinkedin size={26}/>
</a>

</div>

</div>

{/* FORM */}

<form
ref={form}
onSubmit={sendEmail}
className="bg-slate-800 p-8 rounded-xl space-y-6"
>

<div className="grid md:grid-cols-2 gap-4">

<input
type="text"
name="name"
placeholder="Your Name"
required
className="p-3 rounded bg-slate-700 w-full"
/>

<input
type="email"
name="email"
placeholder="Your Email"
required
className="p-3 rounded bg-slate-700 w-full"
/>

</div>

<input
type="text"
name="subject"
placeholder="Subject"
required
className="p-3 rounded bg-slate-700 w-full"
/>

<textarea
name="message"
placeholder="Message"
rows="5"
required
className="p-3 rounded bg-slate-700 w-full"
/>

<button
type="submit"
className="w-full py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition"
>
Send Message
</button>

</form>

</div>

</div>

</section>

)

}