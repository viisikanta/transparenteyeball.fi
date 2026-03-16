// ========== GTM READINESS ASSESSMENT ==========
const assessmentSteps = [
  {
    id: 'stage',
    question: 'What stage is your game or app in?',
    hint: 'This helps us tailor recommendations to where you are right now.',
    type: 'radio',
    options: [
      { value: 'pre-production', label: 'Pre-Production', desc: 'Concept phase, early prototyping' },
      { value: 'production', label: 'In Production', desc: 'Building the product, not yet live' },
      { value: 'soft-launch', label: 'Soft Launch', desc: 'Live in limited markets, testing' },
      { value: 'live', label: 'Live / Scaling', desc: 'Globally launched, looking to grow' },
    ]
  },
  {
    id: 'genre',
    question: 'What genre or category best describes your product?',
    hint: 'Benchmarks and strategies vary significantly by category.',
    type: 'radio',
    options: [
      { value: 'casual-puzzle', label: 'Casual / Puzzle' },
      { value: 'kids-educational', label: 'Kids & Educational' },
      { value: 'mid-core', label: 'Mid-Core / Strategy' },
      { value: 'family-entertainment', label: 'Family Entertainment' },
      { value: 'creative-sandbox', label: 'Creative / Sandbox' },
      { value: 'other', label: 'Other' },
    ]
  },
  {
    id: 'monetization',
    question: 'What is your primary monetization model?',
    hint: 'Your model shapes the entire GTM strategy.',
    type: 'radio',
    options: [
      { value: 'subscription', label: 'Subscription', desc: 'Recurring revenue model' },
      { value: 'iap', label: 'In-App Purchases', desc: 'Virtual goods, premium content' },
      { value: 'ads', label: 'Ad-Supported', desc: 'Free with advertising revenue' },
      { value: 'premium', label: 'Premium (Paid)', desc: 'One-time purchase price' },
      { value: 'hybrid', label: 'Hybrid', desc: 'Combination of models' },
    ]
  },
  {
    id: 'audience',
    question: 'Who is your primary target audience?',
    hint: 'Select the audience that drives most of your revenue or engagement.',
    type: 'radio',
    conditional: true,
    options: [
      { value: 'kids-under-6', label: 'Kids Under 6', desc: 'Preschool age, parents decide' },
      { value: 'kids-6-12', label: 'Kids 6-12', desc: 'Some influence on downloads' },
      { value: 'teens', label: 'Teens 13-17', desc: 'Independent downloaders' },
      { value: 'young-adults', label: 'Young Adults 18-34', desc: 'Core mobile gaming demo' },
      { value: 'families', label: 'Families', desc: 'Multi-generational appeal' },
      { value: 'broad', label: 'Broad Audience', desc: 'Mass market appeal' },
    ]
  },
  {
    id: 'challenges',
    question: 'What are your biggest marketing challenges right now?',
    hint: 'Select all that apply. Be honest \u2014 this shapes your recommendations.',
    type: 'checkbox',
    options: [
      { value: 'brand-positioning', label: 'Unclear brand positioning' },
      { value: 'ua-costs', label: 'High user acquisition costs' },
      { value: 'retention', label: 'Poor retention / engagement' },
      { value: 'creative-assets', label: 'Weak creative assets' },
      { value: 'market-fit', label: 'Uncertain product-market fit' },
      { value: 'competition', label: 'Fierce competition in category' },
      { value: 'budget', label: 'Limited marketing budget' },
      { value: 'team', label: 'No dedicated marketing team' },
      { value: 'partnerships', label: 'Need strategic partnerships' },
      { value: 'international', label: 'International expansion' },
    ]
  },
  {
    id: 'assets',
    question: 'What marketing foundations do you already have?',
    hint: 'Check everything you currently have in place.',
    type: 'checkbox',
    twocol: true,
    options: [
      { value: 'brand-positioning', label: 'Brand positioning & strategy' },
      { value: 'narrative', label: 'Narrative / IP strategy' },
      { value: 'creative', label: 'Creative assets & style guide' },
      { value: 'community', label: 'Active community' },
      { value: 'partnerships', label: 'Partnership relationships' },
      { value: 'ua-strategy', label: 'UA strategy & channels' },
      { value: 'analytics', label: 'Analytics & attribution' },
      { value: 'budget-plan', label: 'Marketing budget plan' },
    ]
  },
  {
    id: 'timeline',
    question: 'What is your timeline for the next major milestone?',
    hint: 'When do you need marketing to deliver results?',
    type: 'radio',
    options: [
      { value: 'asap', label: 'ASAP', desc: 'We needed it yesterday' },
      { value: '1-3-months', label: '1-3 Months', desc: 'Near-term launch or push' },
      { value: '3-6-months', label: '3-6 Months', desc: 'Building toward a milestone' },
      { value: '6-12-months', label: '6-12 Months', desc: 'Planning ahead strategically' },
      { value: '12-plus', label: '12+ Months', desc: 'Long-term strategic planning' },
    ]
  },
  {
    id: 'budget',
    question: 'What is your approximate marketing budget range?',
    hint: 'This helps calibrate recommendations to realistic scope.',
    type: 'radio',
    options: [
      { value: 'bootstrap', label: 'Bootstrap', desc: 'Under $10K \u2014 scrappy and smart' },
      { value: 'starter', label: 'Starter', desc: '$10K \u2013 $50K' },
      { value: 'growth', label: 'Growth', desc: '$50K \u2013 $200K' },
      { value: 'scale', label: 'Scale', desc: '$200K \u2013 $1M' },
      { value: 'enterprise', label: 'Enterprise', desc: '$1M+' },
    ]
  },
  {
    id: 'success',
    question: 'How do you primarily measure success?',
    hint: 'What is the single most important metric for your business right now?',
    type: 'radio',
    options: [
      { value: 'downloads', label: 'Downloads / Installs' },
      { value: 'revenue', label: 'Revenue / ARPU' },
      { value: 'retention', label: 'Retention / Engagement' },
      { value: 'brand-awareness', label: 'Brand Awareness' },
      { value: 'ltv-cac', label: 'LTV:CAC Ratio' },
      { value: 'market-share', label: 'Market Share' },
    ]
  },
  {
    id: 'contact-info',
    question: 'Where should we send your GTM brief?',
    hint: 'We\'ll also send a copy to discuss in our initial call.',
    type: 'contact',
  }
];

