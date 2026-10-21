type IconName = "pin" | "people" | "tool" | "home" | "leaf" | "road";
const paths: Record<IconName, React.ReactNode> = {
 pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
 people: <><circle cx="12" cy="6" r="3"/><path d="M6 22v-5a6 6 0 0 1 12 0v5M3 10a3 3 0 0 0 0 6m18-6a3 3 0 0 1 0 6M1 22v-3m22 3v-3"/></>,
 tool: <path d="m14 6 4-4a7 7 0 0 0-8 9L2 19a2 2 0 0 0 3 3l8-8a7 7 0 0 0 9-8l-4 4Z"/>,
 home: <><path d="m2 11 10-9 10 9M5 9v13h14V9M10 12v4m4-4v4m-6 0h8v2a4 4 0 0 1-4 4"/><path d="M12 22v2"/></>,
 leaf: <><path d="M20 2C5 2 1 9 4 16s15 6 16-14Z"/><path d="M2 23 15 9"/></>,
 road: <><path d="m9 23 2-19h2l2 19M12 9v2m0 4v2M2 23h20M4 15V6m-3 5c0-9 6-9 6 0s-6 8-6 0Zm16 4V7m-3 5c0-9 6-9 6 0s-6 8-6 0Z"/></>,
};
export function Icon({name}:{name:IconName}) {return <svg viewBox="0 0 24 26" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;}
