// ═══════════ SMILE BOT v2: HUMAN-LIKE BEHAVIOR ENGINE ═══════════
// Giống hành vi người thật: random timing, content variation, typing effect

const contentParts = {
    tiktok: {
        hooks: [
            '🌹 Ngày 8-3 hẹn hò ở đâu?',
            '💕 Bạn gái đòi đi date? Đây!',
            '🎭 Lần đầu thử date bí ẩn...',
            '🔒 Khóa tình yêu online?! Có thật!',
            '☕ Tìm chỗ hẹn hò gần mình trong 10s',
            '❤️ App này cứu date 8-3 của mình!',
        ],
        bodies: [
            'Mình vừa tìm được app siêu hay!\n📍 Bản đồ hẹn hò — café, homestay, công viên',
            'Bấm 1 nút → app chọn lịch date bí ẩn cho mình luôn 😂',
            'Nhập tên 2 người → khóa tình yêu vĩnh viễn trên bản đồ 🔒',
            'Có cả deal couple chỉ 150k/2h, homestay gần hồ luôn',
            'App tự tạo lịch trình 4 bước: cafe → dạo → ăn → homestay',
        ],
        ctas: [
            'Link ở bio! 👆',
            'Lưu lại dùng mai nhé!',
            'Share cho người yêu đi!',
            'Thử đi rồi kể mình nghe!',
            'Comment "date" mình gửi link 👇',
        ],
        hashtags: [
            '#SmileDateChallenge #83 #HenHo83 #DateIdeas',
            '#SmileDate #LoveLock #83 #CoupleGoals',
            '#HenHo #NgayPhuNu #DateNight #Romantic',
            '#MysteryDate #83 #CoupleChallenge #Valentine',
            '#SmileDate #HaNoi #DateMap #CouplesOfTikTok',
        ],
    },
    facebook: {
        hooks: [
            '🌹 Ngày 8-3 sắp tới — đã có plan chưa?',
            '💑 Ai chưa có ý tưởng hẹn hò 8-3 thì vào đây!',
            '🎭 Mystery Date — để app chọn chỗ hẹn hò cho bạn!',
            '🔒 2,800+ cặp đôi đã khóa tình yêu digital — bạn thì sao?',
            '☕ Deal 8-3 cho các cặp đôi — từ 150k thôi!',
        ],
        bodies: [
            '📍 Smile Date 8-3 — Bản đồ hẹn hò thông minh:\n✅ Homestay couple gần bạn + giá giờ\n✅ Cafe, quán ăn lãng mạn\n✅ Mystery Date — chọn ngẫu nhiên lịch date\n✅ Love Lock — khóa tình yêu digital',
            '💕 Deal siêu ngon:\n🌹 Couple 2h — 150k (hoa + trà)\n🌙 Couple Tối — 250k (premium)\n✨ Night — 175k (-30%)',
            '🎲 Chỉ cần:\n1️⃣ Chọn mood: Romantic / Adventure / Chill\n2️⃣ Bấm Surprise Me\n3️⃣ App tạo lịch trình 4 bước\nQuá tiện!',
        ],
        ctas: [
            '🔥 Thử ngay: smile-date-8-3.vercel.app\nTag người yêu vào! 👇',
            '📍 Xem tất cả trên Smile Date Map\n🔗 smile-date-8-3.vercel.app',
            'Link: smile-date-8-3.vercel.app\n\nShare cho bạn bè đi!',
        ],
    },
    zalo: {
        hooks: [
            'Ê mai 8-3 hẹn hò ở đâu? 🌹',
            'Có app hay lắm nè 💕',
            'Deal homestay 8-3 ngon quá!',
            'Thử cái Mystery Date này đi 🎲',
            'Khóa tình yêu digital chưa? 🔒',
        ],
        bodies: [
            'Bản đồ hẹn hò — tìm homestay, cafe, công viên gần mình.\nCòn có tính năng khóa tình yêu digital nữa 🔒❤️',
            'Couple 2h chỉ 150k, có hoa + trà luôn.\nHomestay gần Hồ Hoàn Kiếm.',
            'Bấm 1 nút nó chọn random lịch date cho mình — siêu vui!',
            'Nhập tên 2 người → khóa tình yêu vĩnh viễn. 2800 cặp đã khóa rồi!',
        ],
        ctas: [
            '👉 smile-date-8-3.vercel.app',
            'Xem ở đây: smile-date-8-3.vercel.app',
            'Link: smile-date-8-3.vercel.app\nThử đi!',
        ],
    },
    gmaps: {
        hooks: [
            'Smile Homestay Romantic — Homestay couple lãng mạn tại Hà Nội',
            'Couple Room — Không gian hẹn hò hoàn hảo',
            'Smile Date Homestay — Deal 8-3 cho cặp đôi',
        ],
        bodies: [
            '🌹 Phòng couple riêng tư, view hồ\n💕 Deal 8-3: Couple 2h từ 150k\n🔒 Tặng Love Lock digital cho cặp đôi\n☕ Trà nóng & hoa miễn phí\n📍 Gần Hồ Hoàn Kiếm',
            '✅ Riêng tư tuyệt đối\n✅ Decor lãng mạn, nến thơm\n✅ WiFi, AC, amenities đầy đủ\n✅ Giá từ 70k/giờ',
        ],
        ctas: [
            '🔗 Đặt phòng: smile-date-8-3.vercel.app',
            '📱 smile-date-8-3.vercel.app',
        ],
    },
};

