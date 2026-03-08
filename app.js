/* ═══════════════════════════════════════════
   SMILE DATE 8-3 — APP LOGIC
   Map • Deals • Check-in • Gamification
   ═══════════════════════════════════════════ */

// ── DATA ──

const MAP_CENTER = [21.0285, 105.8542]; // Hanoi
const MAP_ZOOM = 14;

const locations = [
  // Homestays
  { id: 1, name: 'Smile Homestay Romantic', category: 'homestay', icon: '❤️', lat: 21.0300, lng: 105.8530, desc: 'Phòng couple riêng tư, view hồ', distance: '0.3 km' },
  { id: 2, name: 'Rose Garden Homestay', category: 'homestay', icon: '❤️', lat: 21.0275, lng: 105.8560, desc: 'Homestay vườn hồng, có ban công', distance: '0.5 km' },
  { id: 3, name: 'Moonlight Couple Room', category: 'homestay', icon: '❤️', lat: 21.0310, lng: 105.8510, desc: 'Phòng ánh trăng, decor lãng mạn', distance: '0.8 km' },
  { id: 4, name: 'Sunset View Homestay', category: 'homestay', icon: '❤️', lat: 21.0260, lng: 105.8580, desc: 'View hoàng hôn tuyệt đẹp', distance: '1.1 km' },
  { id: 5, name: 'Cozy Nest Homestay', category: 'homestay', icon: '❤️', lat: 21.0320, lng: 105.8490, desc: 'Ấm cúng, yên tĩnh, gần hồ', distance: '0.6 km' },
  { id: 6, name: 'Lavender Dream Room', category: 'homestay', icon: '❤️', lat: 21.0245, lng: 105.8555, desc: 'Hương lavender, không gian thư giãn', distance: '1.3 km' },
  { id: 7, name: 'Cherry Blossom Suite', category: 'homestay', icon: '❤️', lat: 21.0335, lng: 105.8520, desc: 'Suite hoa anh đào, cực romantic', distance: '0.9 km' },
  { id: 8, name: 'Starlight Couple Room', category: 'homestay', icon: '❤️', lat: 21.0290, lng: 105.8600, desc: 'Đèn sao lung linh, nến thơm', distance: '1.0 km' },

  // Restaurants
  { id: 9, name: 'Phở Bát Đàn', category: 'food', icon: '🍜', lat: 21.0325, lng: 105.8545, desc: 'Phở bò nổi tiếng Hà Nội', distance: '0.4 km' },
  { id: 10, name: 'Bún Đậu Mắm Tôm Hàng Khay', category: 'food', icon: '🍜', lat: 21.0270, lng: 105.8525, desc: 'Bún đậu truyền thống', distance: '0.6 km' },
  { id: 11, name: 'Quán Ăn Lãng Mạn', category: 'food', icon: '🍜', lat: 21.0295, lng: 105.8570, desc: 'Set dinner couple candle light', distance: '0.3 km' },
  { id: 12, name: 'BBQ Garden Date', category: 'food', icon: '🍜', lat: 21.0315, lng: 105.8495, desc: 'BBQ ngoài trời, không gian xanh', distance: '0.9 km' },

  // Cafes
  { id: 13, name: 'The Couple Rooftop Cafe', category: 'cafe', icon: '☕', lat: 21.0280, lng: 105.8515, desc: 'Rooftop view toàn thành phố', distance: '0.5 km' },
  { id: 14, name: 'Rose Milk Tea', category: 'cafe', icon: '☕', lat: 21.0305, lng: 105.8565, desc: 'Trà sữa hoa hồng đặc biệt 8-3', distance: '0.2 km' },
  { id: 15, name: 'Sunset Coffee House', category: 'cafe', icon: '☕', lat: 21.0330, lng: 105.8535, desc: 'Cà phê hoàng hôn, nhạc acoustic', distance: '0.7 km' },
  { id: 16, name: 'Love Letter Cafe', category: 'cafe', icon: '☕', lat: 21.0255, lng: 105.8540, desc: 'Decor thư tình, couple corner', distance: '1.0 km' },

  // Parks / Walking
  { id: 17, name: 'Hồ Hoàn Kiếm', category: 'park', icon: '🌳', lat: 21.0288, lng: 105.8525, desc: 'Đi dạo quanh hồ lúc hoàng hôn', distance: '0.1 km' },
  { id: 18, name: 'Công viên Thống Nhất', category: 'park', icon: '🌳', lat: 21.0195, lng: 105.8442, desc: 'Công viên rộng, nhiều cây xanh', distance: '1.5 km' },
  { id: 19, name: 'Vườn hoa Lý Thái Tổ', category: 'park', icon: '🌳', lat: 21.0297, lng: 105.8520, desc: 'Vườn hoa đẹp, chụp ảnh tuyệt vời', distance: '0.2 km' },
  { id: 20, name: 'Phố đi bộ Hoàn Kiếm', category: 'park', icon: '🌳', lat: 21.0310, lng: 105.8540, desc: 'Phố đi bộ cuối tuần, sôi động', distance: '0.3 km' },
];

