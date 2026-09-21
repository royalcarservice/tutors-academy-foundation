import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Atom,
  Award,
  BookOpen,
  BrainCircuit,
  Check,
  ChevronDown,
  FlaskConical,
  Globe2,
  GraduationCap,
  Languages,
  Laptop,
  Menu,
  MessageCircle,
  Microscope,
  MoveRight,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

const subjects = [
  { name: "Mathematics", copy: "Build confidence from foundations to advanced problem-solving.", icon: BrainCircuit, code: "M" },
  { name: "Science", copy: "Understand ideas through curiosity, context, and clear explanation.", icon: Microscope, code: "Sc" },
  { name: "Physics", copy: "Turn complex principles into intuitive, practical understanding.", icon: Atom, code: "Ph" },
  { name: "Chemistry", copy: "Learn concepts, reactions, and applications with clarity.", icon: FlaskConical, code: "Ch" },
  { name: "Biology", copy: "Explore living systems with structured, visual learning.", icon: BookOpen, code: "Bi" },
  { name: "English", copy: "Strengthen language, literature, grammar, and expression.", icon: Languages, code: "En" },
  { name: "Social Science", copy: "Connect history, civics, geography, and society.", icon: Globe2, code: "SS" },
  { name: "Hindi", copy: "Develop language fluency, grammar, and literary confidence.", icon: Languages, code: "हि" },
  { name: "Computer Science", copy: "Learn computational thinking, coding, and core concepts.", icon: Laptop, code: "CS" },
];

const faqs = [
  ["What is Tutors Academy?", "Tutors Academy is a tutor discovery and matching platform for students in Classes 1–12 and their parents."],
  ["Which classes do you support?", "The platform is designed for Classes 1 through 12, across primary, middle, secondary, and senior secondary stages."],
  ["Which subjects are available?", "Availability may include Mathematics, Science, Physics, Chemistry, Biology, English, Social Science, Hindi, Computer Science, and more."],
  ["Which boards do you support?", "The initial focus includes CBSE, ICSE, and State Boards, with international boards planned for later."],
  ["Are tutors verified?", "Tutor information can be reviewed before assignment. The exact verification process will be clearly shown when tutor profiles launch."],
  ["Are trial or demo classes available?", "A trial or demo may be arranged where available, based on the tutor and learning requirement."],
  ["How does tutor matching work?", "You share the class, subject, schedule, learning needs, preferred mode, and budget. Suitable tutors can then be reviewed for your requirement."],
  ["Can I request a specific tutor?", "The future discovery experience will let you express tutor preferences and request suitable profiles."],
  ["Are online classes available?", "Yes. The platform is being designed to support online and in-person learning, based on availability."],
  ["How can tutors register?", "Use the Become a Tutor option to express interest. Full tutor registration and profile tools will be introduced in a later phase."],
];

function CTAButton({ children, href, secondary = false }: { children: ReactNode; href: string; secondary?: boolean }) {
  return (
    <a href={href} className={secondary ? "button button-secondary" : "button button-primary"}>
      <span>{children}</span><ArrowRight aria-hidden="true" size={17} />
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Find a Tutor", "#find"], ["Subjects", "#subjects"], ["Classes", "#classes"], ["How It Works", "#how"], ["Become a Tutor", "#tutors"], ["About", "#about"]];
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#top" className="brand" aria-label="Tutors Academy home">
          <span className="brand-mark"><span>TA</span></span>
          <span>Tutors <b>Academy</b></span>
        </a>
        <div className="desktop-nav">{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>
        <div className="nav-action"><CTAButton href="#find">Find a Tutor</CTAButton></div>
        <button className="icon-button mobile-menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`} aria-hidden={!open}>
        {links.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}<MoveRight size={18} /></a>)}
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Illustration of the Tutors Academy matching experience">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="floating-chip chip-top"><Sparkles size={15} /> Personal match</div>
      <div className="profile-preview">
        <div className="profile-top">
          <div className="avatar">AK</div>
          <div><p className="preview-label">Illustrative tutor profile</p><h3>Academic Mentor</h3><p>Mathematics · Classes 8–12</p></div>
          <span className="match-score">Match</span>
        </div>
        <div className="profile-tags"><span>CBSE</span><span>Concept clarity</span><span>Online</span></div>
        <div className="lesson-row"><span><BookOpen size={17} /> Next focus</span><b>Quadratic equations</b></div>
        <div className="progress-line"><span /></div>
        <div className="profile-footer"><div><small>LEARNING PLAN</small><strong>Built around the student</strong></div><div className="round-arrow"><ArrowRight size={18} /></div></div>
      </div>
      <div className="floating-card subject-float"><span className="mini-icon"><Atom /></span><span><small>SUBJECT</small><b>Physics</b></span><Check size={17} /></div>
      <div className="floating-card schedule-float"><span className="status-dot" /><span><small>PREFERRED TIME</small><b>Weekday evenings</b></span></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid page-shell">
        <div className="hero-copy reveal-on-load">
          <p className="hero-kicker"><span /> Personalised learning, thoughtfully matched</p>
          <h1>The right tutor can <em>change everything.</em></h1>
          <p className="hero-lede">Personalized academic support for Classes 1–12, matched to your learning needs.</p>
          <div className="hero-actions"><CTAButton href="#find">Find My Tutor</CTAButton><CTAButton href="#tutors" secondary>Become a Tutor</CTAButton></div>
          <div className="hero-proof"><span><ShieldCheck size={18} /> Thoughtful tutor review</span><span><Users size={18} /> Built for families</span></div>
        </div>
        <HeroVisual />
      </div>
      <div className="hero-ribbon"><div className="page-shell ribbon-inner"><span>Classes 1–12</span><i /><span>CBSE</span><i /><span>ICSE</span><i /><span>State Boards</span><i /><span>Online &amp; in-person</span></div></div>
    </section>
  );
}

