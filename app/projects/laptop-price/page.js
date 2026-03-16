export default function LaptopProject() {
  return (
    <div className="readme-container">

      <div className="project-nav">
        <a href="/" className="back-btn">← Back</a>
      </div>

      <h1>Laptop Price Prediction</h1>
      <h3>Machine Learning Regression Project</h3>

      <p>
        This project predicts laptop prices based on hardware specifications
        such as processor type, RAM, storage, GPU, brand, and display features.
        Machine learning regression models were used to estimate laptop prices
        from product specifications.
      </p>

      <h2>Dataset Overview</h2>

      <ul>
        <li>Laptop specifications dataset</li>
        <li>Features include brand, RAM, storage, GPU, screen size, processor</li>
        <li>Target variable: Laptop price</li>
      </ul>

      <h2>Machine Learning Workflow</h2>

      <ul>
        <li>Data cleaning and preprocessing</li>
        <li>Feature engineering</li>
        <li>Exploratory data analysis</li>
        <li>Model training using regression algorithms</li>
        <li>Model evaluation using prediction metrics</li>
      </ul>

      <h2>Key Insights</h2>

      <ul>
        <li>RAM size strongly influences laptop pricing.</li>
        <li>Processor type and GPU significantly impact premium laptop pricing.</li>
        <li>Gaming laptops show higher average prices than general-use laptops.</li>
        <li>Storage type (SSD vs HDD) also impacts price range.</li>
      </ul>

      <h2>Model Evaluation</h2>

      <ul>
        <li>Regression model used to predict laptop prices.</li>
        <li>Model performance evaluated using R² and error metrics.</li>
        <li>Model successfully captures price patterns from hardware specifications.</li>
      </ul>

      <h2>Project Visualizations</h2>

      <img src="/projects/laptop/price-distribution.png" alt="Laptop Price Distribution"/>

      <img src="/projects/laptop/ram-price.png" alt="RAM vs Price"/>

      <img src="/projects/laptop/brand-price.png" alt="Brand vs Price"/>

      <img src="/projects/laptop/model-performance.png" alt="Model Prediction Performance"/>

      <h2>Tools & Technologies</h2>

      <ul>
        <li>Python</li>
        <li>Pandas</li>
        <li>Scikit-Learn</li>
        <li>Matplotlib / Seaborn</li>
        <li>Machine Learning</li>
      </ul>

      <h2>Project Repository</h2>

      <a
        href="https://github.com/srikanthnakka/laptop-price-prediction-ml"
        target="_blank"
      >
        View Full Project on GitHub
      </a>

    </div>
  );
}