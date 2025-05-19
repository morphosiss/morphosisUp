import Link from "next/link";
import Header from "./components/Home/Header";
import Projects from "./components/Home/MainComponents/Projects";
import Services from "./components/Home/MainComponents/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="w-full">
        <Projects />
        <Services />
      </main>
      <footer className="p-5 relative flex-wrap gap-3 bg-indigo-500 w-full flex items-center justify-around">
        <div className="flex items-center gap-5">
          <Link href={"/"} className="flex items-center gap-1">
            <svg
              className="text-white size-7"
              viewBox="0 0 92 139"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 33V105.5L29.5 135V64.5H64.5V105.5L92 138.5V59.5L37.5 0V33H0Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xl font-semibold text-white">
              morphosis Up
            </span>
          </Link>

          {/* WHATSAPP LINK */}
          <div className="flex justify-center items-center gap-4">
            <Link
              href={"https://wa.me/244954018728"}
              target="_blank"
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon size-6 icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </Link>{" "}
            <Link
              href={"https://www.linkedin.com/company/morphosis-start-up"}
              target="_blank"
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon size-6 icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </Link>{" "}
            <Link
              href={"mailto:startupmorphosis@gmail.com"}
              target="_blank"
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon size-6 icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <p className="text-white text-[15px] font-semibold">
            © 2025 morphosis Up. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
