import { motion } from "framer-motion";
import "./Signature.css";

const dishes = [
  {
    image: "/gallery/menu-scallop.jpg",
    name: "명란가리비구이",
    tag: "SIGNATURE · 대표 안주",
    price: "32,000",
    body: "숯불에 직화로 구운 가리비 위로, 수제 명란 소스를 듬뿍. 파슬리와 레몬을 곁들여 바다의 짠맛과 불의 향이 한 입에 감돌아요.",
  },
  {
    image: "/gallery/menu-bossam.jpg",
    name: "명란보쌈",
    tag: "HOUSE BOSSAM",
    price: "27,000",
    body: "양념이 배어든 보쌈에 명란 소스를 올려, 배추와 곁들임까지. 단골들이 가장 먼저 찾는 코리의 보쌈.",
  },
  {
    image: "/gallery/menu-yukhoe.jpg",
    name: "김부각 육회",
    tag: "PAIRING · 맥주와",
    price: "23,000",
    body: "고소한 김부각 위, 차가운 육회를 싱긋 올려 한 점. 시원한 Kor;i 생맥주 한 잔과 가장 잘 어울리는 페어링.",
  },
  {
    image: "/gallery/menu-sacheon-jjawang.jpg",
    name: "한우갈비사천짜왕",
    tag: "TRENDING · 순위 상승",
    price: "PICK",
    body: "얼얼한 사천식 소스가 짜장의 짭조름함을 끌어올려요. 한우갈비와 쫀쫀한 면, 해장까지 책임지는 한 접시.",
  },
];

export default function Signature() {
  return (
    <section id="signature" className="section signature">
      <div className="signature__head">
        <span className="section-label">02 · Signature</span>
        <h2 className="section-title">
          코리를 대표하는 <br />
          <span className="highlight">네 가지 안주</span>
        </h2>
        <p className="section-subtitle">
          매장에서 결제된 데이터 기준, 고객님들이 가장 많이 선택해주신 메뉴.
          한잔 술에 가장 잘 어울리는 코리의 얼굴들입니다.
        </p>
      </div>

      <div className="signature__grid">
        {dishes.map((d, i) => (
          <motion.article
            key={d.name}
            className={`signature__card signature__card--${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="signature__image">
              <img src={d.image} alt={d.name} loading="lazy" />
              <span className="signature__tag">{d.tag}</span>
            </div>
            <div className="signature__info">
              <h3>{d.name}</h3>
              <span className="signature__price">₩ {d.price}</span>
              <p>{d.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
