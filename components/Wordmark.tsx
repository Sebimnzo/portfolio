// Wordmark del manual: Archivo 900, mayúsculas, interletrado −4,5 %,
// punto cuadrado de 0,24 em sobre la línea base.
export default function Wordmark({
  className = "",
  dotClassName = "bg-azul",
}: {
  className?: string;
  dotClassName?: string;
}) {
  return (
    <span
      translate="no"
      className={`inline-flex items-baseline font-black uppercase leading-none tracking-[-0.045em] ${className}`}
    >
      Mansalva
      <span
        aria-hidden
        className={`ml-[0.08em] inline-block h-[0.24em] w-[0.24em] ${dotClassName}`}
      />
    </span>
  );
}
