let products = [
    // ================= TAOBAO (10 TA) =================
    {
        id: 1,
        title: "Premium Mexanik Klaviatura K3 RGB",
        price: "450 000 so'm",
        platform: "Taobao",
        category: "Gadjetlar",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
        isLiked: false
    },
    {
        id: 2,
        title: "Smart Air Purifier - 2024 New Model",
        price: "1 250 000 so'm",
        platform: "Taobao",
        category: "Maishiy texnika",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80",
        isLiked: false
    },
    {
        id: 3,
        title: "Wireless Gaming Mouse RGB Lighting",
        price: "280 000 so'm",
        platform: "Taobao",
        category: "Gadjetlar",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
        isLiked: false
    },
    {
        id: 4,
        title: "Minimalist Desk LED Lamp with Wireless Charger",
        price: "320 000 so'm",
        platform: "Taobao",
        category: "Gadjetlar",
        image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=500&q=80",
        isLiked: false
    },
    {
        id: 5,
        title: "Noise Cancelling Wireless Headphones Pro",
        price: "890 000 so'm",
        platform: "Taobao",
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        isLiked: false
    },
    {
        id: 6,
        title: "Smartwatch Ultra Series 9 AMOLED Display",
        price: "550 000 so'm",
        platform: "Taobao",
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        isLiked: false
    },
    {
        id: 7,
        title: "Portable Bluetooth Speaker Waterproof IPX7",
        price: "380 000 so'm",
        platform: "Taobao",
        category: "Gadjetlar",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
        isLiked: false
    },
    {
        id: 8,
        title: "Ergonomic Office Chair Mesh Back Cushion",
        price: "1 100 000 so'm",
        platform: "Taobao",
        category: "Mebel",
        image: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?w=500&q=80",
        isLiked: false
    },
    {
        id: 9,
        title: "HD Web Camera 1080P with Built-in Microphone",
        price: "210 000 so'm",
        platform: "Taobao",
        category: "Gadjetlar",
        image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&q=80",
        isLiked: false
    },
    {
        id: 10,
        title: "Electric Espresso Coffee Maker Portable",
        price: "670 000 so'm",
        platform: "Taobao",
        category: "Maishiy texnika",
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80",
        isLiked: false
    },

    // ================= 1688 (10 TA) =================
    {
        id: 11,
        title: "Luxe Edition Urban Sneakers",
        price: "680 000 so'm",
        platform: "1688",
        category: "Kiyimlar",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        isLiked: false
    },
    {
        id: 12,
        title: "Professional 4K Mirrorless Camera Kit",
        price: "12 400 000 so'm",
        platform: "1688",
        category: "Gadjetlar",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        isLiked: false
    },
    {
        id: 13,
        title: "Waterproof Travel Backpack with USB Port",
        price: "240 000 so'm",
        platform: "1688",
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        isLiked: false
    },
    {
        id: 14,
        title: "Classic Leather Men's Jacket Vintage Style",
        price: "950 000 so'm",
        platform: "1688",
        category: "Kiyimlar",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        isLiked: false
    },
    {
        id: 15,
        title: "Polarized Sunglasses UV400 Protection",
        price: "150 000 so'm",
        platform: "1688",
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        isLiked: false
    },
    {
        id: 16,
        title: "Stainless Steel Smart Thermos Bottle 500ml",
        price: "110 000 so'm",
        platform: "1688",
        category: "Maishiy texnika",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
        isLiked: false
    },
    {
        id: 17,
        title: "Sport Fitness Smart Band Heart Rate Tracker",
        price: "180 000 so'm",
        platform: "1688",
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
        isLiked: false
    },
    {
        id: 18,
        title: "Professional Drone 4K Camera GPS Quadcopter",
        price: "3 450 000 so'm",
        platform: "1688",
        category: "Gadjetlar",
        image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=500&q=80",
        isLiked: false
    },
    {
        id: 19,
        title: "Modern Mechanical Wrist Watch Automatic",
        price: "1 150 000 so'm",
        platform: "1688",
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80",
        isLiked: false
    },
    {
        id: 20,
        title: "Ergonomic Gaming Chair PU Leather",
        price: "1 650 000 so'm",
        platform: "1688",
        category: "Mebel",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&q=80",
        isLiked: false
    }
];

