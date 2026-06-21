"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const sceneTags = [
  "Formula Direction",
  "Packaging Planning",
  "Batch Practicality",
  "Quality Review",
  "Launch Readiness"
];

type Orb = {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  hue: number;
  alpha: number;
};

function createOrbs(width: number, height: number): Orb[] {
  return Array.from({ length: 8 }, (_, index) => ({
    x: width * (0.18 + index * 0.1),
    y: height * (0.18 + (index % 3) * 0.18),
    radius: 54 + (index % 4) * 22,
    dx: (Math.random() - 0.5) * 0.25,
    dy: (Math.random() - 0.5) * 0.2,
    hue: index % 2 === 0 ? 338 : 155,
    alpha: 0.16 + (index % 3) * 0.04
  }));
}

export default function HomeFlagshipScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => media.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let orbs: Orb[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = Math.max(320, Math.floor(rect.width));
      height = Math.max(320, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      orbs = createOrbs(width, height);
    };

    const drawBackground = (tick: number) => {
      context.clearRect(0, 0, width, height);

      const background = context.createLinearGradient(0, 0, width, height);
      background.addColorStop(0, "rgba(255, 250, 246, 0.95)");
      background.addColorStop(0.45, "rgba(248, 239, 230, 0.82)");
      background.addColorStop(1, "rgba(220, 230, 223, 0.62)");
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalCompositeOperation = "screen";

      orbs.forEach((orb, index) => {
        orb.x += orb.dx;
        orb.y += orb.dy;

        if (orb.x < orb.radius || orb.x > width - orb.radius) orb.dx *= -1;
        if (orb.y < orb.radius || orb.y > height - orb.radius) orb.dy *= -1;

        const pulse = 1 + Math.sin(tick * 0.0012 + index) * 0.09;
        const gradient = context.createRadialGradient(
          orb.x,
          orb.y,
          orb.radius * 0.18,
          orb.x,
          orb.y,
          orb.radius * pulse
        );
        gradient.addColorStop(0, `hsla(${orb.hue}, 70%, 92%, ${orb.alpha + 0.12})`);
        gradient.addColorStop(0.5, `hsla(${orb.hue}, 62%, 72%, ${orb.alpha})`);
        gradient.addColorStop(1, `hsla(${orb.hue}, 62%, 52%, 0)`);
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(orb.x, orb.y, orb.radius * pulse, 0, Math.PI * 2);
        context.fill();
      });

      context.restore();

      context.strokeStyle = "rgba(88, 66, 76, 0.15)";
      context.lineWidth = 1;

      for (let i = 0; i < width; i += 42) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, height);
        context.stroke();
      }

      for (let i = 0; i < height; i += 42) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(width, i);
        context.stroke();
      }

      context.strokeStyle = "rgba(255, 255, 255, 0.45)";
      context.lineWidth = 2;
      context.beginPath();

      const amplitude = height * 0.14;
      const centerY = height * 0.56;
      for (let x = 0; x <= width; x += 8) {
        const waveY =
          centerY +
          Math.sin(x * 0.012 + tick * 0.0011) * amplitude +
          Math.cos(x * 0.005 + tick * 0.0007) * (amplitude * 0.25);
        if (x === 0) context.moveTo(x, waveY);
        else context.lineTo(x, waveY);
      }
      context.stroke();
    };

    const render = (tick: number) => {
      drawBackground(tick);
      frameRef.current = window.requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(() => resize());
    resize();
    resizeObserver.observe(canvas.parentElement as Element);
    frameRef.current = window.requestAnimationFrame(render);

    return () => {
      resizeObserver.disconnect();
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [reducedMotion]);

  return (
    <section className="section-y">
      <div className="container-padded">
        <div className="home-flagship-shell">
          <div className="home-flagship-copy">
            <p className="site-kicker">Flagship manufacturing lens</p>
            <h2 className="section-title mt-3 font-display font-semibold text-[rgba(50,36,45,0.96)]">
              From product idea to launch-ready cosmetic presentation
            </h2>
            <p className="mt-5 text-[1rem] leading-8 text-[rgba(64,50,58,0.78)]">
              This section is where the homepage shifts from category listing into brand-building
              perspective. Kiora CosmoTech helps founders connect formula direction, packaging
              style, MOQ practicality, quality review and dispatch thinking into one clear
              manufacturing conversation.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {sceneTags.map((tag) => (
                <span className="site-chip-soft" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="home-flagship-note">
                <p className="site-kicker">For founders</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.74)]">
                  Build a tighter first range around real packaging and launch constraints rather
                  than disconnected product ideas.
                </p>
              </div>
              <div className="home-flagship-note">
                <p className="site-kicker">For scaling brands</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.74)]">
                  Coordinate repeat batches, packaging continuity and commercial readiness with a
                  clearer operational view.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                className="focus-ring site-button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-semibold text-ivory transition"
                href="/private-label-cosmetics-manufacturer-india"
              >
                Explore Private Label Support
              </Link>
              <Link
                className="focus-ring site-button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-semibold text-[rgba(56,41,49,0.92)] transition"
                href="/request-quote"
              >
                Start Your Manufacturing Brief
              </Link>
            </div>
          </div>

          <div className="home-flagship-visual">
            <div className="home-flagship-poster" aria-hidden="true" />
            <canvas
              ref={canvasRef}
              className="home-flagship-canvas"
              aria-hidden="true"
            />
            <div className="home-flagship-overlay">
              <div className="home-flagship-caption">
                <span>Concept</span>
                <span>Formula</span>
                <span>Packaging</span>
                <span>Quality</span>
                <span>Dispatch</span>
              </div>
            </div>
            <div className="home-flagship-frame">
              <p className="site-kicker">Manufacturing progression</p>
              <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.74)]">
                A premium launch comes together when formula direction, packaging decisions and
                production practicality move in sync.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
