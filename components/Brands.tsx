import Image from "next/image";
import { site } from "@/lib/data";

// Se muestra solo cuando hay logos cargados en site.brands.
export default function Brands() {
  if (site.brands.length === 0) return null;

  return (
    <section className="bg-humo">
      <div className="mx-auto flex max-w-[1552px] flex-col gap-6 px-5 py-[26px] sm:px-12 lg:flex-row lg:items-center lg:gap-9">
        <h2 className="text-[19px] font-extrabold lg:w-[292px] lg:shrink-0">
          Marcas que confiaron en Mansalva
        </h2>
        <ul className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-5">
          {site.brands.map((brand) => (
            <li
              key={brand.name}
              className="relative flex h-14 items-center justify-center border border-linea bg-blanco"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                sizes="200px"
                className="object-contain p-3"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
