// Telangana Tourism Data Store
const TELANGANA_PLACES = [
  {
    id: 'charminar',
    name: 'చార్మినార్ (Charminar)',
    entity: 'Charminar',
    query: 'Charminar illuminated historical monument Hyderabad Telangana',
    category: 'heritage',
    categoryName: 'చారిత్రక కట్టడం',
    district: 'హైదరాబాద్ (Hyderabad)',
    rating: 4.9,
    fee: '₹25 (భారతీయులకు)',
    timings: 'ఉదయం 9:00 - సాయంత్రం 5:30',
    description: '1591లో సుల్తాన్ ముహమ్మద్ కులీ కుతుబ్ షా నిర్మించిన ప్రపంచ ప్రసిద్ధ చారిత్రక కట్టడం. ఇది హైదరాబాద్ నగరానికి ప్రతీకగా నిలుస్తుంది.',
    details: 'నాలుగు వైపులా 48.7 మీటర్ల ఎత్తున్న మనోహరమైన మినార్లు, ప్లాగ్ నగర వీధులు, మరియు లాల్ బజార్ గాజుల మార్కెట్ దీని ప్రత్యేకత. ఇక్కడ సాయంత్రం వేళ విద్యుత్ కాంతులు ప్రత్యేక ఆకర్షణ.',
    bestTime: 'అక్టోబర్ నుండి మార్చి'
  },
  {
    id: 'golconda',
    name: 'గోల్కొండ కోట (Golconda Fort)',
    entity: 'Golconda Fort',
    query: 'Golconda Fort stone walls ruins Hyderabad Telangana',
    category: 'heritage',
    categoryName: 'పురాణ కోట',
    district: 'హైదరాబాద్ (Hyderabad)',
    rating: 4.8,
    fee: '₹25 (లైట్ & సౌ షో రూ.140)',
    timings: 'ఉదయం 9:00 - సాయంత్రం 5:30',
    description: 'కాకతీయుల కాలంలో నిర్మించబడి, కుతుబ్ షాహీల పాలనలో అత్యున్నత స్థాయికి చేరిన ప్రసిద్ధ దుర్గం. శబ్ద తరంగాల (అకౌస్టిక్స్) అద్భుత ఇంజనీరింగ్‌కు ఉదాహరణ.',
    details: 'కోట ప్రవేశ ద్వారం వద్ద చప్పట్లు కొడితే 1 కిలోమీటరు దూరంలో ఉన్న బాలా హిసార్ పైభాగానికి శబ్దం వినబడటం దీని అద్భుత సాంకేతికత. సాయంత్రం శబ్ద-కాంతి ప్రదర్శన (Sound & Light Show) తప్పక చూడాలి.',
    bestTime: 'నవంబర్ నుండి ఫిబ్రవరి'
  },
  {
    id: 'ramappa',
    name: 'రామప్ప దేవాలయం (Ramappa Temple)',
    entity: 'Ramappa Temple',
    query: 'Ramappa Temple Kakatiya architecture Palampet Telangana UNESCO heritage',
    category: 'spiritual',
    categoryName: 'యునెస్కో ప్రపంచ వారసత్వ సంపద',
    district: 'ములుగు (Mulugu)',
    rating: 4.95,
    fee: 'ఉచితం',
    timings: 'ఉదయం 6:00 - రాత్రి 8:00',
    description: '1213 AD లో కాకతీయ గణపతిదేవుని కాలంలో శిల్పి రామప్ప చెక్కిన శిల్పకళా నిలయం. ఇది భారతదేశంలోని ఏకైక శిల్పి పేరు మీద ఉన్న ఆలయం.',
    details: 'నీటిపై తేలియాడే ఇటుకలతో నిర్మించిన గోపురం, బాలాస్ట్ ఇసుక సాంకేతికత (Sand-box technique) మరియు నల్లని రాతిపై చెక్కిన నాట్య భంగిమలు మిమ్మల్ని మంత్రముగ్ధులను చేస్తాయి.',
    bestTime: 'సెప్టెంబర్ నుండి మార్చి'
  },
  {
    id: 'thousand-pillar',
    name: 'వెయ్యి స్తంభాల గుడి (Thousand Pillar Temple)',
    entity: 'Thousand Pillar Temple',
    query: 'Thousand Pillar Temple Warangal Telangana stone carvings',
    category: 'spiritual',
    categoryName: 'ఆధ్యాత్మికం & వారసత్వం',
    district: 'హనుమకొండ (Hanamkonda)',
    rating: 4.7,
    fee: 'ఉచితం',
    timings: 'ఉదయం 6:00 - రాత్రి 8:00',
    description: 'రుద్రదేవునిచే 1163 AD లో నిర్మించబడిన త్రికూట ఆలయం. శివుడు, విష్ణువు మరియు సూర్యునికి అంకితం చేయబడిన అద్భుత కాకతీయ కట్టడం.',
    details: 'ఏకశిలా నంది విగ్రహం, సున్నితంగా చెక్కబడిన వెయ్యి స్తంభాల మండపం కాకతీయుల శిల్పకళా వైభవానికి నిదర్శనం.',
    bestTime: 'అక్టోబర్ నుండి మార్చి'
  },
  {
    id: 'bogatha',
    name: 'బొగత జలపాతం (Bogatha Waterfall)',
    entity: 'Bogatha Waterfall',
    query: 'Bogatha Waterfall Telangana Niagara cascade green jungle',
    category: 'waterfall',
    categoryName: 'జలపాతం (తెలంగాణ నయాగరా)',
    district: 'ములుగు (Mulugu)',
    rating: 4.8,
    fee: '₹30 (ఎంట్రీ)',
    timings: 'ఉదయం 9:00 - సాయంత్రం 5:00',
    description: 'తెలంగాణ నయాగరాగా పేరుగాంచిన రమణీయ జలపాతం. దట్టమైన అడవుల మధ్య కొండలపై నుండి జాలువారే దృశ్యం నయన మనోహరం.',
    details: 'వర్షాకాలం మరియు శీతాకాలంలో జలపాతం పూర్తి రూపంతో ప్రవహిస్తుంది. ఇక్కడ ఈత కొట్టడం మరియు ఫ్యామిలీ పిక్నిక్ లగ్జరీ అనుభవాన్ని ఇస్తుంది.',
    bestTime: 'ఆగస్టు నుండి డిసెంబర్'
  },
  {
    id: 'kuntala',
    name: 'కుంటాల జలపాతం (Kuntala Waterfall)',
    entity: 'Kuntala Waterfall',
    query: 'Kuntala Waterfall Adilabad Telangana highest waterfall',
    category: 'waterfall',
    categoryName: 'అతిపెద్ద జలపాతం',
    district: 'ఆదిలాబాద్ (Adilabad)',
    rating: 4.75,
    fee: '₹20',
    timings: 'ఉదయం 9:00 - సాయంత్రం 5:00',
    description: 'తెలంగాణలోనే అత్యంత ఎత్తైన జలపాతం (45 మీటర్ల ఎత్తు). సహ్యాద్రి పర్వత శ్రేణులలో నిషాణి నదిపై ఈ జలపాతం కొలువై ఉంది.',
    details: 'రాజా దుష్యంత-శకుంతలల పురాణ గాథలతో ఈ ప్రాంతానికి సంబంధం ఉందనే నమ్మకం ఉంది. దట్టమైన అడవి గుండా దిగి వెళ్లే మెట్లు ఒక సాహసోపేత ట్రెక్కింగ్ అనుభవాన్ని ఇస్తాయి.',
    bestTime: 'జూలై నుండి డిసెంబర్'
  },
  {
    id: 'ananthagiri',
    name: 'అనంతగిరి కొండలు (Ananthagiri Hills)',
    entity: 'Ananthagiri Hills',
    query: 'Ananthagiri Hills Vikarabad Telangana lush green fog hills',
    category: 'nature',
    categoryName: 'హిల్ స్టేషన్ & ప్రకృతి',
    district: 'వికారాబాద్ (Vikarabad)',
    rating: 4.6,
    fee: 'ఉచితం',
    timings: '24 గంటలు',
    description: 'మూసీ నదికి జన్మస్థానమైన సుందరమైన కొండ ప్రాంతం. హైదరాబాద్ సమీపంలోని ప్రముఖ వీకెండ్ గమ్యస్థానం.',
    details: 'ట్రెక్కింగ్, క్యాంపింగ్, మరియు అనంత పద్మనాభ స్వామి దర్శనం కోసం ప్రసిద్ధి. ఉదయం వేళ దట్టమైన పొగమంచు పర్యాటకులను ఆకట్టుకుంటుంది.',
    bestTime: 'జూన్ నుండి జనవరి'
  },
  {
    id: 'laknavaram',
    name: 'లక్కవరం సరస్సు (Laknavaram Lake)',
    entity: 'Laknavaram Lake',
    query: 'Laknavaram Lake hanging bridge island Telangana',
    category: 'nature',
    categoryName: 'సరస్సు & వేలాడే వంతెన',
    district: 'ములుగు (Mulugu)',
    rating: 4.85,
    fee: '₹50 (బోటింగ్ అదనం)',
    timings: 'ఉదయం 8:00 - సాయంత్రం 5:30',
    description: '13 ద్వీపాలతో నిండిన విశాలమైన సరస్సు. ద్వీపాలను కలుపుతూ నిర్మించిన వేలాడే వంతెన (Hanging Bridge) ప్రధాన ఆకర్షణ.',
    details: 'తెలంగాణ టూరిజం వారి హరిత రిసార్ట్స్ ఇక్కడ ద్వీపంలో ఉన్నాయి. విలాసవంతమైన స్పీడ్ బోటింగ్ మరియు కయాకింగ్ అందుబాటులో ఉన్నాయి.',
    bestTime: 'అక్టోబర్ నుండి మార్చి'
  },
  {
    id: 'yadadri',
    name: 'యాదాద్రి ఆలయం (Yadadri Temple)',
    entity: 'Yadagirigutta',
    query: 'Yadadri Narasimha Swamy temple Telangana grand Krishna Shila architecture',
    category: 'spiritual',
    categoryName: 'దివ్య ఆధ్యాత్మిక క్షేత్రం',
    district: 'యాదాద్రి భువనగిరి (Yadadri Bhuvanagiri)',
    rating: 4.9,
    fee: 'ఉచిత దర్శనం (ప్రత్యేక దర్శనం ₹150)',
    timings: 'ఉదయం 4:00 - రాత్రి 9:30',
    description: 'కృష్ణ శిలలతో అద్భుతంగా పునర్నిర్మించబడిన శ్రీ లక్ష్మీనరసింహ స్వామి ఆలయం. దక్షిణ భారతదేశపు తిరుపతిగా ప్రసిద్ధి.',
    details: 'సుమారు 250 టన్నుల నల్ల రాతితో పూర్తి ఆధ్యాత్మిక శాస్త్ర నిబంధనల ప్రకారం నిర్మించిన ఏకైక ఆధునిక రాతి ఆలయం.',
    bestTime: 'ఏడాదంతా'
  }
];

