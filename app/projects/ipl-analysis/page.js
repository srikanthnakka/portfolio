export default function IPLProject() {
  return (
    <div className="readme-container">

      <div className="project-nav">
        <a href="/" className="back-btn">← Back</a>
      </div>

      <h1>IPL Analytics Platform</h1>
      <h3>End-to-End Cricket Data Analysis (2008–2025)</h3>

      <p>
        This project analyzes historical IPL match data to uncover patterns in team
        strategies, player performance, venue behavior, and scoring trends.
        The analysis combines Python data processing, SQL analytics, statistical
        testing, and Power BI dashboards.
      </p>

      <h2>Dataset</h2>

      <ul>
        <li>278,205 ball-by-ball records</li>
        <li>1,169 IPL matches</li>
        <li>18 IPL seasons analyzed</li>
        <li>703 batters and 550 bowlers</li>
      </ul>

      <h2>Analytics Workflow</h2>

      <ul>
        <li>Python data cleaning and preprocessing</li>
        <li>Exploratory Data Analysis (EDA)</li>
        <li>Statistical hypothesis testing</li>
        <li>Feature engineering</li>
        <li>SQL analytics queries</li>
        <li>Power BI interactive dashboard</li>
      </ul>

      <h2>Key Insights</h2>

      <ul>
        <li>Chasing teams win approximately 53% of IPL matches.</li>
        <li>Average first innings score across seasons is about 167 runs.</li>
        <li>Run scoring rates have increased in modern IPL seasons.</li>
        <li>Virat Kohli leads total runs in IPL history.</li>
        <li>Yuzvendra Chahal leads total wickets.</li>
      </ul>

      <h2>Dashboard Overview</h2>

      <p>
        The Power BI dashboard provides interactive insights into IPL match
        performance, team strategies, batting analytics, bowling performance,
        and venue trends.
      </p>

      <img src="/projects/ipl/ipl_overview.png" alt="IPL Overview Dashboard" />

      <img src="/projects/ipl/team_analysis.png" alt="IPL Team Performance Dashboard" />

      <img src="/projects/ipl/batting_analysis.png" alt="IPL Batting Analysis Dashboard" />

      <img src="/projects/ipl/bowling_analysis.png" alt="IPL Bowling Analysis Dashboard" />

      <img src="/projects/ipl/venue_insight.png" alt="IPL Venue Insights Dashboard" />

      <h2>Tools & Technologies</h2>

      <ul>
        <li>Python</li>
        <li>Pandas & NumPy</li>
        <li>Matplotlib & Seaborn</li>
        <li>MySQL</li>
        <li>Power BI</li>
      </ul>

      <h2>Project Repository</h2>

      <a
        href="https://github.com/srikanthnakka/ipl-analytics-end-to-end-analysis"
        target="_blank"
      >
        View Full Project on GitHub
      </a>

    </div>
  );
}