const codeMap = {
  "fade-in": `@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.anim-fade-in {
  animation: fadeIn 1.2s ease infinite alternate;
}`,
  "slide-up": `@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

.anim-slide-up {
  animation: slideUp 1s ease infinite alternate;
}`,
  "slide-down": `@keyframes slideDown {
  from { opacity: 0; transform: translateY(-40px); }
  to   { opacity: 1; transform: translateY(0); }
}

.anim-slide-down {
  animation: slideDown 1s ease infinite alternate;
}`,
  "slide-left": `@keyframes slideLeft {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}

.anim-slide-left {
  animation: slideLeft 1s ease infinite alternate;
}`,
  "slide-right": `@keyframes slideRight {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}

.anim-slide-right {
  animation: slideRight 1s ease infinite alternate;
}`,
  "zoom-in": `@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.3); }
  to   { opacity: 1; transform: scale(1); }
}

.anim-zoom-in {
  animation: zoomIn 1s ease infinite alternate;
}`,
  "zoom-out": `@keyframes zoomOut {
  from { opacity: 0; transform: scale(1.5); }
  to   { opacity: 1; transform: scale(1); }
}

.anim-zoom-out {
  animation: zoomOut 1s ease infinite alternate;
}`,
  "blur-in": `@keyframes blurIn {
  from { opacity: 0; filter: blur(12px); }
  to   { opacity: 1; filter: blur(0); }
}

.anim-blur-in {
  animation: blurIn 1.5s ease infinite alternate;
}`,
  "bounce": `@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
}

.anim-bounce {
  animation: bounce 1.5s infinite;
}`,
  "pulse": `@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%  { transform: scale(1.1); }
}

.anim-pulse {
  animation: pulse 1.2s ease-in-out infinite;
}`,
  "shake": `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
  20%, 40%, 60%, 80%      { transform: translateX(6px); }
}

.anim-shake {
  animation: shake 0.8s ease infinite;
}`,
  "wobble": `@keyframes wobble {
  0%   { transform: translateX(0); }
  15%  { transform: translateX(-15px) rotate(-5deg); }
  30%  { transform: translateX(12px) rotate(3deg); }
  45%  { transform: translateX(-9px) rotate(-3deg); }
  60%  { transform: translateX(6px) rotate(2deg); }
  75%  { transform: translateX(-3px) rotate(-1deg); }
  100% { transform: translateX(0); }
}

.anim-wobble {
  animation: wobble 1s ease infinite;
}`,
  "jello": `@keyframes jello {
  0%, 100% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
}

.anim-jello {
  animation: jello 1.2s ease infinite;
}`,
  "rubber-band": `@keyframes rubberBand {
  0%, 100% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
}

.anim-rubber-band {
  animation: rubberBand 1.2s ease infinite;
}`,
  "heartbeat": `@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.15); }
  28% { transform: scale(1); }
  42% { transform: scale(1.15); }
  70% { transform: scale(1); }
}

.anim-heartbeat {
  animation: heartbeat 1.3s ease-in-out infinite;
}`,
  "swing": `@keyframes swing {
  20%  { transform: rotate(15deg); }
  40%  { transform: rotate(-10deg); }
  60%  { transform: rotate(5deg); }
  80%  { transform: rotate(-5deg); }
  100% { transform: rotate(0); }
}

.anim-swing {
  animation: swing 1s ease infinite;
}`,
  "tada": `@keyframes tada {
  0% { transform: scale(1); }
  10%, 20% { transform: scale(0.9) rotate(-3deg); }
  30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
  40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
  100% { transform: scale(1) rotate(0); }
}

.anim-tada {
  animation: tada 1.2s ease infinite;
}`,
  "flip": `@keyframes flip {
  0%   { transform: perspective(400px) rotateY(0); }
  100% { transform: perspective(400px) rotateY(360deg); }
}

.anim-flip {
  animation: flip 1.5s linear infinite;
}`,
  "flip-x": `@keyframes flipX {
  0%   { transform: perspective(400px) rotateX(0); }
  100% { transform: perspective(400px) rotateX(360deg); }
}

.anim-flip-x {
  animation: flipX 1.5s linear infinite;
}`,
  "rotate": `@keyframes rotate {
  from { transform: rotate(0); }
  to   { transform: rotate(360deg); }
}

.anim-rotate {
  animation: rotate 2s linear infinite;
}`,
  "rotate-scale": `@keyframes rotateScale {
  0%   { transform: rotate(0) scale(1); }
  50%  { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
}

.anim-rotate-scale {
  animation: rotateScale 2s ease-in-out infinite;
}`,
  "glow": `@keyframes glow {
  0%, 100% { box-shadow: 0 0 10px #6366f1, 0 0 20px #8b5cf6; }
  50% { box-shadow: 0 0 25px #6366f1, 0 0 50px #8b5cf6, 0 0 75px #ec4899; }
}

.anim-glow {
  animation: glow 2s ease-in-out infinite;
}`,
  "shadow-pop": `@keyframes shadowPop {
  0%, 100% { box-shadow: 0 2px 8px rgba(0,0,0,0.3); }
  50% { box-shadow: 0 12px 40px rgba(99,102,241,0.4); }
}

.anim-shadow-pop {
  animation: shadowPop 2s ease-in-out infinite;
}`,
  "gradient-shift": `@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.anim-gradient-shift {
  background: linear-gradient(270deg, #6366f1, #8b5cf6, #ec4899, #6366f1);
  background-size: 400% 400%;
  animation: gradientShift 3s ease infinite;
}`,
  "neon-flicker": `@keyframes neonFlicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    box-shadow: 0 0 5px #6366f1, 0 0 10px #6366f1, 0 0 20px #8b5cf6, 0 0 40px #8b5cf6;
  }
  20%, 24%, 55% { box-shadow: none; }
}

.anim-neon-flicker {
  animation: neonFlicker 2s infinite;
}`,
  "text-reveal": `@keyframes textReveal {
  0%   { clip-path: inset(0 100% 0 0); }
  100% { clip-path: inset(0 0 0 0); }
}

.anim-text-reveal span {
  display: inline-block;
  animation: textReveal 1.5s ease infinite alternate;
}`,
  "typewriter": `@keyframes typewriter {
  from { width: 0; }
  to   { width: 100%; }
}

.anim-typewriter span {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 2s steps(10) infinite alternate;
  border-right: 2px solid #6366f1;
}`,
  "underline-expand": `.anim-underline-expand span {
  position: relative;
}
.anim-underline-expand span::after {
  content: "";
  position: absolute;
  bottom: -2px; left: 50%;
  width: 0; height: 2px;
  background: #ec4899;
  transition: all 0.3s ease;
}
.anim-underline-expand:hover span::after {
  left: 0; width: 100%;
}`,
  "glitch": `@keyframes glitch {
  0%   { transform: translate(0); }
  20%  { transform: translate(-3px, 3px); }
  40%  { transform: translate(-3px, -3px); }
  60%  { transform: translate(3px, 3px); }
  80%  { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
}

.anim-glitch span {
  display: inline-block;
  animation: glitch 0.3s linear infinite;
  text-shadow: 2px 0 #ec4899, -2px 0 #6366f1;
}`,
  "hover-lift": `.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(99,102,241,0.3);
}`,
  "hover-glow": `.hover-glow {
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}
.hover-glow:hover {
  box-shadow: 0 0 30px #6366f1, 0 0 60px #8b5cf6;
}`,
  "hover-scale": `.hover-scale {
  transition: transform 0.3s ease;
  cursor: pointer;
}
.hover-scale:hover {
  transform: scale(1.15);
}`,
  "hover-rotate": `.hover-rotate {
  transition: transform 0.4s ease;
  cursor: pointer;
}
.hover-rotate:hover {
  transform: rotate(15deg) scale(1.1);
}`,
  "card-3d-tilt": `.card-3d-tilt {
  transition: transform 0.4s ease;
  transform-style: preserve-3d;
  cursor: pointer;
}
.card-3d-tilt:hover {
  transform: perspective(500px) rotateX(10deg) rotateY(-10deg) scale(1.05);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}`,
  "magnetic-button": `.magnetic-button {
  transition: transform 0.2s ease;
  cursor: pointer;
}
.magnetic-button:hover {
  transform: scale(1.1);
}`,
  "ripple": `.ripple {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.ripple::after {
  content: "";
  position: absolute;
  top: 50%; left: 50%;
  width: 0; height: 0;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.5s ease, height 0.5s ease;
}
.ripple:hover::after {
  width: 150px; height: 150px;
}`,
  "border-draw": `.border-draw {
  position: relative;
  background: transparent;
  border: 2px solid transparent;
  cursor: pointer;
}
.border-draw::before,
.border-draw::after {
  content: "";
  position: absolute;
  width: 0; height: 0;
  border: 2px solid transparent;
  transition: all 0.4s ease;
}
.border-draw::before {
  top: 0; left: 0;
  border-top-color: #6366f1;
  border-right-color: #6366f1;
}
.border-draw::after {
  bottom: 0; right: 0;
  border-bottom-color: #8b5cf6;
  border-left-color: #8b5cf6;
}
.border-draw:hover::before,
.border-draw:hover::after {
  width: 100%; height: 100%;
}`,
  "loading-spinner": `@keyframes spin {
  to { transform: rotate(360deg); }
}

.anim-loading-spinner {
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 3px solid rgba(99,102,241,0.2);
  border-top-color: #6366f1;
  animation: spin 0.8s linear infinite;
  background: transparent;
}`,
  "loading-dots": `@keyframes loadingDots {
  0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

.anim-loading-dots {
  display: flex;
  gap: 6px;
  align-items: center;
  background: transparent;
}
.anim-loading-dots span {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: #6366f1;
  display: inline-block;
  animation: loadingDots 1.4s ease-in-out infinite;
}
.anim-loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.anim-loading-dots span:nth-child(3) { animation-delay: 0.4s; }`,
  "skeleton-shimmer": `@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.anim-skeleton-shimmer {
  background: linear-gradient(90deg, #1e293b 25%, #334155 50%, #1e293b 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}`,
  "morphing-blob": `@keyframes morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}

.anim-morphing-blob {
  background: linear-gradient(135deg, #6366f1, #ec4899);
  animation: morph 4s ease-in-out infinite;
}`,
  "parallax": `.anim-parallax-layer {
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  transition: transform 0.1s ease-out;
}
/* Hover the parent card to see the effect */`,
  "stagger-fade": `@keyframes staggerFade {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1); }
}

.anim-stagger-fade {
  display: flex;
  gap: 6px;
  align-items: center;
  background: transparent;
}
.anim-stagger-fade span {
  width: 12px; height: 12px;
  border-radius: 50%;
  background: #6366f1;
  animation: staggerFade 1.2s ease-in-out infinite;
}
.anim-stagger-fade span:nth-child(2) { animation-delay: 0.15s; background: #8b5cf6; }
.anim-stagger-fade span:nth-child(3) { animation-delay: 0.30s; background: #ec4899; }
.anim-stagger-fade span:nth-child(4) { animation-delay: 0.45s; background: #f472b6; }`
};

