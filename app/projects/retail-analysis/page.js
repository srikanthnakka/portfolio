export default function RetailProject() {
  return (
    <div className="readme-container">

      <div className="project-nav">
        <a href="/" className="back-btn">← Back</a>
      </div>

      <h1>Retail Customer Behavior Analysis</h1>
      <h3>Customer Analytics Dashboard using Power BI</h3>

      <p>
        This project analyzes retail customer purchasing behavior to understand
        revenue drivers, customer loyalty patterns, and the impact of discounts
        and sales channels on customer retention.
      </p>

      <h2>Dataset Overview</h2>

      <ul>
        <li>Total Sales: $233K</li>
        <li>Total Transactions: 3.9K</li>
        <li>Unique Customers: 3.9K</li>
        <li>Average Order Value: $59.76</li>
        <li>Repeat Purchase Rate: 55.92%</li>
      </ul>

      <h2>Key Insights</h2>

      <ul>
        <li>Clothing generates the highest revenue (~$104K) among product categories.</li>
        <li>The online channel drives the majority of revenue (~$193K).</li>
        <li>Discount usage has minimal impact on customer loyalty or order value.</li>
        <li>The 26–35 age segment contributes the highest revenue.</li>
        <li>The 46+ segment shows strong high-frequency purchasing behavior.</li>
      </ul>

      <h2>Customer Behavior Analysis</h2>

      <ul>
        <li>Repeat purchase rate remains consistent across product categories (~56%).</li>
        <li>Customer payment methods show similar loyalty patterns.</li>
        <li>Seasonal demand influences revenue more than discount campaigns.</li>
      </ul>

      <h2>Business Insights</h2>

      <ul>
        <li>Approximately 1.7K customers fall into a potential retention risk segment.</li>
        <li>High-value customers contribute disproportionately higher revenue.</li>
        <li>Targeted marketing toward high-value and mature demographics can improve retention.</li>
      </ul>

      <h2>Dashboard</h2>

      <img src="/projects/retail/overview.png" alt="Retail Overview Dashboard"/>

      <img src="/projects/retail/customer-segmentation.png" alt="Customer Segment Analysis"/>

      <img src="/projects/retail/discount-impact.png" alt="Discount Impact Analysis"/>

      <img src="/projects/retail/customer-value.png" alt="Customer Value Tier Analysis"/>

      <img src="/projects/retail/business-recommendations.png" alt="Business Recommendations"/>

      <h2>Tools & Technologies</h2>

      <ul>
        <li>Power BI</li>
        <li>Customer Analytics</li>
        <li>Data Visualization</li>
        <li>Business Intelligence</li>
      </ul>

      <h2>Project Repository</h2>

      <a
        href="https://github.com/srikanthnakka/retail-customer-behavior-analysis-powerbi"
        target="_blank"
      >
        View Full Project on GitHub
      </a>

    </div>
  );
}