// 사이트 상수 · 법인 정보 (단일 출처)
// 카피는 content.ts, 법인·브랜드 데이터는 이 파일에서만 관리합니다.

export const SITE_URL = 'https://breathyou.care';
export const LOGO = '/logo.png';
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
    address: '', // TODO: 본점 주소 (도로명 + 상세)
    bizRegNo: '', // TODO: 사업자등록번호
  },
  en: {
    brand: 'Breath You',
    legalName: 'BreathYou Co., Ltd.',
    ceo: 'Kyung Hyun Lee',
    address: '', // TODO: registered office address
    bizRegNo: '',
  },
  foundedISO: '2026-08-05',
  foundedLabel: { ko: '2026년 8월 5일', en: 'August 5, 2026' },
} as const;