const nearMeData = [
  { name: 'Smile Homestay Romantic', icon: '❤️', distance: '0.3 km', available: true, prices: ['80k/1h', '150k/2h', '220k/3h'] },
  { name: 'Rose Garden Homestay', icon: '🌹', distance: '0.5 km', available: true, prices: ['90k/1h', '160k/2h', '240k/3h'] },
  { name: 'Moonlight Couple Room', icon: '🌙', distance: '0.8 km', available: false, prices: ['100k/1h', '180k/2h', '260k/3h'] },
  { name: 'Cozy Nest Homestay', icon: '🏠', distance: '0.6 km', available: true, prices: ['70k/1h', '130k/2h', '200k/3h'] },
  { name: 'Sunset View Homestay', icon: '🌅', distance: '1.1 km', available: true, prices: ['95k/1h', '170k/2h', '250k/3h'] },
  { name: 'Cherry Blossom Suite', icon: '🌸', distance: '0.9 km', available: true, prices: ['110k/1h', '200k/2h', '280k/3h'] },
];

const romanticSpots = [
  { rank: 1, name: 'Smile Homestay Romantic', type: 'Homestay', icon: '❤️', distance: '0.3 km', rating: '4.9 ⭐' },
  { rank: 2, name: 'Hồ Hoàn Kiếm', type: 'Công viên', icon: '🌳', distance: '0.1 km', rating: '4.8 ⭐' },
  { rank: 3, name: 'The Couple Rooftop Cafe', type: 'Rooftop', icon: '☕', distance: '0.5 km', rating: '4.8 ⭐' },
  { rank: 4, name: 'Rose Garden Homestay', type: 'Homestay', icon: '🌹', distance: '0.5 km', rating: '4.7 ⭐' },
  { rank: 5, name: 'Quán Ăn Lãng Mạn', type: 'Quán ăn', icon: '🍜', distance: '0.3 km', rating: '4.7 ⭐' },
  { rank: 6, name: 'Vườn hoa Lý Thái Tổ', type: 'Công viên', icon: '🌺', distance: '0.2 km', rating: '4.6 ⭐' },
  { rank: 7, name: 'Rose Milk Tea', type: 'Trà sữa', icon: '🧋', distance: '0.2 km', rating: '4.6 ⭐' },
  { rank: 8, name: 'Moonlight Couple Room', type: 'Homestay', icon: '🌙', distance: '0.8 km', rating: '4.5 ⭐' },
  { rank: 9, name: 'Phố đi bộ Hoàn Kiếm', type: 'Đi dạo', icon: '🚶', distance: '0.3 km', rating: '4.5 ⭐' },
  { rank: 10, name: 'Sunset Coffee House', type: 'Cà phê', icon: '☕', distance: '0.7 km', rating: '4.4 ⭐' },
];

// ── PEOPLE NEAR YOU DATA ──
const peopleNearby = [
  { name: 'Minh Tuấn', role: 'Founder', roleClass: 'role-founder', icon: '👨‍💻', lat: 21.0295, lng: 105.8540, distance: '120m', signal: 'Đang tìm co-founder cho AI startup', color: '#f43f5e' },
  { name: 'Linh Chi', role: 'Designer', roleClass: 'role-designer', icon: '🎨', lat: 21.0305, lng: 105.8555, distance: '200m', signal: 'UX/UI freelancer, open for projects', color: '#a855f7' },
  { name: 'Đức Anh', role: 'Developer', roleClass: 'role-developer', icon: '💻', lat: 21.0280, lng: 105.8520, distance: '180m', signal: 'Full-stack dev, quan tâm AI/ML', color: '#6366f1' },
  { name: 'Hà My', role: 'Investor', roleClass: 'role-investor', icon: '💰', lat: 21.0315, lng: 105.8535, distance: '350m', signal: 'Angel investor, tìm startup giai đoạn seed', color: '#10b981' },
  { name: 'Phong', role: 'Founder', roleClass: 'role-founder', icon: '🚀', lat: 21.0270, lng: 105.8560, distance: '280m', signal: 'Real estate + AI, looking for partners', color: '#f43f5e' },
  { name: 'Thu Hương', role: 'Creative', roleClass: 'role-creative', icon: '✨', lat: 21.0300, lng: 105.8510, distance: '150m', signal: 'Content creator, photography', color: '#f59e0b' },
  { name: 'Quang Huy', role: 'Developer', roleClass: 'role-developer', icon: '⚡', lat: 21.0288, lng: 105.8570, distance: '400m', signal: 'Blockchain dev, smart contracts', color: '#6366f1' },
  { name: 'Ngọc Ánh', role: 'Designer', roleClass: 'role-designer', icon: '🌸', lat: 21.0325, lng: 105.8525, distance: '320m', signal: 'Brand designer, motion graphics', color: '#a855f7' },
];

const smallGroups = [
  { name: 'AI Founders Hanoi', icon: '🤖', members: 8, schedule: 'Thứ 6, 20h', location: 'Toong Coworking' },
  { name: 'Startup Builders', icon: '🚀', members: 6, schedule: 'Thứ 4, 19h', location: 'UP Co-working' },
  { name: 'Real Estate + AI', icon: '🏠', members: 5, schedule: 'Thứ 7, 10h', location: 'Smile Homestay' },
  { name: 'Creative Collective', icon: '🎨', members: 7, schedule: 'Chủ nhật, 15h', location: 'Love Letter Cafe' },
];

