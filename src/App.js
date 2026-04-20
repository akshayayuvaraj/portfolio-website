/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║         AKSHAYA Y — PREMIUM REACT PORTFOLIO                     ║
 * ║         Theme: Cosmic Flame × Deep Obsidian                     ║
 * ║         Stack: React + Inline Styles + CSS Animations           ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  HOW TO ADD YOUR IMAGES (READ THIS CAREFULLY):                  ║
 * ║                                                                  ║
 * ║  1. PROFILE PHOTO:                                               ║
 * ║     → Replace PROFILE_IMAGE_URL below with your image path      ║
 * ║     → Example: import photo from './assets/akshaya.jpg'         ║
 * ║     → Then set: const PROFILE_IMAGE_URL = photo                 ║
 * ║                                                                  ║
 * ║  2. PROJECT SCREENSHOTS:                                         ║
 * ║     → Replace each project's image field:                       ║
 * ║     → import hydroImg from './assets/hydrosmart.jpg'            ║
 * ║     → import firImg   from './assets/fir-system.jpg'            ║
 * ║     → Then set image: hydroImg in the PROJECTS array            ║
 * ║                                                                  ║
 * ║  3. CERTIFICATE PHOTOS:                                          ║
 * ║     → import cert1 from './assets/cert-html.jpg'                ║
 * ║     → Set image: cert1 in the CERTIFICATES array below          ║
 * ║                                                                  ║
 * ║  4. PROJECT LIVE LINKS:                                          ║
 * ║     → Replace liveUrl and codeUrl in PROJECTS array             ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

import { useState, useEffect, useRef, useCallback } from "react";
import myPhoto from './assets/akshaya-photo.jpeg';
import hydroImg from './assets/hydrosmart.PNG';
import fireImg from './assets/fire.PNG';
import loginImg from './assets/login.PNG';
import studyImg from './assets/study.PNG';
import counterImg from './assets/counter.PNG';
import eventImg from './assets/event.PNG';
import digiImg from './assets/digi cert.jpeg';
import webImg from './assets/study comrade.jpeg';
import htmlImg from './assets/html.jpeg';
import promptImg from './assets/propmt cert.jpeg';
import fsdImg from './assets/fsd cert.jpeg';
import codeImg from './assets/code cert.jpeg';
import aiImg from './assets/ai cert.jpeg';
import workshopImg from './assets/workshop.jpeg';
import aprImg from './assets/apr.PNG';








/* ════════════════════════════════════════════════════
   ██  CONFIGURATION — EDIT YOUR DETAILS HERE  ██
   ════════════════════════════════════════════════════ */

// ─── STEP 1: Replace with your actual photo ───────────────────────
// import myPhoto from './assets/akshaya-photo.jpg';
// const PROFILE_IMAGE_URL = myPhoto;
const PROFILE_IMAGE_URL =  myPhoto; // ← set to your imported photo variable

// ─── STEP 2: Social / Profile links ───────────────────────────────
const LINKS = {
  leetcode:   "https://leetcode.com/u/akshaya_yuvaraj/",     // ← your LeetCode
  hackerrank: "https://www.hackerrank.com/profile/akshayayuvaraj21",// ← your HackerRank
  github:     "https://github.com/akshayayuvaraj",          // ← your GitHub
  linkedin:   "https://www.linkedin.com/in/akshaya-y",      // ← your LinkedIn
  email:      "akshayayuvaraj2006@gmail.com",                    // ← your email
};

// ─── STEP 3: Projects ─────────────────────────────────────────────
// Replace image: null with import of your screenshot
// Replace liveUrl / codeUrl with actual links
const PROJECTS = [
  {
    id: 1,
    featured: true,
    emoji: "💧",
    title: "HydroSmart",
    subtitle: "Smart Water Management System",
    desc: "A smart water management web platform designed to monitor, analyse, and optimise water usage through real-time dashboards and intelligent alerts. Built for the Digi Venture competition at KPR Institute — awarded 2nd Prize for website creation excellence.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Data Viz"],
    image: hydroImg, // ← replace: import hydroImg from './assets/hydrosmart.jpg'; then put hydroImg here
    liveUrl: " https://akshayayuvaraj.github.io/HydroSmart/", // ← replace with your actual live URL
    codeUrl: "https://github.com/akshayayuvaraj/HydroSmart", // ← replace with your GitHub repo URL
    prize: "🥈 2nd Prize — Digi Venture, KPR Institute",
    color: "#00d4ff",
    accent: "rgba(0,212,255,0.15)",
    category: "Award Winner",
  },
  {
    id: 2,
    featured: true,
    emoji: "🔥",
    title: "AI Electrical Fire Prevention",
    subtitle: "AI-Based Predictive Safety System",
    desc: "An intelligent machine-learning system that predicts electrical fire risks by analysing voltage fluctuations, temperature sensors, and usage patterns. Uses AI algorithms to issue early warnings and prevent disasters before they happen.",
    tags: ["Python", "AI / ML", "Predictive Analysis", "Safety Tech"],
    image: fireImg, // ← replace: import fireImg from './assets/fire-ai.jpg'
    liveUrl: " https://akshayayuvaraj.github.io/AI-fire-prevention-system/",
    codeUrl: "https://github.com/akshayayuvaraj/AI-fire-prevention-system",
    prize: "🤖 AI Innovation Project",
    color: "#ff4f6e",
    accent: "rgba(255,79,110,0.15)",
    category: "AI Project",
  },
  {
    id: 3,
    emoji: "📚",
    title: "Smart Study Planner",
    subtitle: "Productivity Web App",
    desc: "A productivity-focused web app that helps students plan study schedules intelligently, set weekly goals, track progress, and manage time effectively with a clean, intuitive interface.",
    tags: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    image: studyImg, // ← replace: import studyImg from './assets/study-planner.jpg'
    liveUrl: "https://akshayayuvaraj.github.io/Smart-Study-plannar/",
    codeUrl: "https://github.com/akshayayuvaraj/Smart-Study-plannar",
    color: "#ffd166",
    accent: "rgba(255,209,102,0.15)",
    category: "Web App",
  },
  {
    id: 4,
    emoji: "🎪",
    title: "Event Registration System",
    subtitle: "Form & UI Project",
    desc: "A clean, modern event registration platform with multi-step form validation, dynamic UI feedback, email confirmation flow, and fully responsive design across all devices.",
    tags: ["HTML5"],
    image: eventImg,
    liveUrl: " https://akshayayuvaraj.github.io/Event-Registration/",
    codeUrl: "https://github.com/akshayayuvaraj/Event-Registration",
    color: "#b06dff",
    accent: "rgba(176,109,255,0.15)",
    category: "Web App",
  },
  {
    id: 5,
    emoji: "🔐",
    title: "Premium Login Page",
    subtitle: "UI / Animation Design",
    desc: "A beautifully crafted authentication interface featuring glassmorphism, smooth CSS animations, real-time input validation, and a polished visual experience across all screen sizes.",
    tags: ["HTML", "CSS Animations", "Glassmorphism", "JS"],
    image: loginImg,
    liveUrl: "https://akshayayuvaraj.github.io/Login-page/",
    codeUrl: "https://akshayayuvaraj.github.io/Login-page/",
    color: "#06ffa5",
    accent: "rgba(6,255,165,0.15)",
    category: "UI Design",
  },
  {
    id: 6,
    emoji: "🔢",
    title: "Interactive Counter App",
    subtitle: "JavaScript DOM Project",
    desc: "A minimal yet expressive counter application demonstrating solid DOM manipulation, event handling, -animationmicros on state changes, and clean vanilla JavaScript architecture.",
    tags: ["JavaScript", "CSS3", "DOM API"],
    image: counterImg,
    liveUrl: " https://akshayayuvaraj.github.io/Counter-App/",
    codeUrl: "https://github.com/akshayayuvaraj/Counter-App",
    color: "#38bdf8",
    accent: "rgba(56,189,248,0.15)",
    category: "JavaScript",
  },
  {
    id: 7,
    emoji: "🔢",
    title: "APR GARMENTS",
    subtitle: "JavaScript DOM Project",
    desc: "APR Garments is a responsive clothing website designed to showcase products with a clean, modern, and user-friendly interface for an enhanced shopping experience.",
    tags: ["JavaScript", "CSS3", "DOM API","Responsive"],
    image: aprImg,
    liveUrl: " https://akshayayuvaraj.github.io/APR-Garments/",
    codeUrl: "https://github.com/akshayayuvaraj/APR-Garments",
    color: "#38bdf8",
    accent: "rgba(56,189,248,0.15)",
    category: "JavaScript",
  },
];

// ─── STEP 4: Certificates ─────────────────────────────────────────
// Replace image: null with: import cert1 from './assets/cert-html.jpg'; then cert1
const CERTIFICATES = [
  {
    id: 1,
    org: "KPR Institute",
    name: "Digi Venture — 2nd Prize (HydroSmart Website)",
    type: "Competition Winner Certificate",
    emoji: "🏆",
    color: "#ffd166",
    image: digiImg, // ← import digiCert from './assets/cert-digiventure.jpg'
    highlight: true,
  },
  {
    id: 2,
    org: "Study Comrade",
    name: "Webinar Through Web Technologies",
    type: "Webinar Participation Certificate",
    emoji: "🌐",
    color: "#00d4ff",
    image: webImg, // ← import webCert from './assets/cert-web-technologies.jpg'
  },
  {
    id: 3,
    org: "Sololearn",
    name: "Introduction to HTML",
    type: "Course Completion Certificate",
    emoji: "📄",
    color: "#ff4f6e",
    image: htmlImg, // ← import htmlCert from './assets/cert-html.jpg'
  },
  {
    id: 4,
    org: "Simplilearn",
    name: "Introduction to Prompt Engineering",
    type: "Course Completion Certificate",
    emoji: "🤖",
    color: "#b06dff",
    image: promptImg, // ← import promptCert from './assets/cert-prompt.jpg'
  },
  {
    id: 5,
    org: "Novitech",
    name: "Full Stack Development",
    type: "Training Program Certificate",
    emoji: "💻",
    color: "#06ffa5",
    image: fsdImg, // ← import fsCert from './assets/cert-fullstack.jpg'
  },
  {
    id: 6,
    org: "Novitech",
    name: "Build Your Brand, Land Your Job — Code, Create, Connect",
    type: "Webinar Certificate",
    emoji: "🚀",
    color: "#ffd166",
    image: codeImg, // ← import brandCert from './assets/cert-brand.jpg'
  },
  {
    id: 7,
    org: "Kongu Engineering College",
    name: "AI Prompting Certificate",
    type: "Workshop Certificate",
    emoji: "🧠",
    color: "#38bdf8",
    image: aiImg, // ← import aiCert from './assets/cert-ai-kongu.jpg'
  },
  {
    id: 8,
    org: "KPRIET College",
    name: "AI Workshop Certificate",
    type: "Technical Workshop",
    emoji: "🔬",
    color: "#ff4f6e",
    image: workshopImg, // ← import kprCert from './assets/cert-ai-kpriet.jpg'
  },
];

