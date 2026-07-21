// ==========================================
// 1. MAHSULOTLAR BAZASI
// ==========================================
const catalogProducts = [
    {
        id: 1,
        title: "Premium Noise Cancelling Headphones - XM Series",
        basePrice: 1850000,
        platform: "Taobao",
        category: "Gadjetlar",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    },
    {
        id: 2,
        title: "Studio Master Black Edition - High Fidelity 5.0 Wireless",
        basePrice: 1240000,
        platform: "1688",
        category: "Gadjetlar",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80"
    },
    {
        id: 3,
        title: "Imperial Gold Series - True Wireless Earbuds Gen 2",
        basePrice: 1420000,
        platform: "Alibaba",
        category: "Gadjetlar",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
    },
    {
        id: 4,
        title: "Ultra-Thin Gaming Laptop Intel i7 / 16GB RAM",
        basePrice: 9500000,
        platform: "Taobao",
        category: "Noutbuklar",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80"
    },
    {
        id: 5,
        title: "Luxe Edition Urban Sneakers - 2024 Collection",
        basePrice: 680000,
        platform: "Pinduoduo",
        category: "Kiyimlar",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
    },
    {
        id: 6,
        title: "Oversized Minimalist Cotton Hoodie - Street Style",
        basePrice: 320000,
        platform: "1688",
        category: "Kiyimlar",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80"
    },
    {
        id: 7,
        title: "Smart Watch Ultra - AMOLED Display & Health Tracker",
        basePrice: 550000,
        platform: "Pinduoduo",
        category: "Aksessuarlar",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    },
    {
        id: 8,
        title: "Ergonomic Office Chair - Breathable Mesh Support",
        basePrice: 1450000,
        platform: "1688",
        category: "Mebel",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=500&q=80"
    }
];

// ==========================================
// 2. STATE VA LOCALSTORAGE DASTLABKI ISHGA TUSHIRISH
// ==========================================
let selectedPlatform = "all";
let currentShipping = "AVIA";

// LocalStorage'dan o'qish yoki bo'sh massiv ochish
let cartList = JSON.parse(localStorage.getItem("karvon_cart")) || [];
let likedList = JSON.parse(localStorage.getItem("karvon_likes")) || [];

// DOM ELEMENTLARI
const catalogGrid = document.getElementById("catalog-grid");
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const ratingCheckbox = document.getElementById("rating-4plus");
const btnAvia = document.getElementById("btn-avia");
const btnGround = document.getElementById("btn-ground");
const productCountText = document.getElementById("product-count-text");
const searchInput = document.getElementById("search-input");
const voiceSearchBtn = document.getElementById("voice-search-btn");
const imageUploadInput = document.getElementById("image-upload");

// Header hisoblagichlarini yangilash funksiyasi
function updateHeaderBadges() {
    const cartBadge = document.querySelector(".fa-bag-shopping + span");
    const likeBadge = document.getElementById("like-count");

    if (cartBadge) cartBadge.textContent = cartList.length;
    if (likeBadge) likeBadge.textContent = likedList.length;
}

// ==========================================
// 3. FILTER MANTIG'I
// ==========================================
window.filterByPlatform = function (platform) {
    selectedPlatform = platform;
    applyFilters();
};

window.setShipping = function (type) {
    currentShipping = type;
    if (type === "AVIA") {
        btnAvia.className = "py-2.5 rounded-xl text-xs font-bold border border-amber-500 bg-amber-500/10 text-amber-400 flex items-center justify-center gap-1.5 transition";
        btnGround.className = "py-2.5 rounded-xl text-xs font-bold border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 transition";
    } else {
        btnGround.className = "py-2.5 rounded-xl text-xs font-bold border border-amber-500 bg-amber-500/10 text-amber-400 flex items-center justify-center gap-1.5 transition";
        btnAvia.className = "py-2.5 rounded-xl text-xs font-bold border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 transition";
    }
    applyFilters();
};

