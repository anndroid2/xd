let money = 0;
let risk = 0;
let lv = 1;

function choose(type){

    if(type === "scan"){
        setStory("Forgalom elemzése… rejtett port találva.");
        lv++;
    }

    if(type === "exploit"){
        setStory("Behatolás sikeres. Adatok megszerezve.");
        money += 120;
        risk += 18;
    }

    if(type === "cover"){
        setStory("Nyomok törölve. Kockázat csökkent.");
        risk = Math.max(0, risk-12);
    }

    update();
}

function update(){
    id("money").innerText = money;
    id("risk").innerText = risk;
    id("lv").innerText = lv;
}

function setStory(t){
    id("story").innerText = t;
}

function id(x){ return document.getElementById(x); }
// ===== hacker rain =====

const canvas = document.getElementById("hackRain");
const ctx = canvas.getContext("2d");

function resizeRain(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeRain();
window.addEventListener("resize", resizeRain);

const letters = "01ABCDEF$#<>/[]{}";
const fontSize = 14;
const columns = Math.floor(window.innerWidth / fontSize);
const drops = Array(columns).fill(1);

function drawRain(){
    ctx.fillStyle = "rgba(0, 20, 10, 0.25)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#38ff9c";
    ctx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){
        const text = letters[Math.floor(Math.random()*letters.length)];

        // csak oldalsó sávokba rajzolunk
        const x = i * fontSize;

        if(x < 120 || x > canvas.width-120){
            ctx.fillText(text, x, drops[i]*fontSize);
        }

        if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawRain, 50);
