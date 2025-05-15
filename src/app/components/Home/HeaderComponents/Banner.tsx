const Banner = () => {
  return (
    <section className="pt-40 relative">
      <div className="max-w-6xl w-full m-auto text-center">
        <button className="text-[14px] flex items-center m-auto justify-center gap-1 px-3 py-1.5 mb-4 ring-2 ring-indigo-500/40 rounded-full bg-indigo-600 text-white">
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
          Contacte-nos diretamente pelo WhatsApp
        </button>
        <h1 className="text-7xl font-bold">
          Transformando tecnologia em soluções ágeis e eficientes!
        </h1>
        <div className="mt-5 max-w-2xl w-full m-auto">
          <p>
            Somos uma empresa de tecnologia focada em soluções inovadoras para o
            seu negócio. Nossa equipe de especialistas está pronta para ajudar
            você a alcançar seus objetivos com eficiência e agilidade.
          </p>

          <div className="grid grid-cols-2 max-w-[25rem] gap-1 m-auto mt-5 w-full">
            <button className="flex cursor-pointer items-center justify-center gap-2 text-[15px] font-medium py-3 px-4 rounded-lg bg-indigo-500 text-white transition-all hover:bg-indigo-600">
              Projectos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon size-5 icon-tabler icons-tabler-outline icon-tabler-stack"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
                <path d="M4 14l8 4l8 -4" />
              </svg>
            </button>
            <button className="flex items-center justify-center border border-transparent cursor-pointer gap-2 text-[15px] font-medium py-2 px-4 rounded-lg  text-indigo-500 transition-all hover:border hover:border-indigo-500">
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
