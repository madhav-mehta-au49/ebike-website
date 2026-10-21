import Image from "next/image";

export function Lifestyle() {
  return (
    <section className="lifestyle" id="lifestyle" aria-labelledby="lifestyle-title">
      <div className="lifestyle-media"><Image className="lifestyle-image" src="/images/lifestyle-photo.png" alt="Helmeted rider exploring a leafy road on a sage electric scooter" fill sizes="100vw" /></div>
      <div className="container lifestyle-copy reveal">
        <p className="eyebrow"><span />Beyond the usual route</p>
        <h2 id="lifestyle-title">Take the<br /><em>long way home.</em></h2>
        <p>A familiar road. A different feeling.<br />Find your everyday escape.</p>
        <a className="button button-light" href="#range">Find your ride <span>↗</span></a>
      </div>
      <span className="lifestyle-caption">LESS ORDINARY. MORE EVERYDAY.</span>
    </section>
  );
}
