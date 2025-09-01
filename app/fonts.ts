import { Open_Sans, Anton, Roboto, Montserrat } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
