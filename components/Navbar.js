"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

const [active,setActive] = useState("home")
const [menu,setMenu] = useState(false)

useEffect(()=>{

const sections=document.querySelectorAll("section")

const handleScroll=()=>{

let current="home"

sections.forEach((section)=>{

const top=section.offsetTop-200

if(window.scrollY>=top){
current=section.getAttribute("id")
}

})

setActive(current)

}

window.addEventListener("scroll",handleScroll)

},[])

const navItems=["home","about","skills","projects","experience","contact"]

return(

<nav className="fixed top-0 w-full bg-slate-900 text-white z-50">

<div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

<h1 className="text-xl font-bold text-cyan-400">
Srikanth Nakka
</h1>

{/* Desktop menu */}

<div className="hidden md:flex gap-6">

{navItems.map((item)=>(

<a
key={item}
href={`#${item}`}
className={`capitalize ${
active===item ? "text-cyan-400":"text-gray-300"
} hover:text-cyan-400`}
>

{item}

</a>

))}

</div>

{/* Mobile button */}

<button
className="md:hidden text-2xl"
onClick={()=>setMenu(!menu)}
>

☰

</button>

</div>

{/* Mobile menu */}

{menu && (

<div className="md:hidden flex flex-col items-center gap-6 pb-6">

{navItems.map((item)=>(

<a
key={item}
href={`#${item}`}
onClick={()=>setMenu(false)}
className="capitalize text-gray-300 hover:text-cyan-400"
>

{item}

</a>

))}

</div>

)}

</nav>

)

}