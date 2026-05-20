// 브레스유 홈페이지 콘텐츠 (한국어 / 영어)
// 사업계획서 기반. 매출 목표·자금조달·Exit 등 민감 수치는 의도적으로 제외했습니다.

export const EMAIL = 'lkh256@breathyou.care';
export const PUBLICATIONS_URL = 'https://jovinus.github.io/publications/';

export const content = {
  ko: {
    htmlLang: 'ko',
    altLang: { code: 'EN', href: '/en/' },
    meta: {
      title: '브레스유 (Breath You) | 폐기능 예측 의료 AI',
      description:
        '브레스유는 폐기능검사 데이터를 분석해 5년 후 호흡기 악화를 예측하는 의료 AI 솔루션을 개발합니다. 시계열 예측 CDSS DeepBreath와 의료문서 정제 자동화 MediPipe.',
    },
    nav: {
      links: [
        { label: '문제', href: '#problem' },
        { label: '솔루션', href: '#solution' },
        { label: '검증', href: '#research' },
        { label: '강점', href: '#advantage' },
        { label: '시장', href: '#market' },
        { label: '로드맵', href: '#roadmap' },
        { label: '팀', href: '#team' },
      ],
      cta: '문의하기',
    },
    hero: {
      badge: '의료 AI · 폐기능 예측 솔루션',
      title: '침묵의 5년을\n앞당깁니다',
      lead: '브레스유는 폐기능검사 데이터를 분석해 5년 후 호흡기 악화를 예측하는 의료 AI 솔루션을 만듭니다. 2026년 국가검진 확대로 열린 연 142만 건의 시장에서, 환자와 의료진 모두에게 체감 가능한 AI를 제공합니다.',
      primaryCta: '도입·협업·투자 문의',
      secondaryCta: '솔루션 보기',
      stats: [
        { value: '0.890–0.950', label: '예측 모델 AUROC' },
        { value: '99%', label: 'MediPipe 정제 정확도' },
        { value: '100만 건', label: '학습 코호트 (SMC 30년)' },
        { value: '15편', label: 'SCI(E) 논문 · h-index 8' },
      ],
    },
    problem: {
      eyebrow: '왜 지금인가',
      title: '폐건강 시장이\n한 번에 열립니다',
      trigger: {
        label: '2026년 1월 · 국가검진 확대',
        text: '국가 주도로 만 56–66세 약 178만 명을 대상으로 폐기능검사가 확대됩니다. 수검률 80%를 가정하면 연 142만 건의 신규 판독 수요 — 현재 전국 판독 인력으로는 처리할 수 없는 규모입니다.',
      },
      items: [
        {
          no: '01',
          title: '판독의 한계',
          text: '당일 폐기능 수치 한 장으로 5년 후를 맞춰야 합니다. 스냅샷 진단으로는 만성폐쇄성폐질환·천식 고위험군을 조기에 가려낼 수 없습니다.',
        },
        {
          no: '02',
          title: '데이터 인프라 부재',
          text: '의료 데이터의 80–90%가 비정형입니다. 폐기능 결과는 종이·PDF로만 남아, AI가 학습할 정제된 데이터가 없습니다.',
        },
        {
          no: '03',
          title: '환자 관점 부재',
          text: '환자는 자신의 5년 후를 알 방법이 없습니다. 진단율은 2.5%, 10명 중 9명이 모른 채 폐기능의 절반을 잃습니다.',
        },
      ],
    },
    solution: {
      eyebrow: '솔루션',
      title: '두 개의 트랙,\n하나의 흐름',
      lead: '지금 브레스유는 병원의 비정형 데이터를 자산으로 바꾸는 MediPipe로 의료 현장에 들어가 초기 수익을 만들고, 그 정제된 데이터 위에서 5년 후를 예측하는 DeepBreath CDSS를 준비합니다.',
      products: [
        {
          name: 'MediPipe',
          status: '주력 솔루션 · 출시 임박',
          tag: '병원 데이터 자산화 솔루션',
          desc: '멀티에이전트 OCR과 NLP로 종이·PDF 폐기능 결과지를 구조화 데이터로 변환합니다. 1장당 3분 걸리던 수작업을 2초로 줄이고, 흩어져 있던 병원의 비정형 데이터를 활용 가능한 자산으로 바꿉니다. 1차 개념검증(PoC)을 완료하고 2개월 내 초기 제품 출시를 앞둔, 브레스유의 현재 주력 솔루션입니다.',
          points: [
            'OCR + NLP 정확도 99%',
            '1장당 3분 → 2초 (98.9% 단축)',
            'EMR 자동 연동',
            '특허 보유 (KR 10-2025-0166208)',
          ],
        },
        {
          name: 'DeepBreath CDSS',
          status: '개발·인허가 진행 중',
          tag: 'AI 예측 의료기기 (SaMD)',
          desc: '삼성서울병원 30년·100만 건 폐기능 코호트로 학습한 시계열 예측 모델입니다. 당일 검사만으로 5년 후 악화 궤적을 예측하고, 신호등 분류와 설명 리포트로 의료진과 환자 모두가 이해할 수 있게 전달합니다.',
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
      eyebrow: '검증된 성능',
      title: '데이터로\n검증된 기술',
      lead: '브레스유의 기술은 학술지 게재와 학회 발표로 검증되었으며, 협력 병원과 임상 검증을 이어가고 있습니다.',
      metrics: [
        { value: 'AUROC 0.950', label: '기관지 유발검사 진단 모델 · AAIR 2024 게재' },
        { value: 'AUROC 0.890', label: '폐기능검사 확장 예측 모델 · EAACI 2025 발표' },
        { value: '사용 의향 80%', label: '전문의 5인 사용성 평가' },
      ],
      credText:
        '대표 이경현은 Medical AI 8년차 연구자로, SCI(E) 논문 15편(1저자 8편), h-index 8, 누적 인용 400회 이상을 보유하고 있습니다.',
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
      eyebrow: '경쟁 우위',
      title: '경쟁사가\n따라올 수 없는 3가지',
      moats: [
        {
          no: '01',
          title: '데이터 해자',
          text: '삼성서울병원 30년·100만 건 코호트를 최초로 정제한 팀이 곧 자사 기술팀입니다. 같은 데이터를 확보해도 정제 노하우 없이는 활용할 수 없습니다.',
        },
        {
          no: '02',
          title: '규제 선행',
          text: '대표가 SaMD 2건의 식약처 인허가·임상시험을 직접 수행했습니다. QMS·GMP 체계 구축으로 경쟁사 대비 1.5–2년 앞서 있습니다.',
        },
        {
          no: '03',
          title: '이중 안전장치',
          text: '의료 AI 실패의 70%는 잘못된 입력에서 비롯됩니다. MediPipe가 입력을, SHAP XAI가 출력 근거를 검증합니다. 입력·출력을 모두 갖춘 의료 AI 기업은 국내외에 전무합니다.',
        },
      ],
      table: {
        title: '경쟁 구도',
        cols: ['브레스유', '국내 폐기능 측정기기 업체', '해외 폐기능 앱 서비스'],
        rows: [
          { label: '핵심 역량', values: ['AI 예측 의료기기 (SaMD)', '폐기능 측정 하드웨어', '간이 폐기능 앱'] },
          { label: '분석 방식', values: ['3–10년 시계열 궤적', '당일 단면 측정', '단기 추이 (수개월)'] },
          { label: '예후 예측', values: ['가능 (5년 후 궤적)', '불가', '제한적'] },
          { label: '진단 성능', values: ['AUROC 0.890–0.950', 'AI 미보유', '일부 AI (단일 시점)'] },
          { label: '데이터 자산', values: ['SMC 30년 100만 건', '자체 측정값', '해외 데이터 중심'] },
        ],
      },
    },
    market: {
      eyebrow: '시장',
      title: '거대한 시장,\n명확한 진입점',
      lead: '2026년 국가검진 확대로 폐건강 시장이 한 번에 열립니다. 브레스유는 가장 검증된 거점에서 시작합니다.',
      items: [
        {
          tier: 'TAM',
          value: '약 65조 원',
          label: 'Global',
          desc: 'WHO 기준 전 세계 만성폐쇄성폐질환 환자 3.92억 명 규모.',
        },
        {
          tier: 'SAM',
          value: '600억 원+',
          label: '국내',
          desc: '국가검진 폐기능검사 연 142만 건을 기반으로 한 국내 유효 시장.',
        },
        {
          tier: 'SOM',
          value: '200억 원',
          label: '3년 내',
          desc: '상급종합병원을 중심으로 3년 내 확보 가능한 시장.',
        },
        {
          tier: 'LAM',
          value: '6.25억 원',
          label: '첫 진입 거점',
          desc: '삼성서울병원 건강검진센터 — 30년 데이터 학습 기관이 곧 첫 도입 기관.',
        },
      ],
    },
    roadmap: {
      eyebrow: '로드맵',
      title: '2026–2028\n3단계 전략',
      phases: [
        {
          period: '2026',
          name: '진입기',
          items: [
            'MediPipe 정식 출시',
            'DeepBreath GMP·제조소 허가',
            'IEC 62366 사용적합성 평가',
          ],
        },
        {
          period: '2027',
          name: '검증기',
          items: [
            'DeepBreath 품목허가 신청·심사',
            '연구용 제품 출시',
            '상급종합병원 도입 준비',
          ],
        },
        {
          period: '2028',
          name: '확장기',
          items: ['품목허가 완료', '본격 임상 운영', '유럽 시장 진출 (CE)'],
        },
      ],
      global: {
        label: '글로벌 진출',
        text: 'ERS 2026 바르셀로나 발표를 발판으로 2027년 EU CE 마킹, 2028년 미국 FDA 510(k) 진입을 준비합니다.',
      },
    },
    team: {
      eyebrow: '팀',
      title: '임상·AI·규제를\n직접 잇는 팀',
      members: [
        {
          name: '이경현',
          sub: 'Kyung Hyun Lee',
          photo: '/team/kyunghyun-lee.jpg',
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
      title: '함께\n시작하시겠어요?',
      lead: '도입·협업·투자 문의를 남겨주시면 검토 후 연락드리겠습니다. 투자자·파트너용 상세 자료(IR)는 문의 후 개별 전달해 드립니다.',
      directLabel: '이메일로 바로 문의',
      form: {
        name: '이름',
        org: '소속 (병원·기관·투자사)',
        type: '문의 유형',
        types: ['도입·협업 문의', '투자 문의', '채용·기타'],
        message: '문의 내용',
        submit: '이메일로 보내기',
        namePlaceholder: '홍길동',
        orgPlaceholder: '○○병원 / ○○투자',
        messagePlaceholder: '문의하실 내용을 적어주세요.',
      },
    },
    footer: {
      tagline: '폐기능 예측 의료 AI',
      rights: '© 2026 브레스유 (Breath You). All rights reserved.',
      disclaimer:
        '브레스유는 창업중심대학 성균관대학교의 2026년 실험실 창업 동아리로 선정되어 활동하고 있습니다. 대표 이경현은 ㈜AITRICS에 재직 중이며, 브레스유의 모든 사업 활동은 AITRICS의 업무와 무관하게 독립적으로 수행됩니다.',
    },
  },

  en: {
    htmlLang: 'en',
    altLang: { code: 'KO', href: '/' },
    meta: {
      title: 'Breath You | Predictive Pulmonary AI',
      description:
        'Breath You builds medical AI that predicts respiratory deterioration five years ahead from pulmonary function test data — DeepBreath, a time-series prediction CDSS, and MediPipe, automated medical-record cleansing.',
    },
    nav: {
      links: [
        { label: 'Problem', href: '#problem' },
        { label: 'Solution', href: '#solution' },
        { label: 'Research', href: '#research' },
        { label: 'Advantage', href: '#advantage' },
        { label: 'Market', href: '#market' },
        { label: 'Roadmap', href: '#roadmap' },
        { label: 'Team', href: '#team' },
      ],
      cta: 'Contact',
    },
    hero: {
      badge: 'Medical AI · Predictive Pulmonary Solutions',
      title: 'Bringing the\nsilent 5 years forward',
      lead: 'Breath You builds medical AI that analyzes pulmonary function test data to predict respiratory deterioration five years ahead. As Korea’s 2026 national screening expansion opens a market of 1.42M reads per year, we deliver AI that both clinicians and patients can feel.',
      primaryCta: 'Partner with us',
      secondaryCta: 'See solutions',
      stats: [
        { value: '0.890–0.950', label: 'Prediction model AUROC' },
        { value: '99%', label: 'MediPipe cleansing accuracy' },
        { value: '1M records', label: 'Training cohort (SMC, 30 yrs)' },
        { value: '15 papers', label: 'SCI(E) publications · h-index 8' },
      ],
    },
    problem: {
      eyebrow: 'Why now',
      title: 'A respiratory-health\nmarket opens at once',
      trigger: {
        label: 'Jan 2026 · National screening expansion',
        text: 'Korea is expanding pulmonary function testing to roughly 1.78M citizens aged 56–66. At an 80% participation rate, that is 1.42M new reads per year — a volume the current nationwide reading workforce cannot handle.',
      },
      items: [
        {
          no: '01',
          title: 'Limits of single-point reading',
          text: 'A single day’s pulmonary measurement must somehow predict five years ahead. Snapshot diagnosis cannot identify high-risk COPD and asthma patients early.',
        },
        {
          no: '02',
          title: 'No data infrastructure',
          text: '80–90% of medical data is unstructured. Pulmonary results survive only as paper and PDF, leaving no clean data for AI to learn from.',
        },
        {
          no: '03',
          title: 'No patient-side channel',
          text: 'Patients have no way to know their own 5-year outlook. Diagnosis rates sit at 2.5% — 9 in 10 lose half their lung function unaware.',
        },
      ],
    },
    solution: {
      eyebrow: 'Solution',
      title: 'Two tracks,\none pipeline',
      lead: 'Today, Breath You enters the clinical field with MediPipe — turning hospitals’ unstructured data into an asset and generating early revenue — while preparing DeepBreath CDSS to predict five years ahead on top of that cleansed data.',
      products: [
        {
          name: 'MediPipe',
          status: 'Flagship · launching soon',
          tag: 'Hospital data-asset solution',
          desc: 'Multi-agent OCR and NLP convert paper and PDF pulmonary results into structured data — cutting a 3-minute manual task to 2 seconds and turning a hospital’s scattered unstructured data into a usable asset. Having completed its first proof of concept, it is Breath You’s current flagship solution, with an initial product launch due within two months.',
          points: [
            'OCR + NLP accuracy of 99%',
            '3 min → 2 sec per page (98.9% faster)',
            'Automatic EMR integration',
            'Patented (KR 10-2025-0166208)',
          ],
        },
        {
          name: 'DeepBreath CDSS',
          status: 'In development & regulatory review',
          tag: 'AI prediction medical device (SaMD)',
          desc: 'A time-series prediction model trained on Samsung Medical Center’s 30-year, 1M-record pulmonary cohort. From a single test it forecasts a 5-year deterioration trajectory, delivered with traffic-light triage and explainable reports for clinicians and patients alike.',
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
      eyebrow: 'Validated',
      title: 'Technology\nproven by data',
      lead: 'Breath You’s technology is validated through peer-reviewed publications and conference presentations, with clinical validation ongoing at partner hospitals.',
      metrics: [
        { value: 'AUROC 0.950', label: 'Bronchial challenge diagnostic model · published in AAIR 2024' },
        { value: 'AUROC 0.890', label: 'Pulmonary-test prediction model · presented at EAACI 2025' },
        { value: '80% intent-to-use', label: 'Usability evaluation, 5 specialists' },
      ],
      credText:
        'CEO Kyung Hyun Lee is an 8-year medical-AI researcher with 15 SCI(E) papers (first author on 8), an h-index of 8, and over 400 cumulative citations.',
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
      eyebrow: 'Advantage',
      title: 'Three things\ncompetitors cannot copy',
      moats: [
        {
          no: '01',
          title: 'Data moat',
          text: 'The team that first cleansed Samsung Medical Center’s 30-year, 1M-record cohort is our own engineering team. Even with the same data, no one can use it without the cleansing know-how.',
        },
        {
          no: '02',
          title: 'Regulatory head start',
          text: 'Our CEO personally led MFDS approval and clinical trials for two SaMDs. With QMS and GMP systems in place, we are 1.5–2 years ahead of competitors.',
        },
        {
          no: '03',
          title: 'Dual safeguard',
          text: '70% of medical-AI failures stem from bad input. MediPipe validates the input; SHAP XAI validates the output rationale. No other medical-AI company — in Korea or abroad — covers both.',
        },
      ],
      table: {
        title: 'Competitive landscape',
        cols: ['Breath You', 'Domestic pulmonary-device makers', 'Overseas pulmonary apps'],
        rows: [
          { label: 'Core capability', values: ['AI prediction SaMD', 'Pulmonary-measurement hardware', 'Simple pulmonary apps'] },
          { label: 'Analysis method', values: ['3–10 yr time-series trajectory', 'Single-day cross-section', 'Short-term trend (months)'] },
          { label: 'Prognosis prediction', values: ['Yes (5-year trajectory)', 'Not possible', 'Limited'] },
          { label: 'Diagnostic performance', values: ['AUROC 0.890–0.950', 'No AI', 'Some AI (single point)'] },
          { label: 'Data asset', values: ['SMC 1M records over 30 yrs', 'Own measurements', 'Overseas-data centric'] },
        ],
      },
    },
    market: {
      eyebrow: 'Market',
      title: 'A vast market,\na clear entry point',
      lead: 'Korea’s 2026 national screening expansion opens the respiratory-health market at once. Breath You starts from the most validated foothold.',
      items: [
        {
          tier: 'TAM',
          value: '~KRW 65T',
          label: 'Global',
          desc: 'WHO estimates 392M COPD patients worldwide.',
        },
        {
          tier: 'SAM',
          value: 'KRW 60B+',
          label: 'Korea',
          desc: 'Korean serviceable market built on 1.42M national-screening reads per year.',
        },
        {
          tier: 'SOM',
          value: 'KRW 20B',
          label: 'Within 3 yrs',
          desc: 'Obtainable within three years, centered on tertiary general hospitals.',
        },
        {
          tier: 'LAM',
          value: 'KRW 625M',
          label: 'First foothold',
          desc: 'Samsung Medical Center’s health-screening center — the 30-year data partner is also the first adopter.',
        },
      ],
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: '2026–2028\nin three stages',
      phases: [
        {
          period: '2026',
          name: 'Entry',
          items: [
            'MediPipe official launch',
            'DeepBreath GMP & manufacturing license',
            'IEC 62366 usability evaluation',
          ],
        },
        {
          period: '2027',
          name: 'Validation',
          items: [
            'DeepBreath device approval filing & review',
            'Research-use product launch',
            'Tertiary-hospital adoption prep',
          ],
        },
        {
          period: '2028',
          name: 'Expansion',
          items: ['Device approval complete', 'Full clinical operation', 'European market entry (CE)'],
        },
      ],
      global: {
        label: 'Going global',
        text: 'Building on a presentation at ERS 2026 in Barcelona, we are preparing EU CE marking in 2027 and a US FDA 510(k) submission in 2028.',
      },
    },
    team: {
      eyebrow: 'Team',
      title: 'A team bridging\nclinic, AI and regulation',
      members: [
        {
          name: 'Kyung Hyun Lee',
          sub: '이경현',
          photo: '/team/kyunghyun-lee.jpg',
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
      title: 'Ready to\nstart together?',
      lead: 'Leave an inquiry about adoption, collaboration, or investment and we will get back to you. Detailed materials for investors and partners (IR) are shared individually upon request.',
      directLabel: 'Email us directly',
      form: {
        name: 'Name',
        org: 'Organization (hospital, institution, investor)',
        type: 'Inquiry type',
        types: ['Adoption / collaboration', 'Investment', 'Hiring / other'],
        message: 'Message',
        submit: 'Send via email',
        namePlaceholder: 'Jane Doe',
        orgPlaceholder: 'Hospital / Fund',
        messagePlaceholder: 'Tell us about your inquiry.',
      },
    },
    footer: {
      tagline: 'Predictive pulmonary AI',
      rights: '© 2026 Breath You. All rights reserved.',
      disclaimer:
        'Breath You has been selected as a 2026 lab-based startup club at Sungkyunkwan University under Korea’s Startup-Centered University program. CEO Kyung Hyun Lee is currently employed at AITRICS; all of Breath You’s business activities are conducted independently of, and unrelated to, his work at AITRICS.',
    },
  },
} as const;

export type Lang = keyof typeof content;
export type Content = (typeof content)[Lang];