window.applyFilters = function () {
    const minP = parseFloat(minPriceInput?.value) || 0;
    const maxP = parseFloat(maxPriceInput?.value) || Infinity;
    const onlyHighRated = ratingCheckbox?.checked || false;
    const query = searchInput?.value.toLowerCase().trim() || "";

    const multiplier = currentShipping === "AVIA" ? 1.07 : 1.04;

    const filtered = catalogProducts.filter(item => {
        const matchesPlatform = selectedPlatform === "all" || item.platform === selectedPlatform;
        const matchesSearch = item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
        const finalPrice = item.basePrice * multiplier;
        const matchesPrice = finalPrice >= minP && finalPrice <= maxP;
        const matchesRating = !onlyHighRated || item.rating >= 4.0;

        return matchesPlatform && matchesSearch && matchesPrice && matchesRating;
    });

    if (productCountText) {
        productCountText.textContent = `${filtered.length} ta mahsulot ko'rsatilmoqda`;
    }

    renderCatalog(filtered, multiplier);
};

// ==========================================
// 4. KARTALARNI RENDER QILISH
// ==========================================
function renderCatalog(items, multiplier) {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = "";

    if (items.length === 0) {
        catalogGrid.innerHTML = `<div class="col-span-full py-16 text-center text-zinc-500 text-sm">Mahsulot topilmadi.</div>`;
        return;
    }

    items.forEach(product => {
        const calculatedPrice = Math.round(product.basePrice * multiplier);
        const formattedPrice = calculatedPrice.toLocaleString('uz-UZ') + " so'm";

        // Mahsulot avval saqlanganlar (liked) ro'yxatida bormi?
        const isLiked = likedList.some(p => p.id === product.id);

        const card = document.createElement("div");
        card.className = "bg-zinc-900/80 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition flex flex-col justify-between group relative";

        card.innerHTML = `
      <div>
        <div class="relative h-48 bg-zinc-800 overflow-hidden">
          <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          <span class="absolute top-2 left-2 bg-black/60 backdrop-blur text-[10px] text-amber-400 font-bold px-2 py-0.5 rounded border border-amber-500/30 uppercase">
            ${currentShipping}
          </span>

          <!-- Like Tugmasi -->
          <button onclick="toggleCatalogLike(this, ${product.id})" class="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur flex items-center justify-center transition">
            <i class="${isLiked ? 'fa-solid text-red-500' : 'fa-regular text-zinc-300'} fa-heart text-xs"></i>
          </button>
        </div>

        <div class="p-4 space-y-2">
          <div class="flex items-center justify-between text-[11px] text-zinc-500">
            <span>${product.platform} • ${product.category}</span>
            <span class="text-amber-500 font-bold flex items-center gap-0.5">
              <i class="fa-solid fa-star text-[9px]"></i> ${product.rating}
            </span>
          </div>

          <h3 class="text-xs font-semibold text-zinc-200 line-clamp-2 leading-snug">
            ${product.title}
          </h3>
        </div>
      </div>

      <div class="p-4 pt-0 space-y-3">
        <div class="bg-zinc-950/60 rounded-xl p-2.5 border border-zinc-800/50">
          <div class="text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Yakuniy Narx</div>
          <div class="text-sm font-black text-white mt-0.5">${formattedPrice}</div>
        </div>

        <button onclick="addToCart(this, ${product.id}, ${calculatedPrice})" class="w-full bg-zinc-800 hover:bg-red-600 hover:text-white text-zinc-300 font-semibold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-2">
          <i class="fa-solid fa-cart-shopping"></i> Savatga qo'shish
        </button>
      </div>
    `;

        catalogGrid.appendChild(card);
    });
}

// ==========================================
// 5. LOCALSTORAGE GA SAQLASH FUNKSIYALARI
// ==========================================

// Savatga qo'shish va LocalStorage ga saqlash
window.addToCart = function (button, productId, finalPrice) {
    const product = catalogProducts.find(p => p.id === productId);
    if (!product) return;

    // Mahsulot ma'lumotlarini tayyorlash
    const itemToAdd = {
        id: product.id,
        title: product.title,
        price: finalPrice.toLocaleString('uz-UZ') + " so'm",
        image: product.image,
        platform: product.platform,
        category: product.category
    };

    // Savatda allaqachon bormi?
    const exists = cartList.some(item => item.id === productId);
    if (!exists) {
        cartList.push(itemToAdd);
        localStorage.setItem("karvon_cart", JSON.stringify(cartList));
    }

    updateHeaderBadges();

    // Visual animatsiya
    const originalContent = button.innerHTML;
    button.innerHTML = `<i class="fa-solid fa-check text-green-400"></i> Savatda!`;
    button.classList.add("bg-green-600/20", "text-green-400", "border", "border-green-500/40");

    setTimeout(() => {
        button.innerHTML = originalContent;
        button.classList.remove("bg-green-600/20", "text-green-400", "border", "border-green-500/40");
    }, 1200);
};

