"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { models } from "@/content/site";

type Panel = "book-test-ride" | "privacy" | "terms" | `model-${(typeof models)[number]["id"]}`;
const info = {
  "book-test-ride": { title: "Let's get you riding.", body: "Explore your favourite scooter in person. This preview is awaiting the dealership's booking contact, so enquiries are not submitted yet." },
  privacy: { title: "Privacy in this preview", body: "This preview does not collect contact details, use analytics, or submit booking requests. A dealership-specific policy will be supplied before the production site collects personal information." },
  terms: { title: "Preview terms", body: "The brand, scooters and showroom are illustrative design content. Availability, specifications and warranty terms must be confirmed by the dealership." },
};

export function SiteInteractions() {
  const [panel, setPanel] = useState<Panel>("book-test-ride");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const model = models.find(item => panel === "model-" + item.id);
  const information = info[panel as keyof typeof info];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.06 });
    document.querySelectorAll(".reveal").forEach(element => {
      element.classList.add("animate");
      observer.observe(element);
    });


    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      if (media.matches) return;
      const progress = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty("--page-progress", String(progress));
      const scene = document.querySelector<HTMLElement>(".lifestyle");
      if (scene) {
        const rect = scene.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = Math.max(-32, Math.min(32, (window.innerHeight / 2 - rect.top - rect.height / 2) * .065));
          scene.style.setProperty("--scene-shift", offset + "px");
        }
      }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateScroll); };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateScroll();

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a");
      const href = link?.getAttribute("href");
      if (!href?.startsWith("#")) return;
      const id = href.slice(1);
      const selected = models.find(item => id === "model-" + item.id);
      if (id in info || selected) {
        event.preventDefault();
        trigger.current = link;
        setPanel(id as Panel);
        if (selected) setSelectedModel(selected.name);
        dialog.current?.showModal();
      }
      if (id === "charging" || id === "warranty") {
        const disclosure = document.getElementById(id);
        if (disclosure instanceof HTMLDetailsElement) disclosure.open = true;
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const close = () => {
    dialog.current?.close();
    trigger.current?.focus();
  };

  return (
    <dialog ref={dialog} className={"info-dialog " + (model ? "model-dialog" : "")} aria-labelledby="dialog-title" onClick={event => {
      if (event.target === dialog.current) {
        const rect = dialog.current.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
      }
    }}>
      <button className="dialog-close" onClick={close} aria-label="Close dialog">×</button>
      {model ? (
        <div className="model-detail">
          <div className="model-detail-photo"><Image src={model.image} alt={model.alt} fill sizes="(max-width: 700px) 90vw, 450px" /></div>
          <div className="model-detail-copy">
            <p className="eyebrow">{model.category}</p>
            <h2 id="dialog-title">{model.name}</h2>
            <p>{model.story}</p>
            <ul>{model.highlights.map(item => <li key={item}>{item}</li>)}</ul>
            <button className="button" onClick={() => { setSelectedModel(model.name); setPanel("book-test-ride"); }}>Arrange a test ride <span>↗</span></button>
            <p className="concept-note">Illustrative model. Confirm specifications and availability with the showroom.</p>
          </div>
        </div>
      ) : (
        <div className="information-copy">
          <p className="eyebrow">VOLT · Your next ride</p>
          <h2 id="dialog-title">{information?.title}</h2>
          <p>{information?.body}</p>
          {panel === "book-test-ride" && <label className="model-select">Your preferred model
            <select value={selectedModel} onChange={event => setSelectedModel(event.target.value)}>
              <option value="">Help me choose</option>
              {models.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
            </select>
          </label>}
          <button className="button" onClick={close}>Back to website</button>
        </div>
      )}
    </dialog>
  );
}

