export function Brand({ lightning = true }: { lightning?: boolean }) {
  return (
    <a className="logo" href="#" aria-label="VOLT home">
      {lightning && <svg className="brand-bolt" viewBox="0 0 22 34" aria-hidden="true"><path d="M13 0 0 20h9L7 34l15-22H12L13 0Z" fill="currentColor"/></svg>}
      <span>VOLT</span>
    </a>
  );
}