/* ════════════════════════════════════════════════════
   GLOBAL STYLES (injected into <head>)
   ════════════════════════════════════════════════════ */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,600;1,400;1,600&display=swap');
 
  :root {
    --ink:     #04050e;
    --ink2:    #090b1a;
    --ink3:    #0f1228;
    --ink4:    #161a35;
    --coral:   #ff4f6e;
    --gold:    #ffd166;
    --mint:    #06ffa5;
    --violet:  #b06dff;
    --sky:     #38bdf8;
    --b1: rgba(255,255,255,0.07);
    --b2: rgba(255,255,255,0.04);
  }
 
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
 
  body {
    background: var(--ink);
    color: #e8ecff;
    font-family: 'Outfit', sans-serif;
    overflow-x: hidden;
    cursor: none;
  }
 
  ::selection { background: #ff4f6e; color: #fff; }
  a { color: inherit; text-decoration: none; }
 
  /* ── CUSTOM CURSOR ── */
  #ak-cursor-dot {
    width: 8px; height: 8px;
    background: #ff4f6e;
    border-radius: 50%;
    position: fixed; z-index: 99999;
    transform: translate(-50%,-50%);
    pointer-events: none;
    transition: width .15s, height .15s, background .2s;
    mix-blend-mode: difference;
  }
  #ak-cursor-ring {
    width: 36px; height: 36px;
    border: 1.5px solid rgba(255,79,110,0.6);
    border-radius: 50%;
    position: fixed; z-index: 99998;
    transform: translate(-50%,-50%);
    pointer-events: none;
    transition: width .3s cubic-bezier(.25,.46,.45,.94), height .3s cubic-bezier(.25,.46,.45,.94), border-color .3s;
  }
  body.cx #ak-cursor-ring { width: 64px; height: 64px; border-color: #ff4f6e; }
  body.cx #ak-cursor-dot  { width: 4px; height: 4px; }
 
  /* ── SCROLL PROGRESS ── */
  #ak-progress {
    position: fixed; top: 0; left: 0; z-index: 9990;
    height: 3px;
    background: linear-gradient(90deg, #ff4f6e, #ffd166, #06ffa5, #b06dff);
    background-size: 300% 100%;
    animation: gradShift 4s linear infinite;
    width: 0%;
    box-shadow: 0 0 12px #ff4f6e;
  }
  @keyframes gradShift { 0%{background-position:0%} 100%{background-position:300%} }
 
  /* ── GRAIN ── */
  #ak-grain {
    position: fixed; inset: 0; z-index: 1;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity: .028; pointer-events: none;
  }
 
  /* ── ANIMATIONS ── */
  @keyframes floatUp   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
  @keyframes spinSlow  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes blobPulse { 0%,100%{transform:scale(1) translate(0,0)} 33%{transform:scale(1.08) translate(40px,-50px)} 66%{transform:scale(.95) translate(-30px,30px)} }
  @keyframes shimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes blinkC    { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes fadeUp    { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
  @keyframes nameReveal{ from{clip-path:polygon(0 0,0 0,0 100%,0 100%)} to{clip-path:polygon(0 0,100% 0,100% 100%,0 100%)} }
  @keyframes scaleIn   { from{opacity:0;transform:scale(.85)} to{opacity:1;transform:scale(1)} }
  @keyframes slideLeft { from{opacity:0;transform:translateX(-30px)} to{opacity:1;transform:translateX(0)} }
  @keyframes particleRise { 0%{transform:translateY(100vh) scale(0);opacity:0} 5%{opacity:.7} 95%{opacity:.4} 100%{transform:translateY(-5vh) translateX(var(--dx)) scale(1);opacity:0} }
  @keyframes borderGlow { 0%,100%{box-shadow:0 0 0 1px rgba(255,79,110,0.2)} 50%{box-shadow:0 0 30px rgba(255,79,110,0.3),0 0 0 1px rgba(255,79,110,0.5)} }
  @keyframes rotateStar { from{transform:rotate(0deg) scale(1)} to{transform:rotate(360deg) scale(1)} }
  @keyframes marqueeScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes pulseDot  { 0%,100%{opacity:1;box-shadow:0 0 8px #06ffa5} 50%{opacity:.4;box-shadow:0 0 20px #06ffa5} }
  @keyframes waveBar   { 0%,100%{height:8px} 50%{height:28px} }
  @keyframes tiltFloat { 0%,100%{transform:perspective(800px) rotateX(0deg) rotateY(0deg)} 25%{transform:perspective(800px) rotateX(3deg) rotateY(-3deg)} 75%{transform:perspective(800px) rotateX(-3deg) rotateY(3deg)} }
 
  /* ── SCROLLBAR ── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #04050e; }
  ::-webkit-scrollbar-thumb { background: linear-gradient(#ff4f6e,#ffd166); border-radius: 4px; }
 
  /* ── SECTION REVEAL ── */
  .ak-reveal { opacity: 0; transform: translateY(44px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
  .ak-reveal.visible { opacity: 1; transform: translateY(0); }
  .ak-reveal.d1 { transition-delay:.1s } .ak-reveal.d2 { transition-delay:.2s }
  .ak-reveal.d3 { transition-delay:.3s } .ak-reveal.d4 { transition-delay:.4s }
  .ak-reveal.d5 { transition-delay:.5s }
 
  /* ── CERT MODAL ── */
  .cert-modal-overlay {
    position: fixed; inset: 0; z-index: 9000;
    background: rgba(4,5,14,0.92);
    backdrop-filter: blur(20px);
    display: flex; align-items: center; justify-content: center;
    animation: fadeUp .25s ease;
    padding: 20px;
  }
  .cert-modal-box {
    max-width: 700px; width: 100%;
    background: #0f1228;
    border-radius: 20px;
    border: 1px solid rgba(255,209,102,0.25);
    overflow: hidden;
    box-shadow: 0 40px 100px rgba(0,0,0,0.7);
    animation: scaleIn .3s cubic-bezier(.16,1,.3,1);
  }
  .cert-modal-img { width: 100%; aspect-ratio: 16/10; object-fit: cover; display: block; }
  .cert-modal-img-placeholder {
    width: 100%; aspect-ratio: 16/10;
    background: linear-gradient(135deg,#0f1228,#161a35);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 1rem; color: #5e6685; font-size: .9rem;
  }
  .cert-modal-body { padding: 1.5rem 2rem 2rem; }
  .cert-modal-close {
    position: absolute; top: 16px; right: 16px;
    width: 36px; height: 36px; border-radius: 50%;
    background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12);
    color: #fff; font-size: 1.2rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background .2s;
  }
  .cert-modal-close:hover { background: rgba(255,79,110,.3); }
 
  /* ── NAV ACTIVE ── */
  .ak-nav-link.active { color: #ff4f6e !important; }
  .ak-nav-link.active::after { width: 100% !important; }
 
  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    body { cursor: auto; }
    #ak-cursor-dot, #ak-cursor-ring { display: none; }
  }
`;
 
/* ════════════════════════════════════════════════════
   UTILITY HOOKS
   ════════════════════════════════════════════════════ */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.12, ...options });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}
 
function useTyped(words, speed = 100, deleteSpeed = 55) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[wi];
    const timer = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, ci + 1));
        if (ci + 1 >= word.length) setTimeout(() => setDel(true), 2200);
        else setCi(c => c + 1);
      } else {
        setText(word.slice(0, ci - 1));
        if (ci - 1 <= 0) { setDel(false); setWi(w => (w + 1) % words.length); setCi(0); }
        else setCi(c => c - 1);
      }
    }, del ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [text, wi, ci, del, words, speed, deleteSpeed]);
  return text;
}
 
/* ════════════════════════════════════════════════════
   PARTICLE SYSTEM
   ════════════════════════════════════════════════════ */
function Particles() {
  const colors = ["#ff4f6e","#ffd166","#06ffa5","#b06dff","#38bdf8"];
  const particles = Array.from({ length: 32 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3.5 + 1.5,
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: `${Math.random() * 14 + 8}s`,
    delay: `${Math.random() * 10}s`,
    dx: `${(Math.random() - .5) * 220}px`,
  }));
  return (
    <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: "absolute",
          left: p.left,
          bottom: 0,
          width: p.size,
          height: p.size,
          borderRadius: "50%",
          background: p.color,
          boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          animation: `particleRise ${p.duration} ${p.delay} linear infinite`,
          "--dx": p.dx,
          opacity: 0,
        }} />
      ))}
    </div>
  );
}
 
/* ════════════════════════════════════════════════════
   AURORA BLOBS
   ════════════════════════════════════════════════════ */
function AuroraBlobs() {
  const blobs = [
    { color:"rgba(255,79,110,.22)",  top:"-15%",  right:"-5%",  size:650, dur:"14s" },
    { color:"rgba(176,109,255,.18)", bottom:"-10%",left:"-8%",   size:580, dur:"18s" },
    { color:"rgba(255,209,102,.12)", top:"30%",   left:"25%",   size:420, dur:"11s", delay:"3s" },
    { color:"rgba(6,255,165,.09)",   bottom:"20%",right:"10%",  size:300, dur:"9s",  delay:"5s" },
  ];
  return (
    <div style={{ position:"absolute", inset:0, overflow:"hidden", zIndex:0 }}>
      {blobs.map((b, i) => (
        <div key={i} style={{
          position: "absolute",
          width: b.size, height: b.size,
          top: b.top, bottom: b.bottom, left: b.left, right: b.right,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${b.color}, transparent 65%)`,
          filter: "blur(90px)",
          animation: `blobPulse ${b.dur} ${b.delay||"0s"} ease-in-out infinite`,
        }} />
      ))}
      {/* Grid lines */}
      <div style={{
        position:"absolute", inset:0,
        backgroundImage: "linear-gradient(rgba(255,79,110,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,79,110,.03) 1px,transparent 1px)",
        backgroundSize: "52px 52px",
        transform: "rotate(-4deg) scale(1.2)",
      }} />
    </div>
  );
}
 
/* ════════════════════════════════════════════════════
   NAVBAR
   ════════════════════════════════════════════════════ */
