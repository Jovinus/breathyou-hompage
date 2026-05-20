import { defineConfig } from 'astro/config';

// breathyou.care 커스텀 도메인을 사용하므로 base 는 '/' 입니다.
export default defineConfig({
  site: 'https://breathyou.care',
  trailingSlash: 'ignore',
});
