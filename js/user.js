// ==========================================
// 1. LOCALSTORAGE MANTIG'I (USER, CART, LIKES)
// ==========================================
function getUserData() {
    return JSON.parse(localStorage.getItem("karvon_user")) || null;
}

function getCartItems() {
    return JSON.parse(localStorage.getItem("karvon_cart")) || [];
}

function getLikedItems() {
    return JSON.parse(localStorage.getItem("karvon_likes")) || [];
}

// ==========================================
// 2. MODAL VA AVTORIZATSIYA
// ==========================================
const registerModal = document.getElementById("register-modal");

window.openRegisterModal = function () {
    if (registerModal) registerModal.classList.remove("hidden");
};

window.closeRegisterModal = function () {
    if (registerModal) registerModal.classList.add("hidden");
};

window.handleRegisterSubmit = function (e) {
    e.preventDefault();

    const firstName = document.getElementById("reg-firstname").value.trim();
    const lastName = document.getElementById("reg-lastname").value.trim();
    const address = document.getElementById("reg-address").value.trim();
    let avatar = document.getElementById("reg-avatar").value.trim();

    if (!avatar) {
        avatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80";
    }

    const userData = { firstName, lastName, address, avatar };

    localStorage.setItem("karvon_user", JSON.stringify(userData));
    closeRegisterModal();
    initUserProfile();
};

window.logoutUser = function () {
    localStorage.removeItem("karvon_user");
    initUserProfile();
};

// ==========================================
// 3. SHAXSIY KABINETNI TAYYORLASH (RENDER)
// ==========================================
function initUserProfile() {
    const user = getUserData();
    const headerUserContainer = document.getElementById("header-user-container");
    const unauthBanner = document.getElementById("unauth-banner");
    const authContentArea = document.getElementById("auth-content-area");

    const sidebarName = document.getElementById("sidebar-user-name");
    const sidebarStatus = document.getElementById("sidebar-user-status");

    const profileFullname = document.getElementById("profile-fullname");
    const profileAddress = document.getElementById("profile-address");
    const profileCardAvatar = document.getElementById("profile-card-avatar");

    if (user) {
        if (headerUserContainer) {
            headerUserContainer.innerHTML = `
                <a href="user.html" class="flex items-center gap-2 hover:opacity-80 transition group">
                    <img src="${user.avatar}" alt="${user.firstName}" class="w-7 h-7 rounded-full object-cover border border-amber-500">
                    <span class="text-xs font-semibold text-zinc-200 group-hover:text-white hidden sm:inline">${user.firstName}</span>
                </a>
            `;
        }

        if (sidebarName) sidebarName.textContent = `${user.firstName} ${user.lastName}`;
        if (sidebarStatus) sidebarStatus.textContent = "Premium xaridor";

        if (profileFullname) profileFullname.textContent = `${user.firstName} ${user.lastName}`;
        if (profileAddress) profileAddress.textContent = user.address;
        if (profileCardAvatar) profileCardAvatar.src = user.avatar;

        if (unauthBanner) {
            unauthBanner.classList.add("hidden");
            unauthBanner.classList.remove("flex");
        }
        if (authContentArea) authContentArea.classList.remove("hidden");

        renderUserCart();
        renderUserLikes();

    } else {
        if (headerUserContainer) {
            headerUserContainer.innerHTML = `
                <button onclick="openRegisterModal()" class="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs px-3 py-1.5 rounded-lg transition">
                    Kirish
                </button>
            `;
        }

        if (sidebarName) sidebarName.textContent = "Xush kelibsiz";
        if (sidebarStatus) sidebarStatus.textContent = "Mehmon";

        if (unauthBanner) {
            unauthBanner.classList.remove("hidden");
            unauthBanner.classList.add("flex");
        }
        if (authContentArea) authContentArea.classList.add("hidden");
    }
}

