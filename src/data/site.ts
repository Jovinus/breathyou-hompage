// 사이트 상수 · 법인 정보 (단일 출처)
// 카피는 content.ts, 법인·브랜드 데이터는 이 파일에서만 관리합니다.

export const SITE_URL = 'https://breathyou.care';
export const LOGO = '/logo.png';
export const FAVICON = '/favicon.png';
export const OG_IMAGE = '/og-medipipe.png';
export const EMAIL = 'lkh256@breathyou.care';
export const PUBLICATIONS_URL = 'https://jovinus.github.io/publications/';

/**
 * 등기부 기준 법인 정보. 푸터 · JSON-LD · 로고 alt 가 모두 여기서 읽습니다.
 * address / bizRegNo 는 빈 문자열이면 렌더링에서 자동으로 생략됩니다.
 */
export const company = {
  ko: {
    brand: '브레스유',
    legalName: '브레스유 (주)',
    ceo: '이경현',
    // 본점 = 사무실. 등기부 표기 그대로.
    address: '경기도 수원시 팔달구 매산로 41, 5층 B503호',
    addressParts: {
      street: '매산로 41, 5층 B503호',
      locality: '수원시 팔달구',
      region: '경기도',
    },
    bizRegNo: '', // TODO: 사업자등록번호 (발급 대기)
  },
  en: {
    brand: 'Breath You',
    legalName: 'BreathYou Co., Ltd.',
    ceo: 'Kyung Hyun Lee',
    address: 'Unit B503, 5F, 41 Maesan-ro, Paldal-gu, Suwon-si, Gyeonggi-do, Republic of Korea',
    addressParts: {
      street: 'Unit B503, 5F, 41 Maesan-ro',
      locality: 'Suwon-si, Paldal-gu',
      region: 'Gyeonggi-do',
    },
    bizRegNo: '',
  },
  foundedISO: '2026-08-05',
  foundedLabel: { ko: '2026년 8월 5일', en: 'August 5, 2026' },
} as const;
