import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, MoveRight, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export function Brand() {
  return <Link to="/" className="brand" aria-label="Tutors Academy home"><span className="brand-mark"><span>TA</span></span><span>Tutors <b>Academy</b></span></Link>;
}

export function ActionLink({ children, to, secondary = false }: { children: ReactNode; to: "/" | "/find-a-tutor"; secondary?: boolean }) {
  return <Link to={to} className={secondary ? "button button-secondary" : "button button-primary"}><span>{children}</span><ArrowRight size={17} aria-hidden="true" /></Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const homeLinks = [{label:"Subjects",hash:"subjects"},{label:"Classes",hash:"classes"},{label:"How It Works",hash:"how"},{label:"Become a Tutor",hash:"tutors"},{label:"About",hash:"about"}];
  return <header className="site-header"><nav className="nav-shell" aria-label="Primary navigation"><Brand/><div className="desktop-nav"><Link to="/find-a-tutor">Find a Tutor</Link>{homeLinks.map((item)=><Link to="/" hash={item.hash} key={item.label}>{item.label}</Link>)}</div><div className="nav-action"><ActionLink to="/find-a-tutor">Find a Tutor</ActionLink></div><button type="button" className="icon-button mobile-menu-button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav><div className={`mobile-menu ${open?"mobile-menu-open":""}`} aria-hidden={!open}><Link to="/find-a-tutor" onClick={()=>setOpen(false)}>Find a Tutor <MoveRight size={18}/></Link>{homeLinks.map((item)=><Link to="/" hash={item.hash} key={item.label} onClick={()=>setOpen(false)}>{item.label}<MoveRight size={18}/></Link>)}</div></header>;
}

export function SiteFooter() {
  return <footer id="footer"><div className="page-shell"><div className="footer-top"><div className="footer-brand"><Brand/><p>Personalized academic support for Classes 1–12, thoughtfully matched.</p><small>Contact details and social links are placeholders.</small><div className="social-row"><a href="#footer" aria-label="Instagram placeholder">Ig</a><a href="#footer" aria-label="LinkedIn placeholder">Li</a><a href="#footer" aria-label="YouTube placeholder">Yt</a></div></div><FooterColumn title="Tutors Academy" links={[["About","about"],["How It Works","how"],["Contact","footer"]]}/><FooterColumn title="For Students & Parents" links={[["Find a Tutor","find"],["Subjects","subjects"],["Classes","classes"],["FAQ","faq"]]}/><FooterColumn title="For Tutors" links={[["Become a Tutor","tutors"],["Tutor Information","tutors"]]}/><div className="footer-column"><h3>Legal</h3><a href="#footer">Privacy Policy</a><a href="#footer">Terms & Conditions</a><a href="#footer">Refund & Cancellation Policy</a></div></div><div className="footer-bottom"><span>© 2026 Tutors Academy. All rights reserved.</span><span>Designed for learning. Built for trust.</span></div></div></footer>;
}

function FooterColumn({title,links}:{title:string;links:string[][]}) {
  return <div className="footer-column"><h3>{title}</h3>{links.map(([label,hash])=>label==="Find a Tutor"?<Link to="/find-a-tutor" key={label}>{label}</Link>:<Link to="/" hash={hash} key={label}>{label}</Link>)}</div>;
}