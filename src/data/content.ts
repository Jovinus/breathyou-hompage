// 브레스유 홈페이지 콘텐츠 (한국어 / 영어)
// Seed IR v5(2026-11-02) 기반. 매출 목표·자금조달·Exit·계약 금액·라이선스 가격은 의도적으로 제외했습니다.
// 구매의향서는 건수만 표기하고 기관·부서명과 인용문은 게재하지 않습니다 (공개 동의 전).
// 문구 원칙: 한눈에 읽히도록 카드·항목 설명은 한 문장으로 씁니다.
// \u2060(word joiner)은 '80%가'처럼 숫자 뒤 조사가 다음 줄로 떨어지지 않게, \u2011은 'AI-ready'가 하이픈에서 끊기지 않게 합니다.
// 법인 정보·브랜드명·이메일 등 데이터 상수는 site.ts 에 있습니다.

import { PUBLICATIONS_URL } from './site';

export const content = {
  ko: {
    htmlLang: 'ko',
    altLang: { code: 'EN', href: '/en/' },
    ui: {
      skipToContent: '본문 바로가기',
      mainMenu: '주 메뉴',
      openMenu: '메뉴 열기',
      closeMenu: '메뉴 닫기',
      switchLang: '영어 페이지로 이동',
      keyMetrics: '핵심 지표',
    },
    meta: {
      title: '브레스유 | MediPipe — 병원 비정형 문서를 AI Ready Data로',
      description:
        'MediPipe는 병원 결과지·판독문·진료기록을 표준 표로 정리하고 의심 값만 의료진에게 묻는 원내 설치형 솔루션입니다. 환자 데이터는 병원 밖으로 나가지 않습니다.',
    },
    nav: {
      links: [
        { label: '솔루션', href: '#solution' },
        { label: '도입 사례', href: '#research' },
        { label: '성장 전략', href: '#company' },
        { label: '팀', href: '#team' },
      ],
      cta: '도입 상담',
    },
    hero: {
      badge: '원내 설치형 의료데이터 솔루션 · MediPipe',
      title: '병원 비정형 문서를\nAI Ready Data로',
      lead: '결과지·판독문·진료기록을 표준 표로 정리하고, 의심 값만 의료진에게 묻습니다. 환자 데이터는 병원 밖으로 나가지 않습니다.',
      primaryCta: 'MediPipe 도입 문의',
      secondaryCta: '작동 방식 보기',
      note: 'AI Ready Data — AI가 바로 쓸 수 있도록 의료진이 검증한 데이터',
      stats: [
        { value: '98.9%', label: '결과지 정리 시간 단축 (3분 → 2초)' },
        { value: '95.6%', label: '연구 데이터 준비 단축 (3개월 → 4일)' },
        { value: '3개 기관', label: '병원 현장 적용' },
        { value: '4건', label: '대학병원 구매의향서' },
      ],
      visual: {
        label: 'MediPipe 데이터 전환 흐름',
        live: '원내 설치',
        inputLabel: '입력',
        input: '병원 문서 그대로',
        inputMeta: '형식 그대로 수집',
        sources: ['검사 결과지', '판독문', '스프레드시트'],
        processing: '정리 · 검증',
        processingSteps: ['같은 임상 항목으로 변환', '필드 간 의미 오류 검사', '의심 값만 의료진 확인'],
        processingMeta: '환자 데이터는 병원 밖으로 나가지 않습니다',
        outputLabel: '결과',
        output: '검증된 데이터',
        outputMeta: 'CSV · JSON 내보내기',
        outputValue: '확정',
        outputRows: [
          { label: '검사일', value: '표준화' },
          { label: '항목', value: '필드 연결' },
          { label: '검사값', value: '확인 완료' },
        ],
        explain: '한 번 검증한 데이터를 다시 씁니다',
        destinations: ['연구', 'EMR', 'AI'],
      },
    },
    problem: {
      eyebrow: '왜 지금인가',
      title: '병원은 AI를 쓰기 시작했고,\n데이터에서 멈춰 있습니다',
      trigger: {
        label: 'WHY NOW',
        text: '의료 AI의 비급여 진입으로 병원 도입이 1년여 만에 3배가 됐고, 정부는 2026년 병원 데이터 정제 과제 62개를 열었습니다.',
      },
      items: [
        { no: '01', title: '검증된 AI도 멈췄습니다', text: 'AI 도입 장벽 1위는 알고리즘이 아니라 데이터 품질(49%)입니다.' },
        { no: '02', title: '80%\u2060가 비정형입니다', text: '연구 과제 기간의 63~80%\u2060가 데이터 준비에 쓰입니다.' },
        { no: '03', title: '손으로, 매번 처음부터', text: '결과지 값을 엑셀에 옮기고, 과제마다 같은 작업을 반복합니다.' },
      ],
    },
    solution: {
      eyebrow: 'MediPipe',
      title: '어떤 병원 문서든\n표준 표로 정리합니다',
      lead: '의료진은 입력하지 않고, 확인만 합니다.',
      workflowLabel: 'MediPipe 처리 구조',
      workflow: [
        { no: '01', title: '수집', text: '결과지·판독문·스프레드시트를 그대로' },
        { no: '02', title: '변환', text: '같은 임상 항목으로 정리' },
        { no: '03', title: '검증', text: '의심 값만 의료진 확인' },
        { no: '04', title: '내보내기', text: 'CSV · JSON (FHIR 예정)' },
      ],
      screenshot: {
        src: '/product/medipipe-ocr.webp',
        src2x: '/product/medipipe-ocr@2x.webp',
        width: 1600,
        height: 904,
        alt: 'MediPipe 검증 화면. 왼쪽에는 폐기능검사 결과지 원본에 인식한 값이 박스로 표시되고, 오른쪽에는 항목별 인식값과 신뢰도가 표로 정리되어 신뢰도가 낮은 값 5개가 빨간색으로 강조되어 있습니다.',
        caption: 'MediPipe 검증 화면 — 읽은 값을 원본 위치와 함께 보여주고, 신뢰도가 낮은 값을 먼저 표시합니다.',
        note: '화면 속 결과지와 환자 정보는 시연용 예시 데이터입니다.',
        zoomHint: '이미지를 누르면 크게 볼 수 있습니다.',
      },
      checks: {
        label: '3-Layer Validation',
        title: '세 가지 검증을 모두 통과한 값만 확정합니다',
        lead: '의료에서는 그럴듯한 값을 지어내는 AI가 허용되지 않습니다.',
        items: [
          { no: '01', title: 'Semantic Check', text: '수축기·이완기 혈압이 뒤바뀐 칸 오류를 잡습니다.' },
          { no: '02', title: 'Source Grounding', text: '모든 값을 원본 위치에 연결하고, 근거 없는 값은 만들지 않습니다.' },
          { no: '03', title: 'Human-in-the-Loop', text: '확인 전에는 확정되지 않고, 이력은 감사로그로 남습니다.' },
        ],
        note: '의료진 확인 기록은 병원별 Knowledge Graph에 쌓여 다음 과제의 검증 규칙이 됩니다.',
      },
    },
    research: {
      eyebrow: '도입 사례',
      title: '3개 병원,\n모듈 3종',
      lead: 'MediPipe 위에 검사별 모듈을 쌓아 병원마다 다시 만들지 않습니다.',
      modules: [
        {
          name: 'PFTPipe',
          tag: '건양대학교병원 · 폐기능검사',
          status: '유상 PoC 진행 중',
          value: '95.6%',
          valueLabel: '연구 데이터 준비 3개월 → 4일',
          points: ['진흥원 지원 과제의 외부 용역으로 공동 연구'],
        },
        {
          name: 'RxPipe',
          tag: '이대목동병원 · 지참약',
          status: 'PoC 완료',
          value: '94.1%',
          valueLabel: '지참약 자동 변환 커버리지',
          points: ['2026년 말 EMR 연동 목표'],
        },
        {
          name: 'MBPTPipe',
          tag: '일산병원 · 기관지유발검사',
          status: 'PoC 완료',
          value: '98.9%',
          valueLabel: '결과지 1장 3분 → 2초',
          points: ['JMIR Medical Informatics 심사 중'],
        },
      ],
      scale: {
        label: '확장 구조',
        text: '완성한 모듈은 다음 병원에 그대로 설치합니다 — 구축 공수 30 인·일 → 2~3 인·일.',
      },
      awardsLabel: '수상 이력',
      awards: [
        { badge: '우수상', title: '2026 SKKU 프리 텍스코어 사업계획서 발표', host: '성균관대학교 · 2026.10' },
        { badge: '최우수상', title: '2026 실험실 창업경진대회 IR 발표', host: '성균관대학교 · 2026.09' },
        { badge: '최우수상', title: '2026 연합 실험실창업 캠프 IR 발표', host: '성균관대학교 · 2026.08' },
      ],
      metrics: [
        { value: '유상 용역', label: '진흥원 지원 건양대 과제 · 1차 완료' },
        { value: '4 / 5명', label: '학회 시연 후 전문의 구매 의향' },
        { value: '특허 3건', label: '1건 출원 · 2건 공동 출원 준비' },
      ],
      metricsNote: '98.9%\u2060는 결과지 2,572장 기준, 94.1%\u2060는 변환 경로 확보율(인식 정확도 아님)입니다.',
      credLabel: '연구 기반',
      credText: '다기관 임상 연구에서 쌓은 데이터 정제 경험을 제품에 담았습니다.',
      credPoints: [
        '삼성서울병원 30년 폐기능 코호트 99만 건 정제',
        '5개 병원 교수진과 임상 검증',
        '국제학술지 18편 · 1저자 8편 · h-index 9',
        'DeepBreath 외부검증 AUROC 0.883 (연구 단계)',
      ],
      papersTitle: '대표 논문',
      papers: [
        {
          title:
            'Deep learning models for acute kidney injury prediction: multi-center external validation and evaluation under simulated continuous monitoring conditions',
          venue: 'npj Digital Medicine (IF 18)',
          year: '2026',
        },
        {
          title:
            'Separate and joint associations of cardiorespiratory fitness and healthy vascular aging with subclinical atherosclerosis in men',
          venue: 'Hypertension (IF 10.5)',
          year: '2022',
        },
        {
          title:
            'Novel artificial intelligence-based technology to diagnose asthma using methacholine challenge tests',
          venue: 'Allergy, Asthma & Immunology Research (IF 4.7)',
          year: '2024',
        },
      ],
      papersLink: { label: '전체 논문 목록 보기', href: PUBLICATIONS_URL },
    },
    advantage: {
      eyebrow: 'MediPipe의 차이',
      title: '범용 OCR과 CDW 사이,\n비어 있는 영역',
      moats: [
        { no: '01', title: '임상 의미까지 검증', text: '글자를 넘어 값이 맞는 칸에 있는지 확인합니다.' },
        { no: '02', title: '쌓일수록 빨라지는 모듈', text: '다음 병원은 첫 병원의 10분의 1 공수로 설치합니다.' },
        { no: '03', title: '원내 설치, EMR 안에서', text: '망분리 환경에서 동작하고, 결과는 EMR 화면에서 봅니다.' },
      ],
      table: {
        title: '비교',
        hint: '비교표는 좌우로 넘겨서 보세요.',
        cols: ['MediPipe', '범용 문서 AI', 'CDW · CDM', 'LLM 정형화'],
        rows: [
          { label: '대상', values: ['병원 결과지 · 서술기록', '범용 문서', '정형 데이터', '텍스트 기록'] },
          { label: '임상 의미 검증', values: ['✓ 의료진 확인까지', '글자 인식까지', '—', '제한적'] },
          { label: 'Hallucination 방지', values: ['✓ 근거 없는 값은 만들지 않음', '—', '—', '별도 검증 필요'] },
          { label: '설치', values: ['온프레미스 · 망분리', 'API · 클라우드', '온프레미스', '제품별 상이'] },
        ],
      },
    },
    market: {
      eyebrow: '성장 전략',
      title: '진료과에서 시작해\n병원 전체로',
      lead: '첫 고객은 연구 과제를 수행하는 진료과 교수입니다. 진료과 → 검사실 → 병원 AX 조직으로 넓힙니다.',
      panelLabel: '시장 규모 (2026)',
      panelTitle: '1.5조 원 시장에서 호흡기·알레르기내과부터',
      items: [
        { tier: 'TAM', value: '1조 4,838억 원', label: '국내 의료 데이터', desc: '2026년 추정', focus: false },
        { tier: 'SAM', value: '7,626억 원', label: '구축 · 처리 · 관리', desc: '2031년 3.76조 원 전망', focus: false },
        { tier: 'SOM', value: '4,491.6억 원', label: '394개 병원', desc: '종합병원 이상 진료과·부서', focus: false },
        { tier: 'LAM', value: '236.4억 원', label: '초기 공략', desc: '호흡기·알레르기내과 · 첫 3년 집중', focus: true },
      ],
    },
    roadmap: {
      eyebrow: '로드맵',
      title: '구조화에서 플랫폼까지',
      phases: [
        { period: "'26.4Q", name: '1단계 · 구조화', items: ['결과지 인식 · 필드 추출', '필드 정확도 99.8% 목표'] },
        { period: "'27", name: '2단계 · 맥락 해석', items: ['서술기록 정제 · 시계열 해석'] },
        { period: "'26.12 ~ '28", name: '3단계 · 검증 · 연동', items: ['근거 연결형 HITL · 감사로그', 'FHIR KR Core 연동 API'] },
        { period: "'29 ~", name: '4단계 · 플랫폼', items: ['장비 연동 · 원내 데이터로 AI 학습·배포'] },
      ],
      global: {
        label: '장기 비전',
        text: '의료진의 판단을 데이터로 남겨, 어느 병원에서든 같은 수준의 진료와 연구가 가능하게 합니다.',
      },
    },
    team: {
      eyebrow: '팀',
      title: '의료 AI 인허가 경험과\n임상 데이터 전문성',
      lead: '식약처 SaMD 인허가를 주도한 대표와 임상 현장 출신 품질·규제 책임자가 이끕니다.',
      members: [
        {
          name: '이경현',
          sub: 'Kyung Hyun Lee',
          photo: '/team/kyunghyun-lee-480.jpg',
          role: '공동창업자 · 대표 (CEO)',
          bio: '성균관대 SAIHST 디지털헬스 박사과정 · 연구개발 총괄',
          highlights: ['의료 AI 8년차', '식약처 SaMD 인허가 2건 주도', '국제학술지 18편 · 1저자 8편', 'NeurIPS 2026 워크숍 1저자'],
        },
        {
          name: '이다윤',
          sub: 'Dayoon Lee',
          photo: '/team/dayoon-lee-480.jpg',
          role: '공동창업자 · 최고품질책임자 (CQO)',
          bio: '연구간호사 출신 · 품질·규제와 연구 데이터 관리',
          highlights: ['연구간호사 3년 · 수술장 간호사 2년', '의료기기 RA · QA', '성균관대 의료기기산업학과 석사과정'],
        },
      ],
      partners: {
        label: '협력 네트워크',
        text: '자문으로 시작해 현장 적용과 구매 의향으로 이어졌습니다.',
        items: [
          { name: '건양대학교병원', note: 'PFTPipe 공동 연구 · 유상 PoC', featured: true },
          { name: '이대목동병원', note: 'RxPipe PoC 완료', featured: true },
          { name: '삼성서울병원', note: '폐기능 코호트 · 임상 자문', featured: false },
          { name: '한림대학교 춘천성심병원', note: '공동 연구', featured: false },
          { name: '인천대학교', note: '공학 자문', featured: false },
        ],
      },
    },
    contact: {
      eyebrow: '문의',
      title: '병원 데이터를\nAI Ready로',
      lead: 'MediPipe 도입, 연구 협력, 투자 자료 요청 모두 환영합니다.',
      directLabel: '이메일로 바로 문의',
      directNote: '제품 도입과 임상·연구 협력 범위를 검토합니다.',
      copyEmail: '이메일 주소 복사',
      copyDone: '이메일 주소를 복사했습니다',
      form: {
        name: '이름',
        org: '소속 (병원·기관·투자사)',
        type: '문의 유형',
        types: ['MediPipe 도입 상담', '연구 협력 문의', '투자·기타 문의'],
        message: '문의 내용',
        submit: '메일 앱에서 보내기',
        helper: '버튼을 누르면 입력한 내용이 담긴 이메일 작성 창이 열립니다.',
        namePlaceholder: '홍길동',
        orgPlaceholder: '○○병원 / ○○투자',
        messagePlaceholder: '문의하실 내용을 적어주세요.',
      },
    },
    footer: {
      tagline: '병원 비정형 문서를 AI Ready Data로 · MediPipe',
      legalLabels: {
        ceo: '대표',
        founded: '설립',
        address: '주소',
        bizRegNo: '사업자등록번호',
      },
      rights: '© 2026 브레스유 (주). All rights reserved.',
      disclaimer:
        '브레스유 (주)는 2026년 성균관대학교 실험실 창업 동아리에 선정됐습니다. 대표 이경현은 ㈜AITRICS에 재직 중입니다. 브레스유의 사업은 AITRICS와 무관하게 독립적으로 운영됩니다.',
    },
  },

  en: {
    htmlLang: 'en',
    altLang: { code: 'KO', href: '/' },
    ui: {
      skipToContent: 'Skip to content',
      mainMenu: 'Main menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchLang: 'View the Korean page',
      keyMetrics: 'Key metrics',
    },
    meta: {
      title: 'Breath You | MediPipe — Unstructured hospital documents into AI-ready data',
      description:
        'MediPipe is an on-premise solution that organizes hospital reports, readings and clinical notes into standard tables and asks clinicians only about suspect values. Patient data never leaves the hospital.',
    },
    nav: {
      links: [
        { label: 'Solution', href: '#solution' },
        { label: 'Use cases', href: '#research' },
        { label: 'Growth', href: '#company' },
        { label: 'Team', href: '#team' },
      ],
      cta: 'Discuss adoption',
    },
    hero: {
      badge: 'On-premise medical-data solution · MediPipe',
      title: 'Hospital documents,\nmade AI\u2011ready',
      lead: 'MediPipe organizes reports, readings and clinical notes into standard tables and asks clinicians only about suspect values. Patient data never leaves the hospital.',
      primaryCta: 'Discuss MediPipe',
      secondaryCta: 'See how it works',
      note: 'AI-ready data — clinician-verified data AI can use right away',
      stats: [
        { value: '98.9%', label: 'Less time per report (3 min → 2 s)' },
        { value: '95.6%', label: 'Faster data prep (3 months → 4 days)' },
        { value: '3 sites', label: 'Hospital deployments' },
        { value: '4 LOIs', label: 'From university hospitals' },
      ],
      visual: {
        label: 'How MediPipe converts hospital data',
        live: 'On-premise',
        inputLabel: 'Input',
        input: 'Any document',
        inputMeta: 'In its own format',
        sources: ['Reports', 'Readings', 'Sheets'],
        processing: 'Organize · verify',
        processingSteps: ['Map to clinical fields', 'Check cross-field meaning', 'Flag suspect values'],
        processingMeta: 'Patient data never leaves the hospital',
        outputLabel: 'Output',
        output: 'Verified data',
        outputMeta: 'CSV · JSON export',
        outputValue: 'Confirmed',
        outputRows: [
          { label: 'Date', value: 'Standard' },
          { label: 'Item', value: 'Mapped' },
          { label: 'Value', value: 'Checked' },
        ],
        explain: 'Verify once, reuse everywhere',
        destinations: ['Research', 'EMR', 'AI'],
      },
    },
    problem: {
      eyebrow: 'Why now',
      title: 'Hospitals have started using AI —\nand stalled on data',
      trigger: {
        label: 'WHY NOW',
        text: 'Non-reimbursed market entry tripled hospital adoption of medical AI in about a year, and the government opened 62 hospital data-cleansing projects for 2026.',
      },
      items: [
        { no: '01', title: 'Proven AI stalls', text: 'The top barrier to AI adoption is data quality (49%), not algorithms.' },
        { no: '02', title: '80% unstructured', text: 'Data prep takes 63–80% of a research project’s timeline.' },
        { no: '03', title: 'By hand, every time', text: 'Values are copied into spreadsheets, and every project starts over.' },
      ],
    },
    solution: {
      eyebrow: 'MediPipe',
      title: 'Any hospital document,\nin a standard table',
      lead: 'Clinicians don’t type — they only confirm.',
      workflowLabel: 'How MediPipe works',
      workflow: [
        { no: '01', title: 'Collect', text: 'Reports, readings, spreadsheets — as-is' },
        { no: '02', title: 'Convert', text: 'Into the same clinical fields' },
        { no: '03', title: 'Verify', text: 'Clinicians check only suspect values' },
        { no: '04', title: 'Export', text: 'CSV · JSON (FHIR planned)' },
      ],
      screenshot: {
        src: '/product/medipipe-ocr.webp',
        src2x: '/product/medipipe-ocr@2x.webp',
        width: 1600,
        height: 904,
        alt: 'The MediPipe review screen. On the left, the original pulmonary function test report with each recognized value boxed in place; on the right, a table of extracted values and confidence scores, with five low-confidence values highlighted in red.',
        caption: 'MediPipe review screen — each value is shown in place on the source, with low-confidence values flagged first.',
        note: 'The report and patient details shown are sample data for demonstration.',
        zoomHint: 'Tap the image to view it full size.',
      },
      checks: {
        label: '3-Layer Validation',
        title: 'Only values that pass all three checks are confirmed',
        lead: 'In medicine, AI that invents plausible values is not acceptable.',
        items: [
          { no: '01', title: 'Semantic Check', text: 'Catches values in the wrong field, like swapped systolic and diastolic.' },
          { no: '02', title: 'Source Grounding', text: 'Every value links to its source; nothing is invented.' },
          { no: '03', title: 'Human-in-the-Loop', text: 'Nothing is final until reviewed, with a full audit log.' },
        ],
        note: 'Confirmations build a hospital-specific knowledge graph that becomes the next project’s rules.',
      },
    },
    research: {
      eyebrow: 'Use cases',
      title: 'Three hospitals,\nthree modules',
      lead: 'Task-specific modules on MediPipe, so nothing is rebuilt per hospital.',
      modules: [
        {
          name: 'PFTPipe',
          tag: 'Konyang Univ. Hospital · Pulmonary function',
          status: 'Paid PoC underway',
          value: '95.6%',
          valueLabel: 'Research-data prep 3 months → 4 days',
          points: ['Joint research on a K-DATA-funded project'],
        },
        {
          name: 'RxPipe',
          tag: 'Ewha Mokdong Hospital · Patients’ own medications',
          status: 'PoC complete',
          value: '94.1%',
          valueLabel: 'Automatic conversion coverage',
          points: ['EMR integration targeted for end of 2026'],
        },
        {
          name: 'MBPTPipe',
          tag: 'NHIS Ilsan Hospital · Bronchial provocation',
          status: 'PoC complete',
          value: '98.9%',
          valueLabel: '3 min → 2 s per report',
          points: ['Under review at JMIR Medical Informatics'],
        },
      ],
      scale: {
        label: 'How it scales',
        text: 'Finished modules install as-is at the next hospital — 30 person-days down to 2–3.',
      },
      awardsLabel: 'Awards',
      awards: [
        { badge: 'Excellence Award', title: '2026 SKKU Pre TeX-Corps business plan pitch', host: 'Sungkyunkwan University · Oct 2026' },
        { badge: 'Top Excellence Award', title: '2026 Lab Startup Competition IR pitch', host: 'Sungkyunkwan University · Sep 2026' },
        { badge: 'Top Excellence Award', title: '2026 Joint Lab-Startup Camp IR pitch', host: 'Sungkyunkwan University · Aug 2026' },
      ],
      metrics: [
        { value: 'Paid contract', label: 'K-DATA-funded Konyang project · phase 1 done' },
        { value: '4 of 5', label: 'Specialists intending to buy after a demo' },
        { value: '3 patents', label: '1 filed · 2 joint filings in preparation' },
      ],
      metricsNote: '98.9% is based on 2,572 reports; 94.1% is conversion-path coverage, not recognition accuracy.',
      credLabel: 'Research foundation',
      credText: 'Multi-institution data-cleansing experience, turned into a product.',
      credPoints: [
        'Cleansed a 30-year, 990K-record pulmonary cohort',
        'Clinical validation with faculty at five hospitals',
        '18 international journal papers · 8 first-author · h-index 9',
        'DeepBreath external AUROC 0.883 (research stage)',
      ],
      papersTitle: 'Selected publications',
      papers: [
        {
          title:
            'Deep learning models for acute kidney injury prediction: multi-center external validation and evaluation under simulated continuous monitoring conditions',
          venue: 'npj Digital Medicine (IF 18)',
          year: '2026',
        },
        {
          title:
            'Separate and joint associations of cardiorespiratory fitness and healthy vascular aging with subclinical atherosclerosis in men',
          venue: 'Hypertension (IF 10.5)',
          year: '2022',
        },
        {
          title:
            'Novel artificial intelligence-based technology to diagnose asthma using methacholine challenge tests',
          venue: 'Allergy, Asthma & Immunology Research (IF 4.7)',
          year: '2024',
        },
      ],
      papersLink: { label: 'View full publication list', href: PUBLICATIONS_URL },
    },
    advantage: {
      eyebrow: 'Why MediPipe',
      title: 'The gap between\ngeneric OCR and the CDW',
      moats: [
        { no: '01', title: 'Verified to clinical meaning', text: 'Beyond characters — is each value in the right field?' },
        { no: '02', title: 'Modules that compound', text: 'The next hospital installs with a tenth of the effort.' },
        { no: '03', title: 'On-premise, inside the EMR', text: 'Runs on segregated networks; results show in the EMR.' },
      ],
      table: {
        title: 'Comparison',
        hint: 'Swipe sideways to view the full comparison.',
        cols: ['MediPipe', 'Generic document AI', 'CDW · CDM', 'LLM structuring'],
        rows: [
          { label: 'Input', values: ['Hospital reports · clinical notes', 'General documents', 'Structured data', 'Text records'] },
          { label: 'Clinical verification', values: ['✓ Through clinician review', 'Characters only', '—', 'Limited'] },
          { label: 'Hallucination control', values: ['✓ No value without a source', '—', '—', 'Needs separate checks'] },
          { label: 'Deployment', values: ['On-premise · segregated', 'API · cloud', 'On-premise', 'Varies'] },
        ],
      },
    },
    market: {
      eyebrow: 'Growth strategy',
      title: 'Start with one department,\ngrow to the hospital',
      lead: 'Our first customers are department faculty running research projects. We expand from department to lab to the hospital’s AX team.',
      panelLabel: 'Market size (2026)',
      panelTitle: 'A KRW 1.5T market, starting with pulmonology and allergy',
      items: [
        { tier: 'TAM', value: 'KRW 1.48T', label: 'Korean medical data', desc: '2026 estimate', focus: false },
        { tier: 'SAM', value: 'KRW 762.6B', label: 'Build · process · manage', desc: 'KRW 3.76T projected by 2031', focus: false },
        { tier: 'SOM', value: 'KRW 449.2B', label: '394 hospitals', desc: 'Departments at general hospitals and above', focus: false },
        { tier: 'LAM', value: 'KRW 23.6B', label: 'Initial focus', desc: 'Pulmonology and allergy · first 3 years', focus: true },
      ],
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'From structuring to platform',
      phases: [
        { period: "Q4 '26", name: 'Stage 1 · Structure', items: ['Report recognition · field extraction', 'Target field accuracy 99.8%'] },
        { period: "'27", name: 'Stage 2 · Contextualize', items: ['Clinical-note cleansing · time-series interpretation'] },
        { period: "Dec '26 – '28", name: 'Stage 3 · Verify · integrate', items: ['Source-linked HITL · audit logs', 'FHIR KR Core integration API'] },
        { period: "'29 –", name: 'Stage 4 · Platform', items: ['Device integration · AI trained on in-hospital data'] },
      ],
      global: {
        label: 'Long-term vision',
        text: 'Capture clinicians’ judgment as data, so every hospital delivers the same standard of care and research.',
      },
    },
    team: {
      eyebrow: 'Team',
      title: 'Medical-AI regulatory experience\nand clinical-data expertise',
      lead: 'Led by a CEO who drove MFDS SaMD approvals and a quality and regulatory lead from clinical practice.',
      members: [
        {
          name: 'Kyung Hyun Lee',
          sub: '이경현',
          photo: '/team/kyunghyun-lee-480.jpg',
          role: 'Co-founder & CEO',
          bio: 'PhD student in Digital Health, SAIHST, SKKU · leads R&D',
          highlights: ['8 years in medical AI', 'Led 2 MFDS SaMD approvals', '18 international journal papers · 8 first-author', 'NeurIPS 2026 workshop first author'],
        },
        {
          name: 'Dayoon Lee',
          sub: '이다윤',
          photo: '/team/dayoon-lee-480.jpg',
          role: 'Co-founder & Chief Quality Officer',
          bio: 'Former research nurse · quality, regulatory and research data',
          highlights: ['Research nurse 3 yrs · OR nurse 2 yrs', 'Medical-device RA · QA', 'MS student, Medical Device Industry, SKKU'],
        },
      ],
      partners: {
        label: 'Collaboration network',
        text: 'Advisory work has grown into deployments and purchase intent.',
        items: [
          { name: 'Konyang University Hospital', note: 'PFTPipe joint research · paid PoC', featured: true },
          { name: 'Ewha Womans University Mokdong Hospital', note: 'RxPipe PoC complete', featured: true },
          { name: 'Samsung Medical Center', note: 'Pulmonary cohort · clinical advisory', featured: false },
          { name: 'Hallym University Chuncheon Sacred Heart Hospital', note: 'Joint research', featured: false },
          { name: 'Incheon National University', note: 'Engineering advisory', featured: false },
        ],
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Make your hospital data\nAI-ready',
      lead: 'Adoption, research collaboration and investor materials — we’d love to hear from you.',
      directLabel: 'Email us directly',
      directNote: 'We review product adoption and clinical or research collaboration.',
      copyEmail: 'Copy email address',
      copyDone: 'Email address copied',
      form: {
        name: 'Name',
        org: 'Organization (hospital, institution, investor)',
        type: 'Inquiry type',
        types: ['MediPipe adoption', 'Research collaboration', 'Investment / other'],
        message: 'Message',
        submit: 'Open email app',
        helper: 'The button opens your email app with the details you entered.',
        namePlaceholder: 'Jane Doe',
        orgPlaceholder: 'Hospital / Fund',
        messagePlaceholder: 'Tell us about your inquiry.',
      },
    },
    footer: {
      tagline: 'Unstructured hospital documents into AI-ready data · MediPipe',
      legalLabels: {
        ceo: 'CEO',
        founded: 'Founded',
        address: 'Address',
        bizRegNo: 'Business reg. no.',
      },
      rights: '© 2026 BreathYou Co., Ltd. All rights reserved.',
      disclaimer:
        'BreathYou Co., Ltd. was selected for Sungkyunkwan University’s 2026 lab-based startup program. CEO Kyung Hyun Lee is employed at AITRICS. Breath You operates independently from AITRICS.',
    },
  },
} as const;

export type Lang = keyof typeof content;
export type Content = (typeof content)[Lang];