// User Reviews Data
let userReviews = [
  {
    name: 'రమేష్ రెడ్డి (Ramesh Reddy)',
    place: 'రామప్ప దేవాలయం',
    rating: 5,
    text: 'శిల్పకళా వైభవం అద్భుతంగా ఉంది! నీటిపై తేలే ఇటుకల వింతను ప్రత్యక్షంగా చూసి ఆశ్చర్యపోయాను. ప్రశాంతమైన వాతావరణం.',
    date: '12/02/2025'
  },
  {
    name: 'అనన్య రావు (Ananya Rao)',
    place: 'బొగత జలపాతం',
    rating: 5,
    text: 'వర్షాకాలం ముగిసిన వెంటనే వెళ్ళాము. నీటి ప్రవాహం మరియు అడవి అందాలు తెలంగాణ నయాగరా అనే పేరుకు పూర్తి న్యాయం చేశాయి.',
    date: '04/01/2025'
  }
];

// Bookmarked Places State (Stored in localStorage)
let savedPlaces = JSON.parse(localStorage.getItem('tg_saved_places') || '[]');

// Fallback Image Lookup Helper (Wikipedia -> Openverse -> Generative -> Placeholder)
async function resolveImage(imgEl) {
  const entity = imgEl.dataset.entity;
  const query = imgEl.dataset.query || imgEl.alt || 'Telangana Tourism';
  const w = imgEl.dataset.w || 600, h = imgEl.dataset.h || 400;

  if (entity) {
    try {
      const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(entity)}`);
      if (r.ok) {
        const j = await r.json();
        const src = (j.originalimage && j.originalimage.source) || (j.thumbnail && j.thumbnail.source);
        if (src) { imgEl.src = src; return; }
      }
    } catch (e) {}
  }
  try {
    const r = await fetch(`https://api.openverse.org/v1/images/?q=${encodeURIComponent(query)}&page_size=1&mature=false`);
    const j = await r.json();
    const hit = j.results && j.results[0];
    if (hit && (hit.thumbnail || hit.url)) { imgEl.src = hit.thumbnail || hit.url; return; }
  } catch (e) {}

  imgEl.src = `https://image.pollinations.ai/prompt/${encodeURIComponent(query)}?width=${w}&height=${h}&nologo=true`;
}

