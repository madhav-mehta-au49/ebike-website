import { Header, Hero, Range, Benefits, Lifestyle, Showroom, Journey, Faq, FinalCta, Footer } from "@/components/sections";
import { SiteInteractions } from "@/components/site-interactions";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero /><Range /><Benefits /><Lifestyle /><Showroom /><Journey /><Faq /><FinalCta />
      </main>
      <Footer /><SiteInteractions />
    </>
  );
}