const titleMap = {
  "fade-in": "Fade In", "slide-up": "Slide Up", "slide-down": "Slide Down",
  "slide-left": "Slide Left", "slide-right": "Slide Right",
  "zoom-in": "Zoom In", "zoom-out": "Zoom Out", "blur-in": "Blur In",
  "bounce": "Bounce", "pulse": "Pulse", "shake": "Shake", "wobble": "Wobble",
  "jello": "Jello", "rubber-band": "Rubber Band", "heartbeat": "Heartbeat",
  "swing": "Swing", "tada": "Tada", "flip": "Flip Y", "flip-x": "Flip X",
  "rotate": "Rotate", "rotate-scale": "Rotate Scale", "glow": "Glow",
  "shadow-pop": "Shadow Pop", "gradient-shift": "Gradient Shift",
  "neon-flicker": "Neon Flicker", "text-reveal": "Text Reveal",
  "typewriter": "Typewriter", "underline-expand": "Underline Expand",
  "glitch": "Glitch", "hover-lift": "Hover Lift", "hover-glow": "Hover Glow",
  "hover-scale": "Hover Scale", "hover-rotate": "Hover Rotate",
  "card-3d-tilt": "3D Tilt", "magnetic-button": "Magnetic Button",
  "ripple": "Ripple", "border-draw": "Border Draw",
  "loading-spinner": "Loading Spinner", "loading-dots": "Loading Dots",
  "skeleton-shimmer": "Skeleton Shimmer", "morphing-blob": "Morphing Blob",
  "parallax": "Parallax", "stagger-fade": "Stagger Fade"
};