function Navbar({ scrolled, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["about","skills","projects","certs","journey","contact"];
 
  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 800,
    height: 70,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 6%",
    transition: "background .4s, border-color .4s, box-shadow .4s",
    background: scrolled ? "rgba(4,5,14,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
    borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.07)" : "transparent"}`,
    boxShadow: scrolled ? "0 2px 60px rgba(0,0,0,0.5)" : "none",
  };
 
  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <div style={{
          fontFamily: "'Bebas Neue',cursive", fontSize: "1.9rem", letterSpacing: "3px",
          background: "linear-gradient(135deg,#ff4f6e,#ffd166,#06ffa5)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "shimmer 4s linear infinite",
          cursor: "pointer",
        }} onClick={() => window.scrollTo(0,0)}>AY</div>
 
        {/* Desktop links */}
        <ul style={{ display:"flex", gap:"2rem", listStyle:"none", alignItems:"center" }} className="ak-desktop-nav">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l}`} className={`ak-nav-link${activeSection===l?" active":""}`} style={{
                fontSize: ".82rem", fontWeight: 600, color: activeSection===l?"#ff4f6e":"#5e6685",
                letterSpacing: ".08em", textTransform: "uppercase",
                transition: "color .2s", position: "relative", padding: "4px 0",
              }}>
                {l === "certs" ? "Achievements" : l.charAt(0).toUpperCase()+l.slice(1)}
                <span style={{
                  position:"absolute", bottom:-4, left:0,
                  width: activeSection===l?"100%":"0%",
                  height:2, background:"linear-gradient(90deg,#ff4f6e,#ffd166)",
                  borderRadius:2, transition:"width .25s",
                }} />
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" style={{
              padding:".5rem 1.5rem", borderRadius:6,
              background:"linear-gradient(135deg,#ff4f6e,#e63557)",
              color:"#fff", fontWeight:700, fontSize:".78rem",
              letterSpacing:".1em", textTransform:"uppercase",
              boxShadow:"0 4px 20px rgba(255,79,110,.35)",
              transition:"transform .2s,box-shadow .2s",
              display:"inline-block",
            }}
            onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 8px 32px rgba(255,79,110,.5)"}}
            onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow="0 4px 20px rgba(255,79,110,.35)"}}>
              Hire Me
            </a>
          </li>
        </ul>
 
        {/* Hamburger */}
        <button onClick={() => setMenuOpen(m=>!m)} style={{
          display:"none", flexDirection:"column", gap:5, background:"none", border:"none",
          cursor:"pointer", padding:4,
        }} className="ak-ham">
          {[0,1,2].map(i => <span key={i} style={{
            width:22, height:2, background:"#e8ecff", borderRadius:2, display:"block",
            transition:"all .3s",
            transform: menuOpen ? (i===0?"rotate(45deg) translate(5px,5px)":i===2?"rotate(-45deg) translate(5px,-5px)":"") : "",
            opacity: menuOpen && i===1 ? 0 : 1,
          }} />)}
        </button>
      </nav>
 
      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position:"fixed", inset:0, zIndex:790,
          background:"rgba(4,5,14,.97)", backdropFilter:"blur(30px)",
          display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"2rem",
        }}>
          <button onClick={()=>setMenuOpen(false)} style={{
            position:"absolute", top:24, right:"6%",
            background:"none", border:"none", color:"#5e6685", fontSize:"1.8rem", cursor:"pointer",
          }}>✕</button>
          {links.map(l => (
            <a key={l} href={`#${l}`} onClick={()=>setMenuOpen(false)} style={{
              fontFamily:"'Bebas Neue',cursive", fontSize:"2.8rem", letterSpacing:"3px",
              color: activeSection===l?"#ff4f6e":"#e8ecff",
              transition:"color .2s",
            }}>
              {l==="certs"?"Achievements":l.charAt(0).toUpperCase()+l.slice(1)}
            </a>
          ))}
        </div>
      )}
 
      <style>{`
        @media (max-width:768px) {
          .ak-desktop-nav { display:none !important; }
          .ak-ham { display:flex !important; }
        }
      `}</style>
    </>
  );
}
 
/* ════════════════════════════════════════════════════
   HERO SECTION
   ════════════════════════════════════════════════════ */