// DOM Ready Handler
document.addEventListener('DOMContentLoaded', () => {
  renderPlaces(TELANGANA_PLACES);
  renderSavedPlaces();
  renderReviews();
  updateSavedBadgeCount();

  // Attach Event Listeners
  setupCategoryFilters();
  setupSearch();
  setupSort();
  setupTourPlanner();
  setupReviewForm();
  setupInquiryForm();
  setupModalEvents();
});

// Render Main Places Cards Grid
function renderPlaces(places) {
  const container = document.getElementById('places-container');
  if (!container) return;

  if (places.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px;" class="card">
        <h3>🔍 ప్రదేశాలు కనుగొనబడలేదు</h3>
        <p style="color:var(--text-2); margin-top:8px;">మీరు వెతికిన పదానికి సరిపోయే పర్యాటక ప్రాంతాలు లేవు. వేరే పదాన్ని ప్రయత్నించండి.</p>
      </div>`;
    return;
  }

  container.innerHTML = places.map(place => {
    const isSaved = savedPlaces.some(p => p.id === place.id);
    return `
      <div class="card place-card animate">
        <div class="place-img-wrap">
          <img 
            data-entity="${place.entity || ''}" 
            data-query="${place.query}" 
            alt="${place.name}" 
            loading="lazy"
            onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='https://placehold.co/600x400/121626/ffffff?text='+encodeURIComponent(/^[\x20-\x7E]*$/.test(this.alt||'')?this.alt:'Telangana');}else{this.onerror=null;}"
          />
          <span class="place-badge">${place.categoryName}</span>
          <button class="bookmark-btn ${isSaved ? 'active' : ''}" onclick="toggleSavePlace('${place.id}')" aria-label="సేవ్ చేయండి">
            ${isSaved ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="place-card-body">
          <span class="place-location">📍 ${place.district}</span>
          <h3 class="place-title">${place.name}</h3>
          <p class="place-desc">${place.description}</p>
          <div class="place-meta">
            <span class="place-rating">⭐ ${place.rating} / 5</span>
            <span>🎟️ ${place.fee}</span>
          </div>
          <button class="btn btn-ghost btn-sm btn-full" onclick="openPlaceModal('${place.id}')">
            పూర్తి వివరాలు చూడండి →
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Resolve Images for newly rendered DOM
  container.querySelectorAll('img[data-query]:not([src])').forEach(resolveImage);
}

// Category & Tag Filter Setup
function setupCategoryFilters() {
  const chips = document.querySelectorAll('.filter-chip, .tag-btn');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      const cat = e.target.dataset.cat || e.target.dataset.filter;
      
      chips.forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');

      if (cat === 'all') {
        renderPlaces(TELANGANA_PLACES);
      } else {
        const filtered = TELANGANA_PLACES.filter(p => p.category === cat);
        renderPlaces(filtered);
      }
    });
  });
}

