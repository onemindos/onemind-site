import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/platform", label: "Platform" },
  { to: "/education", label: "Education" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <nav>
      <Link to="/" className="nav-logo">One<span>Mind</span> OS</Link>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.to}>
            <Link to={l.to} className={pathname === l.to ? "active" : ""}>{l.label}</Link>
          </li>
        ))}
      </ul>
      <div className="nav-cta">
        <a href="https://community.onemindos.com" className="btn-primary" target="_blank" rel="noreferrer">Join Community</a>
      </div>
    </nav>
  );
}
