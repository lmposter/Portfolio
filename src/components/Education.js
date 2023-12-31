import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ type, time, place, info, grade, courses, awards}) => {
  const ref = useRef(null);
  return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

  <LiIcon reference={ref}/>

    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
      <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
        {type}
        </h3>
      <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
        {time} | {place}
      </span>
      <p className="font-medium w-full md:text-sm">
        {info}
      </p>
      <p className="font-medium w-full md:text-sm">
        {grade}
      </p>
      <p className="font-medium w-full md:text-sm">
        {courses}
      </p>
      <p className="font-medium w-full md:text-sm">
        {awards}
      </p>
    </motion.div>
  </li>

}

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="University of Toronto"
            time="2022-2026"
            place="Toronto, ON, CAN"
            info=" • Honours Bachelor of Science in Computer Science and Data Science, Minor in Mathematics"
            grade=" • CGPA: 4.00/4.00 (Dean's List Scholar)"
            courses=" • Relevant Coursework: Big Data and Privacy, Foundations of Computer Science, Statistical Reasoning, Calculus with Proofs, Linear Algebra"
            awards=" • Awards: UofT Scholar Award ($7,500); The Bob Simkins Memorial Scholarship in Science ($1,000)"
          />
          <Details
            type="Glenlawn Collegiate"
            time="2018-2022"
            place="Winnipeg, MB, CAN"
            info="Manitoba High School Diploma | Grade: 99% | Relevant Coursework: AP Calculus AB | Awards: Glenlawn Alumni Scholarship ($1,000)"
          />
        </ul>
      </div>
    </div>
  )
}

export default Education;