"use client";

import Image from "next/image";
import { useState } from "react";
import { heroFinishes } from "@/content/site";
import { Icon } from "../icon";

export function Hero() {
  const [finish, setFinish] = useState(0);

  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title"><div className="hero container">
        <div className="hero-copy reveal">
          <p className="eyebrow">Electric rides. Everyday freedom.</p>
          <h1 id="hero-title">Make every<br />day a<br /><em>better ride.</em></h1>
          <p className="hero-description">Effortless commutes. Fresh-air detours.<br />Find an electric scooter that fits your life.</p>
          <div className="actions">
            <a className="button" href="#book-test-ride">Book a test ride <span>↗</span></a>
            <a className="text-link" href="#range">Explore our scooters <span>→</span></a>
          </div>
          <a className="scroll-hint" href="#range" aria-label="Scroll to scooter range">↓</a>
        </div>
        <div className="hero-art">
          <div className="hero-circle" aria-hidden="true" />
          <div className="hero-scooter">
            {heroFinishes.map((item, index) => (
              <Image
                key={item.id}
                src={item.image}
                alt={index === finish ? item.name + " electric motor scooter" : ""}
                fill
                preload={index === 0}
                sizes="(max-width: 700px) 100vw, 58vw"
                className={index === finish ? "finish-image active" : "finish-image"}
                aria-hidden={index !== finish}
              />
            ))}
          </div>
          <div className="hero-callout callout-power">Smooth<br />electric power<span /></div>
          <div className="hero-callout callout-design"><span />Designed<br />for everyday</div>
          <div className="finish-picker">
            <div className="finish-buttons" role="group" aria-label="Choose scooter finish">
              {heroFinishes.map((item, index) => (
                <button key={item.id} aria-label={"Show " + item.name + " finish"} aria-pressed={finish === index} className={"finish-swatch " + (finish === index ? "selected" : "")} style={{ "--swatch": item.color } as React.CSSProperties} onClick={() => setFinish(index)} />
              ))}
            </div>
            <span className="finish-label" aria-live="polite">{finish === 0 ? "Find your style" : heroFinishes[finish].name}</span>
          </div>
        </div>
      </div></section>
      <div className="trust-strip"><div className="trust container">
        <a href="#book-test-ride"><Icon name="pin" />Book a test ride</a>
        <a href="#showroom"><Icon name="people" />Expert local guidance</a>
        <a href="#warranty"><Icon name="tool" />Service &amp; support</a>
      </div></div>
    </>
  );
}
