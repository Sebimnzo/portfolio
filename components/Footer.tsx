import { site } from "@/lib/data";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="border-t border-linea">
      <div className="mx-auto grid max-w-[1552px] grid-cols-2 items-center gap-4 px-5 pb-7 pt-[22px] sm:flex sm:justify-between sm:px-12">
        <Wordmark className="text-[26px]" />
        <p className="justify-self-end text-[13px] text-gris">{site.domain}</p>
        <a
          href={site.founder.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium transition-colors hover:text-azul"
        >
          LinkedIn <span aria-hidden>→</span>
        </a>
        <p className="justify-self-end font-mono text-[10px] uppercase text-gris">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
