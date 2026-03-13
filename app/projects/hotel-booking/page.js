export default function HotelProject(){

return(

<div className="max-w-4xl mx-auto py-20 text-white">

<h1 className="text-4xl font-bold mb-8">
Hotel Booking Cancellation Analysis
</h1>

<p className="mb-6">
This project analyzes hotel booking cancellations to identify
drivers of revenue loss and risky booking patterns.
</p>

<h2 className="text-2xl mb-3">Key Insights</h2>

<ul className="list-disc ml-6 mb-6">

<li>Overall cancellation rate ≈ 37%</li>
<li>Long lead-time bookings cancel more often</li>
<li>OTA bookings cause highest revenue loss</li>

</ul>

<p>
The dashboard includes KPI summaries, cancellation trends,
and interactive slicers for deeper analysis.
</p>

</div>

)

}