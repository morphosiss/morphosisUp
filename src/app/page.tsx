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
    </div>
  );
}
