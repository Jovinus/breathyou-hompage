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
      title: '브레스유 | MediPipe 병원 의료데이터 AX',
      description:
        'MediPipe는 병원의 종이·PDF 의료문서를 2초 만에 구조화해 EMR·연구·AI에 연결하는 의료데이터 AX 솔루션입니다. 건양대학교병원과 협업하며 초기 매출을 만들었습니다.',
    },
    nav: {
      links: [
        { label: '솔루션', href: '#solution' },
        { label: '검증', href: '#research' },
        { label: '성장 전략', href: '#company' },
        { label: '팀', href: '#team' },
      ],
      cta: 'PoC 상담',
    },
    hero: {
      badge: '병원 의료데이터 AX · MediPipe',
      title: '병원 문서를\n데이터 자산으로',
      lead: 'MediPipe는 병원의 종이·PDF 의료문서를 2초 만에 구조화해 EMR·연구·AI에 연결합니다. 초기 매출을 만들고 건양대학교병원과 현장 협업을 진행하고 있으며, 그 데이터 기반 위에서 DeepBreath 개발과 인허가 준비를 병행합니다.',
      primaryCta: 'MediPipe 도입 상담',
      secondaryCta: '작동 방식 보기',
      stats: [
        { value: '3분 → 2초', label: '폐기능 결과지 1장 처리 시간' },
        { value: '99%', label: 'MediPipe OCR·NLP 정제 정확도' },
        { value: '초기 매출', label: 'MediPipe 사업화 검증' },
        { value: '건양대병원', label: '공식 연구협력 진행' },
      ],
      visual: {
        label: 'MediPipe 의료데이터 AX',
        live: '주력 제품',
        input: '폐기능검사 PDF',
        inputMeta: '종이·PDF 결과지 입력',
        processing: 'OCR·NLP 인식·검증',
        processingMeta: '수작업 3분 → 자동화 2초',
        output: '구조화 PFT 데이터',
        outputMeta: 'EMR·연구·AI 활용 준비',
        outputValue: '99% 검증',
        explain: 'DeepBreath를 포함한 의료 AI의 데이터 기반',
      },
    },
    problem: {
      eyebrow: '병원 AX의 시작점',
      title: 'AI 이전에,\n데이터부터 막혀 있습니다',
      trigger: {
        label: '현장의 병목',
        text: '폐기능검사 결과는 여전히 종이와 PDF로 쌓이고, 의료진은 한 장씩 직접 입력합니다. 문자를 읽는 것만으로는 부족합니다. 수치와 임상 맥락을 정확히 구조화해야 EMR과 연구, 의료 AI가 실제로 작동합니다.',
      },
      items: [
        {
          no: '01',
          title: '반복되는 수작업',
          text: '결과지 한 장을 옮기는 데 약 3분이 걸립니다. 검사량이 늘수록 의료진의 단순 입력 업무와 오류 가능성도 함께 증가합니다.',
        },
        {
          no: '02',
          title: '일반 OCR의 한계',
          text: '의료 약어, 표 구조, 단위와 참조값까지 이해해야 합니다. 범용 OCR만으로는 병원이 신뢰할 수 있는 데이터 품질을 만들기 어렵습니다.',
        },
        {
          no: '03',
          title: '활용되지 못하는 데이터',
          text: '문서에 갇힌 결과는 EMR 연동, 임상 연구, 경영 분석과 의료 AI 학습으로 이어지지 못합니다. AX는 데이터 전환에서 시작해야 합니다.',
        },
      ],
    },
    solution: {
      eyebrow: 'MediPipe',
      title: '의료문서를 바꾸는\n현장형 AX',
      lead: 'MediPipe는 브레스유의 현재 주력 사업입니다. 의료문서 정제 자동화로 초기 매출을 만들었고 건양대학교병원과 현장 검증을 진행하고 있습니다. DeepBreath는 MediPipe가 축적하는 고품질 데이터 위에서 개발과 인허가를 병행합니다.',
      workflowLabel: '폐기능 데이터 처리 과정',
      workflow: [
        { no: '01', title: '문서 수집', text: '병원에 쌓인 종이·PDF 폐기능검사 결과를 불러옵니다.' },
        { no: '02', title: '인식·검증', text: 'OCR과 의료 NLP가 수치·단위·표 구조를 인식하고 검증합니다.' },
        { no: '03', title: '업무 연결', text: '표준화된 데이터를 EMR, 연구와 의료 AI에 바로 연결합니다.' },
      ],
      products: [
        {
          name: 'MediPipe',
          status: '주력 제품 · 초기 매출 발생',
          tag: '병원 의료문서 AX',
          desc: '멀티에이전트 OCR과 의료 NLP로 종이·PDF 폐기능 결과지를 구조화 데이터로 전환합니다. 1장당 3분 걸리던 수작업을 2초로 줄이고, 흩어진 문서를 EMR·연구·AI에 활용할 수 있는 데이터 자산으로 바꿉니다. 초기 매출을 만들었으며 건양대학교병원과 협업 검증을 진행 중입니다.',
          points: [
            'OCR + NLP 정확도 99%',
            '1장당 3분 → 2초 (98.9% 단축)',
            '건양대학교병원 협업 검증',
            'EMR 자동 연동',
            '특허 출원 (출원번호 10-2025-0166208)',
          ],
        },
        {
          name: 'DeepBreath CDSS',
          status: '중장기 파이프라인 · 개발·인허가 준비',
          tag: 'MediPipe 데이터 기반 SaMD',
          desc: 'MediPipe가 만드는 고품질 폐기능 데이터를 기반으로 5년 후 악화 궤적을 예측하는 의료 AI입니다. 의료기기 인허가에 필요한 시간을 고려해 MediPipe 사업과 병행 개발하며, 임상·규제 검증을 단계적으로 준비합니다.',
          points: [
            '5년 후 악화 궤적 예측',
            'Red·Orange·Green 신호등 자동 분류',
            'SHAP 기반 설명 리포트 — 판단 근거 시각화',
            '판독 속도 4배 향상',
          ],
        },
      ],
    },
    research: {
      eyebrow: '사업·기술 검증',
      title: '현장에서 시작된\n검증',
      lead: 'MediPipe는 초기 매출과 병원 협업으로 사업성을 확인했고, 브레스유의 의료 AI 기술은 논문과 학회 발표로 검증을 이어가고 있습니다.',
      metrics: [
        { value: '정확도 99%', label: 'MediPipe OCR·의료 NLP 정제 성능' },
        { value: '98.9% 단축', label: '결과지 1장 처리 시간 · 3분에서 2초' },
        { value: 'AUROC 0.890–0.950', label: 'DeepBreath 기반 예측 모델 연구 성능' },
      ],
      credLabel: '실행력',
      credText:
        'MediPipe는 1차 PoC를 넘어 초기 매출을 만들었으며, 건양대학교병원과 정식 연구협력 아래 현장 검증을 진행하고 있습니다. 대표 이경현은 Medical AI 8년차 연구자로 SCI(E) 논문 15편과 SaMD 개발·검증 경험을 보유하고 있습니다.',
      papersTitle: '대표 논문',
      papers: [
        {
          title:
            'Deep learning models for acute kidney injury prediction: multi-center external validation',
          venue: 'npj Digital Medicine (IF 15.1)',
          year: '2026',
        },
        {
          title:
            'Separate and Joint Associations of Cardiorespiratory Fitness and Healthy Vascular Aging with Subclinical Atherosclerosis',
          venue: 'Hypertension (IF 10.5)',
          year: '2022',
        },
        {
          title:
            'Novel AI-Based Technology to Diagnose Asthma Using Methacholine Challenge Tests',
          venue: 'Allergy, Asthma & Immunology Research (IF 4.7)',
          year: '2024',
        },
      ],
      papersLink: { label: '전체 논문 목록 보기', href: PUBLICATIONS_URL },
    },
    advantage: {
      eyebrow: '왜 MediPipe인가',
      title: '병원 AX에 필요한\n세 가지 실행력',
      moats: [
        {
          no: '01',
          title: '의료 도메인 정제',
          text: '단순 문자 인식을 넘어 폐기능 수치, 단위, 표 구조와 임상 맥락을 함께 구조화합니다. 30년·100만 건 코호트 정제 경험이 제품에 반영되어 있습니다.',
        },
        {
          no: '02',
          title: '현장 사업화',
          text: 'PoC에 머물지 않고 초기 매출을 만들었으며, 건양대학교병원과 실제 의료데이터를 기반으로 협업 검증을 진행하고 있습니다.',
        },
        {
          no: '03',
          title: 'AI로 이어지는 확장성',
          text: 'MediPipe로 문서를 데이터 자산으로 전환한 뒤 EMR, 연구 분석과 DeepBreath 예측 의료 AI까지 하나의 데이터 흐름으로 확장합니다.',
        },
      ],
      table: {
        title: 'MediPipe 경쟁력',
        cols: ['MediPipe', '범용 OCR·Document AI', '수작업 입력·외주'],
        rows: [
          { label: '목적', values: ['병원 의료문서 AX', '범용 문자·문서 인식', '단순 전산 입력'] },
          { label: '의료 맥락', values: ['폐기능 도메인 특화', '제한적', '담당자 경험 의존'] },
          { label: '정제 성능', values: ['OCR·NLP 99%', '문서 유형별 편차', '휴먼 에러 가능'] },
          { label: '처리 속도', values: ['1장 2초', '후처리 필요', '1장 약 3분'] },
          { label: '확장성', values: ['EMR·연구·AI 연동', '별도 시스템 개발', '데이터 활용 제한'] },
        ],
      },
    },
    market: {
      eyebrow: '성장 전략',
      title: 'MediPipe로 진입해\nDeepBreath로 확장합니다',
      lead: '빠르게 도입 가능한 병원 AX로 현장과 매출을 확보하고, 축적되는 고품질 데이터를 기반으로 예측 의료 AI와 글로벌 시장으로 확장합니다.',
      panelLabel: '사업 진행 현황',
      panelTitle: '매출 검증에서 의료 AI 플랫폼까지',
      items: [
        {
          tier: 'NOW',
          value: '초기 매출 발생',
          label: '사업화',
          desc: 'MediPipe PoC를 넘어 실제 고객 가치와 지불 의사를 검증했습니다.',
        },
        {
          tier: 'COLLAB',
          value: '건양대병원',
          label: '현장 검증',
          desc: '정식 연구협력을 기반으로 MediPipe와 폐기능 데이터 기술을 검증합니다.',
        },
        {
          tier: 'SCALE',
          value: '연 142만 건',
          label: '확장 기회',
          desc: '국가검진 확대에 따라 증가하는 폐기능검사 데이터 처리 수요입니다.',
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
      title: 'MediPipe → DeepBreath\n3단계 성장',
      phases: [
        {
          period: '2026',
          name: 'AX 사업화',
          items: [
            '법인 설립 (2026.08)',
            'MediPipe 초기 매출 발생',
            '건양대학교병원 협업 검증',
            'MediPipe 정식 출시',
          ],
        },
        {
          period: '2027',
          name: '병원 확장',
          items: [
            'MediPipe 병원 도입 확대',
            'EMR 연동·문서 영역 확장',
            '폐기능 데이터 자산 축적',
            'DeepBreath 임상·인허가 준비',
          ],
        },
        {
          period: '2028',
          name: 'SaMD 확장',
          items: ['DeepBreath 품목허가 추진', '본격 임상 운영', '글로벌 인허가 준비'],
        },
      ],
      global: {
        label: '글로벌 진출',
        text: 'MediPipe의 병원 AX 레퍼런스를 기반으로 해외 의료기관 진출을 준비하고, DeepBreath의 국내 인허가와 CE·FDA 준비를 단계적으로 병행합니다.',
      },
    },
    team: {
      eyebrow: '팀',
      title: '임상·AI·규제를\n직접 잇는 팀',
      members: [
        {
          name: '이경현',
          sub: 'Kyung Hyun Lee',
          photo: '/team/kyunghyun-lee-480.jpg',
          role: '공동창업자 · 대표 (CEO)',
          bio: '성균관대학교 SAIHST 디지털헬스학과 박사과정. Medical AI 8년차 연구자로, AITRICS에서 식약처 승인 심정지 예측 AI 의료기기를 비롯한 SaMD 개발·검증을 수행했습니다. SCI(E) 논문 15편(1저자 8편), h-index 8. 임상 문제 발견부터 AI 솔루션 설계, 규제 진입까지 전 과정을 직접 수행하는 풀스택 창업자입니다.',
        },
        {
          name: '이다윤',
          sub: 'Dayoon Lee',
          photo: '',
          role: '공동창업자 · 최고품질책임자 (CQO)',
          bio: '간호학 배경의 최고품질책임자(CQO). 의료기기 품질보증(QA)과 품질경영시스템(QMS), 인허가 프로세스를 담당하며, 임상 현장의 관점에서 제품의 안전성과 신뢰성을 책임집니다.',
        },
      ],
      partners: {
        label: '협력 네트워크',
        text: '브레스유는 건양대학교병원(Konyang University Hospital)과 정식 연구협력 계약을 체결하고, MediPipe와 폐기능 궤적 예측 모델을 건양대학교병원 자료로 검증하고 있습니다. 또한 삼성서울병원, 한림대학교 춘천성심병원, 이대목동병원 등 의료기관과 협력하고 있습니다.',
      },
    },
    contact: {
      eyebrow: '문의',
      title: 'MediPipe로\n병원 AX를 시작하세요',
      lead: '의료문서 자동화와 데이터 자산화가 필요한 병원·기관의 도입 및 PoC 문의를 기다립니다. 연구협력과 투자자·파트너용 상세 자료(IR)도 문의 후 개별 전달해 드립니다.',
      directLabel: '이메일로 바로 문의',
      directNote: '제품 도입 가능성과 임상·연구 협력 범위를 함께 검토합니다.',
      form: {
        name: '이름',
        org: '소속 (병원·기관·투자사)',
        type: '문의 유형',
        types: ['MediPipe 도입·AX 협업', '연구협력 문의', '투자·기타 문의'],
        message: '문의 내용',
        submit: '메일 앱에서 보내기',
        helper: '버튼을 누르면 입력한 내용이 담긴 이메일 작성 창이 열립니다.',
        namePlaceholder: '홍길동',
        orgPlaceholder: '○○병원 / ○○투자',
        messagePlaceholder: '문의하실 내용을 적어주세요.',
      },
    },
    footer: {
      tagline: '병원 의료데이터 AX · MediPipe',
      legalLabels: {
        ceo: '대표',
        founded: '설립',
        address: '주소',
        bizRegNo: '사업자등록번호',
      },
      rights: '© 2026 브레스유 (주). All rights reserved.',
      disclaimer:
        '브레스유 (주)는 창업중심대학 성균관대학교의 2026년 실험실 창업 동아리로 선정된 법인입니다. 대표 이경현은 ㈜AITRICS에 재직 중이며, 브레스유의 모든 사업 활동은 AITRICS의 업무와 무관하게 독립적으로 수행됩니다.',
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
      title: 'Breath You | MediPipe Healthcare Data AX',
      description:
        'MediPipe transforms hospital paper and PDF records into structured data in two seconds, ready for EMR, research and AI. Breath You has generated initial revenue and is collaborating with Konyang University Hospital.',
    },
    nav: {
      links: [
        { label: 'Solution', href: '#solution' },
        { label: 'Research', href: '#research' },
        { label: 'Growth', href: '#company' },
        { label: 'Team', href: '#team' },
      ],
      cta: 'Request a PoC',
    },
    hero: {
      badge: 'Healthcare Data AX · MediPipe',
      title: 'Turn hospital documents\ninto data assets',
      lead: 'MediPipe structures hospital paper and PDF records in two seconds and connects them to EMR, research and AI. We have generated initial revenue and are collaborating with Konyang University Hospital, while developing DeepBreath and preparing its regulatory pathway in parallel.',
      primaryCta: 'Discuss MediPipe adoption',
      secondaryCta: 'See how it works',
      stats: [
        { value: '3 min → 2 sec', label: 'Processing time per PFT record' },
        { value: '99%', label: 'MediPipe OCR + NLP accuracy' },
        { value: 'Revenue', label: 'Initial commercialization validated' },
        { value: 'Konyang Univ.', label: 'Formal hospital collaboration' },
      ],
      visual: {
        label: 'MediPipe healthcare data AX',
        live: 'Flagship product',
        input: 'Pulmonary-test PDF',
        inputMeta: 'Paper and PDF results',
        processing: 'OCR + NLP validation',
        processingMeta: '3 minutes manual → 2 seconds',
        output: 'Structured PFT data',
        outputMeta: 'Ready for EMR, research and AI',
        outputValue: '99% validated',
        explain: 'The data foundation for medical AI, including DeepBreath',
      },
    },
    problem: {
      eyebrow: 'Where hospital AX begins',
      title: 'Before AI,\ndata is the bottleneck',
      trigger: {
        label: 'The workflow bottleneck',
        text: 'Pulmonary-test results still accumulate as paper and PDF, forcing clinical staff to re-enter each record manually. Reading characters is not enough: values and clinical context must be structured accurately before EMR, research and medical AI can work.',
      },
      items: [
        {
          no: '01',
          title: 'Repeated manual work',
          text: 'Each result takes about three minutes to enter. As testing volume grows, repetitive work and the risk of input errors grow with it.',
        },
        {
          no: '02',
          title: 'Generic OCR falls short',
          text: 'Medical abbreviations, table structures, units and reference values all require context. Generic OCR cannot reliably produce hospital-grade data.',
        },
        {
          no: '03',
          title: 'Data that cannot be used',
          text: 'Results trapped in documents cannot flow into EMR, clinical research, operational analytics or medical-AI training. AX must begin with data transformation.',
        },
      ],
    },
    solution: {
      eyebrow: 'MediPipe',
      title: 'Practical AX for\nmedical documents',
      lead: 'MediPipe is Breath You’s flagship business today. It has generated initial revenue from medical-document automation and is undergoing field validation with Konyang University Hospital. DeepBreath development and regulatory preparation continue in parallel on the high-quality data foundation MediPipe creates.',
      workflowLabel: 'Pulmonary data workflow',
      workflow: [
        { no: '01', title: 'Collect documents', text: 'Bring in pulmonary-test results stored as paper or PDF.' },
        { no: '02', title: 'Recognize and validate', text: 'OCR and medical NLP identify and validate values, units and table structures.' },
        { no: '03', title: 'Connect workflows', text: 'Standardized data flows directly into EMR, research and medical AI.' },
      ],
      products: [
        {
          name: 'MediPipe',
          status: 'Flagship · initial revenue generated',
          tag: 'Healthcare document AX',
          desc: 'Multi-agent OCR and medical NLP convert paper and PDF pulmonary results into structured data, cutting a three-minute manual task to two seconds. It turns scattered documents into assets ready for EMR, research and AI. MediPipe has generated initial revenue and is being validated in collaboration with Konyang University Hospital.',
          points: [
            'OCR + NLP accuracy of 99%',
            '3 min → 2 sec per page (98.9% faster)',
            'Validation with Konyang University Hospital',
            'Automatic EMR integration',
            'Patent pending (App. No. 10-2025-0166208)',
          ],
        },
        {
          name: 'DeepBreath CDSS',
          status: 'Long-term pipeline · development and regulatory prep',
          tag: 'MediPipe data-powered SaMD',
          desc: 'A medical AI that predicts five-year deterioration trajectories on top of the high-quality pulmonary data created by MediPipe. Given the time required for medical-device approval, we are developing it alongside the MediPipe business and preparing clinical and regulatory validation step by step.',
          points: [
            'Predicts a 5-year deterioration trajectory',
            'Automatic Red / Orange / Green triage',
            'SHAP-based explainable reports',
            '4× faster reading',
          ],
        },
      ],
    },
    research: {
      eyebrow: 'Business and technical validation',
      title: 'Validation that started\nin the field',
      lead: 'MediPipe has demonstrated commercial value through initial revenue and hospital collaboration, while Breath You’s medical-AI capabilities continue to be validated through publications and conferences.',
      metrics: [
        { value: '99% accuracy', label: 'MediPipe OCR and medical-NLP cleansing performance' },
        { value: '98.9% faster', label: 'Per-record processing time · 3 minutes to 2 seconds' },
        { value: 'AUROC 0.890–0.950', label: 'Research performance of DeepBreath-related prediction models' },
      ],
      credLabel: 'Execution',
      credText:
        'MediPipe has progressed beyond its first PoC to generate initial revenue and is being validated under a formal research collaboration with Konyang University Hospital. CEO Kyung Hyun Lee brings eight years of medical-AI experience, 15 SCI(E) papers, and hands-on SaMD development and validation experience.',
      papersTitle: 'Selected publications',
      papers: [
        {
          title:
            'Deep learning models for acute kidney injury prediction: multi-center external validation',
          venue: 'npj Digital Medicine (IF 15.1)',
          year: '2026',
        },
        {
          title:
            'Separate and Joint Associations of Cardiorespiratory Fitness and Healthy Vascular Aging with Subclinical Atherosclerosis',
          venue: 'Hypertension (IF 10.5)',
          year: '2022',
        },
        {
          title:
            'Novel AI-Based Technology to Diagnose Asthma Using Methacholine Challenge Tests',
          venue: 'Allergy, Asthma & Immunology Research (IF 4.7)',
          year: '2024',
        },
      ],
      papersLink: { label: 'View full publication list', href: PUBLICATIONS_URL },
    },
    advantage: {
      eyebrow: 'Why MediPipe',
      title: 'Three capabilities\nhospital AX requires',
      moats: [
        {
          no: '01',
          title: 'Medical-domain cleansing',
          text: 'Beyond character recognition, MediPipe structures pulmonary values, units, table layouts and clinical context. Experience cleansing a 30-year, 1M-record cohort is embedded in the product.',
        },
        {
          no: '02',
          title: 'Field commercialization',
          text: 'MediPipe has moved beyond PoC to initial revenue and is undergoing collaborative validation with Konyang University Hospital using real clinical data.',
        },
        {
          no: '03',
          title: 'An expansion path to AI',
          text: 'After MediPipe turns documents into data assets, the same flow extends into EMR, research analytics and the DeepBreath predictive medical-AI pipeline.',
        },
      ],
      table: {
        title: 'MediPipe differentiation',
        cols: ['MediPipe', 'Generic OCR / Document AI', 'Manual entry / outsourcing'],
        rows: [
          { label: 'Purpose', values: ['Healthcare document AX', 'Generic character recognition', 'Basic data entry'] },
          { label: 'Medical context', values: ['Pulmonary-domain specific', 'Limited', 'Depends on operator experience'] },
          { label: 'Cleansing quality', values: ['OCR + NLP 99%', 'Varies by document type', 'Human-error risk'] },
          { label: 'Processing speed', values: ['2 seconds per page', 'Post-processing required', 'About 3 minutes per page'] },
          { label: 'Extensibility', values: ['EMR, research and AI', 'Requires separate development', 'Limited data reuse'] },
        ],
      },
    },
    market: {
      eyebrow: 'Growth strategy',
      title: 'Enter with MediPipe,\nexpand with DeepBreath',
      lead: 'We secure clinical workflows and revenue with rapidly deployable hospital AX, then expand into predictive medical AI and global markets on the high-quality data we accumulate.',
      panelLabel: 'Business progress',
      panelTitle: 'From revenue validation to a medical-AI platform',
      items: [
        {
          tier: 'NOW',
          value: 'Initial revenue',
          label: 'Commercialization',
          desc: 'MediPipe has moved beyond PoC to validate customer value and willingness to pay.',
        },
        {
          tier: 'COLLAB',
          value: 'Konyang Univ.',
          label: 'Field validation',
          desc: 'Formal research collaboration validates MediPipe and pulmonary-data technology.',
        },
        {
          tier: 'SCALE',
          value: '1.42M / year',
          label: 'Expansion opportunity',
          desc: 'Growing pulmonary-test data demand created by Korea’s screening expansion.',
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
      title: 'MediPipe → DeepBreath\nin three stages',
      phases: [
        {
          period: '2026',
          name: 'AX commercialization',
          items: [
            'Incorporation (Aug 2026)',
            'Initial MediPipe revenue',
            'Validation with Konyang University Hospital',
            'MediPipe official launch',
          ],
        },
        {
          period: '2027',
          name: 'Hospital expansion',
          items: [
            'Expand MediPipe hospital adoption',
            'Extend EMR integration and document coverage',
            'Accumulate pulmonary data assets',
            'Prepare DeepBreath clinical and regulatory work',
          ],
        },
        {
          period: '2028',
          name: 'SaMD expansion',
          items: ['Advance DeepBreath approval', 'Full clinical operation', 'Prepare global regulatory pathways'],
        },
      ],
      global: {
        label: 'Going global',
        text: 'We will use MediPipe’s hospital-AX references to prepare for overseas clinical adoption while advancing DeepBreath’s Korean approval and global CE and FDA pathways step by step.',
      },
    },
    team: {
      eyebrow: 'Team',
      title: 'A team bridging\nclinic, AI and regulation',
      members: [
        {
          name: 'Kyung Hyun Lee',
          sub: '이경현',
          photo: '/team/kyunghyun-lee-480.jpg',
          role: 'Co-founder & CEO',
          bio: 'PhD student in Digital Health at SAIHST, Sungkyunkwan University. An 8-year medical-AI researcher who led SaMD development and validation at AITRICS — including an MFDS-approved cardiac-arrest prediction device. 15 SCI(E) papers (first author on 8), h-index 8. A full-stack founder who personally covers everything from clinical problem discovery to AI design and regulatory entry.',
        },
        {
          name: 'Dayoon Lee',
          sub: '이다윤',
          photo: '',
          role: 'Co-founder & Chief Quality Officer',
          bio: 'Chief Quality Officer with a nursing background. She owns medical-device quality assurance (QA), the quality management system (QMS), and regulatory processes, taking responsibility for product safety and reliability from a clinical-field perspective.',
        },
      ],
      partners: {
        label: 'Collaboration network',
        text: 'Breath You has signed a formal research collaboration agreement with Konyang University Hospital and is validating both MediPipe and its pulmonary-trajectory prediction model with Konyang University Hospital data. We also collaborate with Samsung Medical Center, Hallym University Chuncheon Sacred Heart Hospital, and Ewha Womans University Mokdong Hospital.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start hospital AX\nwith MediPipe',
      lead: 'We welcome adoption and PoC inquiries from hospitals and institutions that need medical-document automation and data assetization. Research collaboration and detailed investor or partner materials are also available upon request.',
      directLabel: 'Email us directly',
      directNote: 'We review product adoption opportunities and clinical or research collaborations together.',
      form: {
        name: 'Name',
        org: 'Organization (hospital, institution, investor)',
        type: 'Inquiry type',
        types: ['MediPipe adoption / AX', 'Research collaboration', 'Investment / other'],
        message: 'Message',
        submit: 'Open email app',
        helper: 'The button opens your email app with the details you entered.',
        namePlaceholder: 'Jane Doe',
        orgPlaceholder: 'Hospital / Fund',
        messagePlaceholder: 'Tell us about your inquiry.',
      },
    },
    footer: {
      tagline: 'Healthcare Data AX · MediPipe',
      legalLabels: {
        ceo: 'CEO',
        founded: 'Founded',
        address: 'Address',
        bizRegNo: 'Business reg. no.',
      },
      rights: '© 2026 BreathYou Co., Ltd. All rights reserved.',
      disclaimer:
        'BreathYou Co., Ltd. is an incorporated company selected as a 2026 lab-based startup club at Sungkyunkwan University under Korea’s Startup-Centered University program. CEO Kyung Hyun Lee is currently employed at AITRICS; all of Breath You’s business activities are conducted independently of, and unrelated to, his work at AITRICS.',
    },
  },
} as const;

export type Lang = keyof typeof content;
export type Content = (typeof content)[Lang];
