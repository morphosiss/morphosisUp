import Link from "next/link";
import { motion } from "framer-motion"
const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={containerVariants}
      id="projects" className="w-full px-5">
      <motion.header className="text-center max-w-xl w-full mx-auto mt-28">
        <motion.h2 variants={itemVariants} className="pot:font-semibold font-medium pot:text-4xl text-3xl">Principais Projectos</motion.h2>
        <motion.h5 variants={itemVariants} className="pt-2 font-[450] text-[18px] text-zinc-700">
          Aqui estão alguns dos nossos projectos mais recentes, que demonstram a
          nossa experiência e dedicação em fornecer soluções inovadoras e
          eficientes para os nossos clientes.
        </motion.h5>
      </motion.header>
      <motion.div variants={itemVariants} className="max-w-[20rem] pb-5 w-full grid gap-1 grid-cols-1  mx-auto mt-10">
        <motion.div className="p-5 h-72 flex flex-col justify-between bg-indigo-500">
          <motion.header className="flex items-center gap-2">
            <span>
              <svg
                className="w-7"
                viewBox="0 0 34 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.845215"
                  width="15.3634"
                  height="13.2125"
                  rx="2"
                  fill="#4F46E5"
                />
                <rect
                  x="0.845215"
                  y="14.4879"
                  width="15.3634"
                  height="13.2125"
                  rx="2"
                  fill="white"
                />
                <rect
                  x="17.4839"
                  y="14.4879"
                  width="15.6707"
                  height="13.2125"
                  rx="2"
                  fill="#4F46E5"
                />
                <rect
                  x="17.4839"
                  width="15.6707"
                  height="13.2125"
                  rx="2"
                  fill="white"
                />
              </svg>
            </span>
            <p className="text-xl text-white font-['Poppins']">Cavaleiro</p>
          </motion.header>
          <motion.footer>
            <motion.div className="flex flex-wrap gap-0">
              <p className="px-3 py-1 rounded-l-full bg-indigo-700 text-white inline-flex text-[14px] font-medium mb-2 border border-indigo-400">
                Finalizado
              </p>
              <Link
                href={"https://cavaleiro.tech"}
                target="_blank"
                className="px-3 py-1  underline transition-all hover:bg-indigo-800 rounded-r-full bg-indigo-700 text-white inline-flex text-[14px] font-medium mb-2 border border-indigo-400"
              >
                Visitar Website
              </Link>
            </motion.div>
            <motion.p className="text-white font-[450]">
              Plataforma de gestão de partidas de xadrez, com funcionalidades
              como agendamento de partidas, gestão de jogadores e estatísticas
              de desempenho.
            </motion.p>
          </motion.footer>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
