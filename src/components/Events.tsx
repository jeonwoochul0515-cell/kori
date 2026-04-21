import { motion } from "framer-motion";
import { storeInfo } from "../data/menu";
import { Gift, Sparkles, Users } from "lucide-react";
import "./Events.css";

const icons = [
  <Gift key="1" size={28} />,
  <Sparkles key="2" size={28} />,
  <Users key="3" size={28} />,
];

export default function Events() {
  return (
    <section id="events" className="section events">
      <div className="events__grid">
        <div className="events__left">
          <span className="section-label">05 · Ongoing</span>
          <h2 className="section-title">
            오늘의 <span className="highlight">EVENT</span>
          </h2>
          <p className="section-subtitle">
            코리에서 진행 중인 이벤트들. 서비스 메뉴부터 단체 모임까지,
            코리를 방문하는 여러 장면에 맞춰 준비했습니다.
          </p>
          <a
            href={storeInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="events__ig"
          >
            @kor_i.official 에서 실시간 업데이트 →
          </a>
        </div>

        <div className="events__cards">
          {storeInfo.events.map((e, i) => (
            <motion.article
              key={e.title}
              className="events__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="events__icon">{icons[i]}</div>
              <div className="events__body">
                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <span className="events__note">{e.note}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
