export default function HotelProject() {
  return (
    <div className="readme-container">

      <div className="project-nav">
        <a href="/" className="back-btn">← Back</a>
      </div>

      <h1>Hotel Booking Cancellation Analysis</h1>
      <h3>Revenue Impact & Cancellation Behavior Analytics</h3>

      <p>
        This project analyzes hotel booking cancellation patterns to understand
        key drivers of cancellations and quantify the financial impact on hotels.
        The analysis explores booking behavior, lead time effects, customer segments,
        and seasonal trends to support data-driven revenue protection strategies.
      </p>

      <h2>Dataset Overview</h2>

      <ul>
        <li>Total Bookings: 119,392</li>
        <li>Time Period: 2015 – 2017</li>
        <li>Hotel Types: City Hotel & Resort Hotel</li>
        <li>Cancellation Rate: ~37% </li>
        <li>Total Revenue Lost: ~16.7M</li>
      </ul>

      <h2>Key Insights</h2>

      <ul>
        <li>City Hotels show significantly higher cancellation risk (~41.7%) than Resort Hotels.</li>
        <li>Bookings made far in advance ({'>'}365 days) have the highest cancellation rates (~68%).</li>
        <li>Transient customers represent the most volatile booking segment.</li>
        <li>Online Travel Agencies generate the largest share of revenue loss.</li>
        <li>Peak-season cancellations (June–August) create the highest financial impact.</li>
      </ul>

      <h2>Revenue Impact Analysis</h2>

      <ul>
        <li>Total revenue lost due to cancellations is approximately 16.7M.</li>
        <li>Early cancellations contribute the largest share of total revenue loss.</li>
        <li>Late cancellations (~15%) are operationally critical because rooms cannot be easily resold.</li>
      </ul>

      <h2>Business Recommendations</h2>

      <ul>
        <li>Introduce risk-based cancellation policies for long lead-time bookings.</li>
        <li>Reduce free cancellation windows closer to arrival dates.</li>
        <li>Encourage direct bookings and repeat customers to reduce risk.</li>
        <li>Apply stricter cancellation policies during peak travel seasons.</li>
      </ul>

      <h2>Dashboard</h2>

      <img src="/projects/hotel.png" alt="Hotel Booking Cancellation Dashboard"/>

      <h2>Tools & Technologies</h2>

      <ul>
        <li>Excel / Data Analysis</li>
        <li>Data Visualization</li>
        <li>Business Intelligence</li>
        <li>Statistical Analysis</li>
      </ul>

      <h2>Project Repository</h2>

      <a
        href="https://github.com/srikanthnakka/hotel-booking-cancellation-analysis"
        target="_blank"
      >
        View Full Project on GitHub
      </a>

    </div>
  );
}