function highlight(code) {
  return code
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\b(@keyframes|from|to|animation|transition|transform|opacity|display|position|content|width|height|background|border|box-shadow|filter|clip-path|overflow|white-space|cursor|transform-style|perspective|border-radius|top|bottom|left|right|gap|font-size|text-shadow)\b/g, '<span class="prop">$1</span>')
    .replace(/\b(flex|absolute|relative|hidden|pointer|preserve-3d|none|inline-block|ease|linear|ease-in-out|infinite|alternate|both|transparent|solid)\b/g, '<span class="val">$1</span>')
    .replace(/\b(\d+(?:\.\d+)?(?:px|rem|em|%|s|deg|vw|vh)?)\b/g, '<span class="num">$1</span>')
    .replace(/(@keyframes)\b/g, '<span class="kw">$1</span>')
    .replace(/([{}:;(),])/g, '<span class="punc">$1</span>')
    .replace(/(\.[a-zA-Z0-9_-]+)/g, '<span class="sel">$1</span>')
    .replace(/(::before|::after|:hover)/g, '<span class="sel">$1</span>');
}

const overlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalCode = document.getElementById("modalCode");
const closeBtn = document.getElementById("modalClose");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.anim;
    if (!key || !codeMap[key]) return;
    modalTitle.textContent = titleMap[key] || key;
    modalCode.innerHTML = highlight(codeMap[key]);
    overlay.classList.add("active");
  });
});

function closeModal() {
  overlay.classList.remove("active");
}
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", e => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});