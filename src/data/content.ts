// 브레스유 홈페이지 콘텐츠 (한국어 / 영어)
// 사업계획서 기반. 매출 목표·자금조달·Exit 등 민감 수치는 의도적으로 제외했습니다.
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
      title: '브레스유 | MediPipe 병원 의료데이터 소프트웨어',
      description:
        '병원의 검사 결과와 진료기록을 EMR·연구·AI에 쓸 수 있는 데이터로 바꾸는 소프트웨어입니다. 데이터는 병원 내부에서 처리하고, 의료인이 결과를 확인합니다.',
    },
    nav: {
      links: [
        { label: '솔루션', href: '#solution' },
        { label: '검증', href: '#research' },
        { label: '성장 전략', href: '#company' },
        { label: '팀', href: '#team' },
      ],
      cta: '도입 상담',
    },
    hero: {
      badge: 'LAB-TO-MARKET · 병원 내부 설치형 의료데이터 소프트웨어',
      title: '병원 문서를\nAI가 쓸 수 있는 데이터로',
      lead: 'MediPipe는 검사 결과와 진료기록을 병원 밖으로 내보내지 않고, EMR·연구·AI에 맞는 형식으로 바꿉니다. 의료인이 화면에서 결과를 확인하고 수정할 수 있습니다.',
      primaryCta: 'MediPipe 도입 문의',
      secondaryCta: '작동 방식 보기',
      note: 'MediPipe 유상 위탁과 PoC에서 첫 매출이 발생했습니다. DeepBreath는 인허가 이후 판매할 계획입니다.',
      stats: [
        { value: '병원 내부', label: '데이터 반출 없이 설치·처리' },
        { value: '의료인 검증', label: '코딩 없이 결과를 확인·수정' },
        { value: '첫 매출', label: '건양대학교병원 유상 위탁과 PoC' },
        { value: '4개 기관', label: '다기관 연구에서 출발' },
      ],
      visual: {
        label: 'MediPipe 데이터 전환 흐름',
        live: '주력 제품',
        inputLabel: '입력',
        input: '검사 결과 · 진료기록',
        inputMeta: '형식이 달라도 그대로 수집',
        sources: ['검사 결과지', '스캔 문서', 'EMR 서술기록'],
        processing: '구조화하고 확인합니다',
        processingSteps: ['문서에서 필요한 값 추출', '임상 필드에 맞춰 정리', '의료인이 화면에서 확인'],
        processingMeta: '데이터는 병원 밖으로 나가지 않습니다',
        outputLabel: '결과',
        output: '의료인이 확인한 데이터',
        outputMeta: '환자 단위로 연결·축적',
        outputValue: '확인 완료',
        outputRows: [
          { label: '검사일', value: '표준화' },
          { label: '검사 항목', value: '필드 연결' },
          { label: '검사값', value: '확인 완료' },
        ],
        explain: '한 번 정리한 데이터를 다시 활용합니다',
        destinations: ['EMR', '연구', 'AI'],
      },
    },
    problem: {
      eyebrow: '병원 데이터 활용의 시작점',
      title: 'AI 이전에,\n데이터부터 막혀 있습니다',
      trigger: {
        label: '현장의 병목',
        text: '병원에서 활용할 AI는 빠르게 늘고 있습니다. 국내 AI 기반 의료기기 허가·인증은 2021년 37건에서 2025년 153건으로 증가했습니다. 하지만 실제 도입에 필요한 검사 결과와 진료기록은 여전히 문서와 자유서술 형태로 남아 있습니다.',
      },
      items: [
        {
          no: '01',
          title: '과제마다 반복되는 추출',
          text: '데이터 인프라를 갖춘 대형병원도 연구 과제마다 전문인력이 데이터를 추출하고 가공합니다. 추출 요청부터 수령까지 수개월, 한 병원의 비정형 데이터 플랫폼 구축에는 2년 4개월이 걸렸습니다.',
        },
        {
          no: '02',
          title: '문자 인식 다음이 문제',
          text: '문자 인식 기술은 이미 상용화됐습니다. 문제는 그다음입니다. 수축기 혈압 값이 이완기 혈압 칸에 들어가는 필드 간 의미 오류는 문자 인식만으로 걸러지지 않습니다.',
        },
        {
          no: '03',
          title: '활용되지 못하는 데이터',
          text: '국내 의료기관에서 생성되는 EMR의 약 80%는 자유서술 형태의 비정형 문서입니다. 문서에 갇힌 기록은 EMR·연구·AI에 그대로 쓰이지 못합니다.',
        },
      ],
    },
    solution: {
      eyebrow: 'MediPipe',
      title: '병원 내부에서 처리하는\n데이터 전환',
      lead: 'MediPipe는 데이터를 외부 클라우드로 보내지 않고 병원 내부 서버에서 처리하도록 설계했습니다. 현재 문서 변환과 의료인 검증 기능을 현장에서 검증하고, 외부 제품·EMR 연동은 단계적으로 확장합니다.',
      workflowLabel: 'MediPipe 처리 구조',
      workflow: [
        { no: '01', title: '수집', text: '검사 장비 출력 파일과 스캔 결과지를 받고, EMR 서술기록과 검사실 대장으로 적용 범위를 넓혀갑니다.' },
        { no: '02', title: '변환', text: 'AI·EMR·연구가 요구하는 형식으로 바꿉니다.' },
        { no: '03', title: '검증', text: '의료인이 코딩 없이 화면에서 값과 임상 의미를 직접 확인하고 수정합니다.' },
        { no: '04', title: '자산화', text: '환자 단위로 이어 붙여 병원 내부에 축적하고, 다음 AI에 다시 씁니다.' },
      ],
      products: [
        {
          name: 'MediPipe',
          status: '주력 제품 · 유상 위탁과 PoC 진행',
          tag: '온프레미스 데이터 인프라',
          desc: '다기관 연구의 데이터 정제 기술을 제품화했습니다. 최근 건양대학교병원 유상 검증에서 현장 가치를 확인했습니다. 비개발자도 직접 추출·검증할 수 있도록 설계했습니다.',
          points: [
            '문자 인식을 넘어 필드 간 임상 의미까지 확인',
            '온프레미스 설치 · 망분리 환경 동작 · 데이터 반출 없음',
            '건양대학교병원 데이터 정제 유상 위탁·PoC · IRB 완료',
            '전문의 5인 설문에서 사용 의향 80% · 사내 간호사 검증 중',
            '특허 출원 (출원번호 10-2025-0166208)',
          ],
        },
        {
          name: 'DeepBreath 폐기능 예측 AI',
          status: '중장기 파이프라인 · 개발·인허가 준비',
          tag: 'MediPipe 데이터 기반 의료 AI',
          desc: 'MediPipe가 쌓은 시계열 데이터로 폐기능 악화 궤적을 예측합니다. 임상·인허가 검증을 단계적으로 준비합니다.',
          points: [
            '장기 검사 이력 기반 악화 궤적 예측',
            '외부 병원 데이터 1,106건에서 예측 성능 검증 (AUROC 0.883)',
            '장기 이력 분석 모델의 3년 예측 성능 C-index 0.907',
          ],
        },
      ],
    },
    research: {
      eyebrow: '사업·기술 검증',
      title: '연구와 유상 검증으로\n확인했습니다',
      lead: 'MediPipe는 유상 위탁과 PoC로 병원의 지불 의사를 확인했습니다. 별도 의료 AI인 DeepBreath는 외부 병원 데이터로 예측 성능을 검증했습니다.',
      awardsLabel: '수상 이력',
      awards: [
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
        { value: '첫 매출', label: 'MediPipe · 건양대학교병원 유상 위탁과 PoC' },
        { value: '94.1%', label: 'MediPipe 확장 사례 · 지참약 데이터 21,898건 중 20,611건의 변환 경로 확보' },
        { value: 'AUROC 0.883', label: 'DeepBreath · 국민건강보험공단 일산병원 외부 검증 n=1,106' },
      ],
      metricsNote: '94.1%는 지참약 데이터 연결 경로를 확보한 비율이며, 문서 인식 정확도가 아닙니다. MediPipe와 DeepBreath의 지표는 서로 다른 제품·사용 사례의 결과입니다.',
      credLabel: '연구와 사업',
      credText: '임상 연구 경험을 병원이 실제로 사용하는 제품으로 연결합니다.',
      credPoints: [
        '삼성서울병원·인천대학교·이대목동병원·춘천성심병원 다기관 연구',
        '건양대학교병원 데이터 정제 유상 위탁과 유상 PoC · IRB 완료',
        'SCI(E) 논문 15편 · 1저자 8편 · h-index 8',
        '식약처 승인 SaMD 개발·검증 경험 · 멀티에이전트 데이터 정제 기술 특허 출원',
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
          year: '2023',
        },
      ],
      papersLink: { label: '전체 논문 목록 보기', href: PUBLICATIONS_URL },
    },
    advantage: {
      eyebrow: 'MediPipe의 차이',
      title: '문자를 읽는 데서\n끝나지 않습니다',
      moats: [
        {
          no: '01',
          title: '임상적 의미 보존',
          text: '값을 올바른 임상 필드로 옮깁니다. 30년·99만 건 폐기능 코호트 정제 경험을 제품에 반영했습니다.',
        },
        {
          no: '02',
          title: '의료인이 직접 검증',
          text: '코딩 없이 화면에서 확인하고 수정합니다. AI가 항목을 찾고, 최종 판단은 의료인이 합니다.',
        },
        {
          no: '03',
          title: '환자 에피소드로 축적',
          text: '검사와 기록을 환자 단위로 이어 붙여 병원 안에 남깁니다. 그 위에 병원 자체 AI, 외부 도입 AI, 허가 AI가 올라갑니다.',
        },
      ],
      table: {
        title: 'MediPipe 경쟁력',
        hint: '비교표는 좌우로 넘겨서 보세요.',
        cols: ['MediPipe', '범용 문서 AI', '병원 자체 구축'],
        rows: [
          { label: '목적', values: ['검사 결과·진료기록의 AI 전환', '범용 문자·문서 인식', '기관별 데이터 플랫폼 구축'] },
          { label: '임상 의미', values: ['필드 간 의미까지 검증', '제한적', '도메인별 인력 반복 투입'] },
          { label: '검증 방식', values: ['의료인이 코딩 없이 직접 확인·수정', '자동 출력 그대로', '전문인력이 수작업 검수'] },
          { label: '배포', values: ['온프레미스 · 망분리 환경', '폐쇄망 배포 경로 제한적', '해당 없음 (자체 구축)'] },
          { label: '축적', values: ['환자 에피소드 단위로 병원 내 축적', '문서 단위 출력', '과제 단위로 재작업'] },
        ],
      },
    },
    market: {
      eyebrow: '성장 전략',
      title: '먼저 데이터를 정리하고\n그 위에 AI를 확장합니다',
      lead: 'MediPipe로 병원 현장의 반복 업무를 줄이고 데이터를 쌓습니다. 한 번 정리한 데이터는 병원 연구, 외부 AI 솔루션 연동, DeepBreath 개발에 다시 활용합니다.',
      panelLabel: '사업 진행 현황',
      panelTitle: '다기관 연구에서 매출과 의료 AI까지',
      items: [
        {
          tier: 'RESEARCH',
          value: '4개 기관',
          label: '다기관 연구',
          desc: '삼성서울병원·인천대학교·이대목동병원·춘천성심병원에서 출발했습니다.',
        },
        {
          tier: 'NOW',
          value: '건양대병원',
          label: '첫 매출',
          desc: '데이터 정제 유상 위탁과 유상 PoC에서 첫 매출을 만들었습니다. IRB 승인을 완료했습니다.',
        },
        {
          tier: 'CUSTOMERS',
          value: '최대 394곳*',
          label: '두 고객군',
          desc: '데이터 범위를 넓히려는 기관 66곳과, 첫 데이터 인프라가 필요한 종합병원 328곳입니다. 기관 수는 중복 제거 전 상한입니다.',
        },
        {
          tier: 'PIPELINE',
          value: 'DeepBreath',
          label: '중장기',
          desc: 'MediPipe 데이터 기반 위에서 예측 SaMD 개발과 인허가를 병행합니다.',
        },
      ],
    },
    roadmap: {
      eyebrow: '로드맵',
      title: 'MediPipe에서 DeepBreath까지',
      phases: [
        {
          period: '2026',
          name: 'MediPipe 사업화',
          items: [
            '법인 설립 (2026.08)',
            '건양대학교병원 유상 위탁·PoC · IRB 완료',
            '실험실창업 경진대회·연합 캠프 최우수상 2회',
            '식약처 제60조 검토 신청 (2026.09)',
            '텍스트 데이터 정제 개발 완료 · 검증 단계',
            '필드 단위 정확도 벤치마크 공개 (4분기)',
            '이대목동병원 연동 2026년 완료 목표',
          ],
        },
        {
          period: '2027',
          name: '병원 확장',
          items: [
            '외부 제품·EMR 연동 API 확산 (로드맵 3단계)',
            '유료 계약 전환 확대 · 종합병원 도입',
            '환자 에피소드 데이터 자산 축적',
            'DeepBreath 임상 검증 착수',
          ],
        },
        {
          period: '2028',
          name: '예측 AI 확장',
          items: [
            '병원 내부에서 동작하는 자체 AI 모델 배포 (로드맵 4단계)',
            'DeepBreath 품목허가 추진',
            '글로벌 인허가 준비',
          ],
        },
      ],
      global: {
        label: '글로벌 진출',
        text: 'MediPipe 레퍼런스로 해외 진출을 준비합니다. DeepBreath의 국내외 인허가도 단계적으로 추진합니다.',
      },
    },
    team: {
      eyebrow: '팀',
      title: '실험실에서 시작해\n현장으로',
      lead: '브레스유는 성균관대학교 실험실 기반 창업팀입니다. 연구는 엄격하게, 제품과 사업은 빠르게 검증합니다.',
      members: [
        {
          name: '이경현',
          sub: 'Kyung Hyun Lee',
          photo: '/team/kyunghyun-lee-480.jpg',
          role: '공동창업자 · 대표 (CEO)',
          bio: 'AITRICS에서 의료 AI를 연구하고 성균관대학교 SAIHST 디지털헬스 박사과정을 밟으며, 임상 연구를 제품과 사업으로 연결합니다.',
          highlights: ['AITRICS AI 연구원', 'Medical AI 8년', 'SCI(E) 15편 · 1저자 8편', '식약처 승인 SaMD 개발 경험'],
        },
        {
          name: '이다윤',
          sub: 'Dayoon Lee',
          photo: '/team/dayoon-lee-480.jpg',
          role: '공동창업자 · 최고품질책임자 (CQO)',
          bio: '임상 현장의 언어를 품질과 규제 체계로 연결합니다.',
          highlights: ['간호학 기반 임상 이해', '의료기기 QA', 'QMS 체계 구축', '인허가 프로세스'],
        },
      ],
      partners: {
        label: '협력 네트워크',
        text: '다기관 연구에서 출발했습니다. 최근 건양대학교병원 유상 검증을 통해 매출 단계로 나아갔습니다.',
        items: [
          { name: '삼성서울병원 알레르기내과', note: '지도교수 기반 다기관 연구', featured: false },
          { name: '인천대학교', note: '다기관 연구 협력', featured: false },
          { name: '이대목동병원', note: '다기관 연구 협력', featured: false },
          { name: '한림대학교 춘천성심병원', note: '다기관 연구 협력', featured: false },
          { name: '건양대학교병원', note: '최근 유상 공동 검증 · 초기 매출', featured: true },
        ],
      },
    },
    contact: {
      eyebrow: '문의',
      title: '병원 데이터 활용의\n첫 단계를 함께 시작하세요',
      lead: '병원·기관의 MediPipe 도입과 현장 검증 문의를 기다립니다. 연구 협력과 투자 관련 자료도 요청하실 수 있습니다.',
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
      tagline: '병원 내부 설치형 의료데이터 소프트웨어 · MediPipe',
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
      title: 'Breath You | MediPipe Hospital Data Software',
      description:
        'MediPipe turns hospital test results and clinical records into data for EMR, research and AI. Data stays inside the hospital, and clinicians can review and correct the output.',
    },
    nav: {
      links: [
        { label: 'Solution', href: '#solution' },
        { label: 'Research', href: '#research' },
        { label: 'Growth', href: '#company' },
        { label: 'Team', href: '#team' },
      ],
      cta: 'Discuss adoption',
    },
    hero: {
      badge: 'LAB-TO-MARKET · Medical-data software deployed inside the hospital',
      title: 'Turn hospital documents\ninto data AI can use',
      lead: 'MediPipe converts test results and clinical records into the formats EMR, research and AI require without sending data outside the hospital. Clinicians can review and correct the output on screen.',
      primaryCta: 'Discuss MediPipe',
      secondaryCta: 'See how it works',
      note: 'Paid MediPipe engagements and PoCs have generated our first revenue. We plan to commercialize DeepBreath after regulatory approval.',
      stats: [
        { value: 'Inside hospital', label: 'Installed and processed without data export' },
        { value: 'Clinician review', label: 'Review and correction without coding' },
        { value: 'First revenue', label: 'Paid engagement and PoC at Konyang University Hospital' },
        { value: '4 institutions', label: 'Built on multi-institution research' },
      ],
      visual: {
        label: 'How MediPipe converts hospital data',
        live: 'Flagship product',
        inputLabel: 'Input',
        input: 'Test results · clinical records',
        inputMeta: 'Collected in their existing formats',
        sources: ['Test reports', 'Scanned documents', 'EMR free text'],
        processing: 'Structure and verify',
        processingSteps: ['Extract the required values', 'Map them to clinical fields', 'Let clinicians review on screen'],
        processingMeta: 'Data never leaves the hospital',
        outputLabel: 'Output',
        output: 'Clinician-verified data',
        outputMeta: 'Linked and stored per patient',
        outputValue: 'Verified',
        outputRows: [
          { label: 'Test date', value: 'Standardized' },
          { label: 'Test item', value: 'Field mapped' },
          { label: 'Result', value: 'Reviewed' },
        ],
        explain: 'Reuse the same organized data',
        destinations: ['EMR', 'Research', 'AI'],
      },
    },
    problem: {
      eyebrow: 'Where hospital data use begins',
      title: 'Before AI,\ndata is the bottleneck',
      trigger: {
        label: 'The workflow bottleneck',
        text: 'The number of AI-based medical devices approved or certified in Korea grew from 37 in 2021 to 153 in 2025. Yet the test results and clinical records needed to deploy them still remain in documents and free text.',
      },
      items: [
        {
          no: '01',
          title: 'Extraction repeated per project',
          text: 'Even large hospitals with data infrastructure assign specialists to extract and process data for every research project. Requests take months to fulfil, and one hospital needed two years and four months to build its unstructured-data platform.',
        },
        {
          no: '02',
          title: 'The hard part comes after OCR',
          text: 'Character recognition is already a solved, commercial technology. What follows is the problem: a systolic blood-pressure value landing in the diastolic field is a cross-field error that character recognition alone will never catch.',
        },
        {
          no: '03',
          title: 'Data that cannot be used',
          text: 'About 80% of the EMR generated in Korean hospitals is unstructured free text. Records trapped in documents cannot feed EMR, research or AI as they are.',
        },
      ],
    },
    solution: {
      eyebrow: 'MediPipe',
      title: 'Data conversion that\nruns inside the hospital',
      lead: 'MediPipe is designed to process data on hospital infrastructure instead of sending it to an external cloud. We are validating document conversion and clinician review in the field, then expanding external-product and EMR integrations in stages.',
      workflowLabel: 'How MediPipe works',
      workflow: [
        { no: '01', title: 'Collect', text: 'MediPipe accepts device output and scanned reports, with coverage expanding to EMR free text and lab registers.' },
        { no: '02', title: 'Convert', text: 'Data is converted into the formats AI, EMR and research require.' },
        { no: '03', title: 'Verify', text: 'A clinician confirms and corrects values and clinical meaning on screen, without writing code.' },
        { no: '04', title: 'Build the asset', text: 'Records are joined per patient, kept inside the hospital and reused by the next AI.' },
      ],
      products: [
        {
          name: 'MediPipe',
          status: 'Flagship · paid engagements and PoCs underway',
          tag: 'Hospital-deployed data infrastructure',
          desc: 'We productized data-cleansing technology from multi-institution research. Recent paid validation at Konyang University Hospital confirmed field value, and non-developers can extract and verify data themselves.',
          points: [
            'Checks cross-field clinical meaning, not just recognized characters',
            'Runs inside the hospital on network-segregated infrastructure',
            'Paid data-cleansing engagement and PoC at Konyang University Hospital · IRB approved',
            '80% stated intent to use in a survey of 5 specialists · in-house nurse validation underway',
            'Patent pending (App. No. 10-2025-0166208)',
          ],
        },
        {
          name: 'DeepBreath pulmonary prediction AI',
          status: 'Long-term pipeline · development and regulatory prep',
          tag: 'Medical AI powered by MediPipe data',
          desc: 'The time-series data MediPipe accumulates powers prediction of pulmonary deterioration trajectories. Clinical and regulatory validation will proceed in stages.',
          points: [
            'Predicts deterioration trajectory from longitudinal test history',
            'Predictive performance validated on 1,106 records from an external hospital (AUROC 0.883)',
            'Longitudinal model C-index 0.907 at a 3-year horizon',
          ],
        },
      ],
    },
    research: {
      eyebrow: 'Business and technical validation',
      title: 'Validated through research\nand paid hospital work',
      lead: 'Paid MediPipe engagements and PoCs demonstrated hospital willingness to pay. Separately, DeepBreath predictive performance was validated on external hospital data.',
      awardsLabel: 'Awards',
      awards: [
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
        { value: 'First revenue', label: 'MediPipe · paid engagement and PoC at Konyang University Hospital' },
        { value: '94.1%', label: 'MediPipe extension case · conversion paths for 20,611 of 21,898 medication records' },
        { value: 'AUROC 0.883', label: 'DeepBreath · external validation at NHIS Ilsan Hospital, n=1,106' },
      ],
      metricsNote: 'The 94.1% figure is conversion-path coverage in a medication-data use case, not document-recognition accuracy. MediPipe and DeepBreath metrics describe different products and use cases.',
      credLabel: 'Research and business',
      credText: 'We translate clinical research experience into software hospitals can use in practice.',
      credPoints: [
        'Multi-institution research across Samsung Medical Center, Incheon National University, Ewha Mokdong and Hallym Chuncheon',
        'Paid data-cleansing engagement and PoC at Konyang University Hospital · IRB approved',
        '15 SCI(E) papers · 8 first-author papers · h-index 8',
        'Hands-on development of an MFDS-approved SaMD · patent filed on multi-agent data cleansing',
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
          year: '2023',
        },
      ],
      papersLink: { label: 'View full publication list', href: PUBLICATIONS_URL },
    },
    advantage: {
      eyebrow: 'Why MediPipe',
      title: 'We go beyond\nreading characters',
      moats: [
        {
          no: '01',
          title: 'Clinical meaning preserved',
          text: 'Values land in the correct clinical field. The product reflects experience cleansing a 30-year, 990K-record pulmonary cohort.',
        },
        {
          no: '02',
          title: 'Clinicians verify it themselves',
          text: 'They confirm and correct the result on screen without writing code. AI identifies each item; a clinician makes the final decision.',
        },
        {
          no: '03',
          title: 'Accumulated per patient episode',
          text: 'Tests and records are joined per patient and kept inside the hospital. Hospital-built AI, purchased AI and approved AI devices all run on top of that layer.',
        },
      ],
      table: {
        title: 'MediPipe differentiation',
        hint: 'Swipe sideways to view the full comparison.',
        cols: ['MediPipe', 'Generic document AI', 'In-house hospital build'],
        rows: [
          { label: 'Purpose', values: ['Turning test results and records into AI data', 'Generic character recognition', 'A data platform per institution'] },
          { label: 'Clinical meaning', values: ['Verified down to cross-field meaning', 'Limited', 'Specialists redeployed per domain'] },
          { label: 'Verification', values: ['Clinician reviews and corrects on screen, no code', 'Automated output as-is', 'Manual review by specialists'] },
          { label: 'Deployment', values: ['On-premise · network-segregated', 'Limited closed-network path', 'Not applicable (self-built)'] },
          { label: 'Accumulation', values: ['Per patient episode, inside the hospital', 'Document-level output', 'Rebuilt for each project'] },
        ],
      },
    },
    market: {
      eyebrow: 'Growth strategy',
      title: 'Organize the data first,\nthen expand into AI',
      lead: 'MediPipe reduces repeated hospital data work and builds a reusable data asset. The same data can support hospital research, external AI tools and future DeepBreath development.',
      panelLabel: 'Business progress',
      panelTitle: 'From multi-institution research to revenue and medical AI',
      items: [
        {
          tier: 'RESEARCH',
          value: '4 institutions',
          label: 'Multi-institution study',
          desc: 'The work began across Samsung Medical Center, Incheon National University, Ewha Mokdong and Hallym Chuncheon.',
        },
        {
          tier: 'NOW',
          value: 'Konyang Univ.',
          label: 'First revenue',
          desc: 'Our first revenue came from a paid data-cleansing engagement and a paid PoC. IRB approval is complete.',
        },
        {
          tier: 'CUSTOMERS',
          value: 'Up to 394*',
          label: 'Two customer groups',
          desc: '66 institutions seeking broader data coverage and 328 general hospitals that need their first data infrastructure. The count is an upper bound before removing overlap.',
        },
        {
          tier: 'PIPELINE',
          value: 'DeepBreath',
          label: 'Long term',
          desc: 'Predictive SaMD development and regulatory preparation continue on MediPipe data.',
        },
      ],
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'From MediPipe\nto DeepBreath',
      phases: [
        {
          period: '2026',
          name: 'MediPipe commercialization',
          items: [
            'Incorporation (Aug 2026)',
            'Paid Konyang University Hospital engagement and PoC · IRB approved',
            'Two Top Excellence Awards at the Lab Startup Competition and Joint Camp',
            'MFDS Article 60 review request (Sep 2026)',
            'Free-text cleansing development complete · in validation',
            'Field-level accuracy benchmark published (Q4)',
            'Ewha Mokdong Hospital integration targeted for 2026',
          ],
        },
        {
          period: '2027',
          name: 'Hospital expansion',
          items: [
            'Scale the external-product and EMR integration API (roadmap stage 3)',
            'Convert more hospitals to paid contracts',
            'Accumulate patient-episode data assets',
            'Begin DeepBreath clinical validation',
          ],
        },
        {
          period: '2028',
          name: 'Predictive AI expansion',
          items: [
            'Deploy BreathYou’s own AI model inside the hospital (roadmap stage 4)',
            'Advance DeepBreath approval',
            'Prepare global regulatory pathways',
          ],
        },
      ],
      global: {
        label: 'Going global',
        text: 'MediPipe references support overseas expansion. We will pursue DeepBreath approval in Korea and abroad.',
      },
    },
    team: {
      eyebrow: 'Team',
      title: 'From the lab\nto the field',
      lead: 'Breath You is a lab-based startup from Sungkyunkwan University. We keep research rigorous and test products and business quickly.',
      members: [
        {
          name: 'Kyung Hyun Lee',
          sub: '이경현',
          photo: '/team/kyunghyun-lee-480.jpg',
          role: 'Co-founder & CEO',
          bio: 'An AI researcher at AITRICS and a PhD student in Digital Health at SAIHST, Sungkyunkwan University, he turns clinical research into products and business.',
          highlights: ['AI Researcher at AITRICS', '8 years in Medical AI', '15 SCI(E) papers · 8 first-author', 'MFDS-approved SaMD experience'],
        },
        {
          name: 'Dayoon Lee',
          sub: '이다윤',
          photo: '/team/dayoon-lee-480.jpg',
          role: 'Co-founder & Chief Quality Officer',
          bio: 'She translates clinical practice into quality and regulatory systems.',
          highlights: ['Clinical insight from nursing', 'Medical-device QA', 'QMS development', 'Regulatory process'],
        },
      ],
      partners: {
        label: 'Collaboration network',
        text: 'We began with multi-institution research. Recent paid validation at Konyang University Hospital moved the work into revenue.',
        items: [
          { name: 'Samsung Medical Center · Allergy', note: 'Advisor-led multi-institution research', featured: false },
          { name: 'Incheon National University', note: 'Multi-institution research', featured: false },
          { name: 'Ewha Womans University Mokdong Hospital', note: 'Multi-institution research', featured: false },
          { name: 'Hallym University Chuncheon Sacred Heart Hospital', note: 'Multi-institution research', featured: false },
          { name: 'Konyang University Hospital', note: 'Recent paid joint validation · initial revenue', featured: true },
        ],
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Take the first step\ntoward usable hospital data',
      lead: 'Talk to us about adopting or validating MediPipe at your hospital or institution. Research collaboration and investor materials are also available.',
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
      tagline: 'Medical-data software deployed inside the hospital · MediPipe',
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
