// ==========================
// 演出①：タブ切り替えUI
// ==========================
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // すべてのタブボタンから is-active を外す
        tabButtons.forEach((btn) => {
            btn.classList.remove('is-active');
        });
        // クリックされたボタンに is-active を付与
        button.classList.add('is-active');

        // すべてのコンテンツから is-show を外して非表示にする
        tabContents.forEach((content) => {
            content.classList.remove('is-show');
        });

        // 該当するコンテンツを表示する
        const targetId = button.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('is-show');
        }
    });
});

// ==========================
// 演出②：アコーディオンメニュー
// ==========================
const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach((title) => {
    title.addEventListener('click', () => {
        // 親要素（.accordion-item）のクラスを切り替える
        const item = title.closest('.accordion-item');
        item.classList.toggle('is-open');

        // アイコンの文字を「+」と「×」で切り替える
        const icon = title.querySelector('.icon');
        if (item.classList.contains('is-open')) {
            icon.textContent = '×';
        } else {
            icon.textContent = '+';
        }
    });
});