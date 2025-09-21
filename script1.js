// Gift Box Explosion Animation - Ultra Smooth Version
document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.getElementById('giftBox');
    const birthdayMessage = document.getElementById('birthdayMessage');
    
    // Auto-trigger explosion after 2 seconds
    setTimeout(() => {
        explodeGiftBox();
    }, 2000);
    
    // Manual trigger on click
    giftBox.addEventListener('click', explodeGiftBox);
    
    let isExploding = false;
    
    // New function to handle showing the message with a staggered animation
    function showBirthdayMessage() {
        // Use 'show' class to trigger the CSS transition
        birthdayMessage.classList.add('show');
        
        // Add staggered text animation
        const textElements = birthdayMessage.querySelectorAll('h1, p');
        textElements.forEach((element, index) => {
            element.style.animationDelay = `${0.2 + (index * 0.3)}s`;
        });
    }

    function explodeGiftBox() {
        // Prevent multiple triggers during animation
        if (isExploding) {
            return;
        }
        isExploding = true;
        
        // Add a subtle shake before the explosion
        giftBox.style.animation = 'shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite alternate';
        
        setTimeout(() => {
            giftBox.style.animation = ''; // Reset shake animation
            // Simple smooth explosion
            giftBox.classList.add('exploding');
            
            // Show birthday message after a short delay for smooth timing
            setTimeout(() => {
                showBirthdayMessage();
                
                // Add just a few simple sparkles
                createSimpleSparkles();
                
                // Hide gift box after animation
                setTimeout(() => {
                    giftBox.style.display = 'none';
                }, 1800);
            }, 1200);
        }, 600);
    }
    
    
    function createSimpleSparkles() {
        // Create just 5 simple sparkles
        for (let i = 0; i < 5; i++) {
            createSimpleSparkle();
        }
    }
    
    function createSimpleSparkle() {
        const sparkle = document.createElement('div');
        const colors = ['#ffff00', '#ffa500', '#ff69b4'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const size = 15;
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        
        sparkle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${randomColor};
            border-radius: 50%;
            pointer-events: none;
            z-index: 25;
            left: ${startX}px;
            top: ${startY}px;
            animation: simpleFloat 3s ease-out forwards;
            transform: translateZ(0);
        `;
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after 3 seconds
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);
    }
    
});
