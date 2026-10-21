import Image from "next/image";
import { Icon } from "../icon";

export function Showroom() {
  return (
    <section className="showroom-section" id="showroom" aria-labelledby="showroom-title"><div className="showroom container">
      <div className="showroom-photo reveal">
        <Image src="/images/showroom-photo.png" alt="A VOLT advisor helping a visitor beside electric scooters in a sunlit showroom" fill sizes="(max-width: 700px) 90vw, 48vw" />
        <span className="photo-note"><span /> Come in. Get curious.</span>
      </div>
      <div className="showroom-copy reveal">
        <p className="eyebrow"><span />People behind the ride</p>
        <h2 id="showroom-title">A real showroom.<br /><em>Real support.</em></h2>
        <p>A closer look. A proper conversation. A chance to find out what feels right for you.</p>
        <p>Meet the scooters and talk through your everyday needs with a team that can help you explore the details.</p>
        <ul>
          <li><Icon name="people" /><div><strong>Guidance that starts with you</strong><span>Your routes, your questions, your next ride.</span></div></li>
          <li><Icon name="tool" /><div><strong>Clarity for the journey ahead</strong><span>Ask about charging, servicing and model-specific cover.</span></div></li>
        </ul>
        <a className="button button-dark" href="#book-test-ride">Plan your visit <span>↗</span></a>
      </div>
    </div></section>
  );
}
