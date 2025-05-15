import Link from "next/link";

const Projects = () => {
  return (
    <section className="w-full">
      <header className="text-center max-w-xl w-full mx-auto mt-28">
        <h2 className="font-bold text-4xl">Principais Projectos</h2>
        <h5 className="pt-2 font- text-[18px] text-zinc-700">
          Aqui estão alguns dos nossos projectos mais recentes, que demonstram a
          nossa experiência e dedicação em fornecer soluções inovadoras e
          eficientes para os nossos clientes.
        </h5>
      </header>
      <div className="max-w-[20rem] pb-5 w-full grid gap-1 grid-cols-1  mx-auto mt-10">
        <div className="p-5 h-72 flex flex-col justify-between bg-indigo-500">
          <header className="flex items-center gap-2">
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
          </header>
          <footer>
            <div className="flex flex-wrap gap-0">
              <p className="px-3 py-1 rounded-l-full bg-indigo-700 text-white inline-flex text-[14px] font-semibold mb-2 border border-indigo-400">
                Finalizado
              </p>
              <Link
                href={"https://cavaleiro.tech"}
                target="_blank"
                className="px-3 py-1  underline rounded-r-full bg-indigo-700 text-white inline-flex text-[14px] font-semibold mb-2 border border-indigo-400"
              >
                Visitar Website
              </Link>
            </div>
            <p className="text-white font-medium">
              Plataforma de gestão de partidas de xadrez, com funcionalidades
              como agendamento de partidas, gestão de jogadores e estatísticas
              de desempenho.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Projects;
