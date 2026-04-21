import { motion } from "framer-motion";
import "./Brand.css";

const pillars = [
  {
    no: "01",
    en: "Slow Broth",
    ko: "시간을 들이는 육수",
    body: "감자탕 한 그릇을 위해 매일 6시간, 사골을 우려냅니다. 오래 끓일수록 깊어지는 맛이 바로 한식의 성실함.",
  },
  {
    no: "02",
    en: "Late-Night Room",
    ko: "깊은 밤을 위한 공간",
    body: "평일은 새벽 4시, 주말은 새벽 6시까지. 서면역 2번 출구에서 가까운 거리, 소주 한 잔에 기분 좋게 취하기 좋은 2차·3차의 단골집.",
  },
  {
    no: "03",
    en: "Honest Anju",
    ko: "맛에 진심인 한 접시",
    body: "명란가리비구이, 통영 생굴보쌈, 김부각 육회. 한식과 일식을 넘나드는 시그니처 안주들. 제철엔 제철답게, 술과 가장 잘 어울리게.",
  },
];

export default function Brand() {
  return (
    <section id="brand" className="section brand">
      <div className="brand__grid">
        <div className="brand__copy">
          <span className="section-label">01 · Concept</span>
          <h2 className="section-title">
            한국식 이자카야, <br />
            그 이름 <span className="highlight">Kor;i</span>
          </h2>
          <p className="brand__lede">
            육수부터 모든 것을 손수 만드는 공간. 늦은 새벽까지 환하게 비추고 있는,
            북적북적 거리면서 소주 한 잔에 기분 좋게 취하기 좋은 그런 단위집.
            <br />
            <br />
            코리는 2021년 서면의 한 골목에서 시작해, 지금까지 매일 같은 손끝의 정성으로
            한식 안주와 술을 내어드리고 있습니다.
          </p>
        </div>

        <motion.div
          className="brand__mark"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <img src="/brand/logo.jpg" alt="Kor;i 로고" />
          <div className="brand__mark-caption">
            <span>OFFICIAL MARK</span>
            <span>Est. 2021 · Busan</span>
          </div>
        </motion.div>
      </div>

      <div className="brand__pillars">
        {pillars.map((p, i) => (
          <motion.article
            key={p.no}
            className="brand__pillar"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="brand__pillar-no">{p.no}</span>
            <h3 className="brand__pillar-en">{p.en}</h3>
            <p className="brand__pillar-ko">{p.ko}</p>
            <p className="brand__pillar-body">{p.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
