let products = [
    {
        id: 1,
        title: "Premium Mexanik Klaviatura K3 RGB",
        price: "450 000 so'm",
        platform: "Taobao",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
        isLiked: false
    },
    {
        id: 2,
        title: "Smart Air Purifier - 2024 New Model",
        price: "1 250 000 so'm",
        platform: "Taobao",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80",
        isLiked: false
    },
    {
        id: 3,
        title: "Luxe Edition Urban Sneakers",
        price: "680 000 so'm",
        platform: "1688",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        isLiked: false
    },
    {
        id: 4,
        title: "Professional 4K Mirrorless Camera Kit",
        price: "12 400 000 so'm",
        platform: "1688",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        isLiked: false
    }
];

let activePlatform = "Taobao";
let likedCount = 0;

// DOM ELEMENTLAR
const btnTaobao = document.getElementById("btn-taobao");
const btn1688 = document.getElementById("btn-1688");
const searchInput = document.getElementById("search-input");
const imageUpload = document.getElementById("image-upload");
const voiceSearchBtn = document.getElementById("voice-search-btn");
const likeCountBadge = document.getElementById("like-count");
const productList = document.getElementById("product-list");

// 1. PLATFORMA ALMASHTIRISH (Taobao / 1688)
function setPlatform(platform) {
    activePlatform = platform;
    if (platform === "Taobao") {
        btnTaobao.className = "px-3 py-1 text-xs font-semibold rounded-lg bg-red-600 text-white transition-all";
        btn1688.className = "px-3 py-1 text-xs font-semibold rounded-lg text-zinc-400 hover:text-white transition-all";
    } else {
        btn1688.className = "px-3 py-1 text-xs font-semibold rounded-lg bg-red-600 text-white transition-all";
        btnTaobao.className = "px-3 py-1 text-xs font-semibold rounded-lg text-zinc-400 hover:text-white transition-all";
    }
    renderProducts();
}

btnTaobao.addEventListener("click", () => setPlatform("Taobao"));
btn1688.addEventListener("click", () => setPlatform("1688"));

// 2. MAHSULOTLARNI RENDER QILISH
function renderProducts(query = "") {
    productList.innerHTML = "";

    const filteredProducts = products.filter(p => {
        const matchesPlatform = p.platform === activePlatform;
        const matchesSearch = p.title.toLowerCase().includes(query.toLowerCase());
        return matchesPlatform && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        productList.innerHTML = `<p class="text-zinc-500 col-span-full text-center py-8">Mahsulot topilmadi.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-700 transition";

        card.innerHTML = `
      <div class="relative h-48 overflow-hidden bg-zinc-800">
        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
        <span class="absolute top-2 left-2 bg-black/60 text-xs px-2 py-0.5 rounded text-zinc-300">${product.platform}</span>
        
        <!-- LIKE TUGMASI -->
        <button onclick="toggleLike(${product.id})" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black transition">
          <i class="${product.isLiked ? 'fa-solid text-red-500' : 'fa-regular'} fa-heart"></i>
        </button>
      </div>

      <div class="p-4">
        <h3 class="font-medium text-sm text-zinc-200 line-clamp-2 mb-2">${product.title}</h3>
        <div class="text-lg font-bold text-white mb-3">${product.price}</div>
        <button class="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs py-2 rounded-lg transition font-medium">
          Savatga qo'shish
        </button>
      </div>
    `;

        productList.appendChild(card);
    });
}

window.toggleLike = function (id) {
    const product = products.find(p => p.id === id);
    if (product) {
        product.isLiked = !product.isLiked;

        if (product.isLiked) {
            likedCount++;
        } else {
            likedCount--;
        }

        likeCountBadge.textContent = likedCount;
        renderProducts(searchInput.value);
    }
};

// 4. MATN QIDIRUVI (Input)
searchInput.addEventListener("input", (e) => {
    renderProducts(e.target.value);
});

// 5. RASM BILAN QIDIRUV
imageUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        alert(`"${file.name}" rasmi bo'yicha qidiruv ishga tushirildi!`);
        // Bu yerga backend image-search API chaqiruvini ulasangiz bo'ladi.
    }
});

