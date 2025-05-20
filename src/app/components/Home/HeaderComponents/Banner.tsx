"use client";

import Link from "next/link";
import { motion } from "framer-motion";
const Banner = () => {
  const scrollToElement = (elementId: string, offset: number) => {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = offset;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="pot:pt-40 pt-32 relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl px-5 w-full m-auto text-center"
      >
        <motion.div variants={itemVariants}>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/company/morphosis-start-up"}
            className="font-medium inline-flex items-center m-auto text-[14px] transition-all hover:bg-indigo-700 pot:text-base justify-center gap-1 px-3 py-1 mb-4 ring-2 ring-indigo-500/40 rounded-full bg-indigo-600 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon size-4 icon-tabler icons-tabler-outline icon-tabler-layers-linked"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19 8.268a2 2 0 0 1 1 1.732v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h3" />
              <path d="M5 15.734a2 2 0 0 1 -1 -1.734v-8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-3" />
            </svg>
            Contacte-nos diretamente pelo LinkedIn
          </Link>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="det:text-[5rem] ret:text-5xl smaller:text-4xl text-4xl pot:text-7xl font-medium pot:font-semibold leading-none"
        >
          Transformando <span className="text-indigo-500">tecnologia</span> em{" "}
          <span className="text-indigo-500">soluções ágeis</span> e eficientes!
        </motion.h1>
        <div className="mt-5 max-w-2xl w-full m-auto">
          <motion.p variants={itemVariants} className="text-lg">
            Somos uma empresa de tecnologia focada em soluções inovadoras para o
            seu negócio. Nossa equipe de especialistas está pronta para ajudar
            você a alcançar seus objetivos com eficiência e agilidade.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex ret:flex-row flex-col max-w-[25rem] gap-1 m-auto mt-10 w-full"
          >
            <button
              onClick={() => scrollToElement("projects", -150)}
              className="flex cursor-pointer items-center justify-center gap-2 font-medium py-3 px-5 rounded-lg bg-indigo-500 text-white transition-all hover:bg-indigo-600"
            >
              Projectos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon size-6 icon-tabler icons-tabler-outline icon-tabler-stack"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
                <path d="M4 14l8 4l8 -4" />
              </svg>
            </button>
            <Link
              href={"https://wa.me/244954018728"}
              target="_blank"
              className="flex items-center justify-center hover:text-indigo-600 border border-transparent cursor-pointer gap-2  font-medium text-lg py-2 px-4 rounded-lg  text-indigo-500 transition-all hover:border hover:border-indigo-500"
            >
              Fale connosco
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
