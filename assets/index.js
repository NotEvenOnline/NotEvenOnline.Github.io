/*
 *         ██ ▄█▀ ██▓ █     █░ ██▓    ▄▄▄██▀▀▀▄▄▄       ██ ▄█▀▓█████           *
 *         ██▄█▒ ▓██▒▓█░ █ ░█░▓██▒      ▒██  ▒████▄     ██▄█▒ ▓█   ▀           *
 *        ▓███▄░ ▒██▒▒█░ █ ░█ ▒██▒      ░██  ▒██  ▀█▄  ▓███▄░ ▒███             *
 *        ▓██ █▄ ░██░░█░ █ ░█ ░██░   ▓██▄██▓ ░██▄▄▄▄██ ▓██ █▄ ▒▓█  ▄           *
 *        ▒██▒ █▄░██░░░██▒██▓ ░██░    ▓███▒   ▓█   ▓██▒▒██▒ █▄░▒████▒          *
 *        ▒ ▒▒ ▓▒░▓  ░ ▓░▒ ▒  ░▓      ▒▓▒▒░   ▒▒   ▓▒█░▒ ▒▒ ▓▒░░ ▒░ ░          *
 *        ░ ░▒ ▒░ ▒ ░  ▒ ░ ░   ▒ ░    ▒ ░▒░    ▒   ▒▒ ░░ ░▒ ▒░ ░ ░  ░          *
 *        ░ ░░ ░  ▒ ░  ░   ░   ▒ ░    ░ ░ ░    ░   ▒   ░ ░░ ░    ░             *
 *        ░  ░    ░      ░     ░      ░   ░        ░  ░░  ░      ░  ░          *
 *                                                                             *
 *                                                                             *
 *                index.js created 2024/05/21                                  *
 *                by Kiwi Jake (HobbitsPuff@hotmail.com)                       *
 *                                                                             *
 *                All rights reserved to Kiwi Jake                             *
 *                                                                             *
 */

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = Array.from({ length: columns }).fill(canvas.height);

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);