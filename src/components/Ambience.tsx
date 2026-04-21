import { motion } from "framer-motion";
import "./Ambience.css";

const cells = [
  { src: "/gallery/interior-counter.jpg", caption: "다찌석", tag: "1F Counter" },
  { src: "/gallery/interior-table.jpg", caption: "2인 · 4인 테이블", tag: "1F Table" },
  { src: "/gallery/interior-bar.jpg", caption: "단체 룸", tag: "2F Private" },
];

export default function Ambience() {
  return (
    <section id="ambience" className="section ambience">
      <div className="ambience__head">
        <span className="section-label">04 · Space</span>
        <h2 className="section-title">
          1층 다찌부터 <br />
          <span className="highlight">2층 단체까지.</span>
        </h2>
        <p className="section-subtitle">
          혼자의 조용한 한 잔에는 1층 다찌, 오래된 친구들과의 회식에는 2층 룸.
          장면마다 어울리는 자리를 고를 수 있는, 코리의 두 개의 층.
        </p>
      </div>

      <div className="ambience__grid">
        {cells.map((c, i) => (
          <motion.figure
            key={c.caption}
            className="ambience__cell"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <img src={c.src} alt={c.caption} loading="lazy" />
            <figcaption>
              <span className="ambience__caption-tag">{c.tag}</span>
              <span className="ambience__caption-ko">{c.caption}</span>
            </figcaption>
          </motion.figure>
        ))}

        <motion.div
          className="ambience__video-cell"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <video
            src="/videos/kori-2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="ambience__video-overlay">
            <span>LIVE AT KOR;I</span>
            <p>오늘 밤에도 문을 엽니다.</p>
          </div>
        </motion.div>
      </div>

      <div className="ambience__ticker">
        <div className="ambience__ticker-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>
              · 2층도 있어요 · 단체석도 가능 · 주말은 새벽 6시까지 ·
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
