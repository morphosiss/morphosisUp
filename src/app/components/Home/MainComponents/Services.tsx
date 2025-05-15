import React from "react";

interface ServiceComponent {
  aplication: string;
  tittle: string;
  description: string;
}

const ServiceComponent: React.FC<ServiceComponent> = ({
  aplication,
  tittle,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg flex flex-col justify-between p-5 rounded-xl">
      <header className="">
        <p className="text-[14px] mb-2 text-indigo-600 rounded-full  inline-flex font-semibold">
          {aplication}
        </p>
        <h5 className="text-xl font-semibold text-indigo-600">{tittle}</h5>

        <div className="border-t border-zinc-100 mt-1 pt-3">
          <p className="text-[15px] font-[450] text-zinc-800">{description}</p>
        </div>
      </header>
      <footer className="pt-5">
        <button className="flex transition-all hover:bg-indigo-700 cursor-pointer items-center justify-between w-full mt-5 bg-indigo-600 text-white font-semibold py-2.5 px-3 rounded-lg">
          Solicitar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon size-5 icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </button>
      </footer>
    </div>
  );
};

const Services = () => {
  return (
    <section className=" relative back mt-28">
      <div className="absolute top-0 left-0 right-0 w-full h-80 bg-gradient bg-gradient-to-b from-white to-transparent"></div>
      <div className="pt-28 relative">
        <header className="text-center max-w-xl w-full mx-auto ">
          <h2 className="font-bold text-4xl">Serviços</h2>
          <h5 className="pt-2 font-medium text-[18px] text-zinc-700">
            Oferecemos uma ampla gama de serviços para atender às suas
            necessidades tecnológicas.
          </h5>
        </header>

        <div className="grid mt-16 gap-2 grid-cols-4 max-w-7xl w-full mx-auto">
          <ServiceComponent
            aplication="Web / Mobile / Desktop"
            tittle="Protótipo de Aplicações"
            description="Criamos protótipos de aplicações para validar ideias e funcionalidades antes do desenvolvimento completo, Garantindo que o produto final atenda às expectativas."
          />
          <ServiceComponent
            aplication="Web"
            tittle="Aplicações Web"
            description="Desenvolvemos aplicações web personalizadas, escaláveis e responsivas, utilizando as tecnologias mais recentes para atender às suas necessidades específicas."
          />

          <ServiceComponent
            aplication="Web / Mobile / Desktop"
            tittle="Software de Gestão"
            description="Criamos software de gestão personalizados e com Inteligência Artificial para otimizar processos empresariais, aumentar a eficiência e melhorar a tomada de decisões."
          />

          <ServiceComponent
            aplication="Mobile"
            tittle="Aplicativos Móveis"
            description="Desenvolvemos aplicativos móveis nativos e híbridos para Android e iOS, com foco na experiência do usuário e desempenho."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
