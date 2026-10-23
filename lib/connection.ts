// Conexión lenta (2G/3G) o "ahorro de datos" activado. Lo informan Chrome y
// Android; Safari no, así que ahí los videos se comportan como siempre.
type NetworkInformation = { saveData?: boolean; effectiveType?: string };

export function slowConnection() {
  const c = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  return !!c && (c.saveData === true || /2g|3g/.test(c.effectiveType ?? ""));
}
