document.addEventListener('DOMContentLoaded', function() {
    // スクロール時のヘッダー効果
    window.addEventListener('scroll', function() {
        let header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
    
    // ここに必要な JavaScript を追加
});
