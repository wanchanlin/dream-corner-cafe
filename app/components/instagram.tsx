"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ButtonAnchor } from "@/app/components/button";
import { LanguageText } from "@/app/components/language";
import "./instagram.css";

const instagramProfile = "https://www.instagram.com/dreamcornertw/";

const cards = [
  { name: "Iced latte", image: "/menu-illustrations/latte-iced.png", color: "peach" },
  { name: "Matcha", image: "/menu-illustrations/matcha-iced.png", color: "sage" },
  { name: "Cappuccino", image: "/menu-illustrations/cappuccino.png", color: "cream" },
  { name: "Lemon cake", image: "/menu-illustrations/lemon-cake.png", color: "yellow" },
  { name: "Mocha", image: "/menu-illustrations/mocha.png", color: "mint" },
  { name: "Banana bread", image: "/menu-illustrations/banana-bread.png", color: "peach" },
  { name: "Iced matcha", image: "/menu-illustrations/matcha-iced.png", color: "cream" },
  { name: "Cookies", image: "/menu-illustrations/cookies.png", color: "sage" },
  { name: "Caramel iced coffee", image: "/menu-illustrations/caramel-iced.png", color: "yellow" },
  { name: "Basque cheesecake", image: "/menu-illustrations/basque-cheesecake.png", color: "mint" },
] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 16 16 4M7 4h9v9" />
    </svg>
  );
}

function roundedQuad(width: number, leftHeight: number, rightHeight: number, unit: number) {
  const height = Math.max(leftHeight, rightHeight);
  const leftTop = (height - leftHeight) / 2;
  const rightTop = (height - rightHeight) / 2;
  const leftBottom = leftTop + leftHeight;
  const rightBottom = rightTop + rightHeight;
  const radius = 15 * unit;
  const path = [
    `M ${radius} ${leftTop}`,
    `L ${width - radius} ${rightTop}`,
    `Q ${width} ${rightTop} ${width} ${rightTop + radius}`,
    `L ${width} ${rightBottom - radius}`,
    `Q ${width} ${rightBottom} ${width - radius} ${rightBottom}`,
    `L ${radius} ${leftBottom}`,
    `Q 0 ${leftBottom} 0 ${leftBottom - radius}`,
    `L 0 ${leftTop + radius}`,
    `Q 0 ${leftTop} ${radius} ${leftTop} Z`,
  ].join(" ");
  return { height, clipPath: `path("${path}")` };
}

