import Image from "next/image";
import { models } from "@/content/site";

export function Range() {
  return (
    <section className="range section" id="range" aria-labelledby="range-title"><div className="container">
      <div className="section-heading reveal">
        <div><p className="eyebrow"><span />The collection</p><h2 id="range-title">A ride for your<br /><em>kind of everyday.</em></h2></div>
        <p className="section-intro">Different personalities. The same spirit of freedom.<br />Find the one that feels like you.</p>
      </div>
      <div className="range-grid">
        {models.map(model => (
          <article className="product reveal" key={model.id}>
            <a className="product-photo" href={"#model-" + model.id} aria-label={"Explore " + model.name}>
              <Image src={model.image} alt={model.alt} fill sizes="(max-width: 700px) 90vw, 30vw" />
              <span className="image-label">{model.category.split(" / ")[1]}</span>
              <span className="image-arrow" aria-hidden="true">↗</span>
            </a>
            <div className="product-body">
              <p className="eyebrow">{model.category}</p>
              <h3>{model.name}</h3>
              <p>{model.description}</p>
              <a className="text-link" href={"#model-" + model.id}>Discover this ride <span>↗</span></a>
            </div>
          </article>
        ))}
      </div>
      <p className="range-footnote">The best way to choose? Get a feel for it in person. <a href="#book-test-ride">Arrange a test ride <span>↗</span></a></p>
    </div></section>
  );
}