let activePlatform = "Taobao";
let activeCategory = "Barchasi";

// LocalStorage'dan like va cart ma'lumotlarini yuklash
function getLikedIds() {
    return JSON.parse(localStorage.getItem("karvon_likes")) || [];
}
function getCart() {
    return JSON.parse(localStorage.getItem("karvon_cart")) || [];
}
function saveLikedIds(likedIds) {
    localStorage.setItem("karvon_likes", JSON.stringify(likedIds));
}
function saveCart(cart) {
    localStorage.setItem("karvon_cart", JSON.stringify(cart));
}

// products massividagi isLiked holatini localStorage bilan sinxronlash
function syncLikesFromStorage() {
    const likedIds = getLikedIds();
    products.forEach(p => {
        p.isLiked = likedIds.includes(p.id);
    });
}

// DOM ELEMENTLAR
const btnTaobao = document.getElementById("btn-taobao");
const btn1688 = document.getElementById("btn-1688");
const searchInput = document.getElementById("search-input");
const imageUpload = document.getElementById("image-upload");
const voiceSearchBtn = document.getElementById("voice-search-btn");
const likeCountBadge = document.getElementById("like-count");
const productList = document.getElementById("product-list");
const categoryGrid = document.getElementById("category-grid");

// 1. PLATFORMA ALMASHTIRISH (Taobao / 1688)
function setPlatform(platform) {
    activePlatform = platform;
    if (platform === "Taobao") {
        btnTaobao.className = "px-2.5 sm:px-3 py-1 text-xs font-semibold rounded-lg bg-red-600 text-white transition-all whitespace-nowrap";
        btn1688.className = "px-2.5 sm:px-3 py-1 text-xs font-semibold rounded-lg text-zinc-400 hover:text-white transition-all whitespace-nowrap";
    } else {
        btn1688.className = "px-2.5 sm:px-3 py-1 text-xs font-semibold rounded-lg bg-red-600 text-white transition-all whitespace-nowrap";
        btnTaobao.className = "px-2.5 sm:px-3 py-1 text-xs font-semibold rounded-lg text-zinc-400 hover:text-white transition-all whitespace-nowrap";
    }
    renderProducts(searchInput ? searchInput.value : "");
}

if (btnTaobao) btnTaobao.addEventListener("click", () => setPlatform("Taobao"));
if (btn1688) btn1688.addEventListener("click", () => setPlatform("1688"));