// ── HUMANIZER ENGINE ──
const humanizer = {
    endings: ['nha', 'nhé', 'nè', 'hen', 'đi', 'luôn', 'nghennn', 'á'],
    fillers: ['À mà', 'Btw', 'Nói thật là', 'Fun fact:', 'Mình thấy', 'Ủa mà', 'Hmm'],
    emojis: ['😍', '🥰', '😂', '❤️', '💕', '✨', '🔥', '💗', '🌹', '😘', '👀', '🫶'],

    humanize(text) {
        // 20% chance: add filler at start
        if (Math.random() < 0.2) {
            const filler = this.fillers[Math.floor(Math.random() * this.fillers.length)];
            text = filler + ' ' + text.charAt(0).toLowerCase() + text.slice(1);
        }
        // 15% chance: add casual ending word
        if (Math.random() < 0.15) {
            const ending = this.endings[Math.floor(Math.random() * this.endings.length)];
            text = text.replace(/!/, ' ' + ending + '!');
        }
        // 25% chance: add extra emoji
        if (Math.random() < 0.25) {
            text += ' ' + this.emojis[Math.floor(Math.random() * this.emojis.length)];
        }
        return text;
    },
};

// ── CONTEXT-AWARE: thay đổi theo thời gian trong ngày ──
function getTimeContext() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return { period: 'sáng', mood: 'fresh', emoji: '☀️', greeting: 'Chào buổi sáng!' };
    if (hour >= 12 && hour < 17) return { period: 'chiều', mood: 'active', emoji: '🌤️', greeting: 'Chiều nay làm gì?' };
    if (hour >= 17 && hour < 21) return { period: 'tối', mood: 'romantic', emoji: '🌅', greeting: 'Tối nay date không?' };
    return { period: 'khuya', mood: 'intimate', emoji: '🌙', greeting: 'Date đêm nay?' };
}

// ── CONTENT COMPOSER: ghép hook + body + cta ngẫu nhiên ──
function generateHumanContent(platform) {
    const parts = contentParts[platform];
    const ctx = getTimeContext();
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];

    let hook = pick(parts.hooks);
    let body = pick(parts.bodies);
    let cta = pick(parts.ctas);

    // Context-aware: thêm greeting cho Zalo
    if (platform === 'zalo' && Math.random() < 0.4) {
        hook = ctx.emoji + ' ' + ctx.greeting + '\n' + hook;
    }

    let content = hook + '\n\n' + body + '\n\n' + cta;

    // Hashtags cho social
    if (platform === 'tiktok' && parts.hashtags) content += '\n\n' + pick(parts.hashtags);
    if (platform === 'facebook') content += '\n\n#SmileDate #83 #HenHo #NgayPhuNu';

    // Humanize: thêm filler, emoji, casual endings
    return humanizer.humanize(content);
}

// ── TYPING SIMULATION: gõ từng chữ như người thật ──
function typeContent(element, text, callback) {
    element.textContent = '';
    element.classList.add('generated');
    let i = 0;
    const baseSpeed = 8 + Math.random() * 12;

    function typeChar() {
        if (i < text.length) {
            // Burst typing: đôi khi gõ 2-3 ký tự cùng lúc
            const burst = Math.random() < 0.3 ? Math.min(3, text.length - i) : 1;
            element.textContent += text.substring(i, i + burst);
            i += burst;

            // Variable delays: chậm lại ở dấu xuống dòng, nhanh ở giữa từ
            let delay = baseSpeed;
            if (text[i - 1] === '\n') delay = 80 + Math.random() * 120;
            else if ('.!?'.includes(text[i - 1] || '')) delay = 50 + Math.random() * 80;
            else if (Math.random() < 0.05) delay = 150 + Math.random() * 200; // random pause

            setTimeout(typeChar, delay);
        } else {
            if (callback) callback();
        }
    }
    typeChar();
}

// ── BOT STATE ──
let botStats = { posts: 0, reach: 0, platforms: 0 };
const generatedContent = {};
let autoRunning = false;

// ── OVERRIDE: generateContent with human behavior ──
window.generateContent = function (platform) {
    const content = generateHumanContent(platform);
    generatedContent[platform] = content;

    const textEl = document.getElementById(platform + '-text');
    const card = document.querySelector('.bot-card[data-platform="' + platform + '"]');

    // Phase 1: "thinking" — gi ống người đang nghĩ
    textEl.textContent = '🤔 Đang nghĩ nội dung...';
    textEl.classList.add('generated');

    // Phase 2: random delay trước khi gõ (1-3s)
    const thinkDelay = 800 + Math.random() * 2000;

    setTimeout(function () {
        // Phase 3: typing effect
        typeContent(textEl, content, function () {
            card.classList.add('active');

            botStats.posts++;
            const reachBase = { tiktok: 50000, facebook: 15000, zalo: 5000, gmaps: 8000 };
            const variation = 0.7 + Math.random() * 0.6; // ±30% random reach
            botStats.reach += Math.round((reachBase[platform] || 10000) * variation);
            botStats.platforms = Object.keys(generatedContent).length;
            updateBotStats();

            addLog('✨ Tạo nội dung ' + platform.toUpperCase() + ' (' + getTimeContext().period + ')');
        });
    }, thinkDelay);

    showToast('🤔 Bot đang suy nghĩ nội dung ' + platform + '...', 'success');
};