const liveSignals = [
  { author: 'Minh Tuấn', icon: '👨‍💻', message: '☕ Cafe AI/Startup tối nay 7h tại Toong — ai quan tâm tới join!', time: '5 phút trước', live: true },
  { author: 'Thu Hương', icon: '✨', message: '🌹 Tìm bạn đi dạo hồ Hoàn Kiếm chiều nay 5h', time: '12 phút trước', live: true },
  { author: 'Đức Anh', icon: '💻', message: '💡 Brainstorm ideas cho AI chatbot — 8h tối mai tại UP Co-working', time: '25 phút trước', live: false },
  { author: 'Hà My', icon: '💰', message: '🏠 Meetup real estate AI cuối tuần này — DM để join', time: '1 giờ trước', live: false },
  { author: 'Phong', icon: '🚀', message: '⚡ Hackathon mini tối 8-3: build app trong 3h, ai dám?', time: '2 giờ trước', live: false },
];

// ── STATE ──
let points = 0;
let checkedIn = false;
let map = null;
let peopleMap = null;
let markers = [];
let markerLayers = {};

// ── INITIALIZATION ──
document.addEventListener('DOMContentLoaded', () => {
  initPetals();
  initNavbar();
  initMap();
  renderNearMe();
  renderSpots();
  initPeopleMap();
  renderPeopleCards();
  renderGroups();
  renderSignalsFeed();
  initScrollReveal();
  animateCounters();
  loadPoints();
});

// ── ROSE PETALS ANIMATION ──
function initPetals() {
  const canvas = document.getElementById('petals-canvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const petals = [];
  const petalCount = window.innerWidth < 768 ? 15 : 30;
  const petalColors = [
    'rgba(244, 63, 94, 0.6)',
    'rgba(236, 72, 153, 0.5)',
    'rgba(251, 113, 133, 0.4)',
    'rgba(253, 164, 175, 0.3)',
    'rgba(168, 85, 247, 0.3)',
  ];

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      speedY: Math.random() * 1.5 + 0.5,
      speedX: Math.random() * 1 - 0.5,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 2 - 1,
      opacity: Math.random() * 0.5 + 0.3,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
    });
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y * 0.01) * 0.5;
      p.rotation += p.rotSpeed;

      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }

      drawPetal(p);
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ── NAVBAR ──
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });

  // Close on link click
  links.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });
}

// ── MAP ──
function initMap() {
  map = L.map('date-map', {
    center: MAP_CENTER,
    zoom: MAP_ZOOM,
    zoomControl: false,
  });

  L.control.zoom({ position: 'topright' }).addTo(map);

  // Dark tile layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19,
  }).addTo(map);

  // Add markers
  const categoryColors = {
    homestay: '#f43f5e',
    food: '#f59e0b',
    cafe: '#8b5cf6',
    park: '#10b981',
  };

  locations.forEach(loc => {
    const color = categoryColors[loc.category];
    const markerIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        background: ${color};
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        box-shadow: 0 2px 12px ${color}80;
        border: 2px solid rgba(255,255,255,0.3);
        cursor: pointer;
        transition: transform 0.2s;
      ">${loc.icon}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });

    const marker = L.marker([loc.lat, loc.lng], { icon: markerIcon })
      .bindPopup(`
        <div class="popup-title">${loc.icon} ${loc.name}</div>
        <div class="popup-category">${getCategoryLabel(loc.category)}</div>
        <div class="popup-distance">📍 ${loc.distance} • ${loc.desc}</div>
      `)
      .addTo(map);

    marker._category = loc.category;
    markers.push(marker);
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      filterMarkers(filter);
    });
  });
}

function getCategoryLabel(cat) {
  const labels = { homestay: '❤️ Homestay lãng mạn', food: '🍜 Quán ăn', cafe: '☕ Cà phê', park: '🌳 Chỗ đi dạo' };
  return labels[cat] || cat;
}

function filterMarkers(filter) {
  markers.forEach(marker => {
    if (filter === 'all' || marker._category === filter) {
      marker.addTo(map);
    } else {
      map.removeLayer(marker);
    }
  });
}