// Like bosish va LocalStorage ga saqlash
window.toggleCatalogLike = function (button, productId) {
    const icon = button.querySelector("i");
    const product = catalogProducts.find(p => p.id === productId);
    if (!product) return;

    const index = likedList.findIndex(item => item.id === productId);

    if (index === -1) {
        // Ro'yxatga qo'shish
        likedList.push({
            id: product.id,
            title: product.title,
            price: product.basePrice.toLocaleString('uz-UZ') + " so'm",
            image: product.image
        });
        icon.classList.remove("fa-regular", "text-zinc-300");
        icon.classList.add("fa-solid", "text-red-500");
    } else {
        // Ro'yxatdan olib tashlash
        likedList.splice(index, 1);
        icon.classList.remove("fa-solid", "text-red-500");
        icon.classList.add("fa-regular", "text-zinc-300");
    }

    localStorage.setItem("karvon_likes", JSON.stringify(likedList));
    updateHeaderBadges();
};

// ==========================================
// 6. EVENT LISTENERS VA SHAG'AL ISHGA TUSHIRISH
// ==========================================
if (minPriceInput) minPriceInput.addEventListener("input", applyFilters);
if (maxPriceInput) maxPriceInput.addEventListener("input", applyFilters);
if (searchInput) searchInput.addEventListener("input", applyFilters);

// Ovozli qidiruv
if (voiceSearchBtn) {
    voiceSearchBtn.addEventListener("click", () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return alert("Brauzeringiz ovozli qidiruvni qo'llab-quvvatlamaydi.");

        const recognition = new SpeechRecognition();
        recognition.lang = "uz-UZ";
        recognition.start();

        voiceSearchBtn.classList.add("text-red-500", "animate-pulse");

        recognition.onresult = (e) => {
            if (searchInput) {
                searchInput.value = e.results[0][0].transcript;
                applyFilters();
            }
            voiceSearchBtn.classList.remove("text-red-500", "animate-pulse");
        };

        recognition.onerror = () => voiceSearchBtn.classList.remove("text-red-500", "animate-pulse");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateHeaderBadges();
    applyFilters();
});

// ==========================================
// HEADER USER PROFILE CHECK (USER MA'LUMOTINI OLISH)
// ==========================================
function checkHeaderUser() {
    const headerUserContainer = document.getElementById("header-user-container");
    if (!headerUserContainer) return;

    // LocalStorage dan foydalanuvchi ma'lumotlarini o'qish
    const userData = JSON.parse(localStorage.getItem("karvon_user"));

    if (userData && userData.firstName) {
        // AGAR RO'YXATDAN O'TGAN BO'LSA -> Rasm va Ismi chiqadi
        const userAvatar = userData.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80";

        headerUserContainer.innerHTML = `
            <a href="./user.html" class="flex items-center gap-2 hover:opacity-80 transition bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-xl">
                <img src="${userAvatar}" alt="${userData.firstName}" class="w-6 h-6 rounded-full object-cover border border-amber-500">
                <span class="text-xs font-semibold text-zinc-200">${userData.firstName}</span>
            </a>
        `;
    } else {
        // AGAR RO'YXATDAN O'TMAGAN BO'LSA -> Kirish tugmasi chiqadi
        headerUserContainer.innerHTML = `
            <a href="./user.html">
                <button class="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-1.5 rounded-lg transition">
                    Kirish
                </button>
            </a>
        `;
    }
}

// Sahifa yuklanganda header tekshiruvini ishga tushirish
document.addEventListener("DOMContentLoaded", () => {
    checkHeaderUser();
    updateHeaderBadges();
    applyFilters();
});