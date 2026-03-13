"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 200;
        const height = section.offsetHeight;

        if (window.scrollY >= top) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "skills", "projects", "experience", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-slate-900 text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-cyan-400">Srikanth Nakka</h1>

        <div className="flex gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize ${
                active === item ? "text-cyan-400" : "text-gray-300"
              } hover:text-cyan-400`}
            >
              {item}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}