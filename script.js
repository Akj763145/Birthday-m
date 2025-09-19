// Gift Box Explosion Animation
document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.getElementById('giftBox');
    const birthdayMessage = document.getElementById('birthdayMessage');
    
    // Auto-trigger explosion after 2.5 seconds for better anticipation
    setTimeout(() => {
        explodeGiftBox();
    }, 2500);
    
    // Manual trigger on click
    giftBox.addEventListener('click', explodeGiftBox);
    
    function explodeGiftBox() {
        // Prevent multiple clicks during animation
        if (giftBox.classList.contains('exploding')) {
            return;
        }
        
        // Add subtle shake before explosion
        giftBox.style.animation = 'shake 0.5s ease-in-out';
        
        setTimeout(() => {
            // Add explosion animation
            giftBox.classList.add('exploding');
            
            // Show birthday message after explosion with better timing
            setTimeout(() => {
                birthdayMessage.classList.add('message-show');
                
                // Add sparkle effects with staggered timing
                createSparkleEffect();
                
                // Hide gift box after explosion
                setTimeout(() => {
                    giftBox.style.display = 'none';
                }, 1500);
            }, 1000);
        }, 500);
    }
    
    function createSparkleEffect() {
        // Create initial burst of sparkles
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                createFloatingSparkle();
            }, i * 80);
        }
        
        // Create continuous sparkles for longer celebration
        const sparkleInterval = setInterval(() => {
            for (let i = 0; i < 3; i++) {
                createFloatingSparkle();
            }
        }, 500);
        
        // Stop creating sparkles after 10 seconds
        setTimeout(() => {
            clearInterval(sparkleInterval);
        }, 10000);
    }
    
    function createFloatingSparkle() {
        const sparkle = document.createElement('div');
        const colors = ['#ffff00', '#ffa500', '#ff69b4', '#00ff87', '#87ceeb'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 12 + 6; // 6-18px
        
        sparkle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${randomColor}, ${randomColor}88);
            border-radius: 50%;
            pointer-events: none;
            z-index: 5;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            box-shadow: 0 0 ${size}px ${randomColor}88;
            animation: sparkleFloat ${3 + Math.random() * 2}s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        `;
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 5000);
    }
    
    // Add shake animation CSS
    const shakeCSS = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10% { transform: translateX(-5px) rotate(-1deg); }
            20% { transform: translateX(5px) rotate(1deg); }
            30% { transform: translateX(-5px) rotate(-1deg); }
            40% { transform: translateX(5px) rotate(1deg); }
            50% { transform: translateX(-3px) rotate(-0.5deg); }
            60% { transform: translateX(3px) rotate(0.5deg); }
            70% { transform: translateX(-2px) rotate(-0.5deg); }
            80% { transform: translateX(2px) rotate(0.5deg); }
            90% { transform: translateX(-1px); }
        }
    `;
    
    // Inject shake animation into the page
    const style = document.createElement('style');
    style.textContent = shakeCSS;
    document.head.appendChild(style);
});