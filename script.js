// 🎁 Falling gifts
for (let i = 0; i < 18; i++) {
    let g = document.createElement("div");
    g.className = "gift";
    g.innerHTML = "🎁";
    g.style.left = Math.random()*100 + "vw";
    g.style.fontSize = (20 + Math.random()*20) + "px";
    g.style.animationDuration = (5 + Math.random()*5) + "s";
    document.body.appendChild(g);
}

// 🎆 Fireworks click burst
document.addEventListener("click", e => {
    let f = document.createElement("div");
    f.innerHTML = "🎆";
    f.style.position = "fixed";
    f.style.left = e.clientX + "px";
    f.style.top = e.clientY + "px";
    f.style.fontSize = "38px";
    f.style.pointerEvents = "none";
    document.body.appendChild(f);
    setTimeout(()=> f.remove(), 700);
});
