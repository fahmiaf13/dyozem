import React from "react";
import { useScreenSize } from "@/hooks/useDimension";

export default function Navbar() {
  const { scrollY } = useScreenSize();

  const navList = [
    {
      title: "Profile",
    },
    {
      title: "Portfolio",
    },
    {
      title: "Sponsors",
    },
    {
      title: "Contact",
    },
  ];

  console.log(scrollY);
  return (
    <nav className={`w-full fixed z-10 ${scrollY > 10 ? "bg-white text-primary" : "bg-transparent text-white"} duration-300`}>
      <div className="container mx-auto py-10 flex items-center justify-between">
        <div className="text-2xl font-extrabold">Dyozem</div>
        <ul className="flex items-center gap-5">
          {navList.map((list, index) => (
            <li key={index} className="hover:text-red-500 duration-200">
              {list.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
