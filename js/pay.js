document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // TELEGRAM BOT SOZLAMALARI
    // ============================================================
    // Bot token (BotFather bergan) — sizniki allaqachon to'g'ri kiritilgan
    const TELEGRAM_BOT_TOKEN = "8693449444:AAE-plk4mlKvw6zSLrPbeXJzHBOgmn2x-us";

    const TELEGRAM_CHAT_ID = "-1004464328458";
    // ============================================================


    // --- 0. SAVATDAGI UMUMIY SUMMANI YUKLASH VA CHIQARISH ---
    const totalPriceEl = document.getElementById('total-price');
    const payBtnText = document.getElementById('pay-btn-text');

    const checkoutTotal = parseInt(localStorage.getItem('karvon_checkout_total'), 10) || 0;
    const checkoutCount = parseInt(localStorage.getItem('karvon_checkout_count'), 10) || 0;

    if (totalPriceEl) {
        // Promokod hisob-kitobi shu original summaga nisbatan ishlaydi
        totalPriceEl.dataset.originalPrice = checkoutTotal;

        const formattedTotal = new Intl.NumberFormat('fr-FR').format(checkoutTotal);
        totalPriceEl.innerHTML = `${formattedTotal} <span class="text-base font-normal text-gray-400">so'm</span>`;
    }

    if (payBtnText) {
        const formattedTotal = new Intl.NumberFormat('fr-FR').format(checkoutTotal);
        payBtnText.innerText = `${formattedTotal} so'm to'lash`;
    }

    // Ixtiyoriy: mahsulotlar sonini ko'rsatadigan joy sahifada bo'lsa (id="checkout-items-count")
    const itemsCountEl = document.getElementById('checkout-items-count');
    if (itemsCountEl) {
        itemsCountEl.textContent = `${checkoutCount} ta mahsulot`;
    }


    // --- 1. TO'LOV USULI SELEKTORI (RADIO TOGGLE) ---
    const paymentItems = document.querySelectorAll('main section:first-child label');

    paymentItems.forEach(item => {
        item.addEventListener('click', () => {
            paymentItems.forEach(el => {
                el.classList.remove('bg-card-selected', 'border-brand/40');
                el.classList.add('bg-card-dark', 'border-card-border');

                const radio = el.querySelector('input[type="radio"]');
                if (radio) radio.checked = false;

                const activeDot = el.querySelector('.bg-accent-pink');
                if (activeDot) {
                    activeDot.outerHTML = `<input type="radio" name="payment" class="w-5 h-5 accent-brand bg-transparent border-gray-600">`;
                }
            });

            item.classList.remove('bg-card-dark', 'border-card-border');
            item.classList.add('bg-card-selected', 'border-brand/40');

            const radio = item.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });


    // --- 2. PROMOKOD ("SARDOR" - 20% CHEGIRMA) ---
    const promoInput = document.getElementById('promo-code-input');
    const promoBtn = document.getElementById('apply-promo-btn');
    const promoBadgeContainer = document.getElementById('promo-badge-container');

    // Qo'llanilgan promokodni keyinroq Telegram xabarida ko'rsatish uchun saqlab qo'yamiz
    let appliedPromo = null;

    if (promoBtn && promoInput) {
        promoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const code = promoInput.value.trim().toUpperCase();

            if (code === 'PDP20' || code === 'SARDOR') {
                const originalPrice = parseFloat(totalPriceEl.dataset.originalPrice);
                const discountAmount = originalPrice * 0.20;
                const finalPrice = originalPrice - discountAmount;

                appliedPromo = { code, discountAmount, finalPrice };

                const formattedDiscount = new Intl.NumberFormat('fr-FR').format(discountAmount);
                const formattedFinal = new Intl.NumberFormat('fr-FR').format(finalPrice);

                const badgeHTML = `
          <div id="promo-badge" class="bg-card-border/40 rounded-xl p-3 flex justify-between items-center text-xs border border-brand/30 transition-all duration-500 transform opacity-0 -translate-y-2 scale-95 shadow-lg mb-2">
            <div class="flex items-center space-x-2">
              <i class="fa-solid fa-gift text-brand text-base animate-bounce"></i>
              <div>
                <span class="font-bold text-white tracking-wide">"${code}"</span>
                <span class="text-gray-400 block text-[10px]">qo'llanildi (20% bonus)</span>
              </div>
            </div>
            <span class="text-brand font-bold">-${formattedDiscount} so'm</span>
          </div>
        `;

                promoBadgeContainer.innerHTML = badgeHTML;

                setTimeout(() => {
                    const badge = document.getElementById('promo-badge');
                    if (badge) {
                        badge.classList.remove('opacity-0', '-translate-y-2', 'scale-95');
                        badge.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                    }
                }, 50);

                totalPriceEl.classList.add('scale-105', 'text-emerald-400');
                totalPriceEl.innerHTML = `${formattedFinal} <span class="text-base font-normal text-gray-400">so'm</span>`;

                if (payBtnText) {
                    payBtnText.innerText = `${formattedFinal} so'm to'lash`;
                }

                setTimeout(() => {
                    totalPriceEl.classList.remove('scale-105');
                }, 200);

                promoInput.disabled = true;
                promoBtn.disabled = true;
                promoBtn.classList.add('opacity-50', 'cursor-not-allowed');

            } else {
                promoBadgeContainer.innerHTML = `
          <div class="text-xs text-rose-500 font-medium flex items-center gap-1.5 animate-pulse py-1">
            <i class="fa-solid fa-circle-xmark"></i> Noto'g'ri promokod kiritildi!
          </div>
        `;
            }
        });
    }


    // --- 3. TO'LOV MUVAFFAQIYATLI MODALI ---
    const showSuccessModal = () => {
        const existingModal = document.getElementById('payment-success-modal');
        if (existingModal) existingModal.remove();

        const modalHTML = `
      <div id="payment-success-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
        <div class="bg-card-dark border border-card-border rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl space-y-4 transform scale-95 transition-transform duration-300">
          <div class="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
            <i class="fa-solid fa-circle-check text-4xl"></i>
          </div>
          <h3 class="text-lg font-bold text-white leading-snug">
            To'lov Amalga Oshirildi 
          </h3>
          <p class="text-xs text-gray-400">
            Xaridingiz uchun rahmat! Buyurtmangiz muvaffaqiyatli qabul qilindi.
          </p>
          <button id="close-modal-btn" class="w-full bg-brand hover:bg-brand-hover text-white font-semibold text-xs py-3 rounded-xl transition">
            <a href="./user.html" class="w-full h-full block">Tushunarli</a>
          </button>
        </div>
      </div>
    `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        document.getElementById('close-modal-btn').addEventListener('click', () => {
            document.getElementById('payment-success-modal').remove();
        });
    };


    // --- 4. YORDAMCHI FUNKSIYALAR ---

    // Narxni har qanday formatdan (string, bo'sh joy, vergul va h.k.) tozalab, raqamga aylantiradi
    // (NaN muammosining oldini olish uchun qo'shildi)
    function toNumber(value) {
        if (value === null || value === undefined) return 0;
        if (typeof value === 'number') return isNaN(value) ? 0 : value;
        const cleaned = String(value)
            .replace(/\s/g, '')
            .replace(/[^\d.,-]/g, '')
            .replace(',', '.');
        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    }


    function getItemImage(item) {
        return item.image || item.img || item.photo || item.picture || item.src || null;
    }

    function getItemId(item) {
        return item.id || item.productId || item.sku || '—';
    }

    function getSelectedPaymentMethod() {
        const checked = document.querySelector('main section:first-child input[type="radio"]:checked');
        if (!checked) return "Tanlanmagan";
        const label = checked.closest('label');
        // Label ichidagi matndan usul nomini olishga harakat qilamiz
        const text = label ? label.textContent.trim().replace(/\s+/g, ' ') : '';
        return text || "Noma'lum";
    }

    // Bitta mahsulot uchun chiroyli formatlangan matn bo'lagi
    function buildItemBlock(item, index) {
        const name = item.name || item.title || "Noma'lum mahsulot";
        const qty = toNumber(item.qty || item.quantity || 1) || 1;
        const priceNum = toNumber(item.price);
        const price = new Intl.NumberFormat('fr-FR').format(priceNum);
        const subtotal = new Intl.NumberFormat('fr-FR').format(priceNum * qty);
        const id = getItemId(item);
        const image = getItemImage(item);

        return (
            `${index + 1}. 🛍 <b>${name}</b>\n` +
            `   🆔 ID: <code>${id}</code>\n` +
            `   📦 Soni: ${qty} dona\n` +
            `   💵 Narxi: ${price} so'm (jami: ${subtotal} so'm)\n` +
            (image ? `   🖼 Rasm: ${image}\n` : ``)
        );
    }

    // Telegramga oddiy matnli xabar yuborish
    async function sendTelegramMessage(text) {
        return fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        }).then(r => r.json());
    }

    // Bitta mahsulot rasmini caption bilan birga yuborish
    async function sendTelegramPhoto(imageUrl, caption) {
        return fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                photo: imageUrl,
                caption: caption,
                parse_mode: 'HTML'
            })
        }).then(r => r.json());
    }


    // --- 5. BUYURTMANI TELEGRAM BOTGA YUBORISH ---
    async function sendOrderToTelegram(order) {
        // Chat ID hali sozlanmagan bo'lsa, urinishni to'xtatamiz
        if (!TELEGRAM_CHAT_ID || TELEGRAM_CHAT_ID === "BU_YERGA_CHAT_ID_NI_QOYING") {
            console.warn("Telegram CHAT_ID sozlanmagan — xabar yuborilmadi. pay.js faylida TELEGRAM_CHAT_ID ni to'ldiring.");
            return;
        }

        const items = order.items || [];
        const formattedTotal = new Intl.NumberFormat('fr-FR').format(toNumber(order.total));
        const formattedDate = new Date(order.date).toLocaleString('uz-UZ', {
            day: '2-digit', month: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        const paymentMethod = getSelectedPaymentMethod();

        // --- Bosh xabar: buyurtma haqida umumiy ma'lumot + har bir mahsulot ---
        const itemsText = items.map((item, i) => buildItemBlock(item, i)).join('\n');

        let message =
            `🛒 <b>Yangi buyurtma!</b>\n\n` +
            `${itemsText}\n` +
            `━━━━━━━━━━━━━━━\n` +
            `💰 <b>Jami summa:</b> ${formattedTotal} so'm\n`;

        if (order.promo) {
            message += `🎁 <b>Promokod:</b> ${order.promo.code} (-${new Intl.NumberFormat('fr-FR').format(toNumber(order.promo.discountAmount))} so'm)\n`;
        }

        message +=
            `💳 <b>To'lov usuli:</b> ${paymentMethod}\n` +
            `🕒 <b>Sana:</b> ${formattedDate}\n` +
            `🆔 <b>Buyurtma ID:</b> <code>${order.id}</code>\n` +
            `📦 <b>Status:</b> ${order.status}`;

        try {
            const res = await sendTelegramMessage(message);
            if (!res.ok) {
                console.error('Telegram API xatoligi (matn):', res);
            }
        } catch (err) {
            console.error('Telegramga yuborishda tarmoq xatoligi (matn):', err);
        }

        // --- Har bir mahsulotning rasmini alohida, o'z tavsifi bilan yuborish ---
        for (const item of items) {
            const image = getItemImage(item);
            if (!image) continue;

            const name = item.name || item.title || "Noma'lum mahsulot";
            const qty = toNumber(item.qty || item.quantity || 1) || 1;
            const price = new Intl.NumberFormat('fr-FR').format(toNumber(item.price));
            const id = getItemId(item);

            const caption =
                `🛍 <b>${name}</b>\n` +
                `🆔 ID: <code>${id}</code>\n` +
                `📦 Soni: ${qty} dona\n` +
                `💵 Narxi: ${price} so'm\n` +
                `🆔 Buyurtma: <code>${order.id}</code>`;

            try {
                const res = await sendTelegramPhoto(image, caption);
                if (!res.ok) {
                    console.error('Telegram API xatoligi (rasm):', res, image);
                }
            } catch (err) {
                console.error('Telegramga rasm yuborishda tarmoq xatoligi:', err);
            }
        }
    }


    // --- 6. TO'LOV TUGMASI HODISASI ---
    const payButton = document.getElementById('pay-btn');
    if (payButton) {
        payButton.addEventListener('click', (e) => {
            e.preventDefault();

            const originalHTML = payButton.innerHTML;
            payButton.disabled = true;
            payButton.innerHTML = `
        <i class="fa-solid fa-circle-notch fa-spin text-lg"></i>
        <span>To'lov amalga oshirilmoqda...</span>
      `;

            setTimeout(() => {
                payButton.disabled = false;
                payButton.innerHTML = originalHTML;

                // ================= BUYURTMANI "XABARLAR" UCHUN SAQLASH =================
                // Savat tozalanishidan OLDIN, hozirgi savatdagi mahsulotlarni
                // "karvon_orders" ro'yxatiga qo'shib qo'yamiz. Shu ro'yxat asosida
                // user.html sahifasidagi "Xabarlar" bo'limi mahsulotlarni chiqaradi.
                const cartItemsForOrder = JSON.parse(localStorage.getItem('karvon_cart')) || [];

                if (cartItemsForOrder.length > 0) {
                    const orders = JSON.parse(localStorage.getItem('karvon_orders')) || [];

                    const newOrder = {
                        id: Date.now(),
                        items: cartItemsForOrder,
                        total: checkoutTotal,
                        date: new Date().toISOString(),
                        status: 'tayyorlanmoqda',
                        paymentMethod: getSelectedPaymentMethod(),
                        promo: appliedPromo
                    };

                    orders.push(newOrder);
                    localStorage.setItem('karvon_orders', JSON.stringify(orders));

                    // Buyurtmani Telegram botga yuborish
                    sendOrderToTelegram(newOrder);
                }

                localStorage.removeItem('karvon_cart');
                localStorage.removeItem('karvon_checkout_total');
                localStorage.removeItem('karvon_checkout_count');

                showSuccessModal();
            }, 2000);
        });
    }

});