// 6. OVOZ BILAN QIDIRUV (Web Speech API)
voiceSearchBtn.addEventListener("click", () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Brauzeringiz ovozli qidiruvni qo'llab-quvvatlamaydi.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "uz-UZ";
    recognition.start();

    voiceSearchBtn.classList.add("text-red-500", "animate-pulse");

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        renderProducts(transcript);
        voiceSearchBtn.classList.remove("text-red-500", "animate-pulse");
    };

    recognition.onerror = () => {
        voiceSearchBtn.classList.remove("text-red-500", "animate-pulse");
        alert("Ovozni tanib bo'lmadi, qaytadan urinib ko'ring.");
    };

    recognition.onend = () => {
        voiceSearchBtn.classList.remove("text-red-500", "animate-pulse");
    };
});

renderProducts();

// KALKULYATOR MANTIG'I
let currentShippingType = 'avia';
const aviaRatePerKg = 9.6;     // 2.5 kg * 9.6 = 24.00$
const quruqlikRatePerKg = 6.8;  // 2.5 kg * 6.8 = 17.00$

const btnAvia = document.getElementById('btn-avia');
const btnQuruqlik = document.getElementById('btn-quruqlik');
const weightInput = document.getElementById('weight-input');
const totalPriceEl = document.getElementById('total-price');

function calculatePrice() {
    const weight = parseFloat(weightInput.value) || 0;
    let rate = currentShippingType === 'avia' ? aviaRatePerKg : quruqlikRatePerKg;
    let total = weight * rate;

    totalPriceEl.textContent = `~$${total.toFixed(2)}`;
}

function selectShipping(type) {
    currentShippingType = type;

    if (type === 'avia') {
        btnAvia.className = "flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold border border-amber-500/50 bg-amber-500/10 text-amber-400 transition-all";
        btnQuruqlik.className = "flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white transition-all";
    } else {
        btnQuruqlik.className = "flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold border border-amber-500/50 bg-amber-500/10 text-amber-400 transition-all";
        btnAvia.className = "flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white transition-all";
    }

    calculatePrice();
}

// Weight Input o'zgarganda qayta hisoblash
if (weightInput) {
    weightInput.addEventListener('input', calculatePrice);
}

// FAQ AKKORDEON FUNKSIYASI
function toggleFaq(button) {
    const item = button.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const icon = button.querySelector('i');

    const isOpen = !answer.classList.contains('hidden');

    // Barcha savollarni yopish (optional)
    document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.faq-item i').forEach(el => el.classList.remove('rotate-180'));

    if (!isOpen) {
        answer.classList.remove('hidden');
        icon.classList.add('rotate-180');
    }
}

// BEPUL KONSULTATSIYA FORMASI
function handleConsultation(event) {
    event.preventDefault();
    alert("Rahmat! Tez orada mutaxassisimiz siz bilan bog'lanadi.");
    event.target.reset();
}

// ==========================================
// 1. HEADER USER PROFILE VA BADGE HISOB-KITOBLARI
// ==========================================
function updateHomeHeader() {
    // LocalStorage ma'lumotlarini olish
    const userData = JSON.parse(localStorage.getItem("karvon_user"));
    const cartList = JSON.parse(localStorage.getItem("karvon_cart")) || [];
    const likedList = JSON.parse(localStorage.getItem("karvon_likes")) || [];

    // 1. Hisoblagichlarni yangilash (Like & Cart count)
    const likeBadge = document.getElementById("like-count");
    const cartBadge = document.getElementById("cart-count") || document.querySelector(".fa-bag-shopping + span");

    if (likeBadge) likeBadge.textContent = likedList.length;
    if (cartBadge) cartBadge.textContent = cartList.length;

    // 2. Foydalanuvchi profili / Kirish tugmasi
    const headerUserContainer = document.getElementById("header-user-container");
    if (!headerUserContainer) return;

    if (userData && userData.firstName) {
        // RO'YXATDAN O'TGAN BO'LSA
        const userAvatar = userData.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80";

        headerUserContainer.innerHTML = `
            <a href="./pages/user.html" class="flex items-center gap-2 hover:opacity-80 transition bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-xl">
                <img src="${userAvatar}" alt="${userData.firstName}" class="w-6 h-6 rounded-full object-cover border border-amber-500">
                <span class="text-xs font-semibold text-zinc-200 hidden sm:inline">${userData.firstName}</span>
            </a>
        `;
    } else {
        // RO'YXATDAN O'TMAGAN BO'LSA
        headerUserContainer.innerHTML = `
            <a href="./pages/user.html">
                <button class="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-1.5 rounded-lg transition">
                    Kirish
                </button>   
            </a>
        `;
    }
}

// Sahifa yuklanganda ishga tushirish
document.addEventListener("DOMContentLoaded", () => {
    updateHomeHeader();
});