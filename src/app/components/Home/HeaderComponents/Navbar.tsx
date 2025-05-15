import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around w-full relative">
      <div>
        <Link href={"/"} className="flex items-center gap-1">
          <svg
            className="text-indigo-600 size-8"
            viewBox="0 0 92 139"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 33V105.5L29.5 135V64.5H64.5V105.5L92 138.5V59.5L37.5 0V33H0Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-2xl font-semibold text--600">morphosis Up</span>
        </Link>
      </div>
      <div className="flex items-center gap-16">
        <Link
          href={"/"}
          className="text-zinc-800 text-[15px] font-medium transition-all hover:underline hover:text-indigo-600"
        >
          Start Up
        </Link>
        <Link
          href={"/"}
          className="text-zinc-800 text-[15px] font-medium transition-all hover:underline hover:text-indigo-600"
        >
          Projectos
        </Link>
        <Link
          href={"/"}
          className="text-zinc-800 text-[15px] font-medium transition-all hover:underline hover:text-indigo-600"
        >
          Serviços
        </Link>
        <Link
          href={"/"}
          className="text-zinc-800 text-[15px] font-medium transition-all hover:underline hover:text-indigo-600"
        >
          Team
        </Link>
      </div>
      <div>
        <button className="flex items-center gap-2 text-[15px] font-medium py-2 px-4 rounded-lg bg-indigo-500 text-white transition-all hover:bg-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon size-5 icon-tabler icons-tabler-outline icon-tabler-heart-handshake"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
            <path d="M12.5 15.5l2 2" />
            <path d="M15 13l2 2" />
          </svg>
          Contrate-nos
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