function Hero() {
  const typed = useTyped(["Frontend Developer","AI Builder","Web Designer","Problem Solver","React Learner","Code Creator"]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);
 
  const anim = (delay) => mounted ? {
    animation: `fadeUp .8s ${delay}s cubic-bezier(.16,1,.3,1) forwards`,
    opacity: 0,
  } : { opacity: 0 };
 
  return (
    <section id="hero" style={{
      minHeight: "100svh",
      display: "flex", alignItems: "center",
      paddingTop: 140, paddingBottom: 80,
      padding: "140px 6% 80px",
      position: "relative", overflow: "hidden",
      zIndex: 3,
    }}>
      <AuroraBlobs />
      <Particles />
 
      <div style={{ maxWidth:1200, margin:"0 auto", width:"100%", position:"relative", zIndex:2 }}>
        <div style={{ maxWidth: 900 }}>
 
          {/* Badge */}
          <div style={{
            ...anim(.1),
            display:"inline-flex", alignItems:"center", gap:".6rem",
            padding:".4rem 1.1rem .4rem .6rem",
            borderRadius:"100px",
            border:"1px solid rgba(255,79,110,.3)",
            background:"rgba(255,79,110,.07)",
            backdropFilter:"blur(12px)",
            fontSize:".78rem", color:"#a0a8c8",
            marginBottom:"2rem",
          }}>
            <span style={{
              background:"linear-gradient(135deg,#ff4f6e,#ffd166)",
              color:"#000", fontSize:".65rem", fontWeight:800,
              letterSpacing:".1em", textTransform:"uppercase",
              padding:".18rem .65rem", borderRadius:"100px",
            }}>✨ Open to Work</span>
            MERN Stack Developer · AI Builder · Tiruppur 🇮🇳
          </div>
 
          {/* Name */}
          <h1 style={{
            fontFamily:"'Bebas Neue',cursive",
            fontSize:"clamp(5rem,15vw,12rem)",
            letterSpacing:"2px", lineHeight:.88,
            color:"#fff",
            ...anim(.2),
          }}>
            AKSHAYA
            <span style={{
              display:"block",
              WebkitTextStroke:"2.5px #ff4f6e",
              color:"transparent",
              position:"relative",
            }}>
              <span style={{
                position:"absolute", left:0, top:0,
                color:"#ff4f6e",
                animation: mounted ? "nameReveal 1.2s .85s cubic-bezier(.77,0,.18,1) forwards" : "none",
                clipPath:"polygon(0 0,0 0,0 100%,0 100%)",
              }}>Y.</span>
              Y.
            </span>
          </h1>
 
          {/* Role typed */}
          <div style={{ ...anim(.5), marginTop:"1.6rem", display:"flex", alignItems:"center", gap:"1rem", flexWrap:"wrap" }}>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1rem,2.2vw,1.4rem)", color:"#5e6685", fontStyle:"italic", fontWeight:400 }}>
              I am a
            </span>
            <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1rem,2.2vw,1.4rem)", fontWeight:700, color:"#ffd166", minWidth:240 }}>
              {typed}
              <span style={{ display:"inline-block", width:2, height:"1em", background:"#ffd166", marginLeft:2, verticalAlign:"middle", animation:"blinkC .85s step-end infinite" }} />
            </span>
          </div>
 
          {/* Tagline */}
          <p style={{
            ...anim(.68),
            marginTop:"1.8rem",
            fontSize:"clamp(.9rem,1.4vw,1.05rem)",
            color:"#5e6685", maxWidth:560, lineHeight:1.9,
          }}>
            A passionate <strong style={{color:"#e8ecff"}}>MERN Stack Developer</strong> and{" "}
            <strong style={{color:"#e8ecff"}}>AI Builder</strong> from ESEC College, crafting immersive web experiences and intelligent systems that solve real problems beautifully.
          </p>
 
          {/* CTAs */}
          <div style={{ ...anim(.84), marginTop:"2.8rem", display:"flex", gap:"1rem", flexWrap:"wrap" }}>
            {[
              { label:"See My Work ↗", href:"#projects", primary:true },
              { label:"Let's Connect →", href:"#contact", primary:false },
              { label:"Download CV ↓", href:"#", gold:true },
            ].map(b => (
              <a key={b.label} href={b.href} style={{
                display:"inline-flex", alignItems:"center", gap:".5rem",
                padding:".9rem 2.2rem",
                background: b.primary ? "linear-gradient(135deg,#ff4f6e,#e63557)" : b.gold ? "transparent" : "transparent",
                border: b.primary ? "none" : b.gold ? "1px solid rgba(255,209,102,.35)" : "1px solid rgba(255,255,255,.1)",
                borderRadius:8,
                color: b.primary ? "#fff" : b.gold ? "#ffd166" : "#e8ecff",
                fontWeight: b.primary ? 700 : 600,
                fontSize:".88rem", letterSpacing:".04em",
                boxShadow: b.primary ? "0 8px 28px rgba(255,79,110,.35)" : "none",
                transition:"transform .25s,box-shadow .25s,border-color .25s",
              }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";if(b.primary)e.currentTarget.style.boxShadow="0 16px 48px rgba(255,79,110,.45)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";if(b.primary)e.currentTarget.style.boxShadow="0 8px 28px rgba(255,79,110,.35)";}}>
                {b.label}
              </a>
            ))}
          </div>
 
          {/* Stats */}
          <div style={{
            ...anim(1),
            marginTop:"3.5rem",
            display:"flex", gap:0,
            border:"1px solid rgba(255,255,255,0.07)",
            borderRadius:12, overflow:"hidden", width:"fit-content",
            background:"rgba(9,11,26,0.6)", backdropFilter:"blur(20px)",
          }}>
            {[
              { n:"6+", l:"Projects" },
              { n:"8+", l:"Certificates" },
              { n:"2nd", l:"Prize Winner" },
              { n:"ESEC", l:"College" },
            ].map((s, i) => (
              <div key={i} style={{
                padding:"1.1rem 2rem",
                borderRight: i<3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                textAlign:"center",
              }}>
                <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"2rem", letterSpacing:"1px", color:"#fff", lineHeight:1 }}>
                  {s.n.replace(/\d+/g, m=>`<span style="color:#ff4f6e">${m}</span>`).includes("<") ?
                    <span dangerouslySetInnerHTML={{__html:s.n.replace(/(\d+)/g,'<span style="color:#ff4f6e">$1</span>')}} /> : s.n}
                </div>
                <div style={{ fontSize:".68rem", color:"#363b58", textTransform:"uppercase", letterSpacing:".14em", marginTop:4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* Scroll indicator */}
      <div style={{
        position:"absolute", bottom:44, left:"6%",
        display:"flex", alignItems:"center", gap:".8rem",
        ...anim(1.4),
      }}>
        <span style={{ fontSize:".68rem", color:"#363b58", textTransform:"uppercase", letterSpacing:".18em" }}>Scroll to explore</span>
        <div style={{
          width:60, height:1,
          background:"linear-gradient(90deg,#ff4f6e,transparent)",
          animation:"shimmer 2s linear infinite",
        }} />
      </div>
    </section>
  );
}
 
/* ════════════════════════════════════════════════════
   ABOUT SECTION
   ════════════════════════════════════════════════════ */
function About() {
  const [ref, inView] = useInView();
  const [imgHovered, setImgHovered] = useState(false);
 
  return (
    <section id="about" style={{ background:"#090b1a", padding:"130px 6%", position:"relative", zIndex:3 }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }} ref={ref}>
        <div style={{
          display:"grid",
          gridTemplateColumns:"380px 1fr",
          gap:"6rem", alignItems:"start",
        }} className="ak-about-grid">
 
          {/* Photo Column */}
          <div className={`ak-reveal${inView?" visible":""}`} style={{ position:"relative" }}>
            {/* Corner brackets */}
            {[{t:-12,l:-12,bt:"top",bl:"left"},{b:-12,r:-12,bt:"bottom",bl:"right"}].map((c,i)=>(
              <div key={i} style={{
                position:"absolute",
                top:c.t, left:c.l, bottom:c.b, right:c.r,
                width:32, height:32,
                borderTop: i===0 ? "2.5px solid #ff4f6e" : "none",
                borderLeft: i===0 ? "2.5px solid #ff4f6e" : "none",
                borderBottom: i===1 ? "2.5px solid #ffd166" : "none",
                borderRight: i===1 ? "2.5px solid #ffd166" : "none",
                borderRadius: i===0?"6px 0 0 0":"0 0 6px 0",
              }} />
            ))}
 
            {/* Photo */}
            <div
              onMouseEnter={()=>setImgHovered(true)}
              onMouseLeave={()=>setImgHovered(false)}
              style={{
                borderRadius:24, overflow:"hidden",
                border:"1px solid rgba(255,79,110,.2)",
                aspectRatio:"3/4",
                background:"linear-gradient(155deg,#161a35,#0a0d22)",
                display:"flex", alignItems:"center", justifyContent:"center",
                position:"relative",
                transition:"box-shadow .4s",
                boxShadow: imgHovered ? "0 0 60px rgba(255,79,110,.25),0 0 0 1px rgba(255,79,110,.3)" : "0 0 0 1px rgba(255,79,110,.1)",
                animation:"tiltFloat 8s ease-in-out infinite",
              }}>
              {PROFILE_IMAGE_URL ? (
                <img src={PROFILE_IMAGE_URL} alt="Akshaya Y" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              ) : (
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"1rem", color:"#363b58", textAlign:"center", padding:"2rem" }}>
                  <span style={{ fontSize:"5rem" }}>👩‍💻</span>
                  <div style={{ fontSize:".78rem", lineHeight:1.6 }}>
                    <strong style={{color:"#5e6685",display:"block",marginBottom:4}}>Add Your Photo</strong>
                    Import your image file and set<br/>PROFILE_IMAGE_URL at the top
                  </div>
                </div>
              )}
              {/* Gradient overlay */}
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,transparent 50%,rgba(4,5,14,.85))", pointerEvents:"none" }} />
              {/* Status badge */}
              <div style={{
                position:"absolute", top:16, right:16, zIndex:2,
                display:"flex", alignItems:"center", gap:".5rem",
                padding:".3rem .8rem", borderRadius:"100px",
                background:"rgba(6,255,165,.1)", border:"1px solid rgba(6,255,165,.3)",
                fontSize:".68rem", fontWeight:700, color:"#06ffa5",
                letterSpacing:".1em", textTransform:"uppercase",
              }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:"#06ffa5", boxShadow:"0 0 10px #06ffa5", animation:"pulseDot 2s infinite", display:"inline-block" }} />
                Open to Work
              </div>
            </div>
 
            {/* Float card */}
            <div style={{
              position:"absolute", bottom:-24, right:-24,
              background:"linear-gradient(135deg,#0f1228,#161a35)",
              border:"1px solid rgba(255,79,110,.25)",
              borderRadius:14, padding:"1rem 1.4rem", zIndex:2,
              boxShadow:"0 8px 32px rgba(0,0,0,.6)",
            }}>
              <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"2rem", letterSpacing:"1px", color:"#ff4f6e", lineHeight:1 }}>2<sup style={{fontSize:".85rem",color:"#5e6685"}}>nd</sup></div>
              <div style={{ fontSize:".7rem", color:"#5e6685", textTransform:"uppercase", letterSpacing:".12em", marginTop:2 }}>Prize — Digi Venture</div>
            </div>
          </div>
 
          {/* Text Column */}
          <div className={`ak-reveal d2${inView?" visible":""}`}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:".7rem", fontSize:".7rem", fontWeight:700, letterSpacing:".22em", textTransform:"uppercase", color:"#ff4f6e", marginBottom:"1.2rem" }}>
              <span style={{ width:30, height:1.5, background:"linear-gradient(90deg,#ff4f6e,#ffd166)", display:"inline-block" }} />
              About Me
            </div>
            <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(3rem,5vw,5rem)", letterSpacing:"2px", lineHeight:.95, color:"#fff" }}>
              AKSHAYA
              <em style={{ display:"block", fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(2rem,3.5vw,3.5rem)", color:"#ffd166", letterSpacing:0 }}>Y.</em>
            </h2>
 
            <div style={{ marginTop:"1.5rem" }}>
              {[
                <>Hey! I'm <strong style={{color:"#fff"}}>Akshaya Y</strong> — a <strong style={{color:"#ff4f6e"}}>MERN Stack Developer</strong> and <strong style={{color:"#ff4f6e"}}>AI Builder</strong> from ESEC College, Erode. I build things that are not just functional, but beautiful and impactful.</>,
                <>My award-winning project <strong style={{color:"#fff"}}>HydroSmart</strong> — a smart water management webpage — earned me the <strong style={{color:"#ffd166"}}>2nd Prize at KPR Institute's Digi Venture competition</strong>. I also built an <strong style={{color:"#fff"}}>AI-Based Electrical Fire Prevention System</strong> that uses machine learning to predict fire risks from electrical patterns.</>,
                <>I'm passionate about the <strong style={{color:"#fff"}}>intersection of AI and Frontend</strong> — making powerful technology feel human, accessible, and visually stunning. Every single day I'm building, learning, and growing toward full-stack mastery.</>,
              ].map((p, i) => (
                <p key={i} style={{ color:"#a0a8c8", fontSize:".97rem", lineHeight:1.88, marginBottom:"1.1rem" }}>{p}</p>
              ))}
            </div>
 
            {/* Tech chips */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:".5rem", marginTop:"1.5rem" }}>
              {["HTML5","CSS3","JavaScript","React","Python","AI/ML","Prompt Eng.","Git","UI/UX","Full Stack"].map(c => (
                <span key={c} style={{
                  padding:".32rem .85rem", borderRadius:6,
                  fontSize:".77rem", fontWeight:600,
                  border:"1px solid rgba(255,255,255,.07)",
                  background:"#161a35", color:"#5e6685",
                  transition:"all .2s", cursor:"default",
                }}
                onMouseEnter={e=>{e.target.style.borderColor="#ff4f6e";e.target.style.color="#ff4f6e";e.target.style.background="rgba(255,79,110,.1)";e.target.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.target.style.borderColor="rgba(255,255,255,.07)";e.target.style.color="#5e6685";e.target.style.background="#161a35";e.target.style.transform=""}}>
                  {c}
                </span>
              ))}
            </div>
 
            {/* Social proof */}
            <div style={{ display:"flex", gap:"1rem", marginTop:"2rem", flexWrap:"wrap" }}>
              {[
                { ico:"🧩", label:"LeetCode",  val:"View Profile →", href:LINKS.leetcode },
                { ico:"⭐", label:"HackerRank", val:"View Profile →", href:LINKS.hackerrank },
                { ico:"🎓", label:"ESEC CGPA",   val:"Strong Performer ✓", href:"#" },
              ].map(c => (
                <a key={c.label} href={c.href} target={c.href!=="#"?"_blank":undefined} style={{
                  flex:1, minWidth:140,
                  background:"#0f1228", border:"1px solid rgba(255,255,255,.07)",
                  borderRadius:10, padding:".9rem 1.1rem",
                  display:"flex", alignItems:"center", gap:".7rem",
                  transition:"border-color .2s,transform .2s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#ff4f6e";e.currentTarget.style.transform="translateY(-3px)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.07)";e.currentTarget.style.transform=""}}>
                  <span style={{fontSize:"1.4rem"}}>{c.ico}</span>
                  <div>
                    <div style={{fontSize:".72rem",color:"#363b58",textTransform:"uppercase",letterSpacing:".08em"}}>{c.label}</div>
                    <div style={{fontSize:".88rem",color:"#e8ecff",fontWeight:600,marginTop:1}}>{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
 
            {/* CTAs */}
            <div style={{ marginTop:"2rem", display:"flex", gap:".8rem", flexWrap:"wrap" }}>
              <a href="#" style={{ padding:".75rem 1.8rem", background:"linear-gradient(135deg,#ff4f6e,#e63557)", color:"#fff", fontWeight:700, fontSize:".85rem", borderRadius:8, border:"none", boxShadow:"0 8px 28px rgba(255,79,110,.35)", transition:"transform .2s,box-shadow .2s" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 14px 40px rgba(255,79,110,.45)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 8px 28px rgba(255,79,110,.35)"}}>
                Download Resume ↓
              </a>
              <a href="#contact" style={{ padding:".75rem 1.8rem", background:"transparent", color:"#e8ecff", fontWeight:600, fontSize:".85rem", borderRadius:8, border:"1px solid rgba(255,255,255,.1)", transition:"all .2s" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,209,102,.4)";e.currentTarget.style.color="#ffd166";e.currentTarget.style.transform="translateY(-3px)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.1)";e.currentTarget.style.color="#e8ecff";e.currentTarget.style.transform=""}}>
                Contact Me →
              </a>
            </div>
          </div>
        </div>
      </div>
 
      <style>{`
        @media (max-width:900px) { .ak-about-grid { grid-template-columns:1fr !important; gap:3rem !important; } }
      `}</style>
    </section>
  );
}
 
/* ════════════════════════════════════════════════════
   SKILLS SECTION
   ════════════════════════════════════════════════════ */
function SkillBar({ label, pct, color, inView }) {
  const [width, setWidth] = useState(0);
  useEffect(() => { if (inView) setTimeout(() => setWidth(pct), 200); }, [inView, pct]);
  return (
    <div style={{ marginBottom:".85rem" }}>
      <div style={{ display:"flex", justifyContent:"space-between", fontSize:".8rem", color:"#5e6685", marginBottom:".32rem" }}>
        <span>{label}</span>
        <span style={{ color, fontWeight:700 }}>{pct}%</span>
      </div>
      <div style={{ height:5, background:"rgba(255,255,255,.05)", borderRadius:100, overflow:"hidden" }}>
        <div style={{
          height:"100%", borderRadius:100, width:`${width}%`,
          background:`linear-gradient(90deg,${color}88,${color})`,
          transition:"width 1.4s cubic-bezier(.4,0,.2,1)",
          position:"relative",
          boxShadow:`0 0 10px ${color}`,
        }}>
          <span style={{ position:"absolute", right:0, top:"50%", transform:"translateY(-50%)", width:8, height:8, borderRadius:"50%", background:color, boxShadow:`0 0 8px ${color}`, display:"block" }} />
        </div>
      </div>
    </div>
  );
}
 
function Skills() {
  const [ref, inView] = useInView();
  const cards = [
    { icon:"🎨", name:"Frontend", cat:"UI · Web · Design", color:"#ff4f6e", bars:[["HTML5 / CSS3",92],["JavaScript",80],["React (Learning)",65]] },
    { icon:"🤖", name:"AI & Python", cat:"ML · Prompting · AI Apps", color:"#ffd166", bars:[["Python",75],["Prompt Engineering",88],["AI Integration",72]] },
    { icon:"🛠️", name:"Dev Tools", cat:"Code · Version · Deploy", color:"#b06dff", bars:[["Git / GitHub",82],["VS Code",90],["Responsive Design",85]] },
  ];
 
  return (
    <section id="skills" style={{ background:"#04050e", padding:"130px 6%", position:"relative", zIndex:3, overflow:"hidden" }}>
      {/* Watermark */}
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", fontFamily:"'Bebas Neue',cursive", fontSize:"28rem", color:"rgba(255,79,110,.025)", pointerEvents:"none", letterSpacing:"-10px", whiteSpace:"nowrap", userSelect:"none" }}>
        CODE
      </div>
 
      <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }} ref={ref}>
        <div style={{ textAlign:"center", maxWidth:660, margin:"0 auto 4rem" }}>
          <div className={`ak-reveal${inView?" visible":""}`} style={{ display:"inline-flex", alignItems:"center", gap:".7rem", fontSize:".7rem", fontWeight:700, letterSpacing:".22em", textTransform:"uppercase", color:"#ff4f6e", marginBottom:"1.2rem", justifyContent:"center" }}>
            <span style={{ width:30, height:1.5, background:"linear-gradient(90deg,#ff4f6e,#ffd166)", display:"inline-block" }} />
            Skills & Stack
            <span style={{ width:30, height:1.5, background:"linear-gradient(90deg,#ffd166,#ff4f6e)", display:"inline-block" }} />
          </div>
          <h2 className={`ak-reveal d1${inView?" visible":""}`} style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(3rem,6vw,5.5rem)", letterSpacing:"2px", lineHeight:.95, color:"#fff" }}>
            MY <em style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(2rem,4vw,3.8rem)", color:"#ffd166" }}>Arsenal</em>
          </h2>
        </div>
 
        {/* Cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.2rem" }} className="ak-skills-grid">
          {cards.map((c, i) => (
            <div key={i} className={`ak-reveal d${i+1}${inView?" visible":""}`} style={{
              background:"#090b1a", border:"1px solid rgba(255,255,255,.07)",
              borderRadius:16, padding:"2rem",
              transition:"border-color .3s,transform .35s,box-shadow .35s",
              position:"relative", overflow:"hidden",
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=`${c.color}33`;e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow=`0 28px 60px rgba(0,0,0,.5),0 0 40px ${c.color}11`}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.07)";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
              {/* Top glow bar on hover — via ::before via inline animation */}
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${c.color},${c.color}55)`, opacity:.8 }} />
 
              <div style={{ display:"flex", alignItems:"center", gap:".9rem", marginBottom:"1.5rem" }}>
                <span style={{ fontSize:"2rem" }}>{c.icon}</span>
                <div>
                  <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:"1rem", color:"#fff" }}>{c.name}</div>
                  <div style={{ fontSize:".72rem", color:"#363b58", textTransform:"uppercase", letterSpacing:".12em" }}>{c.cat}</div>
                </div>
              </div>
 
              {c.bars.map(([label, pct]) => (
                <SkillBar key={label} label={label} pct={pct} color={c.color} inView={inView} />
              ))}
            </div>
          ))}
        </div>
 
        {/* Tools band */}
        <div className={`ak-reveal d4${inView?" visible":""}`} style={{
          marginTop:"1.2rem",
          background:"#090b1a", border:"1px solid rgba(255,255,255,.07)",
          borderRadius:16, padding:"2rem",
        }}>
          <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:"1rem", color:"#fff", marginBottom:".4rem" }}>Full Technology Stack</div>
          <div style={{ fontSize:".72rem", color:"#363b58", textTransform:"uppercase", letterSpacing:".12em", marginBottom:"1.2rem" }}>Everything in my toolkit</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:".5rem" }}>
            {[
              ["HTML5","#ff4f6e"],["CSS3","#ff4f6e"],["JavaScript","#ff4f6e"],["React","#ff4f6e"],
              ["Python","#ffd166"],["AI/ML","#ffd166"],["Prompt Engineering","#ffd166"],
              ["Git","#06ffa5"],["GitHub","#06ffa5"],["VS Code","#06ffa5"],
              ["Problem Solving","#b06dff"],["DSA","#b06dff"],
              ["Full Stack (Learning)","#38bdf8"],["Node.js (Learning)","#38bdf8"],
              ["Responsive Design","#ff4f6e"],["LLM Integration","#ffd166"],
            ].map(([t,c])=>(
              <span key={t} style={{ padding:".3rem .8rem", borderRadius:6, fontSize:".75rem", fontWeight:600, background:`${c}18`, color:c, border:`1px solid ${c}33` }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
 
      <style>{`@media(max-width:768px){.ak-skills-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
 
/* ════════════════════════════════════════════════════
   PROJECT CARD
   ════════════════════════════════════════════════════ */
function ProjectCard({ p, inView, delay }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x:0, y:0 });
 
  const handleMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 10;
    const y = ((e.clientY - r.top) / r.height - .5) * 10;
    setTilt({ x, y });
  }, []);
 
  return (
    <div
      className={`ak-reveal${delay?` d${delay}`:""}${inView?" visible":""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({x:0,y:0}); }}
      onMouseMove={handleMove}
      style={{
        background: "#0f1228",
        border: `1px solid ${hovered?`${p.color}44`:"rgba(255,255,255,.07)"}`,
        borderRadius: 20, overflow:"hidden",
        transition: "border-color .35s, box-shadow .35s",
        boxShadow: hovered ? `0 40px 80px rgba(0,0,0,.7), 0 0 60px ${p.color}22` : "none",
        transform: hovered ? `perspective(900px) rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg) translateY(-10px) scale(1.01)` : "none",
        transition: "transform .15s, border-color .35s, box-shadow .35s",
        gridColumn: p.featured ? "span 2" : "span 1",
        position: "relative",
        cursor: "pointer",
      }}>
 
      {/* Image / Emoji area */}
      <div style={{
        width:"100%", aspectRatio: p.featured?"21/9":"16/9",
        background: `linear-gradient(135deg, ${p.accent.replace(".15",".8")}, rgba(9,11,26,1))`,
        display:"flex", alignItems:"center", justifyContent:"center",
        fontSize: p.featured?"5rem":"3.5rem",
        position:"relative", overflow:"hidden",
      }}>
        {p.image ? (
          <img src={p.image} alt={p.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
        ) : (
          <>
            <span style={{ filter:`drop-shadow(0 0 20px ${p.color})` }}>{p.emoji}</span>
            {/* Placeholder guide */}
            <div style={{ position:"absolute", bottom:10, left:10, fontSize:".65rem", color:"rgba(255,255,255,.2)", background:"rgba(0,0,0,.5)", padding:".2rem .6rem", borderRadius:4 }}>
              Add screenshot → set image in PROJECTS array
            </div>
          </>
        )}
 
        {/* Hover overlay */}
        <div style={{
          position:"absolute", inset:0,
          background:"rgba(4,5,14,.75)", backdropFilter:"blur(6px)",
          display:"flex", alignItems:"center", justifyContent:"center", gap:".8rem",
          opacity: hovered?1:0, transition:"opacity .3s",
        }}>
          <a href={p.liveUrl} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()} style={{ padding:".55rem 1.3rem", borderRadius:7, background:p.color, color:"#000", fontWeight:800, fontSize:".8rem", border:"none", cursor:"pointer" }}>Live ↗</a>
          <a href={p.codeUrl} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()} style={{ padding:".55rem 1.3rem", borderRadius:7, background:"transparent", color:"#fff", fontWeight:700, fontSize:".8rem", border:"1px solid rgba(255,255,255,.3)", cursor:"pointer" }}>Code</a>
        </div>
      </div>
 
      {/* Badges */}
      {p.prize && (
        <div style={{
          position:"absolute", top:14, left:14, zIndex:5,
          padding:".28rem .8rem", borderRadius:"100px",
          background:"linear-gradient(135deg,rgba(255,79,110,.85),rgba(108,99,255,.85))",
          backdropFilter:"blur(8px)",
          fontSize:".65rem", fontWeight:800, color:"#fff", letterSpacing:".1em", textTransform:"uppercase",
        }}>{p.prize}</div>
      )}
      <div style={{
        position:"absolute", top:14, right:14, zIndex:5,
        padding:".25rem .7rem", borderRadius:"100px",
        background:`${p.color}22`, border:`1px solid ${p.color}44`,
        fontSize:".65rem", fontWeight:700, color:p.color, letterSpacing:".08em", textTransform:"uppercase",
      }}>{p.category}</div>
 
      {/* Body */}
      <div style={{ padding:"1.6rem 1.7rem 1rem" }}>
        <div style={{ display:"flex", gap:".4rem", flexWrap:"wrap", marginBottom:".9rem" }}>
          {p.tags.map(t => (
            <span key={t} style={{ padding:".2rem .6rem", borderRadius:5, fontSize:".7rem", fontWeight:700, background:`${p.color}18`, color:p.color, border:`1px solid ${p.color}33` }}>{t}</span>
          ))}
        </div>
        <h3 style={{ fontFamily:"'Bebas Neue',cursive", fontSize: p.featured?"2rem":"1.6rem", letterSpacing:"1px", color:"#fff", marginBottom:".5rem", lineHeight:1 }}>{p.title}</h3>
        <p style={{ fontSize:".88rem", color:"#5e6685", lineHeight:1.75 }}>{p.subtitle}</p>
        <p style={{ fontSize:".84rem", color:"#5e6685", lineHeight:1.75, marginTop:".5rem" }}>{p.desc}</p>
      </div>
 
      {/* Footer */}
      <div style={{ padding:".9rem 1.7rem 1.2rem", borderTop:"1px solid rgba(255,255,255,.04)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <span style={{ fontSize:".75rem", color:"#363b58" }}>🚀 {p.category}</span>
        <span style={{ fontSize:"1.1rem", color: hovered?p.color:"#363b58", transition:"color .2s,transform .2s", transform:hovered?"translate(3px,-3px)":"" }}>↗</span>
      </div>
    </div>
  );
}
 
function Projects() {
  const [ref, inView] = useInView();
 
  return (
    <section id="projects" style={{ background:"#090b1a", padding:"130px 6%", position:"relative", zIndex:3 }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }} ref={ref}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:"2rem", marginBottom:"3.5rem" }}>
          <div>
            <div className={`ak-reveal${inView?" visible":""}`} style={{ display:"inline-flex", alignItems:"center", gap:".7rem", fontSize:".7rem", fontWeight:700, letterSpacing:".22em", textTransform:"uppercase", color:"#ff4f6e", marginBottom:"1.2rem" }}>
              <span style={{ width:30, height:1.5, background:"linear-gradient(90deg,#ff4f6e,#ffd166)", display:"inline-block" }} />Projects
            </div>
            <h2 className={`ak-reveal d1${inView?" visible":""}`} style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(3rem,6vw,5.5rem)", letterSpacing:"2px", lineHeight:.95, color:"#fff" }}>
              WHAT I'VE <em style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(2rem,4vw,3.8rem)", color:"#ffd166" }}>Built</em>
            </h2>
          </div>
          <a href={LINKS.github} target="_blank" className={`ak-reveal d2${inView?" visible":""}`} style={{ padding:".75rem 1.8rem", background:"transparent", color:"#e8ecff", fontWeight:600, fontSize:".85rem", borderRadius:8, border:"1px solid rgba(255,255,255,.1)", whiteSpace:"nowrap", transition:"all .2s" }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,209,102,.4)";e.currentTarget.style.color="#ffd166"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.1)";e.currentTarget.style.color="#e8ecff"}}>
            All on GitHub →
          </a>
        </div>
 
        <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"1.4rem" }} className="ak-proj-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} inView={inView} delay={i%3+1} />)}
        </div>
      </div>
 
      <style>{`@media(max-width:768px){.ak-proj-grid{grid-template-columns:1fr !important} .ak-proj-grid > *{grid-column:span 1 !important}}`}</style>
    </section>
  );
}
 
/* ════════════════════════════════════════════════════
   CERTIFICATES SECTION
   ════════════════════════════════════════════════════ */
function Certificates() {
  const [ref, inView] = useInView();
  const [modal, setModal] = useState(null);
 
  const marqueeItems = [
    "🏆 Digi Venture 2nd Prize","🌐 Web Technologies","📄 Intro to HTML",
    "🤖 Prompt Engineering","💻 Full Stack Dev","🚀 Build Your Brand",
    "🧠 AI Prompting","🔬 AI Workshop",
  ];
 
  return (
    <section id="certs" style={{ background:"#04050e", padding:"130px 6%", position:"relative", zIndex:3 }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }} ref={ref}>
        <div style={{ textAlign:"center", maxWidth:640, margin:"0 auto 1rem" }}>
          <div className={`ak-reveal${inView?" visible":""}`} style={{ display:"inline-flex", alignItems:"center", gap:".7rem", fontSize:".7rem", fontWeight:700, letterSpacing:".22em", textTransform:"uppercase", color:"#ff4f6e", marginBottom:"1.2rem", justifyContent:"center" }}>
            <span style={{ width:30, height:1.5, background:"linear-gradient(90deg,#ff4f6e,#ffd166)", display:"inline-block" }} />Achievements<span style={{ width:30, height:1.5, background:"linear-gradient(90deg,#ffd166,#ff4f6e)", display:"inline-block" }} />
          </div>
          <h2 className={`ak-reveal d1${inView?" visible":""}`} style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(3rem,6vw,5.5rem)", letterSpacing:"2px", lineHeight:.95, color:"#fff" }}>
            EARNED & <em style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(2rem,4vw,3.8rem)", color:"#ffd166" }}>Recognized</em>
          </h2>
        </div>
 
        {/* Marquee */}
        <div className={`ak-reveal d2${inView?" visible":""}`} style={{ overflow:"hidden", margin:"3rem 0 2.5rem", borderTop:"1px solid rgba(255,255,255,.07)", borderBottom:"1px solid rgba(255,255,255,.07)", padding:"1.2rem 0" }}>
          <div style={{ display:"flex", gap:"3rem", width:"max-content", animation:"marqueeScroll 28s linear infinite" }}>
            {[...marqueeItems,...marqueeItems].map((item,i)=>(
              <div key={i} style={{ flexShrink:0, display:"flex", alignItems:"center", gap:".7rem", padding:".7rem 1.4rem", border:"1px solid rgba(255,255,255,.07)", borderRadius:"100px", background:"#090b1a", whiteSpace:"nowrap", fontSize:".82rem", color:"#a0a8c8", fontWeight:500 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
 
        {/* Digi Venture highlight */}
        <div className={`ak-reveal d2${inView?" visible":""}`} style={{
          padding:"2rem 2.5rem", marginBottom:"2.5rem",
          background:"linear-gradient(135deg,rgba(255,79,110,.08),rgba(255,209,102,.05))",
          border:"1px solid rgba(255,209,102,.2)", borderRadius:18,
          display:"flex", alignItems:"center", gap:"2rem",
          position:"relative", overflow:"hidden", animation:"borderGlow 4s ease-in-out infinite",
        }}>
          <div style={{ position:"absolute", right:"2rem", top:"50%", transform:"translateY(-50%)", fontSize:"6rem", opacity:.08 }}>🏆</div>
          <div style={{ fontSize:"3rem", flexShrink:0 }}>🥈</div>
          <div>
            <h3 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"1.8rem", letterSpacing:"1px", color:"#ffd166", marginBottom:".4rem" }}>
              2nd Prize — Digi Venture Competition, KPR Institute
            </h3>
            <p style={{ color:"#5e6685", fontSize:".92rem", lineHeight:1.75 }}>
              Won <strong style={{color:"#e8ecff"}}>2nd Prize</strong> for the <strong style={{color:"#e8ecff"}}>HydroSmart website</strong> — a smart water management platform — at KPR Institute of Engineering & Technology's prestigious Digi Venture competition for website creation.
            </p>
          </div>
        </div>
 
        {/* Certificate grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.2rem" }} className="ak-cert-grid">
          {CERTIFICATES.map((cert, i) => (
            <div key={cert.id}
              className={`ak-reveal d${(i%3)+1}${inView?" visible":""}`}
              onClick={() => setModal(cert)}
              style={{
                background:"#090b1a", border:"1px solid rgba(255,255,255,.07)",
                borderRadius:14, padding:"1.5rem",
                transition:"all .3s", cursor:"pointer", position:"relative", overflow:"hidden",
                ...(cert.highlight ? { borderColor:"rgba(255,209,102,.2)", background:"linear-gradient(135deg,rgba(255,209,102,.04),#090b1a)" } : {}),
              }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=`${cert.color}44`;e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow=`0 20px 50px rgba(0,0,0,.4),0 0 30px ${cert.color}11`}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=cert.highlight?"rgba(255,209,102,.2)":"rgba(255,255,255,.07)";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
 
              {/* Bottom glow bar */}
              <div style={{ position:"absolute", bottom:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${cert.color},${cert.color}55)`, opacity:.5 }} />
 
              {/* Cert image preview */}
              {cert.image ? (
                <div style={{ width:"100%", aspectRatio:"16/9", borderRadius:8, overflow:"hidden", marginBottom:"1rem", border:"1px solid rgba(255,255,255,.06)" }}>
                  <img src={cert.image} alt={cert.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                </div>
              ) : (
                <div style={{ width:"100%", aspectRatio:"16/9", borderRadius:8, background:"linear-gradient(135deg,#0f1228,#161a35)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginBottom:"1rem", border:"1px solid rgba(255,255,255,.04)", gap:".5rem" }}>
                  <span style={{ fontSize:"2rem" }}>{cert.emoji}</span>
                  <span style={{ fontSize:".65rem", color:"#363b58", textAlign:"center", padding:"0 .5rem" }}>Click to view · Add image in CERTIFICATES array</span>
                </div>
              )}
 
              <div style={{ fontSize:".72rem", color:cert.color, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", marginBottom:".5rem" }}>{cert.org}</div>
              <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:".97rem", color:"#fff", marginBottom:".4rem", lineHeight:1.3 }}>{cert.name}</div>
              <div style={{ fontSize:".78rem", color:"#363b58" }}>{cert.type}</div>
 
              {cert.highlight && <div style={{ position:"absolute", top:12, right:12, fontSize:".65rem", fontWeight:800, color:"#ffd166", background:"rgba(255,209,102,.12)", border:"1px solid rgba(255,209,102,.25)", padding:".2rem .6rem", borderRadius:100 }}>⭐ WINNER</div>}
              <div style={{ marginTop:".8rem", fontSize:".72rem", color:"#363b58" }}>🔍 Click to view certificate</div>
            </div>
          ))}
        </div>
      </div>
 
      {/* Modal */}
      {modal && (
        <div className="cert-modal-overlay" onClick={() => setModal(null)}>
          <div className="cert-modal-box" style={{ position:"relative" }} onClick={e=>e.stopPropagation()}>
            <button className="cert-modal-close" onClick={()=>setModal(null)}>✕</button>
            {modal.image ? (
              <img src={modal.image} alt={modal.name} className="cert-modal-img" />
            ) : (
              <div className="cert-modal-img-placeholder">
                <span style={{ fontSize:"4rem" }}>{modal.emoji}</span>
                <div>
                  <strong style={{ color:"#5e6685", display:"block", marginBottom:4 }}>No image added yet</strong>
                  To add: import your certificate image and set the <code style={{color:"#ff4f6e"}}>image</code> field in the CERTIFICATES array
                </div>
              </div>
            )}
            <div className="cert-modal-body">
              <div style={{ fontSize:".7rem", color:modal.color, fontWeight:700, letterSpacing:".15em", textTransform:"uppercase", marginBottom:".5rem" }}>{modal.org}</div>
              <h3 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:"1.1rem", color:"#fff", marginBottom:".4rem" }}>{modal.name}</h3>
              <p style={{ fontSize:".84rem", color:"#5e6685" }}>{modal.type}</p>
            </div>
          </div>
        </div>
      )}
 
      <style>{`@media(max-width:768px){.ak-cert-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
 
/* ════════════════════════════════════════════════════
   JOURNEY SECTION
   ════════════════════════════════════════════════════ */
function Journey() {
  const [ref, inView] = useInView();
  const items = [
    { year:"2025 — Present", role:"Full Stack Learning Journey", org:"🎓 Novitech Training Program", desc:"Enrolled in a comprehensive full-stack development program covering HTML, CSS, JS, backend APIs, and deployment workflows. Building real skills through real projects.", chips:["HTML","CSS","JS","Node.js"] },
     { year:"2025", role:"AI & Prompt Engineering Certifications", org:"🧠 Simplilearn · Kongu Eng. College · KPRIET", desc:"Completed multiple AI certifications. Attended workshops on generative AI, LLM usage, and advanced prompt engineering at two engineering colleges.", chips:["Prompt Eng.","GenAI","LLMs"] },
    { year:"2026", role:"HydroSmart — 2nd Prize, Digi Venture", org:"🏆 KPR Institute, KPRIET", desc:"Designed and built HydroSmart, a smart water management webpage, winning 2nd Prize at KPR Institute's Digi Venture competition. Recognised for website creation excellence.", chips:["HTML5","CSS3","JS","UI Design","Responsive"] },
    { year:"2026", role:"AI Electrical Fire Prevention System", org:"🤖 Independent AI Project", desc:"Built an ML-based system to predict electrical fire risks by analyzing voltage fluctuations, temperature sensor data, and usage patterns — issuing early-warning alerts to prevent disasters.", chips:["Python","ML","AI","Data Analysis","Safety Tech"] },
    { year:"2026 — Present", role:"Frontend Development Journey", org:"💻 Self-taught + Simplilearn + Novitech", desc:"Built a portfolio of real web projects — Smart Study Planner, Event Registration, Login Page, Counter App. Earned HTML certification from Simplilearn.", chips:["HTML5","CSS3","JavaScript","Responsive Design"] },
    { year:"2026 — Present", role:"B.Tech in Engineering", org:"🎓 ESEC College", desc:"Pursuing core CS fundamentals. Active in tech events, workshops, and building projects that bridge with real-world engineering.", chips:["DSA","OS","Networking","AI Fundamentals"] },
  ];
 
  const whyMe = [
    { ico:"⚡", t:"Fast & Hungry Learner", d:"From learning HTML to winning an AI + web competition — I learn fast and immediately apply skills to real projects." },
    { ico:"🎨", t:"Design-Aware Developer", d:"I don't just write code — I care about how things look and feel. My projects show a strong instinct for clean, expressive UI/UX." },
    { ico:"🤖", t:"AI-First Mindset", d:"Certified in prompt engineering, attended AI workshops at 2 colleges, and built an AI fire-prevention system. I bridge AI and product." },
    { ico:"🏆", t:"Competition-Proven", d:"2nd Prize at Digi Venture proves I can build something remarkable under pressure that impresses a real jury." },
    { ico:"📈", t:"Relentlessly Growing", d:"8+ certs, 6 projects, full-stack training, LeetCode practice — I show up every day and level up consistently." },
  ];
 
  return (
    <section id="journey" style={{ background:"#090b1a", padding:"130px 6%", position:"relative", zIndex:3 }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }} ref={ref}>
        <div style={{ textAlign:"center", maxWidth:640, margin:"0 auto 4rem" }}>
          <div className={`ak-reveal${inView?" visible":""}`} style={{ display:"inline-flex", alignItems:"center", gap:".7rem", fontSize:".7rem", fontWeight:700, letterSpacing:".22em", textTransform:"uppercase", color:"#ff4f6e", marginBottom:"1.2rem", justifyContent:"center" }}>
            <span style={{ width:30, height:1.5, background:"linear-gradient(90deg,#ff4f6e,#ffd166)", display:"inline-block" }} />Journey<span style={{ width:30, height:1.5, background:"linear-gradient(90deg,#ffd166,#ff4f6e)", display:"inline-block" }} />
          </div>
          <h2 className={`ak-reveal d1${inView?" visible":""}`} style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(3rem,6vw,5.5rem)", letterSpacing:"2px", lineHeight:.95, color:"#fff" }}>
            MY GROWTH <em style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(2rem,4vw,3.8rem)", color:"#ffd166" }}>Story</em>
          </h2>
        </div>
 
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6rem" }} className="ak-journey-grid">
          {/* Timeline */}
          <div>
            <div style={{ position:"relative", paddingLeft:"2.8rem" }}>
              <div style={{ position:"absolute", left:0, top:6, bottom:0, width:1, background:"linear-gradient(to bottom,#ff4f6e 0%,#ffd166 50%,transparent)", opacity:.4 }} />
              {items.map((item, i) => (
                <div key={i} style={{
                  position:"relative", marginBottom:"2.8rem",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-18px)",
                  transition: `opacity .65s ${i*.13}s, transform .65s ${i*.13}s`,
                }}>
                  <div style={{
                    position:"absolute", left:"-2.8rem", top:5,
                    width:14, height:14, borderRadius:"50%",
                    background:"#090b1a",
                    border:`2px solid ${inView?"#ff4f6e":"#363b58"}`,
                    transform:"translateX(-50%) translateX(.5px)",
                    boxShadow: inView?"0 0 12px rgba(255,79,110,.4)":"none",
                    transition:"border-color .3s, box-shadow .3s",
                  }} />
                  <div style={{ fontSize:".7rem", color:"#ff4f6e", fontWeight:700, letterSpacing:".15em", textTransform:"uppercase", marginBottom:".4rem" }}>{item.year}</div>
                  <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:"1.05rem", color:"#fff", marginBottom:".2rem" }}>{item.role}</div>
                  <div style={{ fontSize:".84rem", color:"#ffd166", marginBottom:".6rem" }}>{item.org}</div>
                  <div style={{ fontSize:".87rem", color:"#5e6685", lineHeight:1.78 }}>{item.desc}</div>
                  <div style={{ display:"flex", gap:".35rem", flexWrap:"wrap", marginTop:".65rem" }}>
                    {item.chips.map(c=>(
                      <span key={c} style={{ padding:".18rem .6rem", borderRadius:4, fontSize:".7rem", background:"#161a35", border:"1px solid rgba(255,255,255,.07)", color:"#363b58" }}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          {/* Why hire me */}
          <div>
            <div className={`ak-reveal${inView?" visible":""}`} style={{ display:"inline-flex", alignItems:"center", gap:".7rem", fontSize:".7rem", fontWeight:700, letterSpacing:".22em", textTransform:"uppercase", color:"#ff4f6e", marginBottom:"1.5rem" }}>
              <span style={{ width:30, height:1.5, background:"linear-gradient(90deg,#ff4f6e,#ffd166)", display:"inline-block" }} />Why Hire Me
            </div>
            <h3 className={`ak-reveal d1${inView?" visible":""}`} style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"2.2rem", letterSpacing:"1px", color:"#fff", marginBottom:"2rem" }}>
              What I bring <span style={{color:"#ff4f6e"}}>to the table</span>
            </h3>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.1rem" }}>
              {whyMe.map((w, i) => (
                <div key={i} className={`ak-reveal d${i+1}${inView?" visible":""}`} style={{
                  background:"#0f1228", border:"1px solid rgba(255,255,255,.07)",
                  borderRadius:12, padding:"1.3rem 1.5rem",
                  display:"flex", alignItems:"flex-start", gap:"1rem",
                  transition:"all .3s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,79,110,.2)";e.currentTarget.style.transform="translateX(6px)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.07)";e.currentTarget.style.transform=""}}>
                  <span style={{ fontSize:"1.6rem", flexShrink:0, marginTop:.1 }}>{w.ico}</span>
                  <div>
                    <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:".92rem", color:"#fff", marginBottom:".25rem" }}>{w.t}</div>
                    <div style={{ fontSize:".83rem", color:"#5e6685", lineHeight:1.65 }}>{w.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      <style>{`@media(max-width:768px){.ak-journey-grid{grid-template-columns:1fr !important;gap:3.5rem !important}}`}</style>
    </section>
  );
}
 
/* ════════════════════════════════════════════════════
   CONTACT SECTION
   ════════════════════════════════════════════════════ */
function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name:"", email:"", topic:"", msg:"" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); setTimeout(() => { setSent(false); setForm({ name:"",email:"",topic:"",msg:"" }); }, 4000); }, 2000);
  };
 
  const inputStyle = {
    background:"#090b1a", border:"1px solid rgba(255,255,255,.07)",
    borderRadius:8, padding:".88rem 1rem",
    color:"#e8ecff", fontFamily:"'Outfit',sans-serif", fontSize:".9rem",
    outline:"none", resize:"none", width:"100%",
    transition:"border-color .25s, box-shadow .25s",
  };
 
  return (
    <section id="contact" style={{ background:"#04050e", padding:"130px 6%", position:"relative", zIndex:3, overflow:"hidden" }}>
      {/* Deco text */}
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", fontFamily:"'Bebas Neue',cursive", fontSize:"22rem", letterSpacing:"-10px", whiteSpace:"nowrap", color:"rgba(255,79,110,.02)", pointerEvents:"none", zIndex:0 }}>
        HELLO
      </div>
 
      <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }} ref={ref}>
        <div style={{ textAlign:"center", maxWidth:640, margin:"0 auto 4.5rem" }}>
          <div className={`ak-reveal${inView?" visible":""}`} style={{ display:"inline-flex", alignItems:"center", gap:".7rem", fontSize:".7rem", fontWeight:700, letterSpacing:".22em", textTransform:"uppercase", color:"#ff4f6e", marginBottom:"1.2rem", justifyContent:"center" }}>
            <span style={{ width:30, height:1.5, background:"linear-gradient(90deg,#ff4f6e,#ffd166)", display:"inline-block" }} />Contact<span style={{ width:30, height:1.5, background:"linear-gradient(90deg,#ffd166,#ff4f6e)", display:"inline-block" }} />
          </div>
          <h2 className={`ak-reveal d1${inView?" visible":""}`} style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(3rem,6vw,5.5rem)", letterSpacing:"2px", lineHeight:.95, color:"#fff" }}>
            LET'S <em style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(2rem,4vw,3.8rem)", color:"#ffd166" }}>Connect</em>
          </h2>
          <p className={`ak-reveal d2${inView?" visible":""}`} style={{ color:"#5e6685", fontSize:".97rem", lineHeight:1.82, marginTop:".8rem" }}>Open to internships, collaborations & learning opportunities. I reply fast — always.</p>
        </div>
 
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.3fr", gap:"5rem", alignItems:"start" }} className="ak-contact-grid">
          {/* Left */}
          <div className={`ak-reveal${inView?" visible":""}`}>
            {/* Available now card */}
            <div style={{ padding:"1.3rem 1.6rem", border:"1px solid rgba(6,255,165,.25)", borderRadius:14, background:"rgba(6,255,165,.05)", display:"flex", alignItems:"center", gap:"1rem", marginBottom:"2rem" }}>
              <span style={{ width:12, height:12, borderRadius:"50%", background:"#06ffa5", flexShrink:0, boxShadow:"0 0 16px #06ffa5", animation:"pulseDot 2s infinite", display:"inline-block" }} />
              <div style={{ fontSize:".88rem", color:"#a0a8c8", lineHeight:1.5 }}>
                <strong style={{color:"#06ffa5"}}>Available Now</strong><br/>
                Open to internships, junior roles, freelance & AI collaborations in 2026.
              </div>
            </div>
 
            {/* Links */}
            <div style={{ display:"flex", flexDirection:"column", gap:".75rem", marginBottom:"2rem" }}>
              {[
                { ico:"✉️", label:"Email",     val:LINKS.email,      href:`mailto:${LINKS.email}` },
                { ico:"💼", label:"LinkedIn",  val:"linkedin.com/in/akshaya-y",  href:LINKS.linkedin },
                { ico:"🐙", label:"GitHub",    val:"github.com/akshaya-y",       href:LINKS.github },
                { ico:"🧩", label:"LeetCode",  val:"leetcode.com/akshaya-y",     href:LINKS.leetcode },
                { ico:"⭐", label:"HackerRank",val:"hackerrank.com/akshaya-y",   href:LINKS.hackerrank },
              ].map(c => (
                <a key={c.label} href={c.href} target={c.href.startsWith("http")?"_blank":undefined} style={{
                  display:"flex", alignItems:"center", gap:"1rem",
                  padding:"1rem 1.3rem", border:"1px solid rgba(255,255,255,.07)",
                  borderRadius:12, background:"#090b1a", transition:"all .3s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#ff4f6e";e.currentTarget.style.transform="translateX(8px)";e.currentTarget.style.background="rgba(255,79,110,.04)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.07)";e.currentTarget.style.transform="";e.currentTarget.style.background="#090b1a"}}>
                  <span style={{fontSize:"1.3rem"}}>{c.ico}</span>
                  <div>
                    <div style={{fontSize:".68rem",color:"#363b58",textTransform:"uppercase",letterSpacing:".12em"}}>{c.label}</div>
                    <div style={{fontSize:".9rem",color:"#e8ecff",fontWeight:600,marginTop:1}}>{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
 
            {/* Socials */}
            <div style={{ display:"flex", gap:".7rem" }}>
              {[["🐙","GitHub",LINKS.github],["💼","LinkedIn",LINKS.linkedin],["🧩","LeetCode",LINKS.leetcode],["🐦","Twitter","#"],["📸","Instagram","#"]].map(([ico,label,href])=>(
                <a key={label} href={href} target="_blank" title={label} style={{ width:46, height:46, borderRadius:10, border:"1px solid rgba(255,255,255,.07)", background:"#090b1a", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem", transition:"all .25s" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#ff4f6e";e.currentTarget.style.background="rgba(255,79,110,.1)";e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(255,79,110,.15)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.07)";e.currentTarget.style.background="#090b1a";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
                  {ico}
                </a>
              ))}
            </div>
          </div>
 
          {/* Form */}
          <div className={`ak-reveal d2${inView?" visible":""}`}>
            <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"1.1rem" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                <div style={{ display:"flex", flexDirection:"column", gap:".4rem" }}>
                  <label style={{ fontSize:".7rem", fontWeight:700, color:"#363b58", textTransform:"uppercase", letterSpacing:".12em" }}>Your Name</label>
                  <input style={inputStyle} placeholder="Recruiter / Collaborator" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} required
                    onFocus={e=>{e.target.style.borderColor="rgba(255,79,110,.45)";e.target.style.boxShadow="0 0 0 3px rgba(255,79,110,.07)"}}
                    onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,.07)";e.target.style.boxShadow=""}} />
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:".4rem" }}>
                  <label style={{ fontSize:".7rem", fontWeight:700, color:"#363b58", textTransform:"uppercase", letterSpacing:".12em" }}>Email</label>
                  <input style={inputStyle} type="email" placeholder="you@company.com" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} required
                    onFocus={e=>{e.target.style.borderColor="rgba(255,79,110,.45)";e.target.style.boxShadow="0 0 0 3px rgba(255,79,110,.07)"}}
                    onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,.07)";e.target.style.boxShadow=""}} />
                </div>
              </div>
 
              <div style={{ display:"flex", flexDirection:"column", gap:".4rem" }}>
                <label style={{ fontSize:".7rem", fontWeight:700, color:"#363b58", textTransform:"uppercase", letterSpacing:".12em" }}>I'm Reaching Out About</label>
                <select style={{...inputStyle,cursor:"pointer"}} value={form.topic} onChange={e=>setForm(f=>({...f,topic:e.target.value}))}
                  onFocus={e=>{e.target.style.borderColor="rgba(255,79,110,.45)"}}
                  onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,.07)"}}>
                  <option value="" style={{background:"#090b1a"}}>Select a topic…</option>
                  {["Internship Opportunity","Junior Developer Role","Freelance Project","Collaboration / Hackathon","Just saying hi! 👋"].map(o=><option key={o} style={{background:"#090b1a"}} value={o}>{o}</option>)}
                </select>
              </div>
 
              <div style={{ display:"flex", flexDirection:"column", gap:".4rem" }}>
                <label style={{ fontSize:".7rem", fontWeight:700, color:"#363b58", textTransform:"uppercase", letterSpacing:".12em" }}>Message</label>
                <textarea style={{...inputStyle,minHeight:130}} placeholder="Tell me about the opportunity, timeline, or project…" value={form.msg} onChange={e=>setForm(f=>({...f,msg:e.target.value}))}
                  onFocus={e=>{e.target.style.borderColor="rgba(255,79,110,.45)";e.target.style.boxShadow="0 0 0 3px rgba(255,79,110,.07)"}}
                  onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,.07)";e.target.style.boxShadow=""}} />
              </div>
 
              <button type="submit" disabled={sending||sent} style={{
                padding:"1.05rem", borderRadius:8, border:"none", cursor:sending||sent?"default":"pointer",
                background: sent ? "linear-gradient(135deg,#00c87a,#00b060)" : "linear-gradient(135deg,#ff4f6e,#e53050,#b06dff)",
                backgroundSize:"200% 100%",
                color:"#fff", fontWeight:800, fontSize:".9rem",
                letterSpacing:".05em", textTransform:"uppercase",
                transition:"transform .2s,box-shadow .2s,background .4s", opacity:sending?.8:1,
              }}
              onMouseEnter={e=>{if(!sent&&!sending){e.target.style.transform="translateY(-3px)";e.target.style.boxShadow="0 16px 48px rgba(255,79,110,.35)";}}}
              onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow=""}}>
                {sent ? "✓ Message Sent! I'll reply soon 🚀" : sending ? "Sending…" : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
 
      <style>{`@media(max-width:900px){.ak-contact-grid{grid-template-columns:1fr !important;gap:3rem !important}}`}</style>
    </section>
  );
}
 
/* ════════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background:"#04050e", borderTop:"1px solid rgba(255,255,255,.07)", padding:"2.5rem 6%", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
      <div style={{ fontSize:".82rem", color:"#363b58" }}>
        © 2026{" "}
        <span style={{ background:"linear-gradient(135deg,#ff4f6e,#ffd166)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", fontWeight:700 }}>
          Akshaya Y
        </span>
        {" "}— Crafted with passion, code & caffeine ☕ · Tiruppur, India 🇮🇳
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:"1.2rem" }}>
        {[["Back to top ↑","#hero"],["GitHub",LINKS.github],["LinkedIn",LINKS.linkedin]].map(([l,h])=>(
          <a key={l} href={h} target={h.startsWith("http")?"_blank":undefined} style={{ fontSize:".8rem", color:"#363b58", transition:"color .2s" }}
            onMouseEnter={e=>e.target.style.color="#ff4f6e"}
            onMouseLeave={e=>e.target.style.color="#363b58"}>{l}</a>
        ))}
      </div>
    </footer>
  );
}
 
/* ════════════════════════════════════════════════════
   MAIN APP
   ════════════════════════════════════════════════════ */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [dotPos, setDotPos] = useState({ x:-100, y:-100 });
  const [ringPos, setRingPos] = useState({ x:-100, y:-100 });
  const ringRef = useRef({ x:-100, y:-100 });
  const mouseRef = useRef({ x:-100, y:-100 });
 
  // Inject global styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = GLOBAL_CSS;
    document.head.appendChild(style);
 
    // Google fonts
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.googleapis.com";
    document.head.appendChild(link);
 
    return () => { document.head.removeChild(style); };
  }, []);
 
  // Cursor
  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setDotPos({ x: e.clientX, y: e.clientY });
    };
    const onEnter = () => document.body.classList.add("cx");
    const onLeave = () => document.body.classList.remove("cx");
    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button,[data-hover]").forEach(el => { el.addEventListener("mouseenter", onEnter); el.addEventListener("mouseleave", onLeave); });
 
    let raf;
    const loop = () => {
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * .12;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * .12;
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
 
  // Scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setProgress(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
 
      // Active section
      const sections = ["hero","about","skills","projects","certs","journey","contact"];
      let current = "hero";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  // IntersectionObserver for .ak-reveal
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: .12 });
    document.querySelectorAll(".ak-reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
 
  return (
    <div style={{ minHeight:"100vh", background:"#04050e" }}>
      {/* Cursor */}
      <div id="ak-cursor-dot" style={{ left: dotPos.x, top: dotPos.y }} />
      <div id="ak-cursor-ring" style={{ left: ringPos.x, top: ringPos.y }} />
 
      {/* Progress bar */}
      <div id="ak-progress" style={{ width:`${progress}%` }} />
 
      {/* Grain */}
      <div id="ak-grain" />
 
      <Navbar scrolled={scrolled} activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}
 