// ── NEAR ME ──
function renderNearMe() {
  const grid = document.getElementById('nearme-grid');
  grid.innerHTML = nearMeData.map(h => `
    <div class="nearme-card reveal" onclick="showToast('${h.name} — Đang chuyển đến đặt phòng...', 'love')">
      <div class="nearme-header">
        <div class="nearme-avatar">${h.icon}</div>
        <div>
          <div class="nearme-name">${h.name}</div>
          <div class="nearme-distance">📍 ${h.distance}</div>
        </div>
      </div>
      <div class="nearme-status">
        <span class="status-dot ${h.available ? 'available' : 'busy'}"></span>
        <span class="status-text ${h.available ? 'available' : 'busy'}">${h.available ? 'Còn phòng trống' : 'Đang có khách'}</span>
      </div>
      <div class="nearme-prices">
        ${h.prices.map(p => `<span class="price-tag">${p}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ── ROMANTIC SPOTS ──
function renderSpots() {
  const list = document.getElementById('spots-list');
  list.innerHTML = romanticSpots.map(s => `
    <div class="spot-card reveal">
      <div class="spot-rank">${s.rank}</div>
      <div class="spot-icon">${s.icon}</div>
      <div class="spot-info">
        <div class="spot-name">${s.name}</div>
        <div class="spot-type">${s.type}</div>
      </div>
      <div class="spot-meta">
        <div class="spot-rating">${s.rating}</div>
        <div class="spot-distance">📍 ${s.distance}</div>
      </div>
    </div>
  `).join('');
}

// ── GAMIFICATION ──
function loadPoints() {
  const saved = localStorage.getItem('smile-date-points');
  if (saved) {
    points = parseInt(saved);
    updatePointsUI();
  }
}

function savePoints() {
  localStorage.setItem('smile-date-points', points);
}

function updatePointsUI() {
  document.getElementById('points-count').textContent = points;

  // update ring
  const maxPoints = 15;
  const progress = Math.min(points / maxPoints, 1);
  const circumference = 339.292;
  const offset = circumference * (1 - progress);
  const ring = document.getElementById('points-ring');
  if (ring) {
    ring.style.stroke = 'var(--rose-500)';
    ring.style.strokeDashoffset = offset;
  }
}

function doCheckin() {
  const btn = document.getElementById('checkin-btn');

  if (checkedIn) {
    showToast('Bạn đã check-in rồi! Quay lại mai nhé 💕', 'love');
    return;
  }

  checkedIn = true;
  points += 2;
  savePoints();
  updatePointsUI();

  btn.classList.add('checked');
  btn.querySelector('.checkin-text').textContent = '✅ Đã Check-in!';
  btn.querySelector('.checkin-icon').textContent = '💕';

  // Heart burst
  for (let i = 0; i < 12; i++) {
    setTimeout(() => spawnHeart(btn), i * 80);
  }

  showToast('📍 Check-in thành công! +2 ❤️ điểm thưởng', 'success');
}

function spawnHeart(origin) {
  const rect = origin.getBoundingClientRect();
  const heart = document.createElement('div');
  heart.className = 'heart-burst';
  heart.textContent = ['❤️', '💕', '💗', '🌹', '💖'][Math.floor(Math.random() * 5)];
  heart.style.left = rect.left + rect.width / 2 + 'px';
  heart.style.top = rect.top + 'px';
  heart.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1500);
}

function redeemReward(type, cost) {
  if (points < cost) {
    showToast(`Bạn cần thêm ${cost - points} ❤️ điểm nữa!`, 'love');
    return;
  }

  points -= cost;
  savePoints();
  updatePointsUI();

  const names = {
    tea: '🍵 Trà nóng miễn phí',
    snack: '🍪 Snack cho đôi',
    discount: '🏷️ Giảm 20% phòng',
    flowers: '🌹 Bó hoa hồng',
  };

  showToast(`🎉 Đã đổi: ${names[type]}! Xuất trình tại quầy.`, 'success');
}

// ── DATE NEAR ME FAB ──
function openDateNearMe() {
  const modal = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');

  body.innerHTML = `
    <h3 class="modal-title">💑 Date Near Me</h3>
    <p style="color: var(--dark-300); margin-bottom: var(--space-6); font-size: var(--fs-sm);">
      Homestay gần bạn — phòng trống — đặt ngay
    </p>
    ${nearMeData.filter(h => h.available).map(h => `
      <div class="modal-homestay">
        <div class="modal-hs-header">
          <span class="modal-hs-name">${h.icon} ${h.name}</span>
          <span class="modal-hs-badge">📍 ${h.distance}</span>
        </div>
        <div class="modal-hs-prices">
          ${h.prices.map(p => `<span class="price-tag">${p}</span>`).join('')}
        </div>
      </div>
    `).join('')}
    <button class="btn btn-primary btn-full" style="margin-top: var(--space-6);" onclick="closeModal(); showToast('💕 Đang tìm phòng tốt nhất cho bạn...', 'love');">
      Đặt phòng gần nhất 🏠
    </button>
  `;

  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

// Close modal on overlay click
document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal-overlay')) {
    closeModal();
  }
});

// ── BOOK DEAL ──
function bookDeal(deal) {
  const dealNames = {
    'couple-2h': '🌹 Couple 2h — 150k',
    'couple-evening': '🌙 Couple Tối — 250k',
    'night-deal': '✨ Night Deal — 175k (-30%)',
  };
  showToast(`💕 Đang đặt: ${dealNames[deal]}. Chọn homestay gần bạn...`, 'love');
  setTimeout(() => openDateNearMe(), 800);
}

// ── TOAST ──
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ── SCROLL REVEAL ──
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .deal-card, .section-header');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, idx * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
  });
}

// ── COUNTER ANIMATION ──
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current);
          }
        }, 40);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ── PEOPLE NEAR YOU ──
function initPeopleMap() {
  peopleMap = L.map('people-map', {
    center: MAP_CENTER,
    zoom: 15,
    zoomControl: false,
  });

  L.control.zoom({ position: 'topright' }).addTo(peopleMap);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OSM &copy; CARTO',
    maxZoom: 19,
  }).addTo(peopleMap);

  // Radius circle
  L.circle(MAP_CENTER, {
    radius: 500,
    color: '#f43f5e',
    fillColor: '#f43f5e',
    fillOpacity: 0.05,
    weight: 1,
    dashArray: '6 4',
  }).addTo(peopleMap);

  // Add people markers as pulsing avatars
  peopleNearby.forEach(p => {
    const icon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${p.color}20;
        border: 2px solid ${p.color};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 0 20px ${p.color}40;
        cursor: pointer;
        animation: pulse-gentle 2s infinite;
      ">${p.icon}</div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    L.marker([p.lat, p.lng], { icon })
      .bindPopup(`
        <div class="popup-title">${p.icon} ${p.name}</div>
        <div class="popup-category">${p.role} • ${p.distance}</div>
        <div class="popup-distance">📡 ${p.signal}</div>
      `)
      .addTo(peopleMap);
  });

  // Center marker (you)
  const youIcon = L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #3b82f6;
      border: 3px solid white;
      box-shadow: 0 0 20px rgba(59,130,246,0.5);
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  L.marker(MAP_CENTER, { icon: youIcon })
    .bindPopup('<div class="popup-title">📍 Bạn đang ở đây</div>')
    .addTo(peopleMap);
}

