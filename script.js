// Dynamic lighting effect that follows cursor
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.left = mouseX + 'px';
    glow.style.top = mouseY + 'px';
    
    if (!document.querySelector('.cursor-glow')) {
        document.body.appendChild(glow);
    } else {
        document.querySelector('.cursor-glow').style.left = mouseX + 'px';
        document.querySelector('.cursor-glow').style.top = mouseY + 'px';
    }
});

// Add glowing cursor effect style
if (!document.querySelector('#dynamic-cursor-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-cursor-style';
    style.textContent = `
        .cursor-glow {
            position: fixed;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%);
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
            filter: blur(30px);
            transition: left 0.15s ease, top 0.15s ease;
        }
    `;
    document.head.appendChild(style);
}