function ValueSection() {
  const items = [["01", "The student", "Class, subject, board, strengths, and learning goals."], ["02", "The rhythm", "Schedule, preferred mode, pace, and practical budget."], ["03", "The match", "A suitable teaching style—not just a subject on a profile."]];
  return <section className="section value-section" id="about"><div className="page-shell value-grid"><SectionHeading eyebrow="A more personal approach" title="Learning is personal. Your tutor should be too." copy="A good match begins with context. Tutors Academy is designed to understand the whole requirement before helping families move forward." /><div className="value-list">{items.map(([n,t,c]) => <article className="value-item" key={n}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div><ArrowRight size={19} /></article>)}</div></div></section>;
}

function HowItWorks() {
  const steps = [["01", "Tell us what you need", "Share class, subject, schedule, learning requirements, and preferences."], ["02", "We find the right match", "Suitable tutors are reviewed in the context of your requirement."], ["03", "Start learning", "Connect, arrange a trial or demo where available, and begin with clarity."]];
  return <section className="section process-section" id="how"><div className="page-shell"><SectionHeading eyebrow="Simple by design" title="From requirement to the right learning relationship." copy="A considered three-step journey, with human support where it matters." /><div className="process-grid">{steps.map(([n,t,c], i) => <article className="process-step" key={n}><div className="step-number">{n}</div><div className="step-icon">{i===0?<MessageCircle/>:i===1?<Search/>:<GraduationCap/>}</div><h3>{t}</h3><p>{c}</p>{i<2?<div className="process-connector" aria-hidden="true"><span /><ArrowRight /></div>:null}</article>)}</div></div></section>;
}

function Finder() {
  const [stage, setStage] = useState("Class 10");
  const controls = [["Class", ["Class 10","Class 9","Class 12","Class 6"]], ["Subject", ["Mathematics","Science","English","Computer Science"]], ["Board", ["CBSE","ICSE","State Board"]], ["Mode", ["Online","In-person","Either"]], ["Availability", ["Weekday evenings","Weekends","Flexible"]]];
  return <section className="section finder-section" id="find"><div className="page-shell"><SectionHeading eyebrow="Discovery preview" title="What do you want to learn?" copy="Start with what matters. This preview shows how finding a tutor will feel when search launches." /><div className="finder-panel"><form onSubmit={(e)=>e.preventDefault()}><div className="finder-fields">{controls.map(([label, options], idx) => <label key={label}>{label}<select value={idx===0?stage:undefined} onChange={idx===0?(e)=>setStage(e.target.value):undefined}>{(options as string[]).map(x=><option key={x}>{x}</option>)}</select></label>)}</div><button className="button button-primary finder-submit" type="submit"><Search size={18}/><span>Find Tutors</span></button></form><div className="finder-results"><div><p className="preview-label">Illustrative profile previews</p><h3>Potential matches for {stage}</h3></div><div className="tutor-mini-row"><TutorMini initials="RM" subject="Mathematics" detail="CBSE · Online"/><TutorMini initials="PS" subject="Science" detail="CBSE · Flexible"/><TutorMini initials="NA" subject="English" detail="All boards · Online"/></div></div></div></div></section>;
}

