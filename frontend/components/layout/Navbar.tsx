"use client";

import Link from "next/link";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Labs", href: "#labs" },
  { name: "Architecture", href: "#architecture" },
  { name: "Journal", href: "#journal" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="logo">
          amdrbones<span>.</span>
        </Link>

        <nav className="nav-menu">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link">
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="https://github.com/AutomationDS/amdrbones.online"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}