function renderPeopleCards() {
  const grid = document.getElementById('people-grid');
  grid.innerHTML = peopleNearby.map(p => `
    <div class="person-card reveal" onclick="showToast('💬 Đang gửi lời mời kết nối tới ${p.name}...', 'love')">
      <div class="person-header">
        <div class="person-avatar" style="background: ${p.color}15; border-color: ${p.color}">${p.icon}</div>
        <div>
          <div class="person-name">${p.name}</div>
          <div class="person-distance">📍 ${p.distance}</div>
        </div>
      </div>
      <span class="person-role ${p.roleClass}">${p.role}</span>
      <div class="person-signal">${p.signal}</div>
    </div>
  `).join('');
}

function renderGroups() {
  const list = document.getElementById('groups-list');
  list.innerHTML = smallGroups.map(g => `
    <div class="group-item" onclick="showToast('🔥 Đang tham gia nhóm ${g.name}...', 'success')">
      <span class="group-icon">${g.icon}</span>
      <div class="group-info">
        <div class="group-name">${g.name}</div>
        <div class="group-meta">${g.schedule} • ${g.location}</div>
      </div>
      <span class="group-members">${g.members} 👥</span>
    </div>
  `).join('');
}

function renderSignalsFeed() {
  const feed = document.getElementById('feed-list');
  feed.innerHTML = liveSignals.map(s => `
    <div class="feed-item">
      <div class="feed-avatar">${s.icon}</div>
      <div class="feed-content">
        <div class="feed-author">${s.live ? '<span class="feed-pulse"></span>' : ''}${s.author}</div>
        <div class="feed-message">${s.message}</div>
      </div>
      <span class="feed-time">${s.time}</span>
    </div>
  `).join('');
}

function setSignal(text) {
  document.getElementById('signal-input').value = text;
}

function broadcastSignal() {
  const input = document.getElementById('signal-input');
  const msg = input.value.trim();
  if (!msg) {
    showToast('✏️ Hãy nhập tin nhắn signal!', 'love');
    return;
  }
  showToast(`📡 Signal đã phát: "${msg}" — người gần bạn sẽ thấy!`, 'success');
  input.value = '';

  // Add to live feed
  const feed = document.getElementById('feed-list');
  const newItem = document.createElement('div');
  newItem.className = 'feed-item';
  newItem.style.animation = 'fadeInUp 0.5s ease';
  newItem.innerHTML = `
    <div class="feed-avatar">🙋</div>
    <div class="feed-content">
      <div class="feed-author"><span class="feed-pulse"></span>Bạn</div>
      <div class="feed-message">${msg}</div>
    </div>
    <span class="feed-time">Vừa xong</span>
  `;
  feed.insertBefore(newItem, feed.firstChild);
}

// ── FOR HIM: BUDGET CALCULATOR ──
function showDateBudget() {
  const calc = document.getElementById('budget-calc');
  calc.style.display = calc.style.display === 'none' ? 'block' : 'none';
  if (calc.style.display === 'block') {
    calc.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function calcBudget() {
  const room = parseInt(document.getElementById('budget-room').value);
  const food = parseInt(document.getElementById('budget-food').value);
  const gift = parseInt(document.getElementById('budget-gift').value);
  const transport = parseInt(document.getElementById('budget-transport').value);
  const total = room + food + gift + transport;

  const resultEl = document.getElementById('budget-result');
  let msg = '';
  if (total <= 200000) msg = '👍 Date tiết kiệm nhưng vẫn ấn tượng! Vừa túi tiền anh em.';
  else if (total <= 500000) msg = '💕 Budget vừa đẹp! Date chất lượng, bạn gái chắc chắn hài lòng.';
  else msg = '🔥 Date premium! Bạn gái sẽ nhớ đời. Worth it!';

  resultEl.innerHTML = `
    <div class="budget-total">${total.toLocaleString()}đ</div>
    <div class="budget-msg">${msg}</div>
  `;
  resultEl.style.display = 'block';
  showToast(`💰 Tổng chi phí date: ${total.toLocaleString()}đ`, 'success');
}

// ── VIRAL: LOVE LOCK ──
const SHARE_URL = 'https://smile-date-8-3.vercel.app';

function createLoveLock() {
  const name1 = document.getElementById('lock-name1').value.trim();
  const name2 = document.getElementById('lock-name2').value.trim();

  if (!name1 || !name2) {
    showToast('💕 Hãy nhập tên cả hai người!', 'love');
    return;
  }

  // Lock animation
  const lockIcon = document.getElementById('lock-icon');
  lockIcon.textContent = '🔒';
  lockIcon.classList.add('locked');
  setTimeout(() => lockIcon.classList.remove('locked'), 600);

  // Heart burst
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart-burst';
      heart.textContent = ['❤️', '💕', '💗', '🔒', '💖', '🌹'][Math.floor(Math.random() * 6)];
      const rect = lockIcon.getBoundingClientRect();
      heart.style.left = rect.left + rect.width / 2 + 'px';
      heart.style.top = rect.top + 'px';
      heart.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1500);
    }, i * 60);
  }

  // Update lock count
  const countEl = document.getElementById('lock-total');
  const current = parseInt(countEl.textContent.replace(',', '')) + 1;
  countEl.textContent = current.toLocaleString();

  // Show share card
  const today = new Date().toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' });
  showShareCard(
    `🔒❤️<br><span style="font-size:1.8rem">${name1} ♥ ${name2}</span><br><br>` +
    `<span style="font-size:0.85rem;color:rgba(255,255,255,0.5)">Khóa tình yêu • ${today}</span><br>` +
    `<span style="font-size:0.85rem;color:rgba(255,255,255,0.5)">💕 ${current.toLocaleString()} cặp đôi đã khóa trên Smile Date</span>`,
    `🔒❤️ ${name1} ♥ ${name2} — đã khóa tình yêu trên Smile Date 8-3! Bạn cũng thử đi!`
  );

  showToast(`🔒 ${name1} ♥ ${name2} — Tình yêu đã khóa vĩnh viễn!`, 'success');
}

