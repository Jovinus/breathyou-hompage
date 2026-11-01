// 브레스유 홈페이지 콘텐츠 (한국어 / 영어)
// Seed IR v5(2026-11-02) 기반. 매출 목표·자금조달·Exit·계약 금액·라이선스 가격은 의도적으로 제외했습니다.
// 구매의향서는 건수만 표기하고 기관·부서명과 인용문은 게재하지 않습니다 (공개 동의 전).
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
      lead: 'MediPipe는 결과지·판독문·진료기록을 같은 임상 항목의 표로 정리하고, 의심 값만 의료진에게 묻습니다. 원내 서버에 설치해 환자 데이터는 병원 밖으로 나가지 않습니다.',
      primaryCta: 'MediPipe 도입 문의',
      secondaryCta: '작동 방식 보기',
      note: 'AI Ready Data — AI가 바로 학습·활용할 수 있도록 의료진이 검증한 데이터',
      stats: [
        { value: '98.9%', label: '결과지 1장 정리 시간 단축 · 3분 → 2초 (일산병원 PoC)' },
        { value: '95.6%', label: '연구 데이터 준비 기간 단축 · 3개월 → 4일 (건양대병원 PoC)' },
        { value: '3개 기관', label: '현장 적용 · 건양대 · 이대목동 · 일산' },
        { value: '4건', label: '대학병원 구매의향서 · 3개 기관 4개 부서' },
      ],
      visual: {
        label: 'MediPipe 데이터 전환 흐름',
        live: '원내 설치',
        inputLabel: '입력',
        input: '병원 문서 그대로',
        inputMeta: '형식이 달라도 그대로 수집',
        sources: ['검사 결과지', '판독문', '스프레드시트'],
        processing: '정리하고 검증합니다',
        processingSteps: ['같은 임상 항목으로 변환', '필드 간 의미 오류 검사', '의심 값만 의료진 확인'],
        processingMeta: '환자 데이터는 병원 밖으로 나가지 않습니다',
        outputLabel: '결과',
        output: '의료진이 검증한 데이터',
        outputMeta: 'CSV · JSON 내보내기',
        outputValue: '확정',
        outputRows: [
          { label: '검사일', value: '표준화' },
          { label: '검사 항목', value: '필드 연결' },
          { label: '검사값', value: '의료진 확인' },
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
        text: '신의료기술평가 유예로 비급여 시장에 들어간 의료 AI는 도입 병원이 1년여 만에 3배로 늘었고, 2026년 1월 시장 즉시진입 의료기술 제도가 시행됐습니다. 정부는 2026년 병원 데이터 정제·표준화 과제 62개(112억 원)를 편성했고, 대학병원은 원내 AX 조직과 폐쇄망 AI를 세우고 있습니다. 그 AI가 돌아가려면 병원 데이터가 AI Ready여야 합니다.',
      },
      items: [
        {
          no: '01',
          title: '검증된 AI도 데이터 앞에서 멈췄습니다',
          text: 'MD Anderson의 IBM Watson은 병원이 EMR을 바꾸자 새 기록 형식을 읽지 못해 진료에 쓰이지 못했습니다. 미국 의료정보 전문가가 꼽은 AI 도입 장벽 1위도 알고리즘이 아니라 데이터 품질(49%)입니다.',
        },
        {
          no: '02',
          title: '80%가 비정형, 준비에만 수개월',
          text: 'EMR의 약 80%는 비정형 데이터입니다. 연구 과제 하나에서 데이터 준비가 기간의 63~80%를 차지하고, 데이터를 구하는 데만 수개월이 걸려 검증 단계에서 멈춥니다.',
        },
        {
          no: '03',
          title: '손으로 옮기고, 과제마다 처음부터',
          text: '연구간호사·전공의가 결과지 값을 엑셀에 옮기고, 수축기·이완기 혈압처럼 칸이 바뀐 값은 늦게 발견됩니다. 한 번 검증한 값과 규칙이 남지 않아 다음 과제에서 같은 작업을 반복합니다.',
        },
      ],
    },
    solution: {
      eyebrow: 'MediPipe',
      title: '어떤 병원 문서든\n표준 표로 정리합니다',
      lead: '데이터 웨어하우스의 ETL(추출·변환·적재)을 비정형 임상 문서까지 넓히고, 변환 단계에 임상 검증을 더했습니다. 의료진은 입력하지 않고 확인만 합니다.',
      workflowLabel: 'MediPipe 처리 구조',
      workflow: [
        { no: '01', title: '수집', text: '결과지 · 판독문 · 스프레드시트 등 병원 문서를 형식 그대로 받습니다.' },
        { no: '02', title: '변환', text: '형식이 달라도 같은 임상 항목으로 정리합니다.' },
        { no: '03', title: '검증', text: '신뢰도가 낮거나 임상적으로 어긋난 값만 의료진이 확인합니다.' },
        { no: '04', title: '자산화', text: 'CSV · JSON으로 내보내고, 확정된 값은 다음 연구에 다시 쓰입니다. FHIR KR Core 출력은 개발 예정입니다.' },
      ],
      screenshot: {
        src: '/product/medipipe-ocr.webp',
        src2x: '/product/medipipe-ocr@2x.webp',
        width: 1600,
        height: 904,
        alt: 'MediPipe 검증 화면. 왼쪽에는 폐기능검사 결과지 원본에 인식한 값이 박스로 표시되고, 오른쪽에는 항목별 인식값과 신뢰도가 표로 정리되어 신뢰도가 낮은 값 5개가 빨간색으로 강조되어 있습니다.',
        caption: 'MediPipe 검증 화면 — 결과지에서 읽은 값을 원본 위치와 함께 보여주고, 신뢰도가 낮은 값을 의료진이 먼저 확인하도록 표시합니다.',
        note: '화면 속 폐기능검사(PFT) 결과지와 환자 정보는 시연을 위해 생성한 예시 데이터이며, 실제 환자 데이터가 아닙니다.',
        zoomHint: '이미지를 누르면 크게 볼 수 있습니다.',
      },
      checks: {
        label: '3겹 검증',
        title: '병원 특화 지식 그래프로 세 번 거른 값만 확정합니다',
        lead: '값 하나가 틀리면 진단과 처방이 틀립니다. 그럴듯한 값을 지어내는 AI(환각)는 의료에서 허용되지 않습니다.',
        items: [
          {
            no: '01',
            title: '의미 검증',
            text: '병원 특화 지식 그래프의 필드 간 관계 규칙으로, 수축기·이완기 혈압이 뒤바뀐 것처럼 칸이 바뀐 값을 찾아냅니다.',
          },
          {
            no: '02',
            title: '근거 연결',
            text: '모든 값을 원본 문서의 위치에 연결합니다. 근거가 없는 값은 만들지 않아 환각을 막습니다.',
          },
          {
            no: '03',
            title: '의료진 확인',
            text: '의료진이 확인하기 전에는 값이 확정되지 않습니다. 확인·수정 이력은 감사로그로 남습니다.',
          },
        ],
        note: '의료진의 확인 기록은 병원 특화 지식 그래프에 쌓여 다음 과제의 검증 규칙이 됩니다. MediPipe는 원내 서버에 설치해 원내 PC 웹 브라우저로 씁니다.',
      },
    },
    research: {
      eyebrow: '도입 사례',
      title: '3개 병원의 문제를\n모듈 3종으로 풀었습니다',
      lead: '병원마다 새로 만들지 않고, MediPipe 위에 검사·업무별 모듈을 하나씩 쌓았습니다. 한 병원의 결과를 본 다른 병원이 먼저 구매 의향을 밝혔습니다.',
      modules: [
        {
          name: 'PFTPipe',
          tag: '건양대학교병원 · 폐기능검사',
          status: '유상 PoC 진행 중',
          value: '95.6%',
          valueLabel: '연구 데이터 준비 기간 단축 · 3개월 → 4일',
          points: ['한국데이터산업진흥원 지원 과제의 외부 용역으로 공동 연구 · IRB 승인', '같은 결과지 문제를 가진 다른 병원이 구매 의향'],
        },
        {
          name: 'RxPipe',
          tag: '이대목동병원 · 지참약',
          status: 'PoC 완료',
          value: '94.1%',
          valueLabel: '지참약 자동 변환 커버리지 · 21,898건 중 20,611건',
          points: ['기관 내 변환 불가 1,777건 → 1,287건 (27.6% 감소)', '2026년 말 EMR 연동 · 실사용 목표'],
        },
        {
          name: 'MBPTPipe',
          tag: '일산병원 · 기관지유발검사',
          status: 'PoC 완료',
          value: '98.9%',
          valueLabel: '결과지 1장 정리 시간 단축 · 3분 → 2초',
          points: ['결과지 2,572장 기준 · 연구 데이터 준비 시간 90% 감소', '결과 논문 JMIR Medical Informatics 심사 중'],
        },
      ],
      scale: {
        label: '확장 구조',
        text: '첫 병원에서 양식 분석과 검증 규칙을 만들고, 그 결과로 완성한 모듈을 같은 문제를 가진 다음 병원에 그대로 설치합니다. PFTPipe 기준 첫 병원 구축은 30 인·일, 두 번째 병원 설치는 2~3 인·일로 공수를 90% 이상 줄입니다.',
      },
      awardsLabel: '수상 이력',
      awards: [
        {
          badge: '우수상',
          title: '2026 SKKU 프리 텍스코어 사업계획서 발표',
          host: '성균관대학교 실험실창업혁신단 · 창업지원단 주관 · 2026.10.14',
          talkLabel: '발표 주제',
          talk: '병원 결과지·진료기록을 의료진 검증(HITL) 기반으로 AI 활용 데이터로 자동 변환하는 원내 설치형 웹 기반 의료데이터 플랫폼 「MediPipe」',
        },
        {
          badge: '최우수상',
          title: '2026 실험실 창업경진대회 IR 발표',
          host: '성균관대학교 창업지원단 주관 · 2026.09.18',
          talkLabel: '발표 주제',
          talk: '병원 내 검사 결과와 진료기록을 AI 활용 데이터로 전환하는 온프레미스 의료데이터 인프라 소프트웨어 MediPipe',
        },
        {
          badge: '최우수상',
          title: '2026 연합 실험실창업 캠프 IR 발표',
          host: '성균관대학교 창업중심대학사업단 주관 · 2026.08.26',
          talkLabel: '발표 주제',
          talk: '병원이 AI를 쓸 수 있게 만드는 데이터 인프라 — MediPipe',
        },
      ],
      metrics: [
        { value: '유상 용역', label: '한국데이터산업진흥원 지원 건양대학교병원 과제의 외부 용역 · MediPipe로 공동 연구·PoC · 1차 완료, 2차 진행' },
        { value: '4 / 5명', label: '대한천식알레르기학회 시연 후 구매 의향을 밝힌 전문의' },
        { value: '특허 3건', label: '핵심 방법 특허 · 1건 출원(10-2025-0166208), 2건 병원 공동 출원 준비' },
      ],
      metricsNote: '98.9%는 일산병원 결과지 2,572장 기준이며, 95.6%는 3개월을 90일로 계산한 값입니다. RxPipe 수치는 자사 실측입니다. 94.1%는 변환 경로를 확보한 비율이며 문서 인식 정확도가 아닙니다.',
      credLabel: '연구 기반',
      credText: '다기관 임상 연구에서 쌓은 데이터 정제 경험을 병원이 쓰는 제품으로 옮겼습니다.',
      credPoints: [
        '삼성서울병원 30년 폐기능 코호트 99만 9,920건 정제 경험',
        '삼성서울 · 이대목동 · 춘천성심 · 건양대 · 일산 등 5개 병원 교수진과 임상 검증',
        '국제학술지 18편 · 1저자 8편 · h-index 9 · NeurIPS 2026 워크숍 1저자',
        '연구 성과: 호흡기 질환 예측 AI DeepBreath 외부검증 AUROC 0.883 (n=1,106, 일산병원) · 허가 전 연구 단계',
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
      title: '범용 OCR과 CDW 사이,\n비어 있는 영역을 채웁니다',
      moats: [
        {
          no: '01',
          title: '임상 의미까지 검증',
          text: '범용 문서 AI는 글자까지, CDW는 이미 정형화된 데이터부터 다룹니다. 그 사이 ‘비정형 병원 문서의 임상 의미 검증’이 MediPipe의 영역입니다.',
        },
        {
          no: '02',
          title: '쌓일수록 빨라지는 모듈',
          text: '의료진 확인 기록이 병원 특화 지식 그래프로 쌓여 모듈이 됩니다. 같은 문제를 가진 다음 병원에는 첫 병원의 10분의 1 이하 공수로 설치합니다.',
        },
        {
          no: '03',
          title: '원내 설치, EMR 안에서',
          text: '온프레미스·망분리 환경에서 동작합니다. 결과는 별도 대시보드가 아니라 EMR 화면 안에서 보도록 연동 API를 만들고 있습니다.',
        },
      ],
      table: {
        title: '비교',
        hint: '비교표는 좌우로 넘겨서 보세요.',
        cols: ['MediPipe', '범용 문서 AI', 'CDW · CDM', 'LLM 정형화'],
        rows: [
          { label: '주력 분야', values: ['병원 검사 결과지 · 서술기록', '범용 문서 (금융 · 공공 · 영수증)', '병원 정형 데이터 표준화', '텍스트 기록 정형화'] },
          { label: '임상 의미 검증', values: ['필드 간 의미 오류 검사 + 의료진 확인', '글자 인식까지', '정형 데이터부터 시작', '스캔 결과지 · 의료진 검증 흐름 제한적'] },
          { label: '환각 대응', values: ['근거 없는 값은 만들지 않음 · 확인 전 확정 불가', '해당 없음', '해당 없음', '별도 검증 필요'] },
          { label: '설치 형태', values: ['온프레미스 · 망분리', 'API · 클라우드 중심', '온프레미스', '제품별 상이'] },
          { label: '도입 단위', values: ['진료과 단위로 시작', '기관 구축 · API 사용량', '병원 단위 대규모 구축', '제품별 상이'] },
        ],
      },
    },
    market: {
      eyebrow: '성장 전략',
      title: '진료과에서 시작해\n병원 전체로 넓힙니다',
      lead: '첫 고객은 연구 과제를 수행하는 진료과 교수이고, 사용자는 연구간호사와 전공의입니다. 과제 연구비로 바로 도입할 수 있고, 데이터 준비가 줄어든 만큼 더 많은 과제를 수행합니다. 진료과에서 검사실, 병원 AX 조직·정보전략실로 확산합니다.',
      panelLabel: '시장 규모 (2026)',
      panelTitle: '1.5조 원 국내 의료 데이터 시장에서\n호흡기·알레르기내과부터',
      items: [
        {
          tier: 'TAM',
          value: '1조 4,838억 원',
          label: '국내 의료 데이터 시장',
          desc: '2021년 실측 3,008억 원에 보건복지부 추산 성장률을 적용한 2026년 추정치입니다.',
          focus: false,
        },
        {
          tier: 'SAM',
          value: '7,626억 원',
          label: '구축 · 처리 · 관리',
          desc: '데이터 구축·컨설팅과 처리·관리 영역입니다. 2031년 3.76조 원(연평균 37.6%)으로 성장할 전망입니다.',
          focus: false,
        },
        {
          tier: 'SOM',
          value: '4,491.6억 원',
          label: '394개 병원',
          desc: '데이터 범위를 넓히려는 고도화 기관 66곳과, 첫 데이터 인프라가 필요한 종합병원 328곳의 진료과·부서입니다.',
          focus: false,
        },
        {
          tier: 'LAM',
          value: '236.4억 원',
          label: '초기 공략',
          desc: '첫 3년은 호흡기내과·알레르기내과에 집중합니다. 구매 의향과 PoC가 모두 이 진료과에서 나왔습니다.',
          focus: true,
        },
      ],
    },
    roadmap: {
      eyebrow: '로드맵',
      title: '구조화에서 플랫폼까지 4단계',
      phases: [
        {
          period: "'26.4Q",
          name: '1차 · 구조화',
          items: [
            '진료과: “손으로 옮기지 않게”',
            '결과지 인식 · 필드 추출',
            '필드 정확도 99.8% 이상 목표 · 벤치마크 공개',
          ],
        },
        {
          period: "'27",
          name: '2차 · 맥락화',
          items: [
            '진료과: “환자별 추이를 바로 연구에”',
            '서술기록 정제 · 지식 그래프 기반 시계열 해석',
            '의료진 동의율 99.8% 이상 목표',
          ],
        },
        {
          period: "'26.12 ~ '28",
          name: '3차 · 검증 · 연동',
          items: [
            '정보전략실: “근거와 함께, 데이터는 원내에”',
            '근거 연결형 HITL · 감사로그 · FHIR KR Core 연동 API',
            '검증 전 확정 값 0건 · 누락 오류율 0.2% 이하 목표',
          ],
        },
        {
          period: "'29 ~",
          name: '4차 · 플랫폼화',
          items: [
            '검사실·정보전략실: “장비 결과 자동 변환, 원내 데이터로 AI”',
            '장비 연동 · 정제 플랫폼화',
            '병원 데이터 기반 AI 학습 · 배포',
          ],
        },
      ],
      global: {
        label: '장기 비전',
        text: '의료진의 판단을 데이터로 남겨, 어느 병원에서든 같은 수준의 진료와 연구가 가능하게 합니다. 병원 안에서 기록하고, 병원 안에서 학습하고, 병원 사이에는 환자 데이터가 아닌 지식과 모델만 오가게 합니다.',
      },
    },
    team: {
      eyebrow: '팀',
      title: '의료 AI 인허가 경험과\n임상 데이터 전문성',
      lead: '식약처 SaMD 인허가를 주도한 대표와 임상 현장 출신의 품질·규제 책임자가 이끌고, 개발·연구 협력 인력과 병원 교수진이 함께합니다.',
      members: [
        {
          name: '이경현',
          sub: 'Kyung Hyun Lee',
          photo: '/team/kyunghyun-lee-480.jpg',
          role: '공동창업자 · 대표 (CEO)',
          bio: '성균관대학교 SAIHST 디지털헬스학과 박사과정에서 의료 AI를 연구하며, 연구개발을 총괄합니다.',
          highlights: ['의료 AI 8년차', '식약처 SaMD 인허가 2건 주도', '국제학술지 18편 · 1저자 8편', 'NeurIPS 2026 워크숍 1저자'],
        },
        {
          name: '이다윤',
          sub: 'Dayoon Lee',
          photo: '/team/dayoon-lee-480.jpg',
          role: '공동창업자 · 최고품질책임자 (CQO)',
          bio: '임상 현장의 경험을 품질·규제 체계와 연구 데이터 관리로 연결합니다.',
          highlights: ['연구간호사 3년 · 수술장 간호사 2년', '의료기기 RA · QA', '연구 데이터 관리', '성균관대 의료기기산업학과 석사과정'],
        },
      ],
      partners: {
        label: '협력 네트워크',
        text: '자문 관계가 현장 적용과 구매 의향으로 이어졌습니다. 다음 단계는 이 기관들과의 정식 계약입니다.',
        items: [
          { name: '건양대학교병원', note: 'PFTPipe 공동 연구 · 유상 PoC · IRB 승인', featured: true },
          { name: '이대목동병원', note: 'RxPipe PoC 완료 · EMR 연동 준비', featured: true },
          { name: '국민건강보험공단 일산병원', note: 'MBPTPipe PoC 완료 · 외부검증', featured: true },
          { name: '삼성서울병원', note: '30년 폐기능 코호트 · 임상 자문', featured: false },
          { name: '한림대학교 춘천성심병원', note: '폐기능 데이터 정제 · 공동 연구', featured: false },
          { name: '인천대학교', note: '공학 자문', featured: false },
        ],
      },
    },
    contact: {
      eyebrow: '문의',
      title: '병원 데이터를\nAI Ready로 만드는 일',
      lead: '진료과·검사실·정보전략실의 MediPipe 도입과 현장 적용 문의를 기다립니다. 연구 협력과 투자 관련 자료도 요청하실 수 있습니다.',
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
      title: 'Unstructured hospital documents,\nturned into AI-ready data',
      lead: 'MediPipe organizes test reports, readings and clinical notes into tables with consistent clinical fields, and asks clinicians only about suspect values. It runs on hospital servers, so patient data never leaves the hospital.',
      primaryCta: 'Discuss MediPipe',
      secondaryCta: 'See how it works',
      note: 'AI-ready data — clinician-verified data that AI can learn from and use right away',
      stats: [
        { value: '98.9%', label: 'Less time per report · 3 min → 2 s (Ilsan Hospital PoC)' },
        { value: '95.6%', label: 'Shorter research-data prep · 3 months → 4 days (Konyang PoC)' },
        { value: '3 sites', label: 'Field deployments · Konyang · Ewha Mokdong · Ilsan' },
        { value: '4 LOIs', label: 'Letters of intent from university hospitals · 4 departments at 3 institutions' },
      ],
      visual: {
        label: 'How MediPipe converts hospital data',
        live: 'On-premise',
        inputLabel: 'Input',
        input: 'Hospital documents as-is',
        inputMeta: 'Collected in their existing formats',
        sources: ['Test reports', 'Readings', 'Spreadsheets'],
        processing: 'Organize and verify',
        processingSteps: ['Map to consistent clinical fields', 'Check cross-field meaning', 'Ask clinicians only about suspect values'],
        processingMeta: 'Patient data never leaves the hospital',
        outputLabel: 'Output',
        output: 'Clinician-verified data',
        outputMeta: 'Export to CSV · JSON',
        outputValue: 'Confirmed',
        outputRows: [
          { label: 'Test date', value: 'Standardized' },
          { label: 'Test item', value: 'Field mapped' },
          { label: 'Result', value: 'Clinician checked' },
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
        text: 'Medical AI that entered the non-reimbursed market through deferred health-technology assessment tripled its hospital base in just over a year, and Korea’s immediate-market-entry pathway took effect in January 2026. The government has funded 62 hospital data-cleansing and standardization projects (KRW 11.2B) for 2026, and university hospitals are standing up in-house AX teams and closed-network AI. For that AI to run, hospital data has to be AI-ready.',
      },
      items: [
        {
          no: '01',
          title: 'Proven AI stalled on new hospital data',
          text: 'IBM Watson at MD Anderson was never used in care after the hospital switched EMRs and Watson could not read the new record format. U.S. health-IT leaders rank data quality (49%) — not algorithms — as the top barrier to AI adoption.',
        },
        {
          no: '02',
          title: '80% unstructured, months of prep',
          text: 'About 80% of EMR data is unstructured. Data preparation consumes 63–80% of a research project’s timeline, and simply obtaining data takes months, so projects stall before validation.',
        },
        {
          no: '03',
          title: 'Typed by hand, rebuilt every project',
          text: 'Research nurses and residents copy report values into spreadsheets, and values in the wrong field — systolic and diastolic swapped — surface late. Verified values and rules are not kept, so the next project starts over.',
        },
      ],
    },
    solution: {
      eyebrow: 'MediPipe',
      title: 'Any hospital document,\norganized into a standard table',
      lead: 'MediPipe extends data-warehouse ETL (extract, transform, load) to unstructured clinical documents and adds clinical verification to the transform step. Clinicians do not type — they only confirm.',
      workflowLabel: 'How MediPipe works',
      workflow: [
        { no: '01', title: 'Collect', text: 'Test reports, readings, spreadsheets — hospital documents are accepted as they are.' },
        { no: '02', title: 'Convert', text: 'Different formats are organized into the same clinical fields.' },
        { no: '03', title: 'Verify', text: 'Clinicians review only low-confidence or clinically inconsistent values.' },
        { no: '04', title: 'Build the asset', text: 'Export to CSV or JSON; confirmed values are reused in the next study. FHIR KR Core output is planned.' },
      ],
      screenshot: {
        src: '/product/medipipe-ocr.webp',
        src2x: '/product/medipipe-ocr@2x.webp',
        width: 1600,
        height: 904,
        alt: 'The MediPipe review screen. On the left, the original pulmonary function test report with each recognized value boxed in place; on the right, a table of extracted values and confidence scores, with five low-confidence values highlighted in red.',
        caption: 'MediPipe review screen — every extracted value is shown in place on the source report, and low-confidence values are flagged for a clinician to check first.',
        note: 'The pulmonary function test (PFT) report and patient details shown are sample data generated for demonstration, not real patient data.',
        zoomHint: 'Tap the image to view it full size.',
      },
      checks: {
        label: 'Three-layer verification',
        title: 'Only values that pass three checks against a hospital-specific knowledge graph are confirmed',
        lead: 'One wrong value means a wrong diagnosis or prescription. AI that invents plausible values (hallucination) has no place in medicine.',
        items: [
          {
            no: '01',
            title: 'Semantic check',
            text: 'Cross-field rules in the hospital-specific knowledge graph catch values in the wrong field, such as swapped systolic and diastolic blood pressure.',
          },
          {
            no: '02',
            title: 'Source linking',
            text: 'Every value is linked to its location in the source document. Values without a source are never generated, which blocks hallucination.',
          },
          {
            no: '03',
            title: 'Clinician confirmation',
            text: 'Nothing is confirmed until a clinician checks it. Every confirmation and correction is kept in an audit log.',
          },
        ],
        note: 'Clinician confirmations accumulate in the hospital-specific knowledge graph and become the validation rules for the next project. MediPipe is installed on hospital servers and used from a web browser on hospital PCs.',
      },
    },
    research: {
      eyebrow: 'Use cases',
      title: 'Three hospital problems,\nsolved with three modules',
      lead: 'Instead of building from scratch for each hospital, we stack task-specific modules on MediPipe. After seeing one hospital’s results, other hospitals stated their intent to purchase.',
      modules: [
        {
          name: 'PFTPipe',
          tag: 'Konyang University Hospital · Pulmonary function tests',
          status: 'Paid PoC underway',
          value: '95.6%',
          valueLabel: 'Shorter research-data prep · 3 months → 4 days',
          points: ['Joint research as outsourced work on a K-DATA-funded project · IRB approved', 'Another hospital with the same report problem has stated intent to purchase'],
        },
        {
          name: 'RxPipe',
          tag: 'Ewha Mokdong Hospital · Patients’ own medications',
          status: 'PoC complete',
          value: '94.1%',
          valueLabel: 'Automatic conversion coverage · 20,611 of 21,898 records',
          points: ['Unconvertible in-house items cut from 1,777 to 1,287 (−27.6%)', 'EMR integration and live use targeted for end of 2026'],
        },
        {
          name: 'MBPTPipe',
          tag: 'NHIS Ilsan Hospital · Bronchial provocation tests',
          status: 'PoC complete',
          value: '98.9%',
          valueLabel: 'Less time per report · 3 min → 2 s',
          points: ['Measured on 2,572 reports · 90% less research-data prep time overall', 'Results under review at JMIR Medical Informatics'],
        },
      ],
      scale: {
        label: 'How it scales',
        text: 'At the first hospital we analyze the forms and build the validation rules; the finished module is then installed as-is at the next hospital with the same problem. For PFTPipe, the first build took 30 person-days and a second-site install takes 2–3 — more than 90% less effort.',
      },
      awardsLabel: 'Awards',
      awards: [
        {
          badge: 'Excellence Award',
          title: 'Business plan pitch at 2026 SKKU Pre TeX-Corps',
          host: 'Sungkyunkwan University Lab Startup Innovation Group and Start-up Support Foundation · Oct 14, 2026',
          talkLabel: 'Pitch topic',
          talk: 'MediPipe — an on-premise, web-based platform that automatically converts hospital test reports and clinical notes into clinician-verified, AI-ready data',
        },
        {
          badge: 'Top Excellence Award',
          title: 'IR pitch at the 2026 Lab Startup Competition',
          host: 'Sungkyunkwan University Start-up Support Foundation · Sep 18, 2026',
          talkLabel: 'Pitch topic',
          talk: 'MediPipe — on-premise medical-data infrastructure software that turns in-hospital test results and clinical records into AI-ready data',
        },
        {
          badge: 'Top Excellence Award',
          title: 'IR pitch at the 2026 Joint Lab-Startup Camp',
          host: 'Sungkyunkwan University Startup-Centered University Program · Aug 26, 2026',
          talkLabel: 'Pitch topic',
          talk: 'The data infrastructure that lets hospitals actually use AI — MediPipe',
        },
      ],
      metrics: [
        { value: 'Paid contract', label: 'Outsourced work on a Konyang University Hospital project funded by the Korea Data Agency (K-DATA) · joint research and PoC on MediPipe · phase 1 done, phase 2 underway' },
        { value: '4 of 5', label: 'Specialists who stated intent to purchase after a KAAACI conference demo' },
        { value: '3 patents', label: 'Core-method patents · 1 filed (KR 10-2025-0166208), 2 joint filings with hospitals in preparation' },
      ],
      metricsNote: 'The 98.9% figure is based on 2,572 reports at Ilsan Hospital; 95.6% treats 3 months as 90 days. RxPipe figures are our own measurements. 94.1% is conversion-path coverage, not document-recognition accuracy.',
      credLabel: 'Research foundation',
      credText: 'We turned data-cleansing experience from multi-institution clinical research into software hospitals use.',
      credPoints: [
        'Cleansed a 30-year, 999,920-record pulmonary function cohort at Samsung Medical Center',
        'Clinical validation with faculty at five hospitals, including Samsung, Ewha Mokdong, Hallym Chuncheon, Konyang and Ilsan',
        '18 international journal papers · 8 first-author · h-index 9 · first author at a NeurIPS 2026 workshop',
        'Research result: DeepBreath respiratory-risk AI, external validation AUROC 0.883 (n=1,106, Ilsan Hospital) · pre-approval research stage',
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
      title: 'Filling the gap between\ngeneric OCR and the CDW',
      moats: [
        {
          no: '01',
          title: 'Verified down to clinical meaning',
          text: 'Generic document AI stops at characters; a CDW starts from data that is already structured. Clinical-meaning verification of unstructured hospital documents is the gap MediPipe fills.',
        },
        {
          no: '02',
          title: 'Modules that get faster as they grow',
          text: 'Clinician confirmations accumulate in a hospital-specific knowledge graph and become a module. The next hospital with the same problem is installed with a tenth of the effort or less.',
        },
        {
          no: '03',
          title: 'On-premise, inside the EMR',
          text: 'MediPipe runs on-premise in network-segregated environments. We are building an integration API so results appear inside the EMR, not in a separate dashboard.',
        },
      ],
      table: {
        title: 'Comparison',
        hint: 'Swipe sideways to view the full comparison.',
        cols: ['MediPipe', 'Generic document AI', 'CDW · CDM', 'LLM structuring'],
        rows: [
          { label: 'Focus', values: ['Hospital test reports · clinical notes', 'General documents (finance · public sector · receipts)', 'Standardizing structured hospital data', 'Structuring text records'] },
          { label: 'Clinical verification', values: ['Cross-field checks + clinician confirmation', 'Stops at character recognition', 'Starts from structured data', 'Limited for scanned reports and clinician review'] },
          { label: 'Hallucination control', values: ['No value without a source · nothing confirmed before review', 'Not applicable', 'Not applicable', 'Separate verification needed'] },
          { label: 'Deployment', values: ['On-premise · network-segregated', 'Mostly API · cloud', 'On-premise', 'Varies by product'] },
          { label: 'Entry point', values: ['Starts with one department', 'Institution build · API usage', 'Large hospital-wide build', 'Varies by product'] },
        ],
      },
    },
    market: {
      eyebrow: 'Growth strategy',
      title: 'Start with one department,\ngrow to the whole hospital',
      lead: 'Our first customers are department faculty running research projects; the users are research nurses and residents. They can adopt MediPipe from project research funds, and less time on data prep means more projects. Adoption spreads from the department to the lab and on to the hospital’s AX and IT strategy teams.',
      panelLabel: 'Market size (2026)',
      panelTitle: 'In a KRW 1.5T Korean medical-data market,\nstarting with pulmonology and allergy',
      items: [
        {
          tier: 'TAM',
          value: 'KRW 1.48T',
          label: 'Korean medical-data market',
          desc: '2026 estimate applying the Ministry of Health and Welfare’s projected growth rate to the measured 2021 figure of KRW 300.8B.',
          focus: false,
        },
        {
          tier: 'SAM',
          value: 'KRW 762.6B',
          label: 'Build · process · manage',
          desc: 'Data building, consulting, processing and management — projected to reach KRW 3.76T by 2031 (37.6% CAGR).',
          focus: false,
        },
        {
          tier: 'SOM',
          value: 'KRW 449.2B',
          label: '394 hospitals',
          desc: 'Departments at 66 advanced institutions seeking broader data coverage and 328 general hospitals that need their first data infrastructure.',
          focus: false,
        },
        {
          tier: 'LAM',
          value: 'KRW 23.6B',
          label: 'Initial focus',
          desc: 'For the first three years we focus on pulmonology and allergy departments — where our purchase intent and PoCs came from.',
          focus: true,
        },
      ],
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'Four stages, from structuring to platform',
      phases: [
        {
          period: "Q4 '26",
          name: 'Stage 1 · Structure',
          items: [
            'Departments: “Stop copying by hand”',
            'Report recognition · field extraction',
            'Target field accuracy ≥ 99.8% · public benchmark',
          ],
        },
        {
          period: "'27",
          name: 'Stage 2 · Contextualize',
          items: [
            'Departments: “Per-patient trends, ready for research”',
            'Clinical-note cleansing · knowledge-graph time-series interpretation',
            'Target clinician agreement ≥ 99.8%',
          ],
        },
        {
          period: "Dec '26 – '28",
          name: 'Stage 3 · Verify · integrate',
          items: [
            'IT strategy: “With evidence, and data stays inside”',
            'Source-linked HITL · audit logs · FHIR KR Core integration API',
            'Target zero values confirmed before review · omission error ≤ 0.2%',
          ],
        },
        {
          period: "'29 –",
          name: 'Stage 4 · Platform',
          items: [
            'Labs and IT strategy: “Device results converted automatically, AI on our own data”',
            'Device integration · cleansing platform',
            'Training and deploying AI on hospital data',
          ],
        },
      ],
      global: {
        label: 'Long-term vision',
        text: 'We capture clinicians’ judgment as data so every hospital can deliver the same standard of care and research. Record inside the hospital, learn inside the hospital, and between hospitals share only knowledge and models — never patient data.',
      },
    },
    team: {
      eyebrow: 'Team',
      title: 'Medical-AI regulatory experience\nand clinical-data expertise',
      lead: 'Led by a CEO who has driven MFDS SaMD approvals and a quality and regulatory lead from clinical practice, working with development and research collaborators and hospital faculty.',
      members: [
        {
          name: 'Kyung Hyun Lee',
          sub: '이경현',
          photo: '/team/kyunghyun-lee-480.jpg',
          role: 'Co-founder & CEO',
          bio: 'A medical AI researcher and PhD student in Digital Health at SAIHST, Sungkyunkwan University, he leads research and development.',
          highlights: ['8 years in medical AI', 'Led 2 MFDS SaMD approvals', '18 international journal papers · 8 first-author', 'NeurIPS 2026 workshop first author'],
        },
        {
          name: 'Dayoon Lee',
          sub: '이다윤',
          photo: '/team/dayoon-lee-480.jpg',
          role: 'Co-founder & Chief Quality Officer',
          bio: 'She connects clinical experience to quality and regulatory systems and research-data management.',
          highlights: ['Research nurse 3 yrs · OR nurse 2 yrs', 'Medical-device RA · QA', 'Research-data management', 'MS student, Medical Device Industry, SKKU'],
        },
      ],
      partners: {
        label: 'Collaboration network',
        text: 'Advisory relationships have turned into field deployments and purchase intent. The next step is formal contracts with these institutions.',
        items: [
          { name: 'Konyang University Hospital', note: 'PFTPipe joint research · paid PoC · IRB approved', featured: true },
          { name: 'Ewha Womans University Mokdong Hospital', note: 'RxPipe PoC complete · EMR integration in preparation', featured: true },
          { name: 'NHIS Ilsan Hospital', note: 'MBPTPipe PoC complete · external validation', featured: true },
          { name: 'Samsung Medical Center', note: '30-year pulmonary cohort · clinical advisory', featured: false },
          { name: 'Hallym University Chuncheon Sacred Heart Hospital', note: 'Pulmonary data cleansing · joint research', featured: false },
          { name: 'Incheon National University', note: 'Engineering advisory', featured: false },
        ],
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s make your hospital data\nAI-ready',
      lead: 'Talk to us about adopting or piloting MediPipe in your department, lab or IT strategy team. Research collaboration and investor materials are also available on request.',
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
