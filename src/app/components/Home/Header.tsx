import data from "../data";
import InfiniteScroll from "./Trends";
import Navbar from "./HeaderComponents/Navbar";
import Banner from "./HeaderComponents/Banner";

const Header = () => {
  return (
    <header className="py-4 back h-screen relative">
      <div className="absolute bottom-0 left-0 right-0 w-full h-80 bg-gradient bg-gradient-to-b from-transparent to-white"></div>
      <Navbar />
      <Banner />
      <section className="z-20 relative w-full left-0 right-0 flex items-start mt-14 gap-10">
        <InfiniteScroll cardData={data} />
      </section>
      <section className="relative pt-32">
        <div className="max-w-3xl w-full mx-auto text-center">
          <h2 className="font-bold text-5xl">Quem Somos?</h2>

          <div className="grid mt-14  pb-5 grid-cols-2 gap-2">
            <div className="p-5 rounded-xl  bg-white border border-gray-200">
              <header>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                <h3 className="text-start text-indigo-600 font-semibold text-lg">
                  Somos Metamorfose Tecnológica
                </h3>
                <p className="text-[14px] pt-3 text-zinc-800">
                  Surgimos na necessidade de transformar a tecnologia em
                  soluções inovadoras e eficientes para atingir os problemas do
                  dia a dia. Diferenciamo-nos pela nossas características
                  únicas, que nos tornam a escolha ideal para quem busca
                  excelência em tecnologia.
                </p>
              </footer>
            </div>

            <div className="p-5 rounded-xl  bg-white border border-gray-200">
              <header>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                <h3 className="text-start text-indigo-600 font-semibold text-lg">
                  Missão
                </h3>
                <p className="text-[14px] pt-3 text-zinc-800">
                  Proporcionar soluções tecnológicas inovadoras, ágeis e
                  elegantes, adaptando-se ás necessidades específicas de cada
                  cliente e oferecendo experiências digitais leves, eficientes e
                  prazerosas.
                </p>
              </footer>
            </div>

            {/* OBJECTIVOS */}
            <div className="p-5 rounded-xl  bg-white border border-gray-200">
              <header>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon size-6 text-indigo-600 icon-tabler icons-tabler-outline icon-tabler-flag-3"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
                  </svg>
                </span>
              </header>

              <footer className="mt-10 text-start">
                <h3 className="text-start text-indigo-600 font-semibold text-lg">
                  Principais Objectivos
                </h3>
                <div className="flex flex-col gap-0 leading-snug">
                  <p className="text-[14px] pt-3 text-zinc-800">
                    - Ser referência em desenvolvimento tecnológico adaptativo.
                  </p>
                  <p className="text-[14px] pt-3 text-zinc-800">
                    - Expandir o portfólio de soluções, atendendo diferences
                    segmentos.
                  </p>
                  <p className="text-[14px] pt-3 text-zinc-800">
                    - Fidelizar clientes através da excelência na experiência do
                    cliente.
                  </p>
                  <p className="text-[14px] pt-3 text-zinc-800">
                    - Crescer de forma sustentável, formando parcerias
                    estratégicas.
                  </p>
                </div>
              </footer>
            </div>

           

            <div className="p-5 rounded-xl  bg-white border border-gray-200">
              <header>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon size-6 text-indigo-600 icon-tabler icons-tabler-outline icon-tabler-bookmarks"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
                    <path d="M11 3h5a3 3 0 0 1 3 3v11" />
                  </svg>
                </span>
              </header>

              <footer className="mt-10 text-start">
                <h3 className="text-start text-indigo-600 font-semibold text-lg">
                  Nossos Valores
                </h3>
                <div className="flex flex-col gap-0 leading-snug">
                  <p className="text-[14px] pt-3 text-zinc-800">
                    - Adaptação constante - sempre prontos para evoluir com os
                    desafios.
                  </p>
                  <p className="text-[14px] pt-3 text-zinc-800">
                    - Excelência com leveza - buscamos a máxima qualidade sem
                    perder a fluidez e simplicidade.
                  </p>
                  <p className="text-[14px] pt-3 text-zinc-800">
                    - Agilidade e Eficiência - soluções rápidas, mas sem
                    comprometer a qualidade do producto.
                  </p>
                  <p className="text-[14px] pt-3 text-zinc-800">
                    - Inovação Prática - aplicamos a tecnologia de ponta para
                    resolver problemas reais de forma objectiva.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
