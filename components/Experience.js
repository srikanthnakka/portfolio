// "use client"

// import { motion } from "framer-motion"

// export default function Experience() {
//   return (
//     <section id="experience" className="py-28 bg-slate-950 text-white">

//       <div className="max-w-6xl mx-auto px-6">

//         <h2 className="text-4xl font-bold text-center mb-3">
//           Experience & Education
//         </h2>

//         <p className="text-center text-gray-400 mb-16">
//           My professional journey and academic background
//         </p>

//         <div className="grid md:grid-cols-2 gap-14">

//           {/* LEFT SIDE EXPERIENCE */}

//           <div>

//             <h3 className="text-xl font-semibold mb-6 text-cyan-400">
//               Training
//             </h3>

//             <motion.div
//               initial={{ opacity:0, x:-40 }}
//               whileInView={{ opacity:1, x:0 }}
//               transition={{ duration:0.6 }}
//               className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
//             >

//               <h4 className="text-lg font-semibold">
//                 Data Science Training
//               </h4>

//               <p className="text-gray-300 mt-1">
//                 OdinSchool
//               </p>

//               <p className="text-sm text-gray-400 mt-2">
//                 2024
//               </p>

//               <ul className="text-gray-400 mt-4 space-y-2 text-sm">

//                 <li>
//                   Learned Python, Pandas, NumPy for data analysis
//                 </li>

//                 <li>
//                   Built machine learning models using Scikit-learn
//                 </li>

//                 <li>
//                   Created interactive dashboards using Power BI
//                 </li>

//                 <li>
//                   Worked on real-world analytics projects
//                 </li>

//               </ul>

//             </motion.div>

//           </div>


//           {/* RIGHT SIDE EDUCATION */}

//           <div>

//             <h3 className="text-xl font-semibold mb-6 text-cyan-400">
//               Education
//             </h3>


//             {/* BTECH */}

//             <motion.div
//               initial={{ opacity:0, x:40 }}
//               whileInView={{ opacity:1, x:0 }}
//               transition={{ duration:0.6 }}
//               className="bg-slate-900 p-6 rounded-xl border border-slate-700 mb-6 hover:border-cyan-400 transition"
//             >

//              

//             </motion.div>


//             {/* PUC */}

//             <motion.div
//               initial={{ opacity:0, x:40 }}
//               whileInView={{ opacity:1, x:0 }}
//               transition={{ duration:0.6 }}
//               className="bg-slate-900 p-6 rounded-xl border border-slate-700 mb-6 hover:border-cyan-400 transition"
//             >

//               <h4 className="text-lg font-semibold">
//                 Pre-University Course
//               </h4>

//               

//             </motion.div>


//             {/* 10TH */}

//             <motion.div
//               initial={{ opacity:0, x:40 }}
//               whileInView={{ opacity:1, x:0 }}
//               transition={{ duration:0.6 }}
//               className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
//             >

//               <h4 className="text-lg font-semibold">
//                 Secondary School (10th)
//               </h4>

//               <p className="text-gray-300">
//                 Z.P. High School, Munganda
//               </p>

//               <p className="text-gray-400 text-sm mt-2">
//                 Completed in 2017
//               </p>

//               <p className="text-gray-400 text-sm mt-1">
//                 GPA: 9.7
//               </p>

//             </motion.div>

//           </div>

//         </div>

//       </div>

//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"

export default function Experience() {

  return (

    <section id="experience" className="py-28 bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}

        <h2 className="text-4xl font-bold text-center mb-3">
          Experience & <span className="text-cyan-400">Education</span>
        </h2>

        <p className="text-center text-gray-400 mb-20">
          My professional journey and academic background
        </p>


        {/* Timeline Container */}

        <div className="relative grid md:grid-cols-2 gap-16">

          {/* Vertical timeline line */}

          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-slate-700"></div>


          {/* LEFT SIDE — TRAINING */}

          <div className="relative">

            <h3 className="text-xl font-semibold text-cyan-400 mb-6">
              Training
            </h3>


            <motion.div
              initial={{ opacity:0, x:-40 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.6 }}
              className="relative bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
            >

              {/* Timeline node */}

           

              <h4 className="text-lg font-semibold">
                Data Science Training
              </h4>

              <p className="text-gray-300 mt-1">
                OdinSchool
              </p>

              <p className="text-sm text-gray-400 mt-2">
                May, 2024 - March, 2025
              </p>

              <ul className="text-gray-400 mt-4 space-y-2 text-sm">

                <li>Learned Python, Pandas, NumPy for data analysis</li>

                <li>Built machine learning models using Scikit-learn</li>

                <li>Created interactive dashboards using Power BI</li>

                <li>Worked on real-world analytics projects</li>

              </ul>

            </motion.div>

          </div>


          {/* RIGHT SIDE — EDUCATION */}

          <div className="relative">

            <h3 className="text-xl font-semibold text-cyan-400 mb-6">
              Education
            </h3>


            {/* BTECH */}

            <motion.div
              initial={{ opacity:0, x:40 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.6 }}
              className="relative bg-slate-900 p-6 rounded-xl border border-slate-700 mb-8 hover:border-cyan-400 transition"
            >

              {/* Timeline node */}

              <span className="hidden md:block absolute -left-[34px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_10px_#22d3ee]"></span>

               <h4 className="text-lg font-semibold">
                Bachelor of Technology (B.Tech)
              </h4>
              <p className="text-gray-300">
                Computer Science and Engineering
              </p>

              <p className="text-gray-300">
                Rajiv Gandhi University of Knowledge Technologies, Ongole
              </p>

              <p className="text-gray-400 text-sm mt-2">
                2019 – 2023
              </p>

              <p className="text-gray-400 text-sm mt-1">
                GPA: 8.99
              </p>
            </motion.div>


            {/* PUC */}

            <motion.div
              initial={{ opacity:0, x:40 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.6 }}
              className="relative bg-slate-900 p-6 rounded-xl border border-slate-700 mb-8 hover:border-cyan-400 transition"
            >

              <span className="hidden md:block absolute -left-[34px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_10px_#22d3ee]"></span>

              <h4 className="text-lg font-semibold">
                Pre-University Course
              </h4>

             <p className="text-gray-300">
                Rajiv Gandhi University of Knowledge Technologies, Ongole
              </p>

              <p className="text-gray-400 text-sm mt-2">
                2017 – 2019
              </p>

              <p className="text-gray-400 text-sm mt-1">
                CGPA: 8.0
              </p>

            </motion.div>


            {/* 10TH */}

            <motion.div
              initial={{ opacity:0, x:40 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.6 }}
              className="relative bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
            >

              <span className="hidden md:block absolute -left-[34px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_10px_#22d3ee]"></span>

              <h4 className="text-lg font-semibold">
                Secondary School (10th)
              </h4>

              <p className="text-gray-300">
                Z.P. High School, Munganda
              </p>

              <p className="text-gray-400 text-sm mt-2">
                Completed in 2017
              </p>

              <p className="text-gray-400 text-sm">
                GPA: 9.7
              </p>

            </motion.div>

          </div>

        </div>

      </div>

    </section>

  )
}