let currentStep = 0;
let answers = {};

function renderStep(step) {
  const s = assessmentSteps[step];
  const card = document.getElementById('assessmentCard');

  // Update progress
  const progress = ((step) / assessmentSteps.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('stepCount').textContent = `Question ${step + 1} of ${assessmentSteps.length}`;

  let optionsHTML = '';

  if (s.type === 'radio') {
    optionsHTML = `<div class="options-grid">${s.options.map(o => `
      <label class="option-item${answers[s.id] === o.value ? ' selected' : ''}" data-value="${o.value}" onclick="selectOption(this, '${s.id}', '${o.value}', false)">
        <div class="option-check"><div class="option-check-inner"></div></div>
        <div class="option-text">
          <span class="option-label">${o.label}</span>
          ${o.desc ? `<span class="option-desc">${o.desc}</span>` : ''}
        </div>
      </label>
    `).join('')}</div>`;
  } else if (s.type === 'checkbox') {
    const selected = answers[s.id] || [];
    optionsHTML = `<div class="options-grid${s.twocol ? ' two-col' : ''}">${s.options.map(o => `
      <label class="option-item checkbox${selected.includes(o.value) ? ' selected' : ''}" data-value="${o.value}" onclick="selectOption(this, '${s.id}', '${o.value}', true)">
        <div class="option-check">
          <div class="option-check-inner">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0e0c0a" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
        <div class="option-text">
          <span class="option-label">${o.label}</span>
          ${o.desc ? `<span class="option-desc">${o.desc}</span>` : ''}
        </div>
      </label>
    `).join('')}</div>`;
  } else if (s.type === 'contact') {
    const c = answers['contact-info'] || {};
    optionsHTML = `
      <div style="display:grid;gap:16px;">
        <div class="form-group" style="margin:0">
          <label class="form-label">Your Name</label>
          <input type="text" class="form-input" id="assess-name" placeholder="Full name" value="${c.name || ''}" onchange="updateContactField('name', this.value)">
        </div>
        <div class="form-group" style="margin:0">
          <label class="form-label">Email Address</label>
          <input type="email" class="form-input" id="assess-email" placeholder="you@company.com" value="${c.email || ''}" onchange="updateContactField('email', this.value)">
        </div>
        <div class="form-group" style="margin:0">
          <label class="form-label">Company / Game Name</label>
          <input type="text" class="form-input" id="assess-company" placeholder="Your company or game" value="${c.company || ''}" onchange="updateContactField('company', this.value)">
        </div>
      </div>
    `;
  }

  const isLast = step === assessmentSteps.length - 1;
  const canProceed = isStepComplete(step);

  card.innerHTML = `
    <div class="step-content active">
      <h3 class="assessment-question">${s.question}</h3>
      <p class="assessment-hint">${s.hint}</p>
      ${optionsHTML}
      <div class="assessment-nav">
        ${step > 0
          ? `<button class="btn-back" onclick="goStep(${step - 1})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back
            </button>`
          : '<div></div>'}
        <button class="btn-next" id="btnNext" onclick="${isLast ? 'generateResults()' : `goStep(${step + 1})`}" ${!canProceed ? 'disabled' : ''}>
          ${isLast ? 'Get My GTM Brief' : 'Continue'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `;
}

function isStepComplete(step) {
  const s = assessmentSteps[step];
  if (s.type === 'radio') return !!answers[s.id];
  if (s.type === 'checkbox') return (answers[s.id] || []).length > 0;
  if (s.type === 'contact') {
    const c = answers['contact-info'] || {};
    return c.name && c.email;
  }
  return true;
}

function selectOption(el, id, value, isMulti) {
  if (isMulti) {
    if (!answers[id]) answers[id] = [];
    const idx = answers[id].indexOf(value);
    if (idx > -1) { answers[id].splice(idx, 1); el.classList.remove('selected'); }
    else { answers[id].push(value); el.classList.add('selected'); }
  } else {
    answers[id] = value;
    el.parentElement.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
    el.classList.add('selected');
  }
  const btn = document.getElementById('btnNext');
  if (btn) btn.disabled = !isStepComplete(currentStep);
}

function updateContactField(field, value) {
  if (!answers['contact-info']) answers['contact-info'] = {};
  answers['contact-info'][field] = value;
  const btn = document.getElementById('btnNext');
  if (btn) btn.disabled = !isStepComplete(currentStep);
}

function goStep(step) {
  currentStep = step;
  renderStep(step);
}

// ========== SCORING ==========
function calculateScore() {
  const assets = answers.assets || [];
  let score = 0;
  score += (assets.length / 8) * 40;
  if (answers.stage === 'live') score += 20;
  else if (answers.stage === 'soft-launch') score += 15;
  else if (answers.stage === 'production') score += 10;
  else score += 5;
  if (answers.budget === 'enterprise') score += 15;
  else if (answers.budget === 'scale') score += 12;
  else if (answers.budget === 'growth') score += 10;
  else if (answers.budget === 'starter') score += 7;
  else score += 3;
  if (answers.timeline === '3-6-months' || answers.timeline === '6-12-months') score += 15;
  else if (answers.timeline === '1-3-months') score += 10;
  else if (answers.timeline === '12-plus') score += 12;
  else score += 5;
  score += Math.max(0, 10 - (answers.challenges || []).length);
  return Math.min(100, Math.round(score));
}

function getReadinessLevel(score) {
  if (score >= 75) return { level: 'High Readiness', desc: 'You have strong foundations in place. Focus on optimization and scaling.' };
  if (score >= 50) return { level: 'Moderate Readiness', desc: 'Good progress, but critical gaps need addressing before you scale.' };
  if (score >= 30) return { level: 'Building Phase', desc: 'Several foundational elements need attention. Strategic planning now will pay dividends.' };
  return { level: 'Early Stage', desc: 'Significant groundwork needed. The good news: getting strategy right now prevents costly pivots later.' };
}

function generateRoadmap() {
  const assets = answers.assets || [];
  const challenges = answers.challenges || [];
  const missingAssets = ['brand-positioning','narrative','creative','community','partnerships','ua-strategy','analytics','budget-plan'].filter(a => !assets.includes(a));
  const phases = [];
  const phaseNames = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'];
  let idx = 0;
  if (missingAssets.includes('brand-positioning') || missingAssets.includes('narrative')) {
    phases.push({ phase: phaseNames[idx++], title: 'Brand & Narrative Foundation', desc: 'Define your positioning, audience personas, and core narrative. This is the bedrock everything else builds on.', categories: ['Idea', 'Planning'] });
  }
  if (missingAssets.includes('creative') || missingAssets.includes('community')) {
    phases.push({ phase: phaseNames[idx++], title: 'Creative Development & Community', desc: 'Build your visual identity system, key art, app store assets, and begin community building.', categories: ['Launch', 'Growth'] });
  }
  if (missingAssets.includes('partnerships') || challenges.includes('partnerships') || challenges.includes('international')) {
    phases.push({ phase: phaseNames[idx++], title: 'Strategic Partnerships & Distribution', desc: 'Identify and secure key partnerships, licensing opportunities, and distribution channels.', categories: ['Distribution', 'Growth'] });
  }
  if (missingAssets.includes('ua-strategy') || missingAssets.includes('analytics') || challenges.includes('ua-costs') || challenges.includes('retention')) {
    phases.push({ phase: phaseNames[idx++], title: 'Growth Engine & Optimization', desc: 'Launch UA campaigns, implement analytics, optimize funnels, and build sustainable growth loops.', categories: ['Acquisition', 'Retention', 'Analytics'] });
  }
  if (phases.length === 0) {
    phases.push({ phase: 'Phase 1', title: 'Optimize & Scale', desc: 'You have strong foundations. Focus on testing, iterating, and scaling what\'s working across all channels.', categories: ['Growth', 'Revenue', 'Analytics'] });
  }
  return phases;
}

function generateRisks() {
  const assets = answers.assets || [];
  const challenges = answers.challenges || [];
  const risks = [];
  if (answers.stage === 'pre-production' && (answers.timeline === 'asap' || answers.timeline === '1-3-months')) {
    risks.push('Aggressive timeline for pre-production stage. Marketing foundations take time to build right.');
  }
  if (answers.budget === 'bootstrap' && challenges.includes('ua-costs')) {
    risks.push('Limited budget combined with UA cost concerns requires creative organic and partnership-driven strategies.');
  }
  if (!assets.includes('brand-positioning') && answers.stage !== 'pre-production') {
    risks.push('No brand positioning in place while already in development. Risk of misaligned marketing when you need to scale.');
  }
  if (challenges.includes('market-fit') && (answers.stage === 'soft-launch' || answers.stage === 'live')) {
    risks.push('Product-market fit uncertainty at your stage is critical. Consider allocating budget to validation before scaling spend.');
  }
  if (!assets.includes('analytics') && (answers.stage === 'soft-launch' || answers.stage === 'live')) {
    risks.push('Missing analytics and attribution means you\'re flying blind. Any marketing spend without measurement is wasted.');
  }
  if (challenges.length >= 5) {
    risks.push('Multiple concurrent challenges suggest a need for prioritized, phased approach rather than trying to solve everything simultaneously.');
  }
  if (answers.audience === 'kids-under-6' && !assets.includes('partnerships')) {
    risks.push('Children\'s products under 6 require parents as gatekeepers. Without partnerships, reaching the right audience is significantly harder.');
  }
  if (risks.length === 0) {
    risks.push('Your setup is relatively strong. Main risk is complacency \u2014 continue testing and adapting as market conditions change.');
  }
  return risks;
}

function getBenchmarks() {
  switch(answers.genre) {
    case 'casual-puzzle': return { cpi: '$0.50-$2.00', d7: '25-35%', arpu: '$0.05-$0.15/day' };
    case 'kids-educational': return { cpi: '$1.50-$4.00', d7: '20-30%', arpu: '$0.03-$0.10/day' };
    case 'mid-core': return { cpi: '$2.00-$8.00', d7: '15-25%', arpu: '$0.10-$0.50/day' };
    case 'family-entertainment': return { cpi: '$1.00-$3.50', d7: '20-35%', arpu: '$0.04-$0.12/day' };
    case 'creative-sandbox': return { cpi: '$1.00-$3.00', d7: '30-45%', arpu: '$0.05-$0.15/day' };
    default: return { cpi: '$1.00-$5.00', d7: '20-30%', arpu: '$0.05-$0.20/day' };
  }
}

function getPackageRecommendation(score) {
  if (score < 35 || answers.stage === 'pre-production') {
    return {
      name: 'Strategic Foundation',
      desc: 'Build the brand, narrative, and GTM framework from the ground up before spending on growth.',
      priorities: ['Brand positioning & audience strategy', 'Narrative framework & IP potential', 'Go-to-market roadmap', 'Creative direction & guidelines', 'Partnership opportunity mapping']
    };
  }
  if (score < 65 || answers.stage === 'production') {
    return {
      name: 'Launch Accelerator',
      desc: 'Close critical gaps and build a launch-ready marketing stack in time for your milestone.',
      priorities: ['Gap analysis & priority action plan', 'Creative asset development', 'UA channel strategy & testing plan', 'Community seeding & partnerships', 'Launch timeline & contingency planning']
    };
  }
  return {
    name: 'Growth Optimizer',
    desc: 'Maximize performance across all channels with an integrated growth strategy.',
    priorities: ['Full-funnel performance audit', 'Creative testing framework', 'Channel mix optimization', 'Retention & engagement strategy', 'Scaling playbook & benchmarking']
  };
}

// ========== RESULTS GENERATION ==========
function generateResults() {
  const score = calculateScore();
  const { level: readinessLevel, desc: readinessDesc } = getReadinessLevel(score);
  const roadmapPhases = generateRoadmap();
  const risks = generateRisks();
  const benchmarks = getBenchmarks();
  const pkg = getPackageRecommendation(score);

  const nextSteps = [
    { title: 'Review This Brief', desc: 'Take a moment to review the analysis and recommendations. A PDF copy is available to download and share with your team.' },
    { title: 'Book a Meeting', desc: 'Let\'s discuss your specific situation, validate these recommendations, and explore how I can help execute.', link: 'https://calendar.app.google/woiGdHQewrKzYjSJ7' },
    { title: 'Receive a Custom Proposal', desc: 'After our call, I\'ll send a tailored proposal with specific scope, timeline, and investment for your engagement.' },
    { title: 'Start Moving', desc: 'We begin with a focused strategy sprint to address your most critical priorities first.' },
  ];

  const container = document.getElementById('resultsContainer');
  container.innerHTML = `
    <div class="results-header">
      <p class="section-label">Your Personalized Brief</p>
      <h2>GTM Readiness Report</h2>
      <p>${answers['contact-info']?.company ? `For ${answers['contact-info'].company}` : ''}</p>
    </div>

    <div class="readiness-score">
      <div class="score-circle">
        <svg viewBox="0 0 120 120">
          <circle class="score-circle-bg" cx="60" cy="60" r="52"/>
          <circle class="score-circle-fill" id="scoreCircle" cx="60" cy="60" r="52"/>
        </svg>
        <span class="score-number" id="scoreNumber">0</span>
      </div>
      <div class="score-details">
        <h3>${readinessLevel}</h3>
        <p>${readinessDesc}</p>
      </div>
    </div>

    <div class="results-section">
      <h3 class="results-section-title"><span>&#9656;</span> Recommended Roadmap</h3>
      <ul class="roadmap-list">
        ${roadmapPhases.map(r => `
          <li class="roadmap-item">
            <span class="roadmap-phase">${r.phase}</span>
            <div class="roadmap-content">
              <h4>${r.title}</h4>
              <p>${r.desc}</p>
              ${r.categories ? `<div class="roadmap-categories">${r.categories.map(c => `<a href="/resources/#${c.toLowerCase()}" class="category-badge">${c}</a>`).join('')}</div>` : ''}
            </div>
          </li>
        `).join('')}
      </ul>
    </div>

    <div class="results-section">
      <h3 class="results-section-title"><span>&#9888;</span> Key Risks to Address</h3>
      ${risks.map(r => `
        <div class="risk-item">
          <span class="risk-icon">&#9679;</span>
          <p>${r}</p>
        </div>
      `).join('')}
    </div>

    <div class="results-section">
      <h3 class="results-section-title"><span>&#9656;</span> Category Benchmarks</h3>
      <div class="benchmark-grid">
        <div class="benchmark-item">
          <div class="benchmark-value">${benchmarks.cpi}</div>
          <div class="benchmark-label">Avg. CPI Range</div>
        </div>
        <div class="benchmark-item">
          <div class="benchmark-value">${benchmarks.d7}</div>
          <div class="benchmark-label">Day 7 Retention</div>
        </div>
        <div class="benchmark-item">
          <div class="benchmark-value">${benchmarks.arpu}</div>
          <div class="benchmark-label">ARPU Range</div>
        </div>
      </div>
    </div>

    <div class="results-section saas-teaser-section">
      <h3 class="results-section-title"><span>&#9656;</span> Full GTM Dashboard</h3>
      <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:20px;">See your complete GTM profile with detailed channel recommendations, competitive positioning, and weekly action plans.</p>
      <div class="saas-teaser">
        <div class="saas-teaser-blur">
          <div class="saas-teaser-row">
            <div class="saas-teaser-card">
              <div class="saas-teaser-label">Channel Mix Score</div>
              <div class="saas-teaser-value">73/100</div>
              <div class="saas-teaser-bar"><div class="saas-teaser-bar-fill" style="width:73%"></div></div>
            </div>
            <div class="saas-teaser-card">
              <div class="saas-teaser-label">Creative Readiness</div>
              <div class="saas-teaser-value">58/100</div>
              <div class="saas-teaser-bar"><div class="saas-teaser-bar-fill" style="width:58%"></div></div>
            </div>
            <div class="saas-teaser-card">
              <div class="saas-teaser-label">Market Timing</div>
              <div class="saas-teaser-value">High</div>
              <div class="saas-teaser-bar"><div class="saas-teaser-bar-fill" style="width:85%"></div></div>
            </div>
          </div>
          <div class="saas-teaser-row">
            <div class="saas-teaser-card wide">
              <div class="saas-teaser-label">Recommended UA Channels</div>
              <div class="saas-teaser-channels">
                <span>Apple Search Ads</span><span>TikTok</span><span>Influencer</span><span>Cross-promo</span><span>ASO</span>
              </div>
            </div>
            <div class="saas-teaser-card">
              <div class="saas-teaser-label">Predicted CPI</div>
              <div class="saas-teaser-value">$1.85</div>
            </div>
          </div>
          <div class="saas-teaser-row">
            <div class="saas-teaser-card wide">
              <div class="saas-teaser-label">12-Week Action Plan</div>
              <div class="saas-teaser-timeline">
                <div class="saas-teaser-week"><span>W1-2</span> Brand audit & positioning</div>
                <div class="saas-teaser-week"><span>W3-4</span> Creative asset development</div>
                <div class="saas-teaser-week"><span>W5-8</span> Channel testing & optimization</div>
                <div class="saas-teaser-week"><span>W9-12</span> Scale winners, cut losers</div>
              </div>
            </div>
          </div>
        </div>
        <div class="saas-teaser-overlay">
          <div class="saas-teaser-cta">
            <p style="font-family:var(--font-display);font-size:1.3rem;font-weight:400;margin-bottom:6px;">Unlock your full GTM dashboard</p>
            <p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:16px;">Coming soon &mdash; join the waitlist for early access.</p>
            <a href="/#contact" class="saas-teaser-btn">
              Get Early Access
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="results-section">
      <h3 class="results-section-title"><span>&#9733;</span> Recommended Package</h3>
      <div class="package-card">
        <h4>${pkg.name}</h4>
        <p>${pkg.desc}</p>
        <ul class="package-priorities">
          ${pkg.priorities.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="results-section">
      <h3 class="results-section-title"><span>&#9656;</span> Your Next Steps</h3>
      <ul class="next-steps-list">
        ${nextSteps.map((s, i) => `
          <li class="next-step-item">
            <span class="next-step-num">${i + 1}</span>
            <div>
              <h4>${s.link ? `<a href="${s.link}" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;">${s.title} &rarr;</a>` : s.title}</h4>
              <p>${s.desc}</p>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>

    <div class="results-actions">
      <button class="btn-download" onclick="downloadPDF()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download PDF Brief
      </button>
      <a href="https://calendar.app.google/woiGdHQewrKzYjSJ7" target="_blank" rel="noopener" class="btn-secondary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Let's book a meeting
      </a>
    </div>

    <div class="share-buttons">
      <button class="share-btn" onclick="shareOnTwitter(${score})">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        Share on X
      </button>
      <button class="share-btn" onclick="shareOnLinkedIn(${score})">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        Share on LinkedIn
      </button>
      <button class="share-btn" onclick="copyResultsLink(${score})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        Copy Link
      </button>
    </div>
  `;

  // Show results, hide form
  document.getElementById('assessmentForm').style.display = 'none';
  container.classList.add('active');

  // Update URL with shareable parameters
  const params = new URLSearchParams({
    s: score,
    stage: answers.stage || '',
    genre: answers.genre || '',
  });
  history.replaceState(null, '', `?${params.toString()}#results`);

  // Animate score
  setTimeout(() => {
    const circle = document.getElementById('scoreCircle');
    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (score / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      document.getElementById('scoreNumber').textContent = current;
      if (current >= score) clearInterval(interval);
    }, 20);
  }, 300);

  // Submit to Formspree
  sendAssessmentData(score);

  // Scroll to results
  document.getElementById('assessment').scrollIntoView({ behavior: 'smooth' });

  // Track completion (GA4)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'assessment_complete', { score: score, stage: answers.stage, genre: answers.genre });
  }
}