// Search Setup
function setupSearch() {
  const searchInput = document.getElementById('hero-search');
  const searchBtn = document.getElementById('hero-search-btn');

  const handleSearch = () => {
    const val = searchInput.value.trim().toLowerCase();
    if (!val) {
      renderPlaces(TELANGANA_PLACES);
      return;
    }
    const filtered = TELANGANA_PLACES.filter(p => 
      p.name.toLowerCase().includes(val) || 
      p.district.toLowerCase().includes(val) || 
      p.description.toLowerCase().includes(val)
    );
    renderPlaces(filtered);
    
    // Smooth scroll to places section
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
  };

  if (searchBtn) searchBtn.addEventListener('click', handleSearch);
  if (searchInput) searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleSearch();
  });
}

// Sort Handler
function setupSort() {
  const select = document.getElementById('sort-select');
  if (!select) return;

  select.addEventListener('change', (e) => {
    const val = e.target.value;
    let list = [...TELANGANA_PLACES];
    if (val === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (val === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name, 'te'));
    }
    renderPlaces(list);
  });
}

// Save / Bookmark Place Logic
function toggleSavePlace(id) {
  const place = TELANGANA_PLACES.find(p => p.id === id);
  if (!place) return;

  const idx = savedPlaces.findIndex(p => p.id === id);
  if (idx > -1) {
    savedPlaces.splice(idx, 1);
    showToast(`"${place.name}" మీ సేవ్ చేసిన జాబితా నుండి తొలగించబడింది.`);
  } else {
    savedPlaces.push(place);
    showToast(`"${place.name}" మీ సేవ్ చేసిన ప్రదేశాలలో చేర్చబడింది! ❤️`);
  }

  localStorage.setItem('tg_saved_places', JSON.stringify(savedPlaces));
  updateSavedBadgeCount();
  renderPlaces(TELANGANA_PLACES);
  renderSavedPlaces();
}

