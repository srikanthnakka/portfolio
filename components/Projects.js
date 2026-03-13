import Link from "next/link"

export default function Projects(){

const projects = [

{
slug:"ipl-analysis",
title:"IPL Analytics Platform",
image:"/projects/ipl.png",
skills:"Python • SQL • Power BI • Pandas",
description:"End-to-end IPL data analysis project exploring team strategies, player performance, and venue insights.",
github:"https://github.com/srikanthnakka/ipl-analytics-end-to-end-analysis"
},

{
slug:"hotel-booking",
title:"Hotel Booking Cancellation Analysis",
image:"/projects/hotel.png",
skills:"Excel • Pivot Tables • Data Analysis",
description:"Analysis of hotel booking cancellations to identify revenue loss patterns and booking behavior.",
github:"https://github.com/srikanthnakka/hotel-booking-cancellation-analysis"
},

{
slug:"laptop-price",
title:"Laptop Price Prediction ML",
image:"/projects/laptop.png",
skills:"Python • Scikit-Learn • Machine Learning",
description:"Machine learning model predicting laptop prices based on hardware specifications.",
github:"https://github.com/srikanthnakka/laptop-price-prediction-ml"
},

{
slug:"retail-analysis",
title:"Retail Customer Behavior BI",
image:"/projects/retail.png",
skills:"Power BI • DAX • Data Modeling",
description:"Retail customer analytics dashboard analyzing sales channels, loyalty, and purchase behavior.",
github:"https://github.com/srikanthnakka/retail-customer-behavior-analysis-powerbi"
}

]

return(

<section id="projects" className="py-24 bg-slate-950 text-white">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold mb-12">
Projects
</h2>

<div className="grid md:grid-cols-2 gap-10">

{projects.map((p,i)=> (

<div key={i} className="bg-slate-800 rounded-xl overflow-hidden hover:scale-[1.02] transition">

<img src={p.image} className="w-full h-48 object-cover"/>

<div className="p-6">

<h3 className="text-xl font-semibold mb-2">
{p.title}
</h3>

<p className="text-gray-400 mb-2">
{p.skills}
</p>

<p className="text-gray-400 mb-4">
{p.description}
</p>

<div className="flex gap-4">

<Link
href={`/projects/${p.slug}`}
className="px-4 py-2 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition"
>
View Project
</Link>

<a
href={p.github}
target="_blank"
className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
>
GitHub Repo
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