import { footerGroups } from "@/content/site";
import { Brand } from "../ui/brand";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand lightning={false} />
            <p>Electric rides. Everyday freedom.</p>
            <a className="text-link" href="#book-test-ride">Connect with our team ↗</a>
          </div>
          {footerGroups.map(group => (
            <nav className="footer-group" aria-label={group.title} key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VOLT. All rights reserved.</span>
          <div><a href="#privacy">Privacy policy</a><a href="#terms">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
