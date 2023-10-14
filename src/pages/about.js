import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from 'next/head'
import React, { useEffect, useRef } from "react";
import profilePic from '../../public/images/profile/Mahe.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })

  }, [springValue, value])


  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
      <title>Mahe Chen | About me</title>
        <meta name="description" content="Mahe Chen | Full-Stack Software Engineer" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light overflow-auto">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About Me</h2>
              <p className="font-medium">
               Hello there! My name is Mahe Chen, and I&apos;m currently in my second year at the University of Toronto, where I&apos;m pursuing a dual specialist in Computer Science and Data Science. Although I&apos;m still in the early stages of my journey in the field, my foundation in programming applications is solid and diverse. My explorations span various domains, including game design, software engineering, web development, data analysis, and bioinformatics. Engaging actively at the University of Toronto, I&apos;m a member of several computer science clubs such as the Google Student Developer Club and the UofT AI Club, which continuously expand my perspectives.
              </p>

              <p className="my-4 font-medium">
                During my leisure hours, I immerse myself in a range of hobbies that bring me joy. Playing the clarinet and saxophone, as well as composing music, allow me to express my creative side. Recently, I&apos;ve delved into the realm of business, finding a newfound passion in the realm of innovation and ideas. Beyond this, I prioritize my physical well-being by maintaining a regular gym routine, and in quieter moments, I lose myself in the pages of history books. This love for history has led me to take in a history course at UofT.
              </p>

              <p className="font-medium">
                A staunch advocate for collaboration, I thrive in team projects and value the wisdom gained from experienced developers. My journey as a software engineer is an ongoing adventure, and I enthusiastically welcome fresh challenges and opportunities along the way. Please don't hesitate to reach out – I&apos;m always here to connect!
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl-col-span-4 md:order-1 md:col-span-8
          ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image src={profilePic} alt="Mahe Chen" className='w-full h-auto rounded-2xl' priority
                sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw,
              33vw' />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Skills</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Passion</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Bad with Percentages</h2>
              </div>

            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about;
