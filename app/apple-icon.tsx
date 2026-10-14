import { iconMark } from "@/lib/icon-mark";

// Ícono para la pantalla de inicio de iOS.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return iconMark(size.width);
}
