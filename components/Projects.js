"use client"

import Link from "next/link"

export default function Projects(){

const projects = [

{
slug:"ipl-analysis",
title:"IPL Analytics Platform",
image:"/projects/ipl.png",
skills:"Python • SQL • Power BI • Pandas",
description:"End-to-end analysis of 18 IPL seasons using Python, SQL, and Power BI to uncover team strategies, player performance trends, and venue-based match insights.",
github:"https://github.com/srikanthnakka/ipl-analytics-end-to-end-analysis"
},

{
slug:"laptop-price",
title:"Laptop Price Prediction ML",
image:"/projects/laptop/brand-price.png",
skills:"Python • Scikit-Learn • Machine Learning",
description:"Regression-based machine learning model predicting laptop prices using hardware specifications such as RAM, processor, GPU, and storage features.",
github:"https://github.com/srikanthnakka/laptop-price-prediction-ml"
},

{
slug:"retail-analysis",
title:"Retail Customer Behavior BI",
image:"/projects/retail/overview.png",
skills:"Power BI • DAX • Data Modeling",
description:"Power BI dashboard analyzing retail sales performance, customer loyalty patterns, and channel effectiveness to identify revenue drivers and retention risks.",
github:"https://github.com/srikanthnakka/retail-customer-behavior-analysis-powerbi"
}
,
{
slug:"hotel-booking",
title:"Hotel Booking Cancellation Analysis",
image:"/projects/hotel.png",
skills:"Excel • Pivot Tables • Data Analysis",
description:"Hotel booking analytics identifying cancellation drivers, lead-time risk patterns, and revenue loss trends across booking channels and customer segments.",
github:"https://github.com/srikanthnakka/hotel-booking-cancellation-analysis"
},

{
  slug: "gaming-industry",
  title: "Gaming Industry Trends Analysis",
  image: "projects/gaming/overview.png",
  skills: "Power BI • Data Analysis • Visualization",
  description:
    "Analyzed gaming industry trends including revenue growth, genre performance, and platform popularity. Built an interactive Power BI dashboard to explore key metrics and market insights.",
  github:
    "https://github.com/srikanthnakka/gaming-industry-trends-powerbi",
},

{
  slug: "employee-attrition",
  title: "Employee Attrition Analysis",
  image: "/projects/employee/overview.png",
  skills: "Power BI • HR Analytics • Data Visualization",
  description:
    "Explored employee attrition patterns using HR data to identify factors influencing employee turnover. Developed an interactive Power BI dashboard highlighting attrition trends and workforce insights.",
  github:
    "https://github.com/srikanthnakka/employee-attrition-analysis-powerbi",
}

]

return(

<section id="projects" className="py-28 bg-slate-950 text-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold mb-16 text-center">
Projects
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{projects.map((p,i)=> (

<div
key={i}
className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition hover:-translate-y-2"
>

<div className="overflow-hidden">

<img
src={p.image}
className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
/>

</div>

<div className="p-6">

<h3 className="text-xl font-semibold mb-2">
{p.title}
</h3>

<p className="text-gray-400 text-sm mb-3">
{p.skills}
</p>

<p className="text-gray-400 text-sm mb-6">
{p.description}
</p>

<div className="flex gap-4">

<Link
href={`/projects/${p.slug}`}
className="px-4 py-2 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition"
>
View Details
</Link>

<a
href={p.github}
target="_blank"
className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
>
GitHub
</a>

</div>

</div>

</div>

))}

</div>

</div>

</section>

)

}