// ==========================================
// 4. TAB MENULARNI ALMASHTIRISH
// ==========================================
window.switchTab = function (tabName) {
    document.querySelectorAll(".tab-content").forEach(el => el.classList.add("hidden"));

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.className = "tab-btn w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-900 transition";
    });

    const targetContent = document.getElementById(`tab-${tabName}`);
    const targetBtn = document.getElementById(`tab-btn-${tabName}`);

    if (targetContent) targetContent.classList.remove("hidden");
    if (targetBtn) {
        targetBtn.className = "tab-btn w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 transition";
    }

    if (tabName === "buyurtmalar") renderUserCart();
    if (tabName === "saqlanganlar") renderUserLikes();
};

// ==========================================
// 5. BUYURTMALAR (SAVAT)
// ==========================================
function renderUserCart() {
    const container = document.getElementById("cart-container");
    const items = getCartItems();

    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-16 text-center space-y-6">
                <div class="relative w-32 h-32 flex items-center justify-center">
                    <div class="w-24 h-24 border border-dashed border-red-800/60 rounded-2xl rotate-45 flex items-center justify-center">
                        <i class="fa-solid fa-box-open text-3xl text-red-600/80 -rotate-45"></i>
                    </div>
                </div>

                <div class="space-y-2 max-w-md">
                    <h2 class="text-3xl font-extrabold text-white tracking-tight">Savatingiz bo'sh</h2>
                    <p class="text-xs text-zinc-400 leading-relaxed">
                        Xitoydan millionlab mahsulot sizni kutmoqda. Sifatli va hamyonbop tovarlarni to'g'ridan-to'g'ri ishlab chiqaruvchilardan toping.
                    </p>
                </div>

                <a href="market.html" class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs px-6 py-3 rounded-xl transition shadow-lg shadow-red-600/20">
                    Xarid qilishni boshlash <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
            </div>
        `;
        return;
    }

    const total = items.reduce((sum, product) => {
        const numeric = parseInt(String(product.price).replace(/[^\d]/g, ""), 10) || 0;
        return sum + numeric;
    }, 0);

    container.innerHTML = `
        <h2 class="text-xl font-bold mb-4">Savatingizdagi buyurtmalar (${items.length})</h2>

        <div class="space-y-3">
            ${items.map(product => `
                <div class="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <img src="${product.image}" class="w-16 h-16 rounded-xl object-cover bg-zinc-800">
                        <div>
                            <span class="text-[10px] text-amber-500 font-semibold uppercase">${product.platform || 'Taobao'}</span>
                            <h4 class="text-xs font-semibold text-white line-clamp-1">${product.title}</h4>
                            <div class="text-xs font-bold text-white mt-1">${product.price}</div>
                        </div>
                    </div>
                    <button onclick="removeFromUserCart(${product.id})" class="text-zinc-500 hover:text-red-500 text-xs p-2 transition">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `).join("")}
        </div>

        <!-- ================= XARID QILISH KARTASI ================= -->
        <div class="relative mt-6 rounded-2xl overflow-hidden border border-red-900/40 bg-gradient-to-br from-zinc-900 via-zinc-900 to-red-950/30 p-6">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div class="relative flex flex-col sm:flex-row items-center justify-between gap-5">
                <div class="flex items-center gap-4 w-full sm:w-auto">
                    <div class="w-11 h-11 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500 text-lg shrink-0">
                        <i class="fa-solid fa-receipt"></i>
                    </div>
                    <div>
                        <div class="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Jami to'lov summasi</div>
                        <div class="text-xl font-extrabold text-white mt-0.5">${total.toLocaleString("ru-RU")} so'm</div>
                        <div class="text-[11px] text-zinc-500 mt-0.5">${items.length} ta mahsulot uchun</div>
                    </div>
                </div>

                <a href="./pay.html" onclick="handleCheckout(event)"
                    class="group w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5">
                    <i class="fa-solid fa-bag-shopping"></i>
                    Xarid qilish
                    <i class="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-0.5"></i>
                </a>
            </div>
        </div>
    `;
}

// Xarid qilish (pay.html'ga o'tishdan oldin summani saqlab qo'yish)
window.handleCheckout = function (e) {
    const items = getCartItems();
    if (items.length === 0) {
        if (e) e.preventDefault();
        return;
    }

    const total = items.reduce((sum, product) => {
        const numeric = parseInt(String(product.price).replace(/[^\d]/g, ""), 10) || 0;
        return sum + numeric;
    }, 0);

    // pay.html o'qishi uchun to'lov ma'lumotlarini saqlab qo'yamiz
    localStorage.setItem("karvon_checkout_total", String(total));
    localStorage.setItem("karvon_checkout_count", String(items.length));

    // Diqqat: savat shu yerda tozalanmaydi.
    // Savat faqat pay.html'da to'lov MUVAFFAQIYATLI bo'lgandan keyin tozalanadi.
};

// ==========================================
// 6. SAQLANGANLAR (LIKES)
// ==========================================
function renderUserLikes() {
    const container = document.getElementById("likes-container");
    const items = getLikedItems();

    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-zinc-500 py-12 text-xs">Sizda hali saqlangan mahsulotlar yo'q.</p>`;
        return;
    }

    container.innerHTML = items.map(product => `
        <div class="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-3 space-y-3">
            <div class="relative h-36 rounded-xl overflow-hidden bg-zinc-800">
                <img src="${product.image}" class="w-full h-full object-cover">
                <button onclick="removeUserLike(${product.id})" class="absolute top-2 right-2 text-red-500 text-xs bg-black/60 w-6 h-6 rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>
            <div>
                <h4 class="text-xs font-semibold text-white line-clamp-1">${product.title}</h4>
                <div class="text-xs font-bold text-amber-500 mt-1">${product.price}</div>
            </div>
        </div>
    `).join("");
}