// ========== EMAIL / DATA CAPTURE ==========
function sendAssessmentData(score) {
  const contact = answers['contact-info'] || {};

  fetch('https://formspree.io/f/mnjgvqed', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _subject: `GTM Assessment: ${contact.company || contact.name || 'New Submission'} (Score: ${score})`,
      name: contact.name || 'N/A',
      email: contact.email || 'N/A',
      company: contact.company || 'N/A',
      score: score,
      stage: answers.stage,
      genre: answers.genre,
      monetization: answers.monetization,
      audience: answers.audience,
      challenges: (answers.challenges || []).join(', '),
      assets: (answers.assets || []).join(', '),
      timeline: answers.timeline,
      budget: answers.budget,
      success_metric: answers.success
    })
  }).catch(() => {
    // Silent fail - don't disrupt user experience
    console.log('Form submission fallback: data not sent to server');
  });
}

// ========== SHARING ==========
function shareOnTwitter(score) {
  const text = encodeURIComponent(`I scored ${score}/100 on the GTM Readiness Assessment for games & apps. Take yours:`);
  const url = encodeURIComponent(window.location.origin + '/assessment/');
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=550,height=420');
}

function shareOnLinkedIn(score) {
  const url = encodeURIComponent(window.location.origin + '/assessment/');
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=550,height=420');
}