function TutorMini({ initials, subject, detail }: { initials:string; subject:string; detail:string }) { return <div className="tutor-mini"><span>{initials}</span><div><b>Sample tutor</b><p>{subject}</p><small>{detail}</small></div><ArrowRight size={17}/></div> }

function Subjects() { return <section className="section subjects-section" id="subjects"><div className="page-shell"><SectionHeading eyebrow="Subject explorer" title="Every subject opens a different way of thinking." copy="Explore focused learning support across the school journey." /><div className="subject-grid">{subjects.map(({name,copy,icon:Icon,code})=><article className="subject-card" key={name}><div className="subject-card-top"><span className="subject-icon"><Icon/></span><span className="subject-code">{code}</span></div><h3>{name}</h3><p>{copy}</p><a href="#find">Explore subject <ArrowRight size={16}/></a></article>)}</div></div></section> }

function Classes() {
  const [active, setActive] = useState(8);
  const bands = [{name:"Primary", range:"1–5"},{name:"Middle School",range:"6–8"},{name:"Secondary",range:"9–10"},{name:"Senior Secondary",range:"11–12"}];
  return <section className="section classes-section" id="classes"><div className="page-shell classes-layout"><div><SectionHeading eyebrow="The academic journey" title="Support that evolves with every stage." copy="From strong foundations to board preparation and subject specialisation, explore the right level of support." /><div className="stage-list">{bands.map((b,i)=><button type="button" key={b.name} className={(active <=5&&i===0)||(active>=6&&active<=8&&i===1)||(active>=9&&active<=10&&i===2)||(active>=11&&i===3)?"stage-active":""} onClick={()=>setActive([3,7,10,12][i])}><span>0{i+1}</span><b>{b.name}</b><small>Classes {b.range}</small><ArrowRight/></button>)}</div></div><div className="class-orbit"><div className="class-orbit-core"><small>CURRENT VIEW</small><strong>Class {active}</strong><p>{active<=5?"Foundation":active<=8?"Discovery":active<=10?"Direction":"Specialisation"}</p></div><div className="class-buttons" aria-label="Select a class">{Array.from({length:12},(_,i)=>i+1).map(n=><button type="button" key={n} aria-label={`Class ${n}`} className={active===n?"class-active":""} onClick={()=>setActive(n)}>{n}</button>)}</div></div></div></section>
}

function WhyUs() {
  const values = [[Award,"Qualified tutors","Profiles centre academic background and teaching experience."],[Sparkles,"Personalized matching","Requirements are considered against suitable tutor profiles."],[Laptop,"Flexible learning","Online or in-person options can fit different schedules and needs."],[MessageCircle,"Human support","A clear point of coordination throughout the learning journey."],[ShieldCheck,"Trust & verification","Tutor information can be reviewed before an assignment is made."]];
  return <section className="section why-section"><div className="page-shell"><SectionHeading eyebrow="Why Tutors Academy" title="Technology that supports judgment—not replaces it." copy="The platform is being designed around clarity, fit, and confidence for every participant." /><div className="why-grid">{values.map(([Icon,title,copy],i)=><article className={i===0?"why-card why-featured":"why-card"} key={String(title)}><span>{typeof Icon!=="string"&&<Icon/>}</span><div><h3>{String(title)}</h3><p>{String(copy)}</p></div></article>)}</div></div></section>
}

function ParentJourney() { const steps=["Tell us what you need","Review suitable options","Connect","Trial or demo where available","Start learning","Continue with confidence"]; return <section className="section parent-section"><div className="page-shell parent-grid"><div><SectionHeading eyebrow="For parents & students" title="Confidence at every step." copy="A clear, supported experience from the first requirement to an ongoing learning relationship."/><CTAButton href="#find">Find My Tutor</CTAButton></div><ol className="journey-list">{steps.map((s,i)=><li key={s}><span>{String(i+1).padStart(2,"0")}</span><b>{s}</b>{i<steps.length-1?<ArrowRight/>:<Check/>}</li>)}</ol></div></section> }

