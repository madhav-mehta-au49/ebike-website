const steps = [
  { number: "01", title: "Find your starting point.", copy: "Explore the collection and think about the places you go, the things you carry and the style you like.", link: "#range", label: "Explore the collection" },
  { number: "02", title: "Make it a conversation.", copy: "Bring your questions about charging, comfort and care. We'll help you work through what matters to you.", link: "#showroom", label: "Meet the showroom" },
  { number: "03", title: "Get a feel for it.", copy: "See your shortlist up close. Ask about a test ride and discover what feels right from the seat.", link: "#book-test-ride", label: "Arrange a test ride" },
];
export function Journey() {
  return (
    <section className="journey" id="your-first-ride" aria-labelledby="journey-title">
      <div className="container">
        <div className="section-heading reveal">
          <div><p className="eyebrow"><span />From curious to confident</p><h2 id="journey-title">Your first ride,<br /><em>made simple.</em></h2></div>
          <p className="section-intro">You don't need all the answers.<br />Just a little curiosity.</p>
        </div>
        <div className="journey-grid">
          {steps.map(step => <article className="journey-step reveal" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3><p>{step.copy}</p>
            <a href={step.link} className="text-link">{step.label}<span>↗</span></a>
          </article>)}
        </div>
      </div>
    </section>
  );
}
