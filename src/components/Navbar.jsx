import { NAV_LINKS } from "../constants";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b border-white/10 bg-[#080808]/70 px-5 py-4 backdrop-blur-[18px] md:px-10 md:py-[18px]">
      <Link to="/" className="font-['Syne'] text-[22px] font-extrabold tracking-[-0.5px] text-white">HR<span className="text-[#c8ff00]">Bot</span></Link>
      <ul className="hidden items-center gap-[30px] md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            {link === "Home" ? (
              <Link to="/" className="text-[13px] font-medium text-white/60 transition hover:-translate-y-px hover:text-white">{link}</Link>
            ) : link === "Companies" ? (
              <Link to="/companies" className="text-[13px] font-medium text-white/60 transition hover:-translate-y-px hover:text-white">{link}</Link>
            ) : link === "FAQ" ? (
              <Link to="/faq" className="text-[13px] font-medium text-white/60 transition hover:-translate-y-px hover:text-white">{link}</Link>
            ) : link === "About" ? (
              <Link to="/about" className="text-[13px] font-medium text-white/60 transition hover:-translate-y-px hover:text-white">{link}</Link>
            ) : (
              <a href="#" className="text-[13px] font-medium text-white/60 transition hover:-translate-y-px hover:text-white">{link}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
