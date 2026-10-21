import Image from "next/image";
export function FinalCta() {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <Image className="closing-image" src="/images/closing-photo.png" alt="" fill sizes="100vw" />
      <div className="closing-copy container">
        <p className="eyebrow"><span />Your next chapter</p>
        <h2 id="closing-title">Good things<br /><em>start with a ride.</em></h2>
        <p>Come curious. Leave inspired.<br />Let's find your everyday electric.</p>
        <a className="button" href="#book-test-ride">Book a test ride <span>↗</span></a>
      </div>
      <span className="closing-mark" aria-hidden="true">VOLT</span>
    </section>
  );
}
