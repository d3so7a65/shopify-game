const API_URL = 'http://https://shopify-server-3iuh.onrender.com';

async function saveGameResult(gameName, score) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        console.log('Пользователь не авторизован');
        return;
    }
    
    try {
        const response = await fetch('http://https://shopify-server-3iuh.onrender.com/api/save-score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ gameName, score })
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.isRecord) {
                console.log(`Новый рекорд для ${gameName}: ${score}`);
            }
        }
    } catch (error) {
        console.error('Ошибка сохранения рекорда:', error);
    }
}

function showNotification(message, isSuccess = true) {
    const oldNotification = document.querySelector('.game-notification');
    if (oldNotification) oldNotification.remove();
    
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'game-notification';
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${isSuccess ? '#5C62EC' : '#2ecc71'};
        color: white;
        padding: 12px 24px;
        border-radius: 30px;
        z-index: 9999;
        font-weight: 500;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2500);
}

if (!document.querySelector('#saveScoreStyles')) {
    const style = document.createElement('style');
    style.id = 'saveScoreStyles';
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

console.log('✅ saveScore.js загружен');