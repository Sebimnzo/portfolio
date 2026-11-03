import type { Metadata } from "next";

// La pide Google para publicar la app de la herramienta interna de subidas. Sin indexar y sin enlaces desde el sitio.
export const metadata: Metadata = {
  title: "Política de privacidad de Mansalva rclone",
  alternates: { canonical: null },
  robots: { index: false, follow: false },
};

export default function Privacidad() {
  return (
    <main id="main" className="mx-auto flex w-full max-w-[720px] flex-1 flex-col gap-6 px-5 py-24 text-base leading-relaxed">
      <h1 className="text-3xl font-black tracking-[-0.03em]">Política de privacidad de Mansalva rclone</h1>
      <p>
        Mansalva rclone es una herramienta interna de Mansalva. La usa solo Sebastián Manzolillo para subir y ordenar
        archivos de trabajo en su propio Google Drive.
      </p>
      <p>
        La herramienta accede únicamente al Drive de la cuenta que la autorizó. No recopila datos de otras personas, no
        los vende y no los comparte con terceros. Los archivos quedan en ese Drive y en la computadora de Sebastián.
      </p>
      <p>Para revocar el acceso, se entra a la cuenta de Google, en «Seguridad», «Apps y servicios de terceros».</p>
      <p>
        Consultas: <a className="text-azul underline" href="mailto:manzo@mansalvadesign.com">manzo@mansalvadesign.com</a>
      </p>
    </main>
  );
}
