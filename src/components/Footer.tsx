import { Phone, MapPin } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { storeInfo } from "../data/menu";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__hero">
        <h2>Kor<span>;</span>i</h2>
        <p>
          오늘 밤, 서면의 한 골목. <br />
          코리에서 뵙겠습니다.
        </p>
      </div>

      <div className="footer__grid">
        <div className="footer__col">
          <span className="footer__label">INFO</span>
          <p>{storeInfo.name}</p>
          <p className="footer__small">{storeInfo.tagline}</p>
        </div>
        <div className="footer__col">
          <span className="footer__label">HOURS</span>
          <p>평일 {storeInfo.hours.weekday}</p>
          <p className="footer__small">주말 {storeInfo.hours.weekend}</p>
        </div>
        <div className="footer__col">
          <span className="footer__label">CONTACT</span>
          <a href={`tel:${storeInfo.phone}`}>
            <Phone size={12} /> {storeInfo.phone}
          </a>
          <a
            href={storeInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="footer__small-link"
          >
            <InstagramIcon size={12} /> @kor_i.official
          </a>
        </div>
        <div className="footer__col">
          <span className="footer__label">ADDRESS</span>
          <a
            href={storeInfo.naver}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={12} /> {storeInfo.address}
          </a>
          <p className="footer__small">{storeInfo.station}</p>
        </div>
      </div>

      <div className="footer__bar">
        <span>© {new Date().getFullYear()} Kor;i · 코리 서면본점</span>
        <span>상호 코리 · 대표 김우찬 · 사업자등록번호 151-02-02557</span>
      </div>
    </footer>
  );
}
