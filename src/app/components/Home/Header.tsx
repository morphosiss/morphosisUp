import data from "../data";
import InfiniteScroll from "./Trends";
import Navbar from "./HeaderComponents/Navbar";
import Banner from "./HeaderComponents/Banner";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header: React.FC<{
  setShowMenu: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setShowMenu }) => {
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

  const itemVariantsInfiniteScroll = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, delay: 1 },
    },
  };

  return (
    <>
      <Navbar setShowMenu={setShowMenu} />
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
        className="py-4 back  relative"
      >
        <div className="absolute bottom-0 left-0 right-0 w-full h-80 bg-gradient bg-gradient-to-b from-transparent to-white"></div>
        <Banner />
        <motion.section
          variants={itemVariantsInfiniteScroll}
          className="z-20 relative w-full left-0 right-0 flex items-start mt-14 gap-10"
        >
          <InfiniteScroll cardData={data} />
        </motion.section>

        <motion.section
          variants={itemVariantsInfiniteScroll}
          className="pot:w-[90%] w-[95%] mx-auto gap-2 mt-10 grid ret:grid-cols-2 grid-cols-1 pot:grid-cols-3 p-2 rounded-4xl bg-white border border-zinc-200"
        >
          <div className="pot:h-[30rem] h-[25rem] relative overflow-hidden border rounded-3xl border-zinc-200 bg-zinc-100">
            <div className="bg-[url('/Models/dashboard.webp')] shadow-2xl absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 right-0 rounded-2xl bg-cover pot:bg-top bg-left h-80 w-[95%] pot:w-[90%]"></div>
          </div>
          <div className="pot:h-[30rem] h-[25rem] relative overflow-hidden border rounded-3xl border-indigo-300 bg-zinc-800">
            <div className="bg-[url('/opensource.png')] shadow-2xl absolute -translate-x-1/2 left-1/2 right-0 -bottom-10 rounded-t-2xl bg-cover bg-top h-full w-[95%]"></div>
          </div>
          <div className="pot:h-[30rem] h-[25rem] relative overflow-hidden border rounded-3xl border-indigo-300 bg-indigo-600">
            <div className="bg-transparent flex items-center justify-center  absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 right-0 rounded-2xl bg-cover bg-top h-80 w-[95%]">
              <Link
                href={"/"}
                className="flex flex-wrap justify-center items-center gap-1"
              >
                <svg
                  className="text-indigo-50 size-12"
                  viewBox="0 0 92 139"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 33V105.5L29.5 135V64.5H64.5V105.5L92 138.5V59.5L37.5 0V33H0Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-4xl  font-medium text-indigo-50">
                  morphosis Up
                </span>
              </Link>
            </div>
          </div>
        </motion.section>
        <motion.section id="banner" className="relative pt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-3xl w-full mx-auto text-center"
          >
            <motion.header variants={itemVariants}>
              <h2 className="pot:font-semibold font-medium pot:text-5xl ret:text-4xl text-3xl">
                Quem Somos?
              </h2>
            </motion.header>
            <motion.div className="grid mt-14  pb-5 grid-cols-1 px-5 ret:grid-cols-2 gap-2">
              <motion.div
                variants={itemVariants}
                className="p-5 rounded-xl  bg-white border border-gray-200"
              >
                <header>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon size-7 text-indigo-600 icon-tabler icons-tabler-outline icon-tabler-dna"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
                      <path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
                      <path d="M14.828 3.515a4 4 0 0 0 5.657 5.657" />
                    </svg>
                  </span>
                </header>

                <footer className="mt-10 text-start">
                  <h3 className="text-start text-indigo-600 font-medium text-lg">
                    Somos Metamorfose Tecnológica
                  </h3>
                  <p className="font-[450] pt-3 text-zinc-800">
                    Surgimos na necessidade de transformar a tecnologia em
                    soluções inovadoras e eficientes para atingir os problemas
                    do dia a dia. Diferenciamo-nos pela nossas características
                    únicas, que nos tornam a escolha ideal para quem busca
                    excelência em tecnologia.
                  </p>
                </footer>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-5 rounded-xl  bg-white border border-gray-200"
              >
                <header>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon size-6 text-indigo-600 icon-tabler icons-tabler-outline icon-tabler-timeline-event-text"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M10 20h-6" />
                      <path d="M14 20h6" />
                      <path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2z" />
                      <path d="M9 6h6" />
                      <path d="M9 9h3" />
                    </svg>
                  </span>
                </header>

                <footer className="mt-10 text-start">
                  <h3 className="text-start text-indigo-600 font-medium text-lg">
                    Missão
                  </h3>
                  <p className="font-[450] pt-3 text-zinc-800">
                    Proporcionar soluções tecnológicas inovadoras, ágeis e
                    elegantes, adaptando-se ás necessidades específicas de cada
                    cliente e oferecendo experiências digitais leves, eficientes
                    e prazerosas.
                  </p>
                </footer>
              </motion.div>

              {/* OBJECTIVOS */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={itemVariants}
                className="p-5 rounded-xl  bg-white border border-gray-200"
              >
                <header>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon size-6 text-indigo-600 icon-tabler icons-tabler-outline icon-tabler-flag-3"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
                    </svg>
                  </span>
                </header>

                <footer className="mt-10 text-start">
                  <h3 className="text-start text-indigo-600 font-medium text-lg">
                    Principais Objectivos
                  </h3>
                  <motion.div className="flex flex-col gap-0 leading-snug">
                    <p className="font-[450] pt-3 text-zinc-800">
                      - Ser referência em desenvolvimento tecnológico
                      adaptativo.
                    </p>
                    <p className="font-[450] pt-3 text-zinc-800">
                      - Expandir o portfólio de soluções, atendendo diferences
                      segmentos.
                    </p>
                    <p className="font-[450] pt-3 text-zinc-800">
                      - Fidelizar clientes através da excelência na experiência
                      do cliente.
                    </p>
                    <p className="font-[450] pt-3 text-zinc-800">
                      - Crescer de forma sustentável, formando parcerias
                      estratégicas.
                    </p>
                  </motion.div>
                </footer>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={itemVariants}
                className="p-5 rounded-xl  bg-white border border-gray-200"
              >
                <header>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon size-6 text-indigo-600 icon-tabler icons-tabler-outline icon-tabler-bookmarks"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
                      <path d="M11 3h5a3 3 0 0 1 3 3v11" />
                    </svg>
                  </span>
                </header>

                <footer className="mt-10 text-start">
                  <h3 className="text-start text-indigo-600 font-medium text-lg">
                    Nossos Valores
                  </h3>
                  <motion.div className="flex flex-col gap-0 leading-snug">
                    <p className="font-[450] pt-3 text-zinc-800">
                      - Adaptação constante - sempre prontos para evoluir com os
                      desafios.
                    </p>
                    <p className="font-[450] pt-3 text-zinc-800">
                      - Excelência com leveza - buscamos a máxima qualidade sem
                      perder a fluidez e simplicidade.
                    </p>
                    <p className="font-[450] pt-3 text-zinc-800">
                      - Agilidade e Eficiência - soluções rápidas, mas sem
                      comprometer a qualidade do producto.
                    </p>
                    <p className="font-[450] pt-3 text-zinc-800">
                      - Inovação Prática - aplicamos a tecnologia de ponta para
                      resolver problemas reais de forma objectiva.
                    </p>
                  </motion.div>
                </footer>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.header>
    </>
  );
};

export default Header;
