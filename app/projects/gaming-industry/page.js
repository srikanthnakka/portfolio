export default function GamingProject() {
  return (
    <div className="readme-container">

      <div className="project-nav">
        <a href="/" className="back-btn">← Back</a>
      </div>

      <h1>Gaming Industry Trends Analysis</h1>
      <h3>Power BI Data Analytics Project</h3>

      <p>
        This project analyzes trends in the global gaming industry including
        revenue distribution, player engagement, genre popularity,
        developer performance, and platform monetization.
      </p>

      <h2>Dataset Overview</h2>

      <ul>
        <li>Total Revenue Analyzed: 2.48 Million</li>
        <li>Total Players: 103.5K</li>
        <li>Games Analyzed: 50</li>
        <li>Developers: 10</li>
        <li>Average Critic Rating: 74.99</li>
      </ul>

      <h2>Key Insights</h2>

      <ul>
        <li>Action and Strategy genres attract the largest player base.</li>
        <li>Revenue is concentrated among a small number of top developers.</li>
        <li>Player popularity varies significantly across game genres.</li>
        <li>Higher critic ratings do not always translate to higher revenue.</li>
      </ul>

      <h2>Platform Analysis</h2>

      <ul>
        <li>PC and Cross-Platform generate the highest total revenue.</li>
        <li>Nintendo Switch and Mobile show higher revenue per player.</li>
        <li>Platform preferences vary significantly across genres.</li>
      </ul>

      <h2>Dashboard</h2>

      <img src="/projects/gaming/overview.png" alt="Gaming Overview Dashboard"/>
      <img src="/projects/gaming/genre-analysis.png" alt="Genre Analysis"/>
      <img src="/projects/gaming/developer-analysis.png" alt="Developer Analysis"/>
      <img src="/projects/gaming/platform-analysis.png" alt="Platform Analysis"/>
      <img src="/projects/gaming/trend-analysis.png" alt="Market Trend Analysis"/>

      <h2>Tools & Technologies</h2>

      <ul>
        <li>Power BI</li>
        <li>Data Visualization</li>
        <li>Business Intelligence</li>
      </ul>

      <h2>Project Repository</h2>

      <a
        href="https://github.com/srikanthnakka/gaming-industry-trends-powerbi"
        target="_blank"
      >
        View Full Project on GitHub
      </a>

    </div>
  );
}