// ── VIRAL: MYSTERY DATE ──
let selectedMood = null;

function selectMood(btn) {
  document.querySelectorAll('.mystery-mood').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedMood = btn.dataset.mood;
}

const mysteryPlans = {
  romantic: [
    { name: '🌅 Sunset Magic', steps: ['☕ Cafe rooftop lúc 5h chiều', '🌳 Đi dạo hồ Hoàn Kiếm', '🍜 Dinner candle light', '🏠 Smile Homestay couple'] },
    { name: '🌹 Rose Garden', steps: ['🌹 Nhận hoa tại cửa', '☕ Trà nóng & bánh ngọt', '📸 Chụp ảnh tại vườn hoa', '🏠 Phòng couple ánh nến'] },
    { name: '💫 Starlight Date', steps: ['🍜 BBQ ngoài trời', '🌳 Đi dạo phố đi bộ', '☕ Trà sữa hoa hồng', '🏠 Rooftop ngắm sao'] },
  ],
  adventure: [
    { name: '🎢 City Explorer', steps: ['🏃 Chạy bộ quanh hồ', '🍜 Phở bò buổi sáng', '🎭 Thăm bảo tàng', '☕ Cafe trên tầng thượng'] },
    { name: '⚡ Power Date', steps: ['🎮 Board game cafe', '🍜 Bún đậu mắm tôm', '🌳 Đạp xe công viên', '🏠 Karaoke phòng riêng'] },
    { name: '🗺️ Hidden Gems', steps: ['🏃 Khám phá ngõ nhỏ phố cổ', '☕ Cafe bí mật ẩn sau cổng', '🍜 Ẩm thực đường phố', '🌳 Sunset tại West Lake'] },
  ],
  chill: [
    { name: '☁️ Lazy Love', steps: ['☕ Cafe sách yên tĩnh', '🍜 Brunch & smoothie', '🌳 Ngồi hồ Hoàn Kiếm', '🏠 Movie night tại homestay'] },
    { name: '🧘 Zen Date', steps: ['🍵 Trà đạo buổi sáng', '🌳 Thiền & đi dạo', '☕ Matcha & bánh Nhật', '🏠 Spa couple tại phòng'] },
    { name: '📖 Book & Bean', steps: ['☕ Bookstore cafe', '🍜 Pastry & croissant', '🌳 Reading ở công viên', '🏠 Nấu ăn cùng nhau tại homestay'] },
  ],
};

function generateMysteryDate() {
  const mood = selectedMood || ['romantic', 'adventure', 'chill'][Math.floor(Math.random() * 3)];
  const plans = mysteryPlans[mood];
  const plan = plans[Math.floor(Math.random() * plans.length)];

  // Shake animation
  const box = document.getElementById('mystery-box');
  box.classList.add('shaking');
  box.textContent = '🎲';

  setTimeout(() => {
    box.classList.remove('shaking');
    box.textContent = '✨';

    const result = document.getElementById('mystery-result');
    result.innerHTML = `
      <div class="mystery-plan">
        <h4>${plan.name}</h4>
        ${plan.steps.map((s, i) => `
          <div class="mystery-step">
            <span class="mystery-step-num">${i + 1}</span>
            <span>${s}</span>
          </div>
        `).join('')}
        <div class="mystery-share-btn">
          <button class="btn btn-primary btn-full" onclick="shareMysteryDate('${plan.name}', '${plan.steps.join(' → ')}')">
            📤 Share lịch date này!
          </button>
        </div>
      </div>
    `;
  }, 1200);

  showToast('🎲 Đang tạo lịch date bí ẩn...', 'love');
}

