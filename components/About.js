export default function About() {
return ( <section id="about" className="pt-20 pb-24 bg-slate-900 text-white">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-10 items-start">

      {/* LEFT SIDE */}

      <div>

        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I am a Data Analyst with strong skills in Python, SQL, Power BI, and machine learning.
          I enjoy working with data to discover patterns, build visualizations, and generate
          insights that help organizations make better decisions.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          Through hands-on projects, I have gained experience in data analysis,
          data visualization, and building machine learning models using tools
          like Pandas, Scikit-learn, and Power BI. I am passionate about using
          data to solve real-world problems and continuously improving my
          analytical and technical skills.
        </p>

        {/* SKILLS */}

        <div className="flex flex-wrap gap-3 mt-8">

          <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">Python</span>
          <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">SQL</span>
          <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">Power BI</span>
          <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">Excel</span>
          <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">Machine Learning</span>
          <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">Pandas</span>
          <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">Data Visualization</span>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div>

        <h2 className="text-3xl font-semibold text-cyan-400 mb-6">
          My Data Analysis Process
        </h2>

        <div className="space-y-6">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-cyan-400">
              1. Data Collection
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Collect and organize data from datasets, APIs, or databases.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-cyan-400">
              2. Data Cleaning
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Handle missing values, remove duplicates, and prepare data for analysis.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-cyan-400">
              3. Exploratory Data Analysis
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Explore patterns and relationships using Python, SQL, and statistical techniques.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-cyan-400">
              4. Data Visualization
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Create dashboards and visualizations using Power BI and Python.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-cyan-400">
              5. Insights & Decision Making
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Convert analysis results into actionable insights for better business decisions.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

);
}
