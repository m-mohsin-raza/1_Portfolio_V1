// Global scripts

// Fill .background with enough spans to cover the viewport
function fillSpans() {
    const background = document.querySelector(".background");
    const spanSize = 20 + 2; // 20px + 2px gap
    const cols = Math.ceil(window.innerWidth / spanSize);
    const rows = Math.ceil(window.innerHeight / spanSize);
    const totalSpans = cols * rows;

    background.innerHTML = "";
    for (let i = 0; i < totalSpans; i++) {
        const span = document.createElement("span");
        background.appendChild(span);
    }
}

window.addEventListener("DOMContentLoaded", fillSpans);
window.addEventListener("resize", fillSpans);