function copyResultsLink(score) {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    showToast('Link copied to clipboard!');
  }).catch(() => {
    showToast('Could not copy link');
  });
}

// ========== PDF GENERATION ==========
function downloadPDF() {
  const contact = answers['contact-info'] || {};
  const score = calculateScore();

  const labelMap = {};
  assessmentSteps.forEach(step => {
    if (step.options) {
      step.options.forEach(opt => {
        labelMap[opt.value] = opt.label;
      });
    }
  });

  // Track PDF download (GA4)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'pdf_download', { score: score });
  }

  const pdfContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>GTM Readiness Brief \u2014 ${contact.company || 'Transparent Eyeball'}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Cormorant+SC:wght@400;500;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=JetBrains+Mono:wght@300&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'DM Sans', sans-serif; background: #fff; color: #1a1a1a; padding: 48px; line-height: 1.6; max-width: 800px; margin: 0 auto; font-weight: 300; }
  .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #b08d57; padding-bottom: 24px; margin-bottom: 32px; }
  .logo-area h1 { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 300; }
  .logo-area p { color: #666; font-size: 12px; }
  .brief-for { text-align: right; }
  .brief-for h2 { font-family: 'Cormorant SC', serif; font-size: 14px; color: #666; font-weight: 500; letter-spacing: 0.1em; }
  .brief-for p { font-size: 14px; font-weight: 500; }
  .score-bar { background: #f0f0f0; border-radius: 6px; height: 24px; margin: 16px 0; position: relative; overflow: hidden; }
  .score-fill { height: 100%; background: linear-gradient(90deg, #b08d57, #8b6240); border-radius: 6px; }
  .score-text { display: flex; justify-content: space-between; font-size: 13px; color: #666; }
  .section { margin-bottom: 28px; }
  .section h3 { font-family: 'Cormorant SC', serif; font-size: 16px; font-weight: 500; letter-spacing: 0.1em; margin-bottom: 12px; padding-bottom: 6px; border-bottom: 1px solid #eee; }
  .roadmap-item { display: flex; gap: 16px; margin-bottom: 12px; padding: 12px; background: #fafafa; border-radius: 6px; }
  .phase-label { font-family: 'Cormorant SC', serif; font-weight: 500; font-size: 12px; color: #666; min-width: 60px; letter-spacing: 0.05em; }
  .roadmap-title { font-weight: 500; font-size: 14px; }
  .roadmap-desc { font-size: 13px; color: #555; }
  .risk { padding: 10px 14px; background: #fff5f5; border-left: 3px solid #ff5050; margin-bottom: 8px; font-size: 13px; color: #555; border-radius: 0 6px 6px 0; }
  .benchmarks { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .bench { text-align: center; padding: 16px; background: #fafafa; border-radius: 6px; }
  .bench-value { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 500; color: #1a1a1a; }
  .bench-label { font-size: 11px; color: #888; }
  .package { padding: 20px; border: 2px solid #b08d57; border-radius: 6px; background: #f5f0eb; }
  .package h4 { font-family: 'Cormorant Garamond', serif; font-size: 16px; font-weight: 500; margin-bottom: 4px; }
  .package p { font-size: 13px; color: #555; margin-bottom: 12px; }
  .package li { font-size: 13px; margin-left: 16px; margin-bottom: 4px; }
  .next-step { display: flex; gap: 12px; padding: 10px 0; border-bottom: 1px solid #eee; }
  .step-num { font-family: 'Cormorant Garamond', serif; font-weight: 300; font-size: 16px; color: #b08d57; min-width: 24px; }
  .step-title { font-weight: 500; font-size: 13px; }
  .step-desc { font-size: 12px; color: #666; }
  .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #b08d57; text-align: center; font-size: 12px; color: #888; }
  .footer a { color: #1a1a1a; font-weight: 500; }
  .summary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 20px; font-size: 13px; }
  .summary-item { padding: 8px 12px; background: #fafafa; border-radius: 6px; }
  .summary-label { color: #888; font-size: 11px; }
  @media print { body { padding: 24px; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo-area">
    <h1>&#x25CE; Transparent Eyeball</h1>
    <p>GTM Readiness Brief</p>
  </div>
  <div class="brief-for">
    <h2>Prepared For</h2>
    <p>${contact.name || 'N/A'}</p>
    <p style="color:#666;font-size:12px;">${contact.company || ''}</p>
    <p style="color:#888;font-size:11px;">${new Date().toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'})}</p>
  </div>
</div>

<div class="section">
  <h3>Readiness Score: ${score}/100</h3>
  <div class="score-bar"><div class="score-fill" style="width:${score}%"></div></div>
  <div class="score-text"><span>${score >= 75 ? 'High Readiness' : score >= 50 ? 'Moderate Readiness' : score >= 30 ? 'Building Phase' : 'Early Stage'}</span><span>${score}%</span></div>
</div>

<div class="section">
  <h3>Your Profile</h3>
  <div class="summary-grid">
    <div class="summary-item"><div class="summary-label">Stage</div>${labelMap[answers.stage] || answers.stage}</div>
    <div class="summary-item"><div class="summary-label">Category</div>${labelMap[answers.genre] || answers.genre}</div>
    <div class="summary-item"><div class="summary-label">Monetization</div>${labelMap[answers.monetization] || answers.monetization}</div>
    <div class="summary-item"><div class="summary-label">Audience</div>${labelMap[answers.audience] || answers.audience}</div>
    <div class="summary-item"><div class="summary-label">Timeline</div>${labelMap[answers.timeline] || answers.timeline}</div>
    <div class="summary-item"><div class="summary-label">Budget</div>${labelMap[answers.budget] || answers.budget}</div>
    <div class="summary-item"><div class="summary-label">Success Metric</div>${labelMap[answers.success] || answers.success}</div>
    <div class="summary-item"><div class="summary-label">Challenges</div>${(answers.challenges||[]).map(c=>labelMap[c]||c).join(', ')}</div>
  </div>
</div>

<div class="section" id="pdf-roadmap"></div>
<div class="section" id="pdf-risks"></div>

<div class="section">
  <h3>Category Benchmarks</h3>
  <div class="benchmarks" id="pdf-benchmarks"></div>
</div>

<div class="section" id="pdf-package"></div>
<div class="section" id="pdf-nextsteps"></div>

<div class="footer">
  <p><strong>Transparent Eyeball</strong> \u2014 Full-Stack Marketing Consulting</p>
  <p>hello@transparenteyeball.fi \u2022 www.transparenteyeball.fi</p>
</div>

</body>
</html>`;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(pdfContent);

  // Populate dynamic sections from DOM
  const resultsEl = document.getElementById('resultsContainer');

  let roadmapHTML = '<h3>Recommended Roadmap</h3>';
  roadmapPhases.forEach(r => {
    const catBadges = r.categories ? r.categories.map(c => `<span style="display:inline-block;font-family:'JetBrains Mono',monospace;font-size:10px;padding:2px 8px;border-radius:3px;background:#f5f0eb;color:#6b4226;border:1px solid #e0d5c5;margin-right:4px;">${c}</span>`).join('') : '';
    roadmapHTML += `<div class="roadmap-item"><span class="phase-label">${r.phase}</span><div><div class="roadmap-title">${r.title}</div><div class="roadmap-desc">${r.desc}</div>${catBadges ? `<div style="margin-top:6px;">${catBadges}</div>` : ''}</div></div>`;
  });
  printWindow.document.getElementById('pdf-roadmap').innerHTML = roadmapHTML;

  const riskItems = resultsEl.querySelectorAll('.risk-item p');
  let risksHTML = '<h3>Key Risks</h3>';
  riskItems.forEach(r => { risksHTML += `<div class="risk">${r.textContent}</div>`; });
  printWindow.document.getElementById('pdf-risks').innerHTML = risksHTML;

  const benchItems = resultsEl.querySelectorAll('.benchmark-item');
  let benchHTML = '';
  benchItems.forEach(b => {
    benchHTML += `<div class="bench"><div class="bench-value">${b.querySelector('.benchmark-value').textContent}</div><div class="bench-label">${b.querySelector('.benchmark-label').textContent}</div></div>`;
  });
  printWindow.document.getElementById('pdf-benchmarks').innerHTML = benchHTML;

  const pkgEl = resultsEl.querySelector('.package-card');
  const pkgTitle = pkgEl.querySelector('h4').textContent;
  const pkgDesc = pkgEl.querySelector('p').textContent;
  const pkgItems = pkgEl.querySelectorAll('.package-priorities li');
  let pkgHTML = `<h3>Recommended Package</h3><div class="package"><h4>${pkgTitle}</h4><p>${pkgDesc}</p><ul>`;
  pkgItems.forEach(li => { pkgHTML += `<li>${li.textContent}</li>`; });
  pkgHTML += '</ul></div>';
  printWindow.document.getElementById('pdf-package').innerHTML = pkgHTML;

  const steps = resultsEl.querySelectorAll('.next-step-item');
  let stepsHTML = '<h3>Next Steps</h3>';
  steps.forEach((s, i) => {
    stepsHTML += `<div class="next-step"><span class="step-num">${i+1}</span><div><div class="step-title">${s.querySelector('h4').textContent}</div><div class="step-desc">${s.querySelector('p').textContent}</div></div></div>`;
  });
  printWindow.document.getElementById('pdf-nextsteps').innerHTML = stepsHTML;

  printWindow.document.close();
  setTimeout(() => { printWindow.print(); }, 500);
}

// ========== CHECK FOR SHARED RESULTS ON LOAD ==========
function checkForSharedResults() {
  const params = new URLSearchParams(window.location.search);
  const score = parseInt(params.get('s'));
  if (score && window.location.hash === '#results') {
    // Show a summary view for shared results
    const stage = params.get('stage') || '';
    const genre = params.get('genre') || '';
    const { level, desc } = getReadinessLevel(score);

    const container = document.getElementById('resultsContainer');
    document.getElementById('assessmentForm').style.display = 'none';
    container.classList.add('active');
    container.innerHTML = `
      <div class="results-header">
        <p class="section-label">Shared Result</p>
        <h2>GTM Readiness Score</h2>
      </div>
      <div class="readiness-score">
        <div class="score-circle">
          <svg viewBox="0 0 120 120">
            <circle class="score-circle-bg" cx="60" cy="60" r="52"/>
            <circle class="score-circle-fill" id="scoreCircle" cx="60" cy="60" r="52"/>
          </svg>
          <span class="score-number" id="scoreNumber">0</span>
        </div>
        <div class="score-details">
          <h3>${level}</h3>
          <p>${desc}</p>
        </div>
      </div>
      <div class="results-actions" style="margin-top:32px;">
        <a href="/assessment/" class="hero-cta" style="opacity:1;">
          Take Your Own Assessment
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:18px;height:18px;"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    `;
    setTimeout(() => {
      const circle = document.getElementById('scoreCircle');
      const circumference = 2 * Math.PI * 52;
      circle.style.strokeDashoffset = circumference - (score / 100) * circumference;
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        document.getElementById('scoreNumber').textContent = current;
        if (current >= score) clearInterval(interval);
      }, 20);
    }, 300);
    return true;
  }
  return false;
}

// ========== INITIALIZE ==========
if (!checkForSharedResults()) {
  renderStep(0);
}
