// ==========================================
// SINGLE PRODUCT PAGE LOGIC
// ==========================================

let singleShipping = "AVIA";
let currentProduct = null;

// Platformalar bo'yicha narx multiplikatorlari va yetkazish ma'lumotlari
const PLATFORM_INFO = [
    { key: "1688", label: "1688", icon: "1688", color: "bg-amber-600", priceMult: 1.0, ship: "Kargo (15-20 kun)", moq: true },
    { key: "Pinduoduo", label: "Pinduoduo", icon: "拼", color: "bg-red-600", priceMult: 1.067, ship: "Standart (12 kun)", moq: false },
    { key: "Taobao", label: "Taobao", icon: "淘", color: "bg-orange-600", priceMult: 1.17, ship: "Express (8 kun)", moq: false },
    { key: "Alibaba", label: "Alibaba", icon: "A", color: "bg-blue-600", priceMult: 1.268, ship: "Global (10-15 kun)", moq: false },
];

function fmt(n) {
    return Math.round(n).toLocaleString("uz-UZ") + " so'm";
}

// Mahsulotga xos, lekin barqaror (deterministik) "tasodifiy" son olish uchun
function seedFrom(id, salt) {
    const x = Math.sin(id * 999 + salt) * 10000;
    return x - Math.floor(x);
}

function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"), 10);
}

function renderThumbnails(product) {
    const thumbList = document.getElementById("thumb-list");
    if (!thumbList) return;
    thumbList.innerHTML = "";

    const totalShots = 5;
    for (let i = 0; i < totalShots; i++) {
        const thumb = document.createElement("button");
        thumb.className =
            "w-16 h-16 rounded-xl overflow-hidden border-2 border-transparent hover:border-amber-500 transition relative";
        thumb.innerHTML = `<img src="${product.image}" class="w-full h-full object-cover" style="filter:brightness(${0.85 + i * 0.05})">`;
        thumb.onclick = () => {
            document.getElementById("main-image").src = product.image;
            document
                .querySelectorAll("#thumb-list button")
                .forEach((b) => b.classList.remove("border-amber-500"));
            thumb.classList.add("border-amber-500");
        };
        thumbList.appendChild(thumb);
    }

    // "+12 ko'proq" overlay so'nggi thumbnaildan keyin
    const more = document.createElement("button");
    more.className =
        "w-16 h-16 rounded-xl overflow-hidden border border-zinc-800 relative flex items-center justify-center bg-zinc-900 text-xs font-bold text-zinc-400 hover:text-white";
    more.innerHTML = `<img src="${product.image}" class="absolute inset-0 w-full h-full object-cover opacity-30"><span class="relative z-10">+12</span>`;
    thumbList.appendChild(more);
}

function computePricing(product, shippingMode) {
    const shippingRate = shippingMode === "AVIA" ? 0.075 : 0.045;
    const feeRate = 0.03;

    const base = Math.round(product.basePrice * 1.0); // 1688 wholesale narxi
    const shipping = Math.round(product.basePrice * shippingRate);
    const fee = Math.round(product.basePrice * feeRate);
    const finalPrice = base + shipping + fee;
    const oldPrice = Math.round(finalPrice / 0.78);
    const discountPercent = Math.round((1 - finalPrice / oldPrice) * 100);

    return { base, shipping, fee, finalPrice, oldPrice, discountPercent };
}

function renderPricing(product) {
    const p = computePricing(product, singleShipping);

    document.getElementById("final-price").textContent = fmt(p.finalPrice);
    document.getElementById("old-price").textContent = fmt(p.oldPrice);
    document.getElementById("discount-badge").textContent = `-${p.discountPercent}%`;
    document.getElementById("price-base").textContent = fmt(p.base);
    document.getElementById("price-shipping").textContent = fmt(p.shipping);
    document.getElementById("price-fee").textContent = fmt(p.fee);
    document.getElementById("price-shipping-label").textContent =
        singleShipping === "AVIA" ? "Xalqaro yetkazib berish (havo)" : "Xalqaro yetkazib berish (yer)";

    return p;
}

window.setShippingSingle = function (type) {
    singleShipping = type;
    const btnAvia = document.getElementById("btn-avia-single");
    const btnGround = document.getElementById("btn-ground-single");

    const activeClass =
        "py-2.5 rounded-xl text-xs font-bold border border-amber-500 bg-amber-500/10 text-amber-400 flex items-center justify-center gap-1.5 transition";
    const idleClass =
        "py-2.5 rounded-xl text-xs font-bold border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 transition";

    if (type === "AVIA") {
        btnAvia.className = activeClass;
        btnGround.className = idleClass;
    } else {
        btnGround.className = activeClass;
        btnAvia.className = idleClass;
    }

    if (currentProduct) renderPricing(currentProduct);
};

