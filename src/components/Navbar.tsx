import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import "./Navbar.css";

const links = [
  { href: "#brand", label: "BRAND", ko: "브랜드" },
  { href: "#signature", label: "SIGNATURE", ko: "시그니처" },
  { href: "#menu", label: "MENU", ko: "메뉴" },
  { href: "#ambience", label: "SPACE", ko: "공간" },
  { href: "#visit", label: "VISIT", ko: "오시는 길" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#top" className="nav__brand" aria-label="Kor;i 홈">
        <span className="nav__brand-mark">Kor;i</span>
        <span className="nav__brand-kr">コリ · 코리</span>
      </a>
      <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="nav__link"
          >
            <span className="nav__link-en">{l.label}</span>
            <span className="nav__link-ko">{l.ko}</span>
          </a>
        ))}
      </nav>
      <div className="nav__cta">
        <a
          href="https://www.instagram.com/kor_i.official/"
          target="_blank"
          rel="noreferrer"
          className="nav__icon"
          aria-label="인스타그램"
        >
          <InstagramIcon size={18} />
        </a>
        <a href="tel:0507-1338-7519" className="nav__call">
          <Phone size={14} /> 예약
        </a>
        <button
          className={`nav__burger ${open ? "nav__burger--open" : ""}`}
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