function updateSavedBadgeCount() {
  const badge = document.getElementById('saved-count');
  if (badge) badge.textContent = savedPlaces.length;
}

// Render Saved Places Section
function renderSavedPlaces() {
  const container = document.getElementById('saved-places-container');
  if (!container) return;

  if (savedPlaces.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px;" class="card">
        <h3>🤍 సేవ్ చేసిన ప్రదేశాలు ఏవీ లేవు</h3>
        <p style="color:var(--text-2); margin-top:8px;">మీకు నచ్చిన ప్రదేశాల వద్ద ఉన్న గుండె గురుతు (❤️) పై క్లిక్ చేసి ఇక్కడ సేవ్ చేసుకోండి.</p>
      </div>`;
    return;
  }

  container.innerHTML = savedPlaces.map(place => `
    <div class="card place-card animate">
      <div class="place-img-wrap">
        <img data-entity="${place.entity || ''}" data-query="${place.query}" alt="${place.name}" loading="lazy" onerror="this.src='https://placehold.co/600x400/121626/ffffff?text=Telangana';" />
        <button class="bookmark-btn active" onclick="toggleSavePlace('${place.id}')">❤️</button>
      </div>
      <div class="place-card-body">
        <span class="place-location">📍 ${place.district}</span>
        <h3 class="place-title">${place.name}</h3>
        <button class="btn btn-ghost btn-sm btn-full" onclick="openPlaceModal('${place.id}')">వివరాలు చూడండి</button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('img[data-query]:not([src])').forEach(resolveImage);
}

// Tour Planner Logic
function setupTourPlanner() {
  const form = document.getElementById('tour-planner-form');
  const resultContainer = document.getElementById('planner-result');
  const costEl = document.getElementById('estimated-cost');
  const itineraryEl = document.getElementById('itinerary-list');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const days = parseInt(document.getElementById('trip-days').value);
    const type = document.getElementById('travelers-type').value;
    const transport = document.getElementById('transport-mode').value;
    const pref = document.getElementById('preferred-type').value;

    // Calculate Estimated Budget (₹)
    let perDayPerPerson = 1200;
    if (transport === 'car') perDayPerPerson += 800;
    if (type === 'couple') perDayPerPerson += 500;
    
    let totalEstimate = days * perDayPerPerson;
    if (type === 'family') totalEstimate *= 3.2;
    if (type === 'couple') totalEstimate *= 1.8;
    if (type === 'friends') totalEstimate *= 3.8;

    costEl.textContent = `అంచనా ఖర్చు: ₹${Math.round(totalEstimate).toLocaleString('en-IN')}`;

    // Filter relevant places for itinerary
    let pool = TELANGANA_PLACES;
    if (pref !== 'mix') {
      pool = TELANGANA_PLACES.filter(p => p.category === pref);
      if (pool.length === 0) pool = TELANGANA_PLACES;
    }

    let itineraryHTML = '';
    for (let d = 1; d <= days; d++) {
      const place1 = pool[(d - 1) % pool.length];
      const place2 = pool[d % pool.length];
      
      itineraryHTML += `
        <div class="timeline-item animate">
          <h4>రోజు ${d}: ${place1.district} & పరిసర ప్రాంతాలు</h4>
          <p><strong>ఉదయం & మధ్యాహ్నం:</strong> ${place1.name} సందర్శన, ప్రాచీన శిల్పకళ మరియు విశేషాల పరిశీలన.</p>
          <p><strong>సాయంత్రం:</strong> ${place2.name} వద్ద సమయం గడపడం, స్థానిక తెలంగాణ వంటకాల రుచి చూడటం.</p>
        </div>
      `;
    }

    itineraryEl.innerHTML = itineraryHTML;
    resultContainer.classList.remove('hidden');
    showToast('మీ పర్యటన ప్రణాళిక విజయవంతంగా రూపొందించబడింది! 🚗');
  });

  const savePlanBtn = document.getElementById('save-plan-btn');
  if (savePlanBtn) {
    savePlanBtn.addEventListener('click', () => {
      showToast('మీ పర్యటన ప్రణాళిక లోకల్ మెమరీలో సేవ్ చేయబడింది! 💾');
    });
  }

  const printPlanBtn = document.getElementById('print-plan-btn');
  if (printPlanBtn) {
    printPlanBtn.addEventListener('click', () => window.print());
  }
}

// Modal View Details
function openPlaceModal(id) {
  const place = TELANGANA_PLACES.find(p => p.id === id);
  if (!place) return;

  const modal = document.getElementById('place-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div style="height: 260px; border-radius: 16px; overflow: hidden; margin-bottom: 20px;">
      <img data-entity="${place.entity || ''}" data-query="${place.query}" alt="${place.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='https://placehold.co/600x400/121626/ffffff?text=Telangana';" />
    </div>
    <span class="badge">${place.categoryName}</span>
    <h2 style="font-size:28px; margin: 10px 0;">${place.name}</h2>
    <p style="color:var(--accent-2); font-weight:600; margin-bottom:16px;">📍 జిల్లా: ${place.district}</p>
    <p style="font-size:16px; margin-bottom: 20px;">${place.details}</p>
    
    <div style="background:rgba(255,255,255,0.04); padding:16px; border-radius:12px; display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:14px; margin-bottom:24px;">
      <div><strong>⏱️ దర్శన సమయాలు:</strong> ${place.timings}</div>
      <div><strong>🎟️ ప్రవేశ రుసుము:</strong> ${place.fee}</div>
      <div><strong>⭐ పర్యాటకుల రేటింగ్:</strong> ${place.rating} / 5</div>
      <div><strong>🗓️ ఉత్తమ సమయం:</strong> ${place.bestTime}</div>
    </div>

    <button class="btn btn-full" onclick="toggleSavePlace('${place.id}'); document.getElementById('place-modal').classList.add('hidden');">
      ❤️ సేవ్ చేసుకున్న జాబితాకు చేర్చండి
    </button>
  `;

  modal.classList.remove('hidden');
  modalBody.querySelectorAll('img[data-query]:not([src])').forEach(resolveImage);
}

function setupModalEvents() {
  const modal = document.getElementById('place-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
}

// User Reviews Rendering & Submit
function renderReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  container.innerHTML = userReviews.map(r => `
    <div class="card review-card animate">
      <div class="review-header">
        <img src="https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(r.name)}" class="avatar" alt="${r.name}" />
        <div class="reviewer-info">
          <h4>${r.name}</h4>
          <span>${r.place} • ${r.date}</span>
        </div>
      </div>
      <div class="stars">${'⭐'.repeat(r.rating)}</div>
      <p style="color:var(--text-2); font-size:14px;">"${r.text}"</p>
    </div>
  `).join('');
}

function setupReviewForm() {
  const form = document.getElementById('review-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('rev-name').value;
    const place = document.getElementById('rev-place').value;
    const rating = parseInt(document.getElementById('rev-rating').value);
    const text = document.getElementById('rev-text').value;

    userReviews.unshift({
      name,
      place,
      rating,
      text,
      date: new Date().toLocaleDateString('en-GB')
    });

    renderReviews();
    form.reset();
    showToast('మీ అమూల్యమైన సమీక్షను పంచుకున్నందుకు ధన్యవాదాలు! ✨');
  });
}

// Inquiry Form Handling
function setupInquiryForm() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    showToast('మీ సందేశం తెలంగాణ టూరిజం హెల్ప్‌లైన్‌కు చేరింది. త్వరలోనే సంప్రదిస్తాము! 📩');
  });
}

// Universal Toast Helper
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}