export default function AtriumHome() {
  const sectionRef = useRef<HTMLElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const draggedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const band = bandRef.current;
    if (!section || !band) return;
    const cardElements = Array.from(band.querySelectorAll<HTMLAnchorElement>(".reelmark-card"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let offset = 0;
    let velocity = 0;
    let lastTime = 0;
    let frame = 0;
    let active = false;
    let dragging = false;
    let pointerId: number | null = null;
    let startX = 0;
    let startY = 0;
    let previousX = 0;
    let previousPointerTime = 0;

    function paint() {
      if (!band) return;
      const width = band.clientWidth;
      const height = band.clientHeight;
      const unit = width / (width <= 820 ? 640 : 1440);
      const pitch = 196 * unit;
      const circuit = pitch * cardElements.length;
      const edge = width / 2 - 14 * unit;

      cardElements.forEach((card, index) => {
        const raw = index * pitch - offset;
        const t = ((raw + circuit / 2) % circuit + circuit) % circuit - circuit / 2;
        const distance = Math.min(1.3, Math.abs(t) / Math.max(1, edge));
        const cardWidth = (170 + 48 * distance * distance) * unit;
        const pushedX = width / 2 + t * (1 + .083 * (t / Math.max(1, edge)) ** 2);
        const tilt = 12 * unit * (pushedX - width / 2) / Math.max(1, edge);
        const leftHeight = cardWidth + Math.max(0, -tilt);
        const rightHeight = cardWidth + Math.max(0, tilt);
        const shape = roundedQuad(cardWidth, leftHeight, rightHeight, unit);
        card.style.width = `${cardWidth}px`;
        card.style.height = `${shape.height}px`;
        card.style.left = `${pushedX - cardWidth / 2}px`;
        card.style.top = `${(height - shape.height) / 2 - 12 * distance * distance * unit}px`;
        card.style.clipPath = shape.clipPath;
        card.style.zIndex = String(100 - Math.round(distance * 10));
        card.style.visibility = Math.abs(t) > width / 2 + cardWidth ? "hidden" : "visible";
      });
    }

    function tick(time: number) {
      if (!active) return;
      if (lastTime) {
        const seconds = Math.min((time - lastTime) / 1000, .05);
        if (pointerId === null && !reduceMotion) {
          const unit = band!.clientWidth / (band!.clientWidth <= 820 ? 640 : 1440);
          offset += (50 * unit + velocity) * seconds;
          velocity *= Math.pow(.05, seconds);
        }
      }
      lastTime = time;
      paint();
      frame = requestAnimationFrame(tick);
    }

    function onPointerDown(event: PointerEvent) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      pointerId = event.pointerId;
      dragging = false;
      draggedRef.current = false;
      startX = event.clientX;
      startY = event.clientY;
      previousX = event.clientX;
      previousPointerTime = event.timeStamp;
      velocity = 0;
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerId !== pointerId) return;
      const dx = event.clientX - previousX;
      const elapsed = Math.max(1, event.timeStamp - previousPointerTime);
      if (!dragging && Math.abs(event.clientX - startX) > 6 && Math.abs(event.clientX - startX) > Math.abs(event.clientY - startY)) {
        dragging = true;
        draggedRef.current = true;
        band!.classList.add("is-dragging");
        band!.setPointerCapture(event.pointerId);
      }
      if (dragging) {
        offset -= dx;
        velocity = Math.max(-1200, Math.min(1200, -dx / elapsed * 1000));
        paint();
      }
      previousX = event.clientX;
      previousPointerTime = event.timeStamp;
    }

    function onPointerUp(event: PointerEvent) {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      dragging = false;
      band!.classList.remove("is-dragging");
      if (band!.hasPointerCapture(event.pointerId)) band!.releasePointerCapture(event.pointerId);
      if (reduceMotion) velocity = 0;
    }

    function onClick(event: MouseEvent) {
      if (draggedRef.current) {
        event.preventDefault();
        event.stopPropagation();
        draggedRef.current = false;
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("is-visible");
        if (!active) { active = true; lastTime = 0; frame = requestAnimationFrame(tick); }
      } else {
        active = false;
        cancelAnimationFrame(frame);
      }
    }, { threshold: .05 });
    const resizeObserver = new ResizeObserver(paint);
    observer.observe(section);
    resizeObserver.observe(band);
    band.addEventListener("pointerdown", onPointerDown);
    band.addEventListener("pointermove", onPointerMove);
    band.addEventListener("pointerup", onPointerUp);
    band.addEventListener("pointercancel", onPointerUp);
    band.addEventListener("click", onClick, true);
    paint();

    return () => {
      active = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      band.removeEventListener("pointerdown", onPointerDown);
      band.removeEventListener("pointermove", onPointerMove);
      band.removeEventListener("pointerup", onPointerUp);
      band.removeEventListener("pointercancel", onPointerUp);
      band.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <section ref={sectionRef} id="instagram" className="reelmark-instagram" aria-labelledby="reelmark-title">
      <div className="reelmark-frame">
       

        <div className="reelmark-intro">
         
          <h2 id="reelmark-title"><LanguageText zh="每個日常，都值得分享。" en="Little moments, brighter days." /></h2>
          <p><LanguageText zh="從一杯咖啡到一個舒服的午後，來看看 Dream Corner 的日常。追蹤我們，一起等待更多新消息。" en="From a good cup of coffee to an easy afternoon, see the little moments that shape Dream Corner. Follow along for what comes next." /></p>
          <span className="reelmark-scribble" aria-hidden="true">{"//"}</span>
          <span className="reelmark-note" aria-hidden="true">See what’s<br />brewing</span>
          <svg className="reelmark-note-arrow" viewBox="0 0 180 130" fill="none" aria-hidden="true"><path d="M13 7c7 65 80 18 102 48 17 23-8 44-39 48m0 0 18-18m-18 18 21 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>

        <div ref={bandRef} className="reelmark-band" aria-label="Drag to explore Dream Corner moments">
          {cards.map((card, index) => (
            <a className={`reelmark-card reelmark-card--${card.color}`} href={instagramProfile} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${card.name} on Dream Corner Instagram`} key={`${card.name}-${index}`} draggable={false}>
              <Image src={card.image} alt="" width={280} height={400} sizes="(max-width: 820px) 130px, 210px" draggable={false} />
              <span className="reelmark-card-label">{card.name}</span>
              <span className="reelmark-card-icon"><ArrowIcon /></span>
            </a>
          ))}
        </div>

        <div className="reelmark-bottom">
          <span className="reelmark-bottom-note" aria-hidden="true">Come say hello <svg viewBox="0 0 72 38" fill="none"><path d="M2 3c17 0 7 25 32 25h25m0 0-9-8m9 8-11 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          <span className="reelmark-button-ring"><ButtonAnchor href={instagramProfile} target="_blank" rel="noopener noreferrer" variant="primary" className="reelmark-follow-button"><LanguageText zh="追蹤 @dreamcornertw" en="Follow @dreamcornertw" /> <ArrowIcon /></ButtonAnchor></span>
        </div>
      </div>
    </section>
  );
}
