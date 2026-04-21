export type MenuItem = {
  name: string;
  ko: string;
  price: number;
  description?: string;
  tag?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "signature",
    title: "시그니처",
    subtitle: "Signature Anju",
    items: [
      {
        name: "통영생굴보쌈",
        ko: "統營 生굴 보쌈",
        price: 35000,
        description: "겨울 한정. 제철 통영 생굴과 수육 한 접시.",
        tag: "제철",
      },
      {
        name: "명란가리비구이",
        ko: "明太子 가리비 구이",
        price: 32000,
        description: "숯불에 직화로 구운 가리비에 수제 명란 소스를 곁들여.",
        tag: "대표",
        image: "/gallery/menu-scallop.jpg",
      },
      {
        name: "명란보쌈",
        ko: "明太子 보쌈",
        price: 27000,
        description: "양념이 미리 배인 보쌈에, 별미 명란 소스를 올려.",
        tag: "대표",
        image: "/gallery/menu-bossam.jpg",
      },
      {
        name: "석화",
        ko: "石花",
        price: 23000,
        description: "지금이 기회. 싱싱한 석화 한 접시.",
        tag: "제철",
      },
      {
        name: "얼크니샤브식전골",
        ko: "얼큰 샤브 전골",
        price: 29000,
        description: "한 입 먹자마자 소주가 생각나는 얼큰함.",
      },
    ],
  },
  {
    id: "meat",
    title: "불 위의 안주",
    subtitle: "From the Flame",
    items: [
      {
        name: "김부각 육회",
        ko: "김부각 肉膾",
        price: 23000,
        description: "육회와 김부각, 조합을 못 참찌.",
        image: "/gallery/menu-yukhoe.jpg",
      },
      {
        name: "한우갈비사천짜왕",
        ko: "韓牛갈비 四川 짜왕",
        price: 0,
        description: "한우갈비가 올라간 얼얼한 사천식 짜왕. 순위 상승 메뉴.",
        tag: "NEW",
        image: "/gallery/menu-sacheon-jjawang.jpg",
      },
      {
        name: "육전",
        ko: "肉煎",
        price: 22000,
        description: "계란물 입힌 소고기를 살짝 구워 볶음김치와 함께.",
      },
      {
        name: "김치삼겹짜글이",
        ko: "김치 삼겹 짜글이",
        price: 23000,
        description: "끓일수록 깊어지는 사장님 PICK.",
        tag: "사장님픽",
      },
    ],
  },
  {
    id: "soup",
    title: "깊은 국물",
    subtitle: "Slow Broth",
    items: [
      {
        name: "감자탕",
        ko: "감자탕",
        price: 29000,
        description: "매일 6시간씩 직접 우리는 사골 육수.",
        tag: "6시간 사골",
      },
      {
        name: "한우스지오뎅탕",
        ko: "韓牛 스지 오뎅탕",
        price: 20000,
        description: "한우 스지가 듬뿍 올라간 오뎅탕.",
      },
      {
        name: "바지락술찜",
        ko: "바지락 술찜",
        price: 23000,
        description: "파스타면이 함께 나오는 한 접시.",
      },
      {
        name: "얼큰해물라면",
        ko: "얼큰 해물 라면",
        price: 6000,
        description: "가벼운 해장으로 이만한 게 없지.",
      },
    ],
  },
  {
    id: "rice",
    title: "곁들임 & 마무리",
    subtitle: "Sides",
    items: [
      {
        name: "흑두부조림",
        ko: "黑豆腐 조림",
        price: 15000,
        description: "압도적 비주얼에 매콤한 한입. 소주 한 잔에 딱.",
      },
      {
        name: "생연어사시미",
        ko: "生연어 사시미",
        price: 24000,
        description: "연어 좋아하시는 분들은 한 번 드셔보세요.",
      },
      {
        name: "통영생굴튀김",
        ko: "統營 生굴 튀김",
        price: 6000,
        description: "바삭한 한 알의 굴.",
      },
      {
        name: "명란밥",
        ko: "明太子 밥",
        price: 6000,
        description: "일~목 8시 이전 방문 시 서비스.",
        tag: "서비스",
      },
    ],
  },
];

export const storeInfo = {
  name: "코리 서면본점",
  brand: "Kor;i",
  tagline: "한식 이자카야 · 부산 서면",
  concept:
    "육수부터 모든 것을 손수 만드는, 맛에 진심인 안주들을 새벽 늦도록 즐길 수 있는 공간.",
  address: "부산 부산진구 중앙대로680번가길 55-20 코리",
  station: "서면역 2번 출구에서 181m",
  hours: {
    weekday: "18:00 — 03:00",
    weekend: "18:00 — 06:00",
  },
  phone: "0507-1338-7519",
  instagram: "https://www.instagram.com/kor_i.official/",
  naver:
    "https://map.naver.com/p/search/%EC%BD%94%EB%A6%AC%20%EC%84%9C%EB%A9%B4%EB%B3%B8%EC%A0%90",
  events: [
    {
      title: "명란밥 서비스",
      body: "일 ~ 목 8시 이전 방문 고객님께 명란밥을 서비스로 드립니다.",
      note: "금·토·공휴일 제외, 타 이벤트 중복 불가",
    },
    {
      title: "아이스크림 쿠폰",
      body: "리뷰를 작성해주시면 미니 아이스크림 쿠폰을 드려요.",
      note: "네이버 플레이스 리뷰 작성 시",
    },
    {
      title: "2층 단체 룸",
      body: "4인부터 20인까지, 2층 단체석 예약 가능합니다.",
      note: "회식·모임·생일 맞춤 세팅",
    },
  ],
  highlights: [
    "매일 6시간씩 우리는 사골 육수",
    "서면역 도보 2분의 심야 공간",
    "주말은 새벽 6시까지, 끝까지 함께",
    "1·2층 구조, 다찌부터 단체까지",
  ],
};

export const reviews = [
  {
    author: "꽃송이",
    date: "2026.01.11",
    text:
      "서면이자카야 코리는 한식과 일식 위주의 한국식 이자카야 컨셉으로 메뉴도 정말 다양했다. 명란가리비구이가 유명하고, 겨울 한정 석화나 통영생굴보쌈도 맛있어 보였다.",
  },
  {
    author: "영맨 Re뷰",
    date: "2026.01.22",
    text:
      "서면 2차 술집으로 좋은 이유는 메뉴 구성 때문이다. 해산물 위주 구성들이 부담 없고, 전체적으로 술이랑 잘 어울리는 라인업.",
  },
  {
    author: "엠버츄",
    date: "2026.04.04",
    text:
      "다찌 좌석도 있고 2층엔 단체석도 준비되어 있음. 다양한 좌석 배치로 단체 모임에도 적합하고, 올 때마다 다른 메뉴가 가능한 집.",
  },
  {
    author: "쏘야",
    date: "2026.03.31",
    text:
      "제철 메뉴도 틈틈이 하시는 것 같고, 명란이나 바지락 등 해산물 메뉴도 많아서 좋았어요. 명란 요리 좋아하면 더욱 고민됐던 선택.",
  },
];
