// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // メニュートグルボタンを作成
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.textContent = 'メニュー';
    menuToggle.setAttribute('aria-label', 'メニューを開く');
    document.body.appendChild(menuToggle);
    
    // オーバーレイを作成
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
    
    const navContainer = document.querySelector('.nav-container');
    
    // メニューを開く
    menuToggle.addEventListener('click', () => {
        const isActive = navContainer.classList.contains('active');
        
        if (isActive) {
            navContainer.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.textContent = 'メニュー';
            document.body.style.overflow = '';
        } else {
            navContainer.classList.add('active');
            overlay.classList.add('active');
            menuToggle.textContent = '閉じる';
            document.body.style.overflow = 'hidden';
        }
    });
    
    // オーバーレイクリックで閉じる
    overlay.addEventListener('click', () => {
        navContainer.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.textContent = 'メニュー';
        document.body.style.overflow = '';
    });
    
    // リンククリックでメニューを閉じる
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.textContent = 'メニュー';
            document.body.style.overflow = '';
        });
    });
});