// 1.5 KATEGORIYA BO'YICHA FILTRLASH
// Endi funksiya to'g'ridan-to'g'ri elementning o'zini (this) qabul qiladi,
// shu tufayli apostrofli nomlar (masalan "O'yinchoqlar") onclick ichida muammo chiqarmaydi.
window.setCategory = function (el) {
    const category = el.getAttribute("data-category");

    // Xuddi shu kategoriya ustiga qayta bosilsa -> "Barchasi"ga qaytadi
    activeCategory = (activeCategory === category && category !== "Barchasi") ? "Barchasi" : category;

    if (categoryGrid) {
        categoryGrid.querySelectorAll(".category-item").forEach(item => {
            const isActive = item.getAttribute("data-category") === activeCategory;
            item.classList.toggle("active", isActive);
            if (isActive) {
                item.classList.remove("bg-zinc-900/80", "border-zinc-800/80", "text-zinc-300", "hover:border-zinc-700");
                item.classList.add("bg-amber-500/10", "border-amber-500/50", "text-amber-400");
            } else {
                item.classList.remove("bg-amber-500/10", "border-amber-500/50", "text-amber-400");
                item.classList.add("bg-zinc-900/80", "border-zinc-800/80", "text-zinc-300", "hover:border-zinc-700");
            }
        });
    }

    renderProducts(searchInput ? searchInput.value : "");

    if (productList) {
        productList.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

// 1.6 HEADERDAGI KATEGORIYA DROPDOWN MENYUSI
const categoryDropdownMenu = document.getElementById("category-dropdown-menu");
const categoryMenuChevron = document.getElementById("category-menu-chevron");

// category-grid bilan bir xil ro'yxat (nom + ikonka)
const headerCategoriesList = [
    { name: "Barchasi", icon: "fa-border-all" },
    { name: "Gadjetlar", icon: "fa-mobile-screen" },
    { name: "Kiyimlar", icon: "fa-shirt" },
    { name: "Mebel", icon: "fa-couch" },
    { name: "Noutbuklar", icon: "fa-laptop" },
    { name: "Maishiy texnika", icon: "fa-blender" },
    { name: "O'yinchoqlar", icon: "fa-gamepad" },
    { name: "Aksessuarlar", icon: "fa-clock" }
];

function renderCategoryDropdown() {
    if (!categoryDropdownMenu) return;

    categoryDropdownMenu.innerHTML = headerCategoriesList.map(cat => {
        const isActive = activeCategory === cat.name;
        return `
            <button onclick="selectCategoryFromHeader('${cat.name.replace(/'/g, "\\'")}')"
                class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition ${isActive ? 'text-amber-400 bg-amber-500/10' : 'text-zinc-300 hover:bg-zinc-800'}">
                <i class="fa-solid ${cat.icon} w-4 text-center text-xs"></i>
                <span>${cat.name}</span>
            </button>
        `;
    }).join("");
}

window.toggleCategoryMenu = function (event) {
    if (event) event.stopPropagation();
    if (!categoryDropdownMenu) return;

    const isHidden = categoryDropdownMenu.classList.contains("hidden");
    if (isHidden) {
        renderCategoryDropdown();
    }
    categoryDropdownMenu.classList.toggle("hidden");
    if (categoryMenuChevron) categoryMenuChevron.classList.toggle("rotate-180");
};

window.selectCategoryFromHeader = function (categoryName) {
    // Pastdagi kategoriya grididan mos elementni topib, mavjud setCategory logikasidan foydalanamiz
    const targetEl = categoryGrid
        ? Array.from(categoryGrid.querySelectorAll(".category-item")).find(
            item => item.getAttribute("data-category") === categoryName
        )
        : null;

    if (targetEl) {
        setCategory(targetEl);
    } else {
        activeCategory = categoryName;
        renderProducts(searchInput ? searchInput.value : "");
        if (productList) productList.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (categoryDropdownMenu) categoryDropdownMenu.classList.add("hidden");
    if (categoryMenuChevron) categoryMenuChevron.classList.remove("rotate-180");
};

// Menyudan tashqariga bosilganda uni yopish
document.addEventListener("click", (e) => {
    if (!categoryDropdownMenu || categoryDropdownMenu.classList.contains("hidden")) return;

    const isClickInsideMenu = categoryDropdownMenu.contains(e.target);
    const isClickOnButton = e.target.closest("#btn-categories-mobile, #btn-categories-desktop");

    if (!isClickInsideMenu && !isClickOnButton) {
        categoryDropdownMenu.classList.add("hidden");
        if (categoryMenuChevron) categoryMenuChevron.classList.remove("rotate-180");
    }
});

// 2. MAHSULOTLARNI RENDER QILISH
function renderProducts(query = "") {
    if (!productList) return;
    productList.innerHTML = "";

    const filteredProducts = products.filter(p => {
        const matchesPlatform = p.platform === activePlatform;
        const matchesCategory = activeCategory === "Barchasi" || p.category === activeCategory;
        const matchesSearch = p.title.toLowerCase().includes(query.toLowerCase());
        return matchesPlatform && matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        productList.innerHTML = `<p class="text-zinc-500 col-span-full text-center py-8">"${activeCategory}" kategoriyasida ${activePlatform} platformasida mahsulot topilmadi.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-700 transition flex flex-col justify-between";

        card.innerHTML = `
      <div>
        <div class="relative h-48 overflow-hidden bg-zinc-800">
          <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          <span class="absolute top-2 left-2 bg-black/60 text-xs px-2 py-0.5 rounded text-zinc-300">${product.platform}</span>
 
          <button onclick="toggleLike(${product.id})" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black transition">
            <i class="${product.isLiked ? 'fa-solid text-red-500' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
 
        <div class="p-4">
          <span class="inline-block text-[10px] text-amber-500 font-semibold uppercase tracking-wide mb-1">${product.category}</span>
          <h3 class="font-medium text-sm text-zinc-200 line-clamp-2 mb-2">${product.title}</h3>
          <div class="text-lg font-bold text-white mb-3">${product.price}</div>
        </div>
      </div>
      <div class="px-4 pb-4">
        <button onclick="addToCart(${product.id})" class="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs py-2 rounded-lg transition font-medium">
          Savatga qo'shish
        </button>
      </div>
    `;

        productList.appendChild(card);
    });
}

// 3. LIKE FUNKSIYASI
window.toggleLike = function (id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    product.isLiked = !product.isLiked;

    let likedIds = getLikedIds();
    if (product.isLiked) {
        if (!likedIds.includes(id)) likedIds.push(id);
    } else {
        likedIds = likedIds.filter(likedId => likedId !== id);
    }
    saveLikedIds(likedIds);

    if (likeCountBadge) likeCountBadge.textContent = likedIds.length;

    renderProducts(searchInput ? searchInput.value : "");
};

// 4. SAVATGA QO'SHISH FUNKSIYASI (alertsiz)
window.addToCart = function (id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    let cart = getCart();
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            platform: product.platform,
            qty: 1
        });
    }
    saveCart(cart);

    const cartBadge = document.querySelector(".fa-bag-shopping")?.parentElement?.querySelector("span");
    if (cartBadge) cartBadge.textContent = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
};

// 5. MATN QIDIRUVI (Input)
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        renderProducts(e.target.value);
    });
}

// 6. RASM BILAN QIDIRUV
if (imageUpload) {
    imageUpload.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log(`"${file.name}" rasmi bo'yicha qidiruv ishga tushirildi!`);
            // Bu yerga backend image-search API chaqiruvini ulasangiz bo'ladi.
        }
    });
}

// 7. OVOZ BILAN QIDIRUV (Web Speech API)
if (voiceSearchBtn) {
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
}

// KALKULYATOR MANTIG'I
let currentShippingType = 'avia';
const aviaRatePerKg = 9.6;
const quruqlikRatePerKg = 6.8;

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

if (weightInput) {
    weightInput.addEventListener('input', calculatePrice);
}

// FAQ AKKORDEON FUNKSIYASI
function toggleFaq(button) {
    const item = button.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const icon = button.querySelector('i');

    const isOpen = !answer.classList.contains('hidden');

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

// HEADER USER PROFILE VA BADGE HISOB-KITOBLARI
function updateHomeHeader() {
    const userData = JSON.parse(localStorage.getItem("karvon_user"));
    const cartList = getCart();
    const likedList = getLikedIds();

    if (likeCountBadge) likeCountBadge.textContent = likedList.length;
    const cartBadge = document.querySelector(".fa-bag-shopping")?.parentElement?.querySelector("span");
    if (cartBadge) cartBadge.textContent = cartList.reduce((sum, item) => sum + (item.qty || 1), 0);

    const headerUserContainer = document.getElementById("header-user-container");
    if (!headerUserContainer) return;

    if (userData && userData.firstName) {
        const userAvatar = userData.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80";
        headerUserContainer.innerHTML = `
            <a href="./pages/user.html" class="flex items-center gap-2 hover:opacity-80 transition bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-xl">
                <img src="${userAvatar}" alt="${userData.firstName}" class="w-6 h-6 rounded-full object-cover border border-amber-500">
                <span class="text-xs font-semibold text-zinc-200 hidden sm:inline">${userData.firstName}</span>
            </a>
        `;
    } else {
        headerUserContainer.innerHTML = `
            <a href="./pages/user.html">
                <button class="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-1.5 rounded-lg transition">
                    Kirish
                </button>   
            </a>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    syncLikesFromStorage();
    updateHomeHeader();
    renderProducts();
});