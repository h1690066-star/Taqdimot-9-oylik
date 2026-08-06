(function () {
    "use strict";

    // Loading paytida sahifa skroll bo'lmasin
    document.body.classList.add('is-loading');

    var stage = document.querySelector('.stage');
    if (!stage) return; // loader elementi topilmasa, hech narsa qilinmaydi

    var pctEl = document.getElementById('pct');
    var fillEl = document.querySelector('.progress-fill');
    var truckEl = document.querySelector('.truck');

    var TRUCK_WIDTH = 46; // px, css'dagi .truck width bilan bir xil

    var displayed = 0;      // ekranda ko'rinayotgan foiz (silliq o'sadi)
    var target = 2;         // haqiqiy yuklanishga qarab hisoblangan maqsad foiz
    var pageFullyLoaded = false; // sahifa to'liq yuklanganmi
    var revealed = false;
    var rafId = null;

    function setVisual(p) {
        if (fillEl) fillEl.style.width = p + '%';
        if (truckEl) truckEl.style.left = 'calc(' + p + '% - ' + (p / 100 * TRUCK_WIDTH) + 'px)';
        if (pctEl) pctEl.textContent = Math.round(p) + '%';
    }

    // ----- Haqiqiy yuklanish progressini hisoblash -----
    var totalImages = 0;
    var loadedImages = 0;

    function trackImages() {
        var imgs = Array.prototype.slice.call(document.images);
        totalImages = imgs.length;
        loadedImages = 0;

        if (totalImages === 0) {
            updateTarget();
            return;
        }

        imgs.forEach(function (img) {
            if (img.complete) {
                loadedImages++;
            } else {
                img.addEventListener('load', onResourceDone);
                img.addEventListener('error', onResourceDone);
            }
        });
        updateTarget();
    }

    function onResourceDone() {
        loadedImages++;
        updateTarget();
    }

    function updateTarget() {
        if (pageFullyLoaded) {
            target = 100;
            return;
        }
        var imgRatio = totalImages ? (loadedImages / totalImages) : 1;
        var domRatio = document.readyState === 'complete' ? 1 :
                        (document.readyState === 'interactive' ? 0.6 : 0.15);

        var raw = (imgRatio * 0.7 + domRatio * 0.3) * 100;
        target = Math.min(99, Math.max(target, raw));
    }

    // ===== ENG MUHIM QISM =====
    // Sahifa to'liq yuklanganda, brauzer tab FONDA (background) bo'lsa ham
    // (masalan foydalanuvchi boshqa tabga o'tib ketgan bo'lsa), loaderni
    // MAJBURIY ravishda darhol yopamiz. requestAnimationFrame fon tablarda
    // to'xtab qolishi mumkin, shuning uchun reveal jarayoni UNGA
    // bog'liq QILINMAYDI — setTimeout orqali mustaqil ishlaydi.
    function markFullyLoaded() {
        if (pageFullyLoaded) return;
        pageFullyLoaded = true;
        target = 100;

        // rAF ishlamay qolgan taqdirda ham (fon tab) darhol yopish
        setTimeout(forceReveal, 350);
    }

    function forceReveal() {
        if (revealed) return;
        displayed = 100;
        setVisual(100);
        revealSite();
    }

    document.addEventListener('DOMContentLoaded', function () {
        trackImages();
        updateTarget();
    });

    if (document.readyState === 'complete') {
        markFullyLoaded();
    } else {
        window.addEventListener('load', markFullyLoaded);
    }

    if (document.readyState !== 'loading') {
        trackImages();
    }

    // Foydalanuvchi tabga qaytganda ham tekshiramiz — agar sahifa allaqachon
    // yuklangan bo'lsa-yu, biror sabab bilan loader hali ochilmagan bo'lsa,
    // darhol yopamiz.
    document.addEventListener('visibilitychange', function () {
        if (!document.hidden && pageFullyLoaded && !revealed) {
            forceReveal();
        }
    });

    // Xavfsizlik uchun umumiy taymout — hech qachon 4 soniyadan ortiq
    // osilib qolmasin (fon tab bo'lsa ham setTimeout ishlayveradi).
    var SAFETY_TIMEOUT_MS = 4000;
    setTimeout(markFullyLoaded, SAFETY_TIMEOUT_MS);

    // ----- Foizni silliq animatsiya bilan maqsadga yetkazish (faqat vizual) -----
    function tick() {
        if (revealed) return;

        if (displayed < target) {
            var step = Math.max(0.25, (target - displayed) * 0.07);
            displayed = Math.min(target, displayed + step);
        }
        setVisual(displayed);

        if (pageFullyLoaded && displayed >= 99.6) {
            forceReveal();
            return;
        }
        rafId = requestAnimationFrame(tick);
    }

    function revealSite() {
        if (revealed) return;
        revealed = true;
        if (rafId) cancelAnimationFrame(rafId);

        stage.classList.add('stage--done');
        document.body.classList.remove('is-loading');
        // Fade-out animatsiyasi tugagach elementni butunlay olib tashlaymiz
        setTimeout(function () {
            stage.style.display = 'none';
            // Xohlasangiz DOM'dan butunlay olib tashlash uchun quyidagini oching:
            // stage.remove();
        }, 650);
    }

    requestAnimationFrame(tick);
})();