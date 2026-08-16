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
        'MediPipe는 병원의 종이·PDF 의료문서를 2초 만에 구조화합니다. 건양대학교병원 유상 검증 연구에서 첫 매출을 만들었습니다.',
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
      badge: 'LAB-TO-MARKET · 병원 의료데이터 AX',
      title: '병원 문서를\n데이터 자산으로',
      lead: 'MediPipe는 병원 문서를 2초 만에 구조화합니다. 건양대학교병원 유상 검증에서 첫 매출을 만들었습니다.',
      primaryCta: 'MediPipe 도입 상담',
      secondaryCta: '작동 방식 보기',
      note: '현재 MediPipe에 집중합니다. DeepBreath 개발과 인허가 준비도 병행합니다.',
      stats: [
        { value: '3분 → 2초', label: '폐기능 결과지 1장 처리 시간' },
        { value: '99%', label: 'MediPipe OCR·NLP 정제 정확도' },
        { value: '초기 매출', label: '건양대학교병원 유상 검증 연구' },
        { value: '다기관 협력', label: '병원·대학 교수진 연구 네트워크' },
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
        explain: 'DeepBreath를 위한 데이터 기반',
      },
    },
    problem: {
      eyebrow: '병원 AX의 시작점',
      title: 'AI 이전에,\n데이터부터 막혀 있습니다',
      trigger: {
        label: '현장의 병목',
        text: '폐기능검사 결과는 종이와 PDF로 쌓입니다. 의료진은 이를 직접 입력합니다. EMR·연구·AI에 쓰려면 정확한 구조화가 필요합니다.',
      },
      items: [
        {
          no: '01',
          title: '반복되는 수작업',
          text: '결과지 한 장을 옮기는 데 약 3분이 걸립니다. 검사량이 늘면 입력 업무와 오류 위험도 커집니다.',
        },
        {
          no: '02',
          title: '일반 OCR의 한계',
          text: '의료 약어·표·단위·참조값에는 맥락이 필요합니다. 범용 OCR만으로는 병원 수준의 품질을 확보하기 어렵습니다.',
        },
        {
          no: '03',
          title: '활용되지 못하는 데이터',
          text: '문서에 갇힌 결과는 EMR·연구·분석에 쓰이지 못합니다. 병원 AX는 데이터 전환에서 시작합니다.',
        },
      ],
    },
    solution: {
      eyebrow: 'MediPipe',
      title: '의료문서를 바꾸는\n현장형 AX',
      lead: '연구실 기술을 병원 업무에 적용했습니다. 유상 검증을 거쳐 사업화하고 있습니다.',
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
          desc: 'OCR과 의료 NLP로 폐기능 결과지를 구조화합니다. 건양대학교병원 유상 검증 연구에서 현장 가치를 확인했습니다.',
          points: [
            'OCR + NLP 정확도 99%',
            '1장당 3분 → 2초 (98.9% 단축)',
            '건양대학교병원 유상 공동 검증 연구',
            'EMR 자동 연동',
            '특허 출원 (출원번호 10-2025-0166208)',
          ],
        },
        {
          name: 'DeepBreath CDSS',
          status: '중장기 파이프라인 · 개발·인허가 준비',
          tag: 'MediPipe 데이터 기반 SaMD',
          desc: 'MediPipe가 정제한 데이터로 5년 후 악화 궤적을 예측합니다. 임상·인허가 검증을 단계적으로 준비합니다.',
          points: [
            '5년 후 악화 궤적 예측',
            'Red·Orange·Green 신호등 자동 분류',
            '판독 속도 4배 향상',
          ],
        },
      ],
    },
    research: {
      eyebrow: '사업·기술 검증',
      title: '연구로 증명하고,\n매출로 확인했습니다',
      lead: '논문으로 기술을 검증했습니다. 병원에서는 비용 절감과 지불 의사를 확인했습니다.',
      metrics: [
        { value: '정확도 99%', label: 'MediPipe OCR·의료 NLP 정제 성능' },
        { value: '98.9% 단축', label: '결과지 1장 처리 시간 · 3분에서 2초' },
        { value: 'AUROC 0.890–0.950', label: 'DeepBreath 기반 예측 모델 연구 성능' },
      ],
      credLabel: 'Research × Business',
      credText: '연구는 엄밀하게, 사업은 빠르게 실행합니다.',
      credPoints: [
        '건양대학교병원 유상 공동 검증 연구',
        '삼성서울병원 알레르기내과 지도교수 연구 네트워크',
        'SCI(E) 논문 15편 · 1저자 8편 · h-index 8',
        '식약처 승인 SaMD 개발·검증 경험',
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
      eyebrow: '왜 MediPipe인가',
      title: '연구가 제품이 되는\n세 가지 이유',
      moats: [
        {
          no: '01',
          title: '의료 도메인 정제',
          text: '폐기능 수치·단위·표·임상 맥락을 함께 구조화합니다. 30년·100만 건 코호트 정제 경험을 제품에 반영했습니다.',
        },
        {
          no: '02',
          title: '현장 사업화',
          text: '건양대학교병원 공동 검증에서 첫 유상 매출을 만들었습니다. 연구와 사업성을 한 현장에서 검증했습니다.',
        },
        {
          no: '03',
          title: 'AI로 이어지는 확장성',
          text: '문서를 데이터 자산으로 바꿉니다. 이후 EMR·연구·DeepBreath로 확장합니다.',
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
      lead: 'MediPipe로 병원 현장과 매출을 확보합니다. 축적된 데이터로 예측 AI와 글로벌 시장에 확장합니다.',
      panelLabel: '사업 진행 현황',
      panelTitle: '매출 검증에서 의료 AI 플랫폼까지',
      items: [
        {
          tier: 'NOW',
          value: '건양대병원',
          label: '초기 매출',
          desc: '공동 검증 연구에서 첫 유상 매출과 현장 가치를 확인했습니다.',
        },
        {
          tier: 'COLLAB',
          value: '다기관 네트워크',
          label: '연구 협력',
          desc: '삼성서울병원·인천대학교·이대목동병원·춘천성심병원 교수진과 협력합니다.',
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
            '건양대학교병원 유상 공동 검증 연구',
            '다기관 교수진 연구 네트워크 구축',
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
          bio: '임상 문제를 연구합니다. 그 결과를 제품과 사업으로 연결합니다.',
          highlights: ['Medical AI 8년', 'SCI(E) 15편 · 1저자 8편', 'h-index 8', '식약처 승인 SaMD 개발 경험'],
        },
        {
          name: '이다윤',
          sub: 'Dayoon Lee',
          photo: '',
          role: '공동창업자 · 최고품질책임자 (CQO)',
          bio: '임상 현장의 언어를 품질과 규제 체계로 연결합니다.',
          highlights: ['간호학 기반 임상 이해', '의료기기 QA', 'QMS 체계 구축', '인허가 프로세스'],
        },
      ],
      partners: {
        label: '협력 네트워크',
        text: '첫 유상 검증에서 다기관 교수진 연구 네트워크로 확장하고 있습니다.',
        items: [
          { name: '건양대학교병원', note: '유상 공동 검증 연구 · 초기 매출' },
          { name: '삼성서울병원 알레르기내과', note: '지도교수 연구 네트워크 기반 협력' },
          { name: '인천대학교', note: '교수진 연구 협력' },
          { name: '이대목동병원', note: '교수진 연구 협력' },
          { name: '한림대학교 춘천성심병원', note: '교수진 연구 협력' },
        ],
      },
    },
    contact: {
      eyebrow: '문의',
      title: 'MediPipe로\n병원 AX를 시작하세요',
      lead: '병원·기관의 MediPipe 도입과 PoC 문의를 기다립니다. 연구협력·투자 관련 자료도 요청하실 수 있습니다.',
      directLabel: '이메일로 바로 문의',
      directNote: '제품 도입과 임상·연구 협력 범위를 검토합니다.',
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
      title: 'Breath You | MediPipe Healthcare Data AX',
      description:
        'MediPipe structures hospital paper and PDF records in two seconds. Paid validation research with Konyang University Hospital generated our first revenue.',
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
      badge: 'LAB-TO-MARKET · Healthcare Data AX',
      title: 'Turn hospital documents\ninto data assets',
      lead: 'MediPipe structures hospital documents in two seconds. Paid validation at Konyang University Hospital generated our first revenue.',
      primaryCta: 'Discuss MediPipe adoption',
      secondaryCta: 'See how it works',
      note: 'MediPipe is our focus today. DeepBreath continues in parallel with clinical and regulatory preparation.',
      stats: [
        { value: '3 min → 2 sec', label: 'Processing time per PFT record' },
        { value: '99%', label: 'MediPipe OCR + NLP accuracy' },
        { value: 'Initial revenue', label: 'Paid validation research with Konyang University Hospital' },
        { value: 'Multi-institution', label: 'Hospital and university faculty network' },
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
        explain: 'The data foundation for DeepBreath',
      },
    },
    problem: {
      eyebrow: 'Where hospital AX begins',
      title: 'Before AI,\ndata is the bottleneck',
      trigger: {
        label: 'The workflow bottleneck',
        text: 'Pulmonary-test results still accumulate as paper and PDF. Clinical staff enter them manually. EMR, research and AI need structured data.',
      },
      items: [
        {
          no: '01',
          title: 'Repeated manual work',
          text: 'Each result takes about three minutes to enter. More tests mean more repetitive work and input risk.',
        },
        {
          no: '02',
          title: 'Generic OCR falls short',
          text: 'Medical abbreviations, tables, units and reference values require context. Generic OCR falls short of hospital-grade quality.',
        },
        {
          no: '03',
          title: 'Data that cannot be used',
          text: 'Results trapped in documents cannot support EMR, research or analytics. Hospital AX begins with data transformation.',
        },
      ],
    },
    solution: {
      eyebrow: 'MediPipe',
      title: 'Practical AX for\nmedical documents',
      lead: 'We applied lab technology to hospital work. Paid validation led to commercialization.',
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
          desc: 'OCR and medical NLP structure pulmonary records. Paid validation at Konyang University Hospital confirmed field value.',
          points: [
            'OCR + NLP accuracy of 99%',
            '3 min → 2 sec per page (98.9% faster)',
            'Paid joint validation research with Konyang University Hospital',
            'Automatic EMR integration',
            'Patent pending (App. No. 10-2025-0166208)',
          ],
        },
        {
          name: 'DeepBreath CDSS',
          status: 'Long-term pipeline · development and regulatory prep',
          tag: 'MediPipe data-powered SaMD',
          desc: 'MediPipe data powers five-year deterioration prediction. Clinical and regulatory validation will proceed in stages.',
          points: [
            'Predicts a 5-year deterioration trajectory',
            'Automatic Red / Orange / Green triage',
            '4× faster reading',
          ],
        },
      ],
    },
    research: {
      eyebrow: 'Business and technical validation',
      title: 'Proven in research,\nvalidated in revenue',
      lead: 'Publications validated the technology. Hospital work confirmed cost savings and willingness to pay.',
      metrics: [
        { value: '99% accuracy', label: 'MediPipe OCR and medical-NLP cleansing performance' },
        { value: '98.9% faster', label: 'Per-record processing time · 3 minutes to 2 seconds' },
        { value: 'AUROC 0.890–0.950', label: 'Research performance of DeepBreath-related prediction models' },
      ],
      credLabel: 'Research × Business',
      credText: 'Rigorous in research. Fast in execution.',
      credPoints: [
        'Paid joint validation research with Konyang University Hospital',
        'Advisor network in Samsung Medical Center’s Division of Allergy',
        '15 SCI(E) papers · 8 first-author papers · h-index 8',
        'Hands-on development of an MFDS-approved SaMD',
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
      title: 'Three reasons\nresearch becomes product',
      moats: [
        {
          no: '01',
          title: 'Medical-domain cleansing',
          text: 'MediPipe structures pulmonary values, units, tables and clinical context. The product reflects experience cleansing a 30-year, 1M-record cohort.',
        },
        {
          no: '02',
          title: 'Field commercialization',
          text: 'Konyang University Hospital validation generated our first paid revenue. Research and commercial value were tested in one setting.',
        },
        {
          no: '03',
          title: 'An expansion path to AI',
          text: 'MediPipe turns documents into data assets. The same flow extends to EMR, research and DeepBreath.',
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
      lead: 'MediPipe secures hospital workflows and early revenue. Its data foundation supports predictive AI and global expansion.',
      panelLabel: 'Business progress',
      panelTitle: 'From revenue validation to a medical-AI platform',
      items: [
        {
          tier: 'NOW',
          value: 'Konyang Univ.',
          label: 'Initial revenue',
          desc: 'Joint validation generated MediPipe’s first paid revenue and confirmed field value.',
        },
        {
          tier: 'COLLAB',
          value: 'Multi-institution',
          label: 'Research network',
          desc: 'Faculty collaboration spans Samsung Medical Center, Incheon National University, Ewha Mokdong and Hallym Chuncheon.',
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
            'Paid joint validation research with Konyang University Hospital',
            'Build a multi-institution faculty network',
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
          bio: 'He studies clinical problems. He turns the findings into products and business.',
          highlights: ['8 years in Medical AI', '15 SCI(E) papers · 8 first-author', 'h-index 8', 'MFDS-approved SaMD experience'],
        },
        {
          name: 'Dayoon Lee',
          sub: '이다윤',
          photo: '',
          role: 'Co-founder & Chief Quality Officer',
          bio: 'She translates clinical practice into quality and regulatory systems.',
          highlights: ['Clinical insight from nursing', 'Medical-device QA', 'QMS development', 'Regulatory process'],
        },
      ],
      partners: {
        label: 'Collaboration network',
        text: 'We are expanding from our first paid validation project into a multi-institution faculty research network.',
        items: [
          { name: 'Konyang University Hospital', note: 'Paid joint validation research · initial revenue' },
          { name: 'Samsung Medical Center · Allergy', note: 'Advisor-led research network collaboration' },
          { name: 'Incheon National University', note: 'Faculty research collaboration' },
          { name: 'Ewha Womans University Mokdong Hospital', note: 'Faculty research collaboration' },
          { name: 'Hallym University Chuncheon Sacred Heart Hospital', note: 'Faculty research collaboration' },
        ],
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start hospital AX\nwith MediPipe',
      lead: 'We welcome MediPipe adoption and PoC inquiries. Research and investment materials are available upon request.',
      directLabel: 'Email us directly',
      directNote: 'We review product adoption and clinical or research collaboration.',
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
        'BreathYou Co., Ltd. was selected for Sungkyunkwan University’s 2026 lab-based startup program. CEO Kyung Hyun Lee is employed at AITRICS. Breath You operates independently from AITRICS.',
    },
  },
} as const;

export type Lang = keyof typeof content;
export type Content = (typeof content)[Lang];