function TutorSection() { return <section className="section tutor-section" id="tutors"><div className="page-shell tutor-grid"><div className="tutor-visual"><div className="tutor-visual-title"><GraduationCap/><span><small>PROFESSIONAL PROFILE</small><b>Your teaching, clearly represented.</b></span></div><div className="credential-lines"><span/><span/><span/></div><div className="credential-row"><div><Award/><small>Qualifications</small></div><div><BookOpen/><small>Subjects</small></div><div><Star/><small>Reviews</small></div></div></div><div><SectionHeading eyebrow="For tutors" title="Your knowledge can change a student’s journey." copy="Build a professional presence, share your expertise, and connect with suitable student requirements as the platform grows."/><ul className="check-list"><li><Check/> Showcase qualifications and experience</li><li><Check/> Set subjects, classes, and availability</li><li><Check/> Receive suitable learning requirements</li><li><Check/> Build credibility through future reviews</li></ul><CTAButton href="#footer">Become a Tutor</CTAButton></div></div></section> }

function Testimonials() { return <section className="section testimonials-section"><div className="page-shell"><SectionHeading eyebrow="Experience preview" title="Designed for stories of real progress." copy="These illustrative placeholders show how genuine parent, student, and tutor stories can appear here later."/><div className="testimonial-grid">{[["Parent perspective","“The matching journey felt considered, clear, and focused on my child’s actual needs.”"],["Student perspective","“I could see how the right explanation and pace would make a difficult subject feel manageable.”"],["Tutor perspective","“The professional profile puts teaching experience and subject strengths first.”"]].map(([role,quote])=><figure key={role}><Quote/><blockquote>{quote}</blockquote><figcaption><span>Illustrative placeholder</span><b>{role}</b></figcaption></figure>)}</div></div></section> }

function FAQ() { const [open,setOpen]=useState(0); return <section className="section faq-section" id="faq"><div className="page-shell faq-grid"><SectionHeading eyebrow="Questions, answered" title="Everything you need to take the next step." copy="Clear information for families and tutors exploring the platform."/><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button type="button" aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}><span>{q}</span><ChevronDown className={open===i?"faq-chevron-open":""}/></button><div className={open===i?"faq-answer faq-answer-open":"faq-answer"}><p>{a}</p></div></div>)}</div></div></section> }

function FinalCTA() { return <section className="closing-section"><div className="page-shell closing-inner"><div className="closing-mark"><GraduationCap/></div><p className="eyebrow">Your next step</p><h2>Ready to find the right<br/>learning partner?</h2><p>Tell us what you need. We’ll help you take the next step.</p><div className="hero-actions"><CTAButton href="#find">Find My Tutor</CTAButton><CTAButton href="#tutors" secondary>Become a Tutor</CTAButton></div></div></section> }

function Footer() { const groups=[{title:"Tutors Academy",links:[["About","#about"],["How It Works","#how"],["Contact","#footer"]]},{title:"For Students & Parents",links:[["Find a Tutor","#find"],["Subjects","#subjects"],["Classes","#classes"],["FAQ","#faq"]]},{title:"For Tutors",links:[["Become a Tutor","#tutors"],["Tutor Registration","#tutors"],["Tutor Information","#tutors"]]},{title:"Legal",links:[["Privacy Policy","#footer"],["Terms & Conditions","#footer"],["Refund & Cancellation Policy","#footer"]]}]; return <footer id="footer"><div className="page-shell"><div className="footer-top"><div className="footer-brand"><a href="#top" className="brand"><span className="brand-mark"><span>TA</span></span><span>Tutors <b>Academy</b></span></a><p>Personalized academic support for Classes 1–12, thoughtfully matched.</p><small>Contact details and social links are placeholders.</small><div className="social-row"><a href="#footer" aria-label="Instagram placeholder">Ig</a><a href="#footer" aria-label="LinkedIn placeholder">Li</a><a href="#footer" aria-label="YouTube placeholder">Yt</a></div></div>{groups.map(g=><div className="footer-column" key={g.title}><h3>{g.title}</h3>{g.links.map(([l,h])=><a href={h} key={l}>{l}</a>)}</div>)}</div><div className="footer-bottom"><span>© 2026 Tutors Academy. All rights reserved.</span><span>Designed for learning. Built for trust.</span></div></div></footer> }

export function TutorsAcademyHome() { return <><Navbar/><main><Hero/><ValueSection/><HowItWorks/><Finder/><Subjects/><Classes/><WhyUs/><ParentJourney/><TutorSection/><Testimonials/><FAQ/><FinalCTA/></main><Footer/></> }