import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Phone,
  Wifi,
  Users,
  CreditCard,
  Dog,
} from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { storeInfo } from "../data/menu";
import "./Visit.css";

const info = [
  {
    icon: <MapPin size={16} />,
    label: "ADDRESS",
    value: storeInfo.address,
    sub: storeInfo.station,
  },
  {
    icon: <Clock size={16} />,
    label: "HOURS",
    value: `평일 ${storeInfo.hours.weekday}`,
    sub: `주말 ${storeInfo.hours.weekend}`,
  },
  {
    icon: <Phone size={16} />,
    label: "RESERVATION",
    value: storeInfo.phone,
    sub: "4인 ~ 20인 단체 예약 가능",
  },
];

const convenience = [
  { icon: <Wifi size={14} />, label: "무선 인터넷" },
  { icon: <Users size={14} />, label: "단체 이용 가능" },
  { icon: <Dog size={14} />, label: "반려동물 동반" },
  { icon: <CreditCard size={14} />, label: "간편결제" },
];

export default function Visit() {
  return (
    <section id="visit" className="section visit">
      <div className="visit__head">
        <span className="section-label">07 · Visit</span>
        <h2 className="section-title">
          서면의 밤, <br />
          <span className="highlight">코리에서.</span>
        </h2>
      </div>

      <div className="visit__grid">
        <motion.div
          className="visit__map"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            title="코리 서면본점 지도"
            src="https://www.google.com/maps?q=부산+부산진구+중앙대로680번가길+55-20&hl=ko&z=17&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="visit__map-pin">
            <div className="visit__map-pin-inner">KOR;I</div>
          </div>
        </motion.div>

        <div className="visit__info">
          {info.map((it) => (
            <div key={it.label} className="visit__info-row">
              <div className="visit__info-icon">{it.icon}</div>
              <div>
                <span className="visit__info-label">{it.label}</span>
                <p className="visit__info-value">{it.value}</p>
                <span className="visit__info-sub">{it.sub}</span>
              </div>
            </div>
          ))}

          <div className="visit__conv">
            {convenience.map((c) => (
              <span key={c.label} className="visit__conv-chip">
                {c.icon}
                {c.label}
              </span>
            ))}
          </div>

          <div className="visit__actions">
            <a
              href={storeInfo.naver}
              target="_blank"
              rel="noreferrer"
              className="visit__action visit__action--primary"
            >
              <MapPin size={14} />
              네이버 지도에서 열기
            </a>
            <a
              href={storeInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="visit__action"
            >
              <InstagramIcon size={14} />
              @kor_i.official
            </a>
            <a
              href={`tel:${storeInfo.phone}`}
              className="visit__action"
            >
              <Phone size={14} />
              {storeInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
