import type { Content } from './data/content';

/** 모든 섹션 컴포넌트는 전체 콘텐츠 트리를 `t` 로 받고 자기 슬라이스만 읽습니다. */
export interface SectionProps {
  t: Content;
}
