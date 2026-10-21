import { Icon } from "../icon";

const benefits = [
  { icon: "home" as const, number: "01", title: "A new kind of routine.", copy: "Explore charging options that work around your home, your plans and your everyday journeys." },
  { icon: "leaf" as const, number: "02", title: "A different feeling.", copy: "Discover the response and rhythm of electric. Some things are better experienced than explained." },
  { icon: "road" as const, number: "03", title: "More room for you.", copy: "The morning coffee. The scenic turn. A little space between where you are and where you're going." },
];
export function Benefits() {
  return (
    <section className="benefits" id="benefits" aria-labelledby="benefits-title">
      <div className="container">
        <div className="section-heading reveal">
          <div><p className="eyebrow"><span />The electric perspective</p><h2 id="benefits-title">Less rush.<br /><em>More possibility.</em></h2></div>
          <p className="section-intro">A small change in how you move.<br />A fresh perspective on your day.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map(item => <article className="reveal" key={item.title}>
            <div className="benefit-top"><Icon name={item.icon} /><span>{item.number}</span></div>
            <h3>{item.title}</h3><p>{item.copy}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}
