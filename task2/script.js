console.log("テスト")

function change_background_color() {
    // 0から255までのランダムな整数を作る
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // ページ全体の色を変える
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}