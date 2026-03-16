export default function EmployeeProject() {
  return (
    <div className="readme-container">

      <div className="project-nav">
        <a href="/" className="back-btn">← Back</a>
      </div>

      <h1>Employee Attrition Analysis</h1>
      <h3>HR Analytics Dashboard using Power BI</h3>

      <p>
        This project analyzes employee attrition patterns within an organization
        to identify the major factors influencing employee turnover.
        The dashboard evaluates attrition by department, performance rating,
        pay zones, and termination reasons to support HR decision making.
      </p>

      <h2>Dataset Overview</h2>

      <ul>
        <li>Total Employees: ~3,000</li>
        <li>Employees Left: ~2,000</li>
        <li>Active Employees: ~1,000</li>
        <li>Overall Attrition Rate: 51%</li>
      </ul>

      <h2>Key Insights</h2>

      <ul>
        <li>More than half of employees have left the organization (51% attrition rate).</li>
        <li>961 employees left within the first two years of employment.</li>
        <li>Average employee tenure before attrition is about 3.33 years.</li>
        <li>Employees rated "Fully Meets" represent the largest attrition group.</li>
      </ul>

      <h2>Department Analysis</h2>

      <ul>
        <li>Executive Office has the highest attrition rate (~79%).</li>
        <li>Production department contributes around 66% of total attrition.</li>
        <li>IT and Sales departments also show moderate attrition levels.</li>
      </ul>

      <h2>Attrition Drivers</h2>

      <ul>
        <li>Voluntary exits and resignations are the leading termination types.</li>
        <li>Pay zone differences indicate compensation related risks.</li>
        <li>Early career attrition suggests onboarding or engagement issues.</li>
      </ul>

      <h2>Dashboard</h2>

      <img src="/projects/employee/overview.png" alt="Employee Overview Dashboard" />

      <img src="/projects/employee/department-analysis.png" alt="Department Attrition Analysis" />

      <img src="/projects/employee/retension-analysis.png" alt="Performance Based Attrition" />

      <h2>Tools & Technologies</h2>

      <ul>
        <li>Power BI</li>
        <li>HR Analytics</li>
        <li>Data Visualization</li>
        <li>Business Intelligence</li>
      </ul>

      <h2>Project Repository</h2>

      <a
        href="https://github.com/srikanthnakka/employee-attrition-analysis-powerbi"
        target="_blank"
      >
        View Full Project on GitHub
      </a>

    </div>
  );
}