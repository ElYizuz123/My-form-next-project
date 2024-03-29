import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-full h-14 bg-blue-400 text-white flex justify-between items-center px-2">
          <Link className="text-4xl" href="/">
            <img className="h-8" src="/Amazon_logo.svg"/>
          </Link>
          <input className="rounded-md p-2" type="text" placeholder="Buscar producto..."/>
          <div className="size-10 bg-pink-600"></div>
        </nav>
        {children}
      </body>

    </html>
  );
}
