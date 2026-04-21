import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "../data/menu";
import "./Menu.css";

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const current = menuCategories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="section menu">
      <div className="menu__head">
        <span className="section-label">03 · Menu</span>
        <h2 className="section-title">
          오늘 밤 <span className="highlight">술이 술술</span>
        </h2>
        <p className="section-subtitle">
          제철과 재료에 맞춰 조금씩 달라지는 메뉴들. 술과 가장 잘 어울리는
          코리의 한 접시를 골라보세요.
        </p>
      </div>

      <div className="menu__tabs" role="tablist">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            className={`menu__tab ${active === cat.id ? "menu__tab--active" : ""}`}
            onClick={() => setActive(cat.id)}
          >
            <span className="menu__tab-ko">{cat.title}</span>
            <span className="menu__tab-en">{cat.subtitle}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={current.id}
          className="menu__list"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {current.items.map((item, i) => (
            <motion.li
              key={item.name}
              className="menu__item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <div className="menu__item-head">
                <div>
                  <h4 className="menu__item-name">
                    {item.name}
                    {item.tag && (
                      <span className="menu__item-tag">{item.tag}</span>
                    )}
                  </h4>
                  <span className="menu__item-ko">{item.ko}</span>
                </div>
                <div className="menu__item-dots" aria-hidden="true" />
                <span className="menu__item-price">
                  {item.price ? `₩ ${item.price.toLocaleString()}` : "매장 문의"}
                </span>
              </div>
              {item.description && (
                <p className="menu__item-desc">{item.description}</p>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>

      <p className="menu__note">
        * 메뉴 구성과 가격은 제철·재료에 따라 일부 변동될 수 있습니다. 2층
        단체석 예약은 전화로 문의해 주세요.
      </p>
    </section>
  );
}