function shareMysteryDate(name, steps) {
  showShareCard(
    `🎭 Mystery Date<br><span style="font-size:1.5rem">${name}</span><br><br>` +
    `<span style="font-size:0.9rem;color:rgba(255,255,255,0.7)">${steps}</span>`,
    `🎭 Mystery Date: ${name} — ${steps} | Thử tạo lịch date bí ẩn của bạn!`
  );
}

// ── SHARE SYSTEM ──
let currentShareText = '';

function showShareCard(bodyHTML, shareText) {
  currentShareText = shareText;
  const preview = document.getElementById('share-preview');
  const cardBody = document.getElementById('share-card-body');
  cardBody.innerHTML = bodyHTML;
  preview.style.display = 'block';
  preview.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function shareToSocial(platform) {
  const url = encodeURIComponent(SHARE_URL);
  const text = encodeURIComponent(currentShareText + '\n\n👉 ' + SHARE_URL);

  switch (platform) {
    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(currentShareText)}`, '_blank', 'width=600,height=400');
      showToast('📱 Đang mở Facebook Share...', 'success');
      break;
    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank', 'width=600,height=400');
      showToast('🐦 Đang mở Twitter...', 'success');
      break;
    case 'native':
      if (navigator.share) {
        navigator.share({
          title: '🌹 Smile Date 8-3',
          text: currentShareText,
          url: SHARE_URL,
        }).catch(() => { });
      } else {
        copyShareLink();
      }
      break;
  }
}

function copyShareLink() {
  const text = currentShareText + '\n\n👉 ' + SHARE_URL;
  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 Đã copy! Dán vào Zalo, Messenger, TikTok caption...', 'success');
  }).catch(() => {
    showToast('📋 Link: ' + SHARE_URL, 'love');
  });
}

function shareChallenge() {
  const challengeText = '🔥 #SmileDateChallenge\n\nMở Smile Date → chọn Surprise Date → quay reaction bạn gái → đăng TikTok!\n\n#SmileDateChallenge #83 #HenHo83';

  if (navigator.share) {
    navigator.share({
      title: '🔥 #SmileDateChallenge',
      text: challengeText,
      url: SHARE_URL,
    }).catch(() => { });
  } else {
    navigator.clipboard.writeText(challengeText + '\n\n👉 ' + SHARE_URL).then(() => {
      showToast('📋 Đã copy Challenge! Dán vào TikTok caption!', 'success');
    });
  }

  showToast('🎬 Tham gia #SmileDateChallenge! Quay reaction bạn gái!', 'success');
}

// ── SMILE BOT COMMAND CENTER ──
const botTemplates = {
  tiktok: [
    `🌹 Ngày 8-3 hẹn hò ở đâu?\n\nMình vừa tìm được app siêu hay!\n📍 Bản đồ hẹn hò — café, homestay, công viên\n🔒 Khóa tình yêu digital\n🎲 Mystery Date — chọn ngẫu nhiên\n\nLink ở bio! 👆\n\n#SmileDateChallenge #83 #HenHo83 #DateIdeas #Valentine`,
    `🎭 Thử Mystery Date chưa?\n\nBấm 1 nút → app chọn lịch date bí ẩn\nReaction bạn gái priceless 😂❤️\n\n🔗 smile-date-8-3.vercel.app\n\n#SmileDateChallenge #MysteryDate #83 #CoupleGoals`,
    `🔒 Love Lock Digital\n\nNhập tên 2 người → khóa tình yêu vĩnh viễn trên bản đồ\nGiống cầu khóa Paris nhưng online!\n\n2,800+ cặp đôi đã khóa 💕\n\n#SmileDate #LoveLock #83 #CoupleChallenge`,
  ],
  facebook: [
    `🌹 Ngày 8-3 sắp tới — đã có plan hẹn hò chưa?\n\n📍 Smile Date 8-3 — Bản đồ hẹn hò thông minh:\n✅ Homestay couple gần bạn + giá giờ\n✅ Cafe, quán ăn lãng mạn\n✅ Mystery Date — chọn ngẫu nhiên lịch date\n✅ Love Lock — khóa tình yêu digital\n✅ Deals đặc biệt từ 150k\n\n🔥 Thử ngay: smile-date-8-3.vercel.app\n\n#SmileDate #83 #HenHo #NgayPhuNu`,
    `💑 Deal 8-3 cho các cặp đôi!\n\n🌹 Couple 2h — 150k (có hoa + trà)\n🌙 Couple Tối — 250k (premium)\n✨ Night Deal — 175k (-30%)\n\n📍 Xem tất cả trên Smile Date Map\n🔗 smile-date-8-3.vercel.app\n\nTag người yêu vào đây! 👇`,
    `🎭 AI nghĩ cho bạn lịch date hoàn hảo!\n\nChỉ cần:\n1️⃣ Chọn mood: Romantic / Adventure / Chill\n2️⃣ Bấm Surprise Me\n3️⃣ App tạo lịch trình 4 bước\n\nQuá tiện! Thử đi: smile-date-8-3.vercel.app`,
  ],
  zalo: [
    `Ê mai 8-3 hẹn hò ở đâu? 🌹\n\nCó app hay lắm, bản đồ hẹn hò — tìm homestay, cafe, công viên gần mình.\n\nCòn có tính năng khóa tình yêu digital nữa 🔒❤️\n\n👉 smile-date-8-3.vercel.app`,
    `Deal 8-3 ngon quá! 💕\n\nCouple 2h chỉ 150k, có hoa + trà luôn.\nHomestay gần Hồ Hoàn Kiếm.\n\nXem ở đây: smile-date-8-3.vercel.app`,
    `Thử cái Mystery Date này đi! 🎲\n\nBấm 1 nút nó chọn random lịch date cho mình — siêu vui!\n\nsmile-date-8-3.vercel.app`,
  ],
  gmaps: [
    `Smile Homestay Romantic — Homestay couple lãng mạn tại Hà Nội\n\n🌹 Phòng couple riêng tư, view hồ\n💕 Deal 8-3: Couple 2h từ 150k\n🔒 Tặng Love Lock digital cho cặp đôi\n☕ Trà nóng & hoa miễn phí\n📍 Gần Hồ Hoàn Kiếm\n\n🔗 Đặt phòng: smile-date-8-3.vercel.app`,
    `Couple Room — Không gian hẹn hò hoàn hảo\n\n✅ Riêng tư tuyệt đối\n✅ Decor lãng mạn, nến thơm\n✅ WiFi, AC, amenities đầy đủ\n✅ Giá từ 70k/giờ\n\n🌹 Deal đặc biệt ngày 8-3\n📱 smile-date-8-3.vercel.app`,
  ],
};

let botStats = { posts: 0, reach: 0, platforms: 0 };
const generatedContent = {};

function generateContent(platform) {
  const templates = botTemplates[platform];
  const content = templates[Math.floor(Math.random() * templates.length)];
  generatedContent[platform] = content;

  const textEl = document.getElementById(`${platform}-text`);
  textEl.textContent = content;
  textEl.classList.add('generated');

  const card = document.querySelector(`.bot-card[data-platform="${platform}"]`);
  card.classList.add('active');

  botStats.posts++;
  const reachMap = { tiktok: 50000, facebook: 15000, zalo: 5000, gmaps: 8000 };
  botStats.reach += reachMap[platform] || 10000;
  botStats.platforms = new Set([...Object.keys(generatedContent)]).size;
  updateBotStats();

  addLog(`✨ Đã tạo nội dung cho ${platform.toUpperCase()}`);
  showToast(`✨ Bot đã tạo nội dung cho ${platform}!`, 'success');
}

function copyBotContent(platform) {
  const content = generatedContent[platform];
  if (!content) {
    showToast('⚠️ Hãy tạo nội dung trước!', 'love');
    return;
  }
  navigator.clipboard.writeText(content).then(() => {
    showToast(`📋 Đã copy nội dung ${platform}! Dán vào app.`, 'success');
    addLog(`📋 Copy nội dung ${platform.toUpperCase()} → clipboard`);
  });
}

function launchPlatform(platform) {
  const urls = {
    tiktok: 'https://www.tiktok.com/upload',
    facebook: 'https://www.facebook.com/groups/feed/',
    zalo: 'https://chat.zalo.me/',
    gmaps: 'https://business.google.com/',
  };
  window.open(urls[platform], '_blank');
  addLog(`🚀 Mở ${platform.toUpperCase()} → sẵn sàng đăng`);
  showToast(`🚀 Đang mở ${platform}...`, 'success');
}

function generateAllContent() {
  const platforms = ['tiktok', 'facebook', 'zalo', 'gmaps'];
  platforms.forEach((p, i) => {
    setTimeout(() => {
      generateContent(p);
    }, i * 500);
  });
  addLog('⚡ Khởi tạo chiến dịch toàn bộ nền tảng');
}

function launchFullCampaign() {
  addLog('🚀 === CHIẾN DỊCH 8-3 LAUNCHED ===');

  const steps = [
    { delay: 0, msg: '⚡ Đang tạo nội dung cho 4 nền tảng...', action: () => generateAllContent() },
    { delay: 3000, msg: '📋 Auto-copy nội dung TikTok', action: () => copyBotContent('tiktok') },
    { delay: 4500, msg: '📱 Mở Facebook Groups', action: () => window.open('https://www.facebook.com/groups/feed/', '_blank') },
    { delay: 6000, msg: '💬 Mở Zalo Chat', action: () => window.open('https://chat.zalo.me/', '_blank') },
    { delay: 7500, msg: '🎬 Mở TikTok Upload', action: () => window.open('https://www.tiktok.com/upload', '_blank') },
    { delay: 9000, msg: '✅ Chiến dịch đã launch! Dán nội dung vào từng app.', action: () => { } },
  ];

  steps.forEach(step => {
    setTimeout(() => {
      addLog(step.msg);
      step.action();
    }, step.delay);
  });

  showToast('🚀 Chiến dịch 8-3 đang launch! Mở các nền tảng...', 'success');
}

function updateBotStats() {
  document.getElementById('bot-posts').textContent = botStats.posts;
  document.getElementById('bot-reach').textContent = botStats.reach >= 1000 ? (botStats.reach / 1000).toFixed(0) + 'k' : botStats.reach;
  document.getElementById('bot-platforms').textContent = botStats.platforms;
}

function addLog(message) {
  const log = document.getElementById('campaign-log');
  const now = new Date();
  const time = now.toTimeString().slice(0, 8);
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.innerHTML = `<span class="log-time">${time}</span> ${message}`;
  log.insertBefore(entry, log.firstChild);
}

// ── KEYBOARD (ESC to close modal) ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