// ── OVERRIDE: copyBotContent ──
window.copyBotContent = function (platform) {
    const content = generatedContent[platform];
    if (!content) {
        showToast('⚠️ Hãy tạo nội dung trước!', 'love');
        return;
    }
    navigator.clipboard.writeText(content).then(function () {
        showToast('📋 Đã copy nội dung ' + platform + '!', 'success');
        addLog('📋 Copy ' + platform.toUpperCase() + ' → clipboard');
    });
};

// ── OVERRIDE: launchPlatform with human delay ──
window.launchPlatform = function (platform) {
    const urls = {
        tiktok: 'https://www.tiktok.com/upload',
        facebook: 'https://www.facebook.com/groups/feed/',
        zalo: 'https://chat.zalo.me/',
        gmaps: 'https://business.google.com/',
    };
    const delay = 300 + Math.random() * 700;
    setTimeout(function () {
        window.open(urls[platform], '_blank');
        addLog('🚀 Mở ' + platform.toUpperCase());
    }, delay);
    showToast('🚀 Đang mở ' + platform + '...', 'success');
};

// ── OVERRIDE: generateAllContent with random delays ──
window.generateAllContent = function () {
    const platforms = ['tiktok', 'facebook', 'zalo', 'gmaps'];
    let totalDelay = 0;
    platforms.forEach(function (p) {
        const humanDelay = 1500 + Math.random() * 2500;
        totalDelay += humanDelay;
        setTimeout(function () { window.generateContent(p); }, totalDelay);
    });
    addLog('⚡ Bot bắt đầu tạo nội dung (human mode)...');
};

// ── OVERRIDE: launchFullCampaign with human timing ──
window.launchFullCampaign = function () {
    if (autoRunning) {
        showToast('⚠️ Chiến dịch đang chạy!', 'love');
        return;
    }
    autoRunning = true;
    const ctx = getTimeContext();

    addLog('🚀 ═══ CHIẾN DỊCH 8-3 LAUNCHED ═══');
    addLog('📊 Context: ' + ctx.emoji + ' ' + ctx.period + ' — mood: ' + ctx.mood);

    const steps = [
        { delay: 0, msg: '🤖 Bot đang khởi động...' },
        { delay: 1500 + Math.random() * 1000, msg: '🧠 Phân tích context & thời điểm...' },
        { delay: 3500 + Math.random() * 2000, msg: '✨ Tạo nội dung TikTok (human mode)...', action: function () { window.generateContent('tiktok'); } },
        { delay: 8000 + Math.random() * 3000, msg: '✨ Tạo nội dung Facebook...', action: function () { window.generateContent('facebook'); } },
        { delay: 14000 + Math.random() * 3000, msg: '✨ Tạo nội dung Zalo...', action: function () { window.generateContent('zalo'); } },
        { delay: 20000 + Math.random() * 3000, msg: '✨ Tạo nội dung Google Maps...', action: function () { window.generateContent('gmaps'); } },
        { delay: 26000 + Math.random() * 2000, msg: '📋 Auto-copy TikTok caption...', action: function () { window.copyBotContent('tiktok'); } },
        { delay: 30000, msg: '✅ Chiến dịch hoàn tất! Dán nội dung vào từng app.', action: function () { autoRunning = false; } },
    ];

    steps.forEach(function (step) {
        setTimeout(function () {
            addLog(step.msg);
            if (step.action) step.action();
        }, step.delay);
    });

    showToast('🤖 Bot đang chạy chiến dịch... giống người thật!', 'success');
};

// ── OVERRIDE: updateBotStats with animation ──
window.updateBotStats = function () {
    const postsEl = document.getElementById('bot-posts');
    const reachEl = document.getElementById('bot-reach');
    const platEl = document.getElementById('bot-platforms');

    postsEl.textContent = botStats.posts;
    platEl.textContent = botStats.platforms;
    reachEl.textContent = botStats.reach >= 1000 ? (botStats.reach / 1000).toFixed(0) + 'k' : botStats.reach;
};

// ── OVERRIDE: addLog ──
window.addLog = function (message) {
    const log = document.getElementById('campaign-log');
    if (!log) return;
    const now = new Date();
    const time = now.toTimeString().slice(0, 8);
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = '<span class="log-time">' + time + '</span> ' + message;
    log.insertBefore(entry, log.firstChild);
};

console.log('🤖 Smile Bot v2 loaded — Human-Like Behavior Engine active');
console.log('📊 Context:', getTimeContext());
