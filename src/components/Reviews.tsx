import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { reviews } from "../data/menu";
import "./Reviews.css";

export default function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="reviews__head">
        <span className="section-label">06 · Voices</span>
        <h2 className="section-title">
          322개의 방문 리뷰, <br />
          <span className="highlight">409개의 블로그.</span>
        </h2>
        <p className="section-subtitle">
          지금까지 코리를 다녀가신 분들이 직접 남겨주신 말씀들. 가장 따뜻한
          후기들을 몇 조각 추려봤어요.
        </p>
      </div>

      <div className="reviews__stats">
        <div className="reviews__stat">
          <span className="reviews__stat-num">4.7</span>
          <div className="reviews__stat-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" stroke="none" />
            ))}
          </div>
          <span className="reviews__stat-label">평균 평점</span>
        </div>
        <div className="reviews__stat-divider" />
        <div className="reviews__stat">
          <span className="reviews__stat-num">731</span>
          <span className="reviews__stat-label">누적 리뷰</span>
        </div>
        <div className="reviews__stat-divider" />
        <div className="reviews__stat">
          <span className="reviews__stat-num">5만</span>
          <span className="reviews__stat-label">평균 객단가</span>
        </div>
      </div>

      <div className="reviews__grid">
        {reviews.map((r, i) => (
          <motion.article
            key={r.author}
            className="reviews__card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <Quote className="reviews__card-quote" size={26} />
            <p className="reviews__card-text">{r.text}</p>
            <footer>
              <span className="reviews__card-author">{r.author}</span>
              <span className="reviews__card-date">{r.date}</span>
            </footer>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
