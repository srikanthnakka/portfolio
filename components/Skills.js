"use client"

import { motion } from "framer-motion"

import { FaPython, FaGithub, FaDatabase } from "react-icons/fa"
import { SiC, SiMysql, SiPandas, SiNumpy, SiScikitlearn, SiGit, SiJupyter } from "react-icons/si"
import { AiOutlineBarChart } from "react-icons/ai"

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Skills() {

  const skills = [
    {
      title: "Programming",
      items: ["Python", "C", "SQL", "Data Structures"]
    },
    {
      title: "Data Analysis",
      items: [
        "Data Cleaning",
        "EDA",
        "Feature Engineering",
        "Statistical Analysis"
      ]
    },
    {
      title: "Data Visualization",
      items: [
        "Power BI",
        "Excel",
        "Dashboard Development"
      ]
    },
    {
      title: "Python Libraries",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn"
      ]
    },
    {
      title: "Machine Learning",
      items: [
        "Regression",
        "Classification",
        "Random Forest",
        "Gradient Boosting"
      ]
    },
    {
      title: "Databases",
      items: [
        "SQL",
        "MySQL"
      ]
    },
    {
      title: "Tools",
      items: [
        "Git",
        "GitHub",
        "Jupyter",
        "VS Code",
        "Excel",
        "Power BI"
      ]
    }
  ]

  return (
    <section id="skills" className="py-28 bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Skills & Tech Stack
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 hover:-translate-y-1 transition"
            >

              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>


        {/* Languages */}

        <div className="mt-20 text-center">

          <h3 className="text-2xl font-semibold mb-8">
            Languages
          </h3>

          <div className="flex justify-center gap-6 flex-wrap">

            <div className="bg-slate-900 px-6 py-4 rounded-lg border border-slate-700">
              Telugu — Native
            </div>

            <div className="bg-slate-900 px-6 py-4 rounded-lg border border-slate-700">
              English — Fluent
            </div>

            <div className="bg-slate-900 px-6 py-4 rounded-lg border border-slate-700">
              Hindi — Beginner
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}