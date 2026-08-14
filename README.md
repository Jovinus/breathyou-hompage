# breathyou-homepage

브레스유 (주) / BreathYou Co., Ltd. 공식 홈페이지. [Astro](https://astro.build) 정적 사이트, `breathyou.care`.

## 개발

```bash
npm install
npm run dev      # 로컬 개발 서버 (http://localhost:4321)
npm run check    # 타입 검사 (astro check)
npm run build    # 타입 검사 + 정적 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 구조

- `src/data/content.ts` — 모든 텍스트 콘텐츠 (한국어 `ko` / 영어 `en`)
- `src/data/site.ts` — 사이트 상수 · 법인 정보 (법인명·대표자·설립일·주소) **단일 출처**
- `src/components/Section.astro` — 섹션 공통 스캐폴드
- `src/components/` — 섹션 컴포넌트
- `src/pages/index.astro` — 한국어 (`/`)
- `src/pages/en/index.astro` — 영어 (`/en/`)
- `public/` — 정적 파일 (로고, CNAME)

콘텐츠 수정은 대부분 `src/data/content.ts` 한 파일에서 끝납니다. 법인 정보(주소·사업자등록번호 등)는 `src/data/site.ts`에서 수정하며, 빈 문자열이면 푸터에 렌더링되지 않습니다.

## 배포

`main` 브랜치에 push 하면 GitHub Actions(`.github/workflows/deploy.yml`)가
자동으로 빌드·배포합니다. GitHub 저장소 설정에서 **Settings → Pages → Source**를
**GitHub Actions**로 지정해야 합니다.

> 사업계획서 등 민감 문서(`*.pdf`)는 `.gitignore`로 제외됩니다. 커밋·배포 금지.