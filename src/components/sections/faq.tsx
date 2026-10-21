import { faqs } from "@/content/site";
export function Faq() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title"><div className="faq container">
      <div className="faq-heading reveal">
        <p className="eyebrow"><span />A little clarity</p>
        <h2 id="faq-title">Good questions.<br /><em>Clear answers.</em></h2>
        <p>Thinking about going electric?<br />Here's a good place to start.</p>
        <a className="text-link" href="#book-test-ride">Let's talk <span>↗</span></a>
      </div>
      <div className="faq-list reveal">
        {faqs.map(faq => <details key={faq.id} id={faq.id}>
          <summary>{faq.question}<span aria-hidden="true">+</span></summary>
          <div className="faq-answer"><p>{faq.answer}</p></div>
        </details>)}
      </div>
    </div></section>
  );
}