// O'chirish mantig'i
window.removeFromUserCart = function (id) {
    let items = getCartItems();
    items = items.filter(p => p.id !== id);
    localStorage.setItem("karvon_cart", JSON.stringify(items));
    renderUserCart();
};

window.removeUserLike = function (id) {
    let items = getLikedItems();
    items = items.filter(p => p.id !== id);
    localStorage.setItem("karvon_likes", JSON.stringify(items));
    renderUserLikes();
};

// ==========================================
// 7. PROFILNI TAHRIRLASH
// ==========================================
window.openEditModal = function () {
    const user = getUserData();
    if (!user) return;

    document.getElementById("edit-firstname").value = user.firstName || "";
    document.getElementById("edit-lastname").value = user.lastName || "";
    document.getElementById("edit-address").value = user.address || "";
    document.getElementById("edit-avatar").value = user.avatar || "";

    document.getElementById("edit-modal").classList.remove("hidden");
};

window.closeEditModal = function () {
    document.getElementById("edit-modal").classList.add("hidden");
};

window.handleEditSubmit = function (e) {
    e.preventDefault();

    const firstName = document.getElementById("edit-firstname").value.trim();
    const lastName = document.getElementById("edit-lastname").value.trim();
    const address = document.getElementById("edit-address").value.trim();
    let avatar = document.getElementById("edit-avatar").value.trim();

    if (!avatar) {
        avatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80";
    }

    const updatedUserData = { firstName, lastName, address, avatar };

    localStorage.setItem("karvon_user", JSON.stringify(updatedUserData));
    closeEditModal();
    initUserProfile();
};

// ==========================================
// 8. HISOBNI O'CHIRISH
// ==========================================
window.deleteAccount = function () {
    const confirmDelete = confirm("Haqiqatdan ham hisobingizni o'chirmoqchimisiz? Barcha ma'lumotlaringiz o'chib ketadi.");

    if (confirmDelete) {
        localStorage.removeItem("karvon_user");
        initUserProfile();
    }
};

// ==========================================
// 9. DASTLABKI YUKLASH
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initUserProfile();
});