import { motion } from "framer-motion";
import { ArrowDown, Clock, MapPin } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__media">
        <video
          className="hero__video"
          src="/videos/kori-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/brand/hero-alley.jpg"
        />
        <div className="hero__scrim" />
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>
              KOR;I · 한식 이자카야 · 서면본점 · KOR;I · 깊은 밤의 안주 ·
            </span>
          ))}
        </div>
      </div>

      <div className="hero__content">
        <motion.div
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="hero__tag-dot" /> BUSAN · SEOMYEON · SINCE 2021
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
        >
          <span className="hero__title-line">늦은 밤까지</span>
          <span className="hero__title-line hero__title-line--accent">
            Kor<span className="hero__title-semicolon">;</span>i
          </span>
          <span className="hero__title-line">한 잔, 깊은 안주.</span>
        </motion.h1>

        <motion.p
          className="hero__lede"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          북적북적 거리면서 소주 한 잔에 기분 좋게 취하기 좋은, 그런 단위집.
          <br />
          육수부터 모든 것을 손수 내어드리는 한식 이자카야.
        </motion.p>

        <motion.div
          className="hero__meta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
        >
          <div className="hero__meta-item">
            <Clock size={14} />
            <span>
              <strong>18:00 — 04:00</strong> · 주말 새벽 6시까지
            </span>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <MapPin size={14} />
            <span>서면역 2번 출구 도보 2분</span>
          </div>
        </motion.div>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <a href="#menu" className="hero__cta hero__cta--primary">
            메뉴 보기
          </a>
          <a
            href="tel:0507-1338-7519"
            className="hero__cta hero__cta--ghost"
          >
            예약 전화 0507-1338-7519
          </a>
        </motion.div>
      </div>

      <div className="hero__scroll">
        <ArrowDown size={14} />
        <span>SCROLL</span>
      </div>

      <div className="hero__frame">
        <span>N° 2021</span>
        <span>부산 · 서면본점</span>
      </div>
    </section>
  );
}