function renderPlatformTable(product) {
    const rowsContainer = document.getElementById("platform-rows");
    if (!rowsContainer) return;
    rowsContainer.innerHTML = "";

    // Har bir platforma uchun yakuniy (yetkazib berish + xizmat haqi bilan) narxni hisoblash
    const rows = PLATFORM_INFO.map((info) => {
        const rawPrice = product.basePrice * info.priceMult;
        const shipping = product.basePrice * 0.075;
        const fee = rawPrice * 0.03;
        const total = rawPrice + shipping + fee;
        return { ...info, total };
    });

    // MOQ talab qilmaydigan variantlar orasida eng arzonini "Tavsiya etiladi" deb belgilash
    const retailRows = rows.filter((r) => !r.moq);
    const cheapestRetail = retailRows.reduce((a, b) => (b.total < a.total ? b : a));

    rows.forEach((row) => {
        const isRecommended = row.key === cheapestRetail.key;
        const isSource = row.key === product.platform;

        const rowEl = document.createElement("div");
        rowEl.className =
            "grid grid-cols-4 px-6 py-4 items-center text-sm border-b border-zinc-900/70 last:border-b-0" +
            (isRecommended ? " bg-amber-500/5" : "");

        rowEl.innerHTML = `
      <div class="flex items-center gap-2.5">
        <div class="w-7 h-7 rounded ${row.color} text-white text-[10px] flex items-center justify-center font-bold shrink-0">${row.icon}</div>
        <span class="font-semibold text-zinc-200">${row.label}</span>
      </div>
      <div class="font-bold ${isRecommended ? "text-amber-400" : "text-white"}">
        ${fmt(row.total)}${row.moq ? '<span class="text-zinc-500">*</span>' : ""}
      </div>
      <div class="text-zinc-400 text-xs">${row.ship}</div>
      <div>
        ${isRecommended
                ? '<span class="bg-amber-500 text-black text-[10px] font-bold px-2.5 py-1 rounded-full">SIZGA ENG MOS</span>'
                : row.moq
                    ? '<span class="text-zinc-600 text-[11px]">*MOQ bor</span>'
                    : ""}
      </div>
    `;
        rowsContainer.appendChild(rowEl);
    });

    document.getElementById("badge-source-text").textContent = `${product.platform.toUpperCase()} SOURCE`;
}

function renderProduct(product) {
    currentProduct = product;

    document.getElementById("crumb-title").textContent = product.category;
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("main-image").src = product.image;
    document.getElementById("main-image").alt = product.title;

    const reviews = Math.round(120 + seedFrom(product.id, 1) * 400);
    const sold = (10 + seedFrom(product.id, 2) * 20).toFixed(1);
    document.getElementById("product-rating").textContent = product.rating.toFixed(1);
    document.getElementById("product-reviews").textContent = `(${reviews} sharh)`;
    document.getElementById("product-sold").textContent = `${sold}k sotilgan`;
    document.getElementById("buyer-photos-text").textContent = `Xaridor rasmlari (${Math.round(20 + seedFrom(product.id, 3) * 60)})`;
    document.getElementById("moq").textContent = "5 dona";

    renderThumbnails(product);
    renderPricing(product);
    renderPlatformTable(product);

    // Savatga qo'shish tugmasi - market.js dagi addToCart funksiyasidan foydalanamiz
    const addBtn = document.getElementById("add-to-cart-btn");
    addBtn.addEventListener("click", () => {
        const p = computePricing(product, singleShipping);
        window.addToCart(addBtn, product.id, p.finalPrice);
    });

    // Like tugmasi - market.js dagi toggleCatalogLike funksiyasidan foydalanamiz
    const likeBtn = document.getElementById("like-btn");
    const likedList = JSON.parse(localStorage.getItem("karvon_likes")) || [];
    const isLiked = likedList.some((p) => p.id === product.id);
    const icon = likeBtn.querySelector("i");
    if (isLiked) {
        icon.classList.remove("fa-regular", "text-zinc-300");
        icon.classList.add("fa-solid", "text-red-500");
    }
    likeBtn.addEventListener("click", () => {
        window.toggleCatalogLike(likeBtn, product.id);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const id = getIdFromUrl();
    const product = catalogProducts.find((p) => p.id === id);

    if (!product) {
        document.getElementById("product-detail").classList.add("hidden");
        document.getElementById("platform-table").classList.add("hidden");
        document.getElementById("not-found").classList.remove("hidden");
        return;
    }

    renderProduct(product);
});