import { useState, useEffect } from "react";

const COLORS = {
  bg: "#1e1e1e",
  sidebar: "#252526",
  activityBar: "#333333",
  tabBar: "#2d2d2d",
  tabActive: "#1e1e1e",
  tabInactive: "#2d2d2d",
  statusBar: "#007acc",
  border: "#3e3e42",
  text: "#d4d4d4",
  textMuted: "#858585",
  textDim: "#6b6b6b",
  keyword: "#569cd6",
  string: "#ce9178",
  comment: "#6a9955",
  number: "#b5cea8",
  function: "#dcdcaa",
  type: "#4ec9b0",
  variable: "#9cdcfe",
  purple: "#c586c0",
  orange: "#ce9178",
  green: "#4ec9b0",
  yellow: "#dcdcaa",
};

const FILES = [
  { id: "home", name: "home.tsx", icon: "🏠", lang: "TypeScript React" },
  { id: "projects", name: "projects.json", icon: "🚀", lang: "JSON" },
  { id: "about", name: "about_me.txt", icon: "👤", lang: "Plain Text" },
  { id: "contact", name: "contact.md", icon: "📬", lang: "Markdown" },
];

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <span>
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </span>
  );
}

function HomeTab({ onOpen }) {
  const ascii = `
 ██████╗ ██████╗  █████╗ ██╗   ██╗███████╗███████╗███╗   ██╗ █████╗ 
 ██╔══██╗██╔══██╗██╔══██╗██║   ██║██╔════╝██╔════╝████╗  ██║██╔══██╗
 ██████╔╝██████╔╝███████║██║   ██║█████╗  █████╗  ██╔██╗ ██║███████║
 ██╔═══╝ ██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝  ██╔══╝  ██║╚██╗██║██╔══██║
 ██║     ██║  ██║██║  ██║ ╚████╔╝ ███████╗███████╗██║ ╚████║██║  ██║
 ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝`;

  return (
    <div style={{ padding: "40px 48px", fontFamily: "Consolas, monospace", overflowY: "auto", height: "100%" }}>
      <pre style={{ color: COLORS.keyword, fontSize: "clamp(4px, 1.1vw, 10px)", lineHeight: 1.3, marginBottom: "32px", overflowX: "auto" }}>
        {ascii}
      </pre>

      <div style={{ marginBottom: "8px" }}>
        <span style={{ color: COLORS.comment }}>// Full-Stack Developer & CS Undergrad</span>
      </div>
      <div style={{ marginBottom: "24px" }}>
        <span style={{ color: COLORS.purple }}>const</span>{" "}
        <span style={{ color: COLORS.variable }}>role</span>{" "}
        <span style={{ color: COLORS.text }}>=</span>{" "}
        <span style={{ color: COLORS.string }}>"Building scalable systems with Java, Spring Boot &amp; modern web tech"</span>
        <span style={{ color: COLORS.text }}>;</span>
      </div>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
        {[
          { label: "🎓", value: "BE Computer Science", sub: "Sathyabama Institute • 8.97 CGPA" },
          { label: "⚡", value: "Infosys Intern", sub: "Java Technology Stack" },
          { label: "🏆", value: "CCNA Certified", sub: "Cisco Networking Academy" },
          { label: "🤖", value: "Oracle OCI 2025", sub: "AI Foundations Associate" },
        ].map((s) => (
          <div key={s.value} style={{
            background: "#252526",
            border: `1px solid ${COLORS.border}`,
            borderRadius: "6px",
            padding: "14px 20px",
            minWidth: "200px",
          }}>
            <div style={{ fontSize: "22px", marginBottom: "4px" }}>{s.label}</div>
            <div style={{ color: COLORS.yellow, fontWeight: 600, fontSize: "13px" }}>{s.value}</div>
            <div style={{ color: COLORS.textMuted, fontSize: "11px" }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: "12px", color: COLORS.comment }}>{"// Quick Navigation"}</div>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {FILES.filter(f => f.id !== "home").map(f => (
          <button key={f.id} onClick={() => onOpen(f.id)}
            style={{
              background: "transparent",
              border: `1px solid ${COLORS.keyword}`,
              color: COLORS.keyword,
              borderRadius: "4px",
              padding: "8px 18px",
              cursor: "pointer",
              fontFamily: "Consolas, monospace",
              fontSize: "13px",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.target.style.background = COLORS.keyword; e.target.style.color = "#1e1e1e"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = COLORS.keyword; }}
          >
            {f.icon} {f.name}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "48px", color: COLORS.textDim, fontSize: "12px" }}>
        <div><span style={{ color: COLORS.comment }}>/**</span></div>
        <div><span style={{ color: COLORS.comment }}> * Chennai, India</span></div>
        <div><span style={{ color: COLORS.comment }}> * praveena655.cse@gmail.com</span></div>
        <div><span style={{ color: COLORS.comment }}> * BE CSE @ Sathyabama • Aug 2023 – May 2027</span></div>
        <div><span style={{ color: COLORS.comment }}> */</span></div>
      </div>
    </div>
  );
}

function ProjectsTab() {
  const projects = [
    {
      id: 1,
      name: "CampusLostFoundPortal",
      type: "WebApplication",
      description: "Campus-based lost & found web app with JWT authentication, role-based access control, RESTful APIs for item reporting/retrieval, and an admin dashboard for moderation.",
      stack: ["Java", "Spring Boot", "Spring Security", "MySQL", "REST APIs", "HTML", "CSS", "JavaScript"],
      highlights: ["JWT-based auth with RBAC", "RESTful item reporting & retrieval APIs", "Admin dashboard for user management"],
      github: "https://github.com/Praveena-code",
      live: null,
      status: "completed",
    },
    {
      id: 2,
      name: "CodeComplexityAnalyzer",
      type: "AI_Tool",
      description: "AI-enabled code analysis & translation tool evaluating source code using LOC, Cyclomatic Complexity, Nesting Depth, Comment Density, and Halstead Metrics. Supports Java, C, C++, Python.",
      stack: ["Java", "Spring Boot", "Python", "Machine Learning", "MySQL", "REST APIs", "HTML", "CSS", "JavaScript"],
      highlights: ["Multi-language analysis (Java, C, C++, Python)", "ML-based recommendation system for code optimization", "Halstead & Cyclomatic complexity metrics"],
      github: "https://github.com/Praveena-code",
      live: null,
      status: "completed",
    },
    {
      id: 3,
      name: "OperatingSystemSimulator",
      type: "SystemDesign",
      description: "Interactive simulator visualizing core OS concepts — CPU scheduling, process management. Implements FCFS, SJF, and Round Robin algorithms with dynamic UI for real-time scheduling visualization.",
      stack: ["JavaScript", "HTML", "CSS"],
      highlights: ["FCFS, SJF & Round Robin scheduling", "Live process execution visualization", "Dynamic UI for process input"],
      github: "https://github.com/Praveena-code",
      live: null,
      status: "completed",
    },
  ];

  const stackColor = (s) => {
    const map = { Java: "#f89820", Python: "#3572a5", JavaScript: "#f1e05a", HTML: "#e34c26", CSS: "#563d7c", MySQL: "#4479a1", "Spring Boot": "#6db33f", "REST APIs": COLORS.green, "Machine Learning": COLORS.purple, "Spring Security": "#6db33f" };
    return map[s] || COLORS.textMuted;
  };

  return (
    <div style={{ padding: "32px 40px", overflowY: "auto", height: "100%", fontFamily: "Consolas, monospace" }}>
      <div style={{ color: COLORS.comment, marginBottom: "24px", fontSize: "13px" }}>{"// projects.json — 3 objects"}</div>
      <div style={{ color: COLORS.text, marginBottom: "24px" }}>
        <span style={{ color: COLORS.purple }}>const</span>{" "}
        <span style={{ color: COLORS.variable }}>projects</span>{" "}
        <span style={{ color: COLORS.text }}>= [</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {projects.map((p, i) => (
          <div key={p.id} style={{
            background: "#252526",
            border: `1px solid ${COLORS.border}`,
            borderLeft: `3px solid ${COLORS.keyword}`,
            borderRadius: "0 8px 8px 0",
            padding: "20px 24px",
          }}>
            <div style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ color: COLORS.yellow, fontWeight: 700, fontSize: "15px" }}>{p.name}</span>
              <span style={{ color: COLORS.textDim, fontSize: "11px" }}>:</span>
              <span style={{ color: COLORS.type, fontSize: "12px" }}>{p.type}</span>
              <span style={{ marginLeft: "auto", background: COLORS.comment + "33", color: COLORS.comment, fontSize: "10px", padding: "2px 8px", borderRadius: "10px" }}>✓ {p.status}</span>
            </div>

            <p style={{ color: COLORS.string, fontSize: "12px", marginBottom: "12px", lineHeight: 1.6 }}>"{p.description}"</p>

            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: COLORS.textMuted, fontSize: "11px" }}>highlights: </span>
              <span style={{ color: COLORS.text, fontSize: "11px" }}>[</span>
              <ul style={{ margin: "4px 0 4px 16px", padding: 0 }}>
                {p.highlights.map(h => (
                  <li key={h} style={{ color: COLORS.variable, fontSize: "11px", listStyle: "none" }}>
                    <span style={{ color: COLORS.textDim }}>→ </span>{h}
                  </li>
                ))}
              </ul>
              <span style={{ color: COLORS.text, fontSize: "11px" }}>],</span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
              {p.stack.map(s => (
                <span key={s} style={{
                  background: stackColor(s) + "22",
                  border: `1px solid ${stackColor(s)}55`,
                  color: stackColor(s),
                  fontSize: "10px",
                  padding: "2px 8px",
                  borderRadius: "4px",
                }}>{s}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <a href={p.github} target="_blank" rel="noreferrer" style={{
                color: COLORS.keyword, fontSize: "11px", textDecoration: "none", border: `1px solid ${COLORS.keyword}44`, padding: "4px 12px", borderRadius: "4px",
              }}>⬡ GitHub</a>
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={{ color: COLORS.green, fontSize: "11px", textDecoration: "none", border: `1px solid ${COLORS.green}44`, padding: "4px 12px", borderRadius: "4px" }}>↗ Live</a>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ color: COLORS.text, marginTop: "24px" }}>];</div>
    </div>
  );
}

function AboutTab() {
  const skills = {
    "Languages": ["Java", "Python", "C++", "SQL"],
    "Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Spring Boot", "Node.js", "Express.js"],
    "Databases & APIs": ["MySQL", "REST APIs"],
    "Dev Tools": ["Git", "GitHub", "VS Code", "Postman", "Eclipse", "Figma", "Unity"],
    "Core Concepts": ["DSA", "Data Science", "OOP", "DBMS", "Computer Networks"],
  };

  const certs = [
    { org: "Cisco", name: "CCNA – Cisco Certified Network Associate", color: "#1ba0d7" },
    { org: "Oracle", name: "OCI 2025 AI Foundations Associate", color: "#f80000" },
    { org: "ServiceNow", name: "Certified Application Developer", color: "#62d84e" },
    { org: "Diploma", name: "Computer Application – HTML, C, C++, Python", color: COLORS.yellow },
    { org: "NPTEL IIT-KGP", name: "Programming in Java & DBMS", color: "#ff6b35" },
    { org: "IEEE WiE", name: "Women in Engineering: Technical Team Member", color: "#00629b" },
  ];

  const skillColor = (s) => {
    const colors = ["#569cd6", "#4ec9b0", "#c586c0", "#dcdcaa", "#ce9178", "#b5cea8", "#9cdcfe"];
    return colors[s.length % colors.length];
  };

  return (
    <div style={{ padding: "32px 40px", overflowY: "auto", height: "100%", fontFamily: "Consolas, monospace" }}>
      <div style={{ color: COLORS.comment, marginBottom: "24px" }}>{"# about_me.txt"}</div>

      {/* Bio */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{ color: COLORS.yellow, marginBottom: "8px", fontSize: "14px" }}>PRAVEENA VENKATRAJ</div>
        <div style={{ color: COLORS.text, fontSize: "13px", lineHeight: 1.7, maxWidth: "640px" }}>
          Computer Science undergraduate at Sathyabama Institute of Science and Technology, Chennai, 
          with a strong foundation in full-stack development, system design, and AI-enabled tooling. 
          Passionate about building production-ready systems with clean architecture and elegant code.
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "32px" }}>
        {[
          { n: "8.97", label: "CGPA / 10" },
          { n: "3+", label: "Projects Shipped" },
          { n: "6+", label: "Certifications" },
          { n: "2027", label: "Graduation Year" },
        ].map(s => (
          <div key={s.n} style={{ background: "#252526", border: `1px solid ${COLORS.border}`, borderRadius: "8px", padding: "16px 24px", textAlign: "center" }}>
            <div style={{ color: COLORS.keyword, fontSize: "24px", fontWeight: 700 }}>{s.n}</div>
            <div style={{ color: COLORS.textMuted, fontSize: "11px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{ color: COLORS.purple, marginBottom: "12px", fontSize: "13px" }}>{"## Education"}</div>
        <div style={{ background: "#252526", border: `1px solid ${COLORS.border}`, borderRadius: "6px", padding: "16px 20px" }}>
          <div style={{ color: COLORS.yellow, fontWeight: 700 }}>Bachelor of Engineering — Computer Science</div>
          <div style={{ color: COLORS.type, fontSize: "12px" }}>Sathyabama Institute of Science and Technology, Chennai</div>
          <div style={{ color: COLORS.textMuted, fontSize: "12px", marginTop: "4px" }}>Aug 2023 – May 2027 &nbsp;|&nbsp; CGPA: 8.97 / 10</div>
        </div>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{ color: COLORS.purple, marginBottom: "12px", fontSize: "13px" }}>{"## Technical Skills"}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "14px" }}>
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} style={{ background: "#252526", border: `1px solid ${COLORS.border}`, borderRadius: "6px", padding: "14px 16px" }}>
              <div style={{ color: COLORS.comment, fontSize: "11px", marginBottom: "10px" }}>{"// "}{cat}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {items.map(s => (
                  <span key={s} style={{
                    background: skillColor(s) + "1a",
                    border: `1px solid ${skillColor(s)}44`,
                    color: skillColor(s),
                    fontSize: "10px",
                    padding: "3px 8px",
                    borderRadius: "3px",
                  }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certs */}
      <div>
        <div style={{ color: COLORS.purple, marginBottom: "12px", fontSize: "13px" }}>{"## Certifications & Achievements"}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {certs.map(c => (
            <div key={c.name} style={{ display: "flex", alignItems: "center", gap: "12px", background: "#252526", border: `1px solid ${COLORS.border}`, borderRadius: "6px", padding: "10px 16px" }}>
              <span style={{ background: c.color + "22", color: c.color, fontSize: "10px", padding: "2px 8px", borderRadius: "4px", minWidth: "80px", textAlign: "center", fontWeight: 700 }}>{c.org}</span>
              <span style={{ color: COLORS.text, fontSize: "12px" }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactTab() {
  const links = [
    { label: "GitHub", value: "github.com/Praveena-code", href: "https://github.com/Praveena-code", color: COLORS.text, icon: "⬡" },
    { label: "LinkedIn", value: "linkedin.com/in/praveena-venkatraj-b4b255318", href: "https://linkedin.com/in/praveena-venkatraj-b4b255318", color: "#0a66c2", icon: "in" },
    { label: "Email", value: "praveena655.cse@gmail.com", href: "mailto:praveena655.cse@gmail.com", color: "#ea4335", icon: "@" },
    { label: "Phone", value: "+91 9363592433", href: "tel:+919363592433", color: COLORS.green, icon: "☎" },
  ];

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div style={{ padding: "32px 40px", overflowY: "auto", height: "100%", fontFamily: "Consolas, monospace" }}>
      <div style={{ color: COLORS.comment, marginBottom: "24px" }}>{"# contact.md — Let's build something together"}</div>

      {/* Terminal Links */}
      <div style={{ marginBottom: "40px" }}>
        <div style={{ background: "#0c0c0c", border: `1px solid ${COLORS.border}`, borderRadius: "8px", padding: "20px 24px" }}>
          <div style={{ color: COLORS.comment, marginBottom: "12px", fontSize: "12px" }}>praveena@portfolio:~$ cat links.txt</div>
          {links.map(l => (
            <div key={l.label} style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ background: l.color + "22", color: l.color, width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px", fontSize: "12px", fontWeight: 700 }}>{l.icon}</span>
              <span style={{ color: COLORS.textMuted, fontSize: "12px", minWidth: "72px" }}>{l.label}</span>
              <span style={{ color: COLORS.textDim, fontSize: "12px" }}>→</span>
              <a href={l.href} target="_blank" rel="noreferrer" style={{ color: l.color, fontSize: "12px", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.textDecoration = "underline"}
                onMouseLeave={e => e.target.style.textDecoration = "none"}
              >{l.value}</a>
            </div>
          ))}
          <div style={{ color: COLORS.comment, marginTop: "16px", fontSize: "12px" }}>praveena@portfolio:~$ <span style={{ animation: "blink 1s step-end infinite" }}>▋</span></div>
        </div>
      </div>

      {/* Contact Form */}
      <div style={{ color: COLORS.purple, marginBottom: "16px", fontSize: "13px" }}>{"## Send a Message"}</div>
      {!sent ? (
        <div style={{ background: "#252526", border: `1px solid ${COLORS.border}`, borderRadius: "8px", padding: "24px", maxWidth: "520px" }}>
          {[
            { key: "name", label: "your_name", type: "text" },
            { key: "email", label: "your_email", type: "email" },
          ].map(f => (
            <div key={f.key} style={{ marginBottom: "16px" }}>
              <div style={{ color: COLORS.variable, fontSize: "11px", marginBottom: "6px" }}>
                <span style={{ color: COLORS.purple }}>const</span> {f.label} <span style={{ color: COLORS.text }}>=</span>
              </div>
              <input
                type={f.type}
                value={form[f.key]}
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                placeholder={`"..."`}
                style={{
                  width: "100%", background: "#1e1e1e", border: `1px solid ${COLORS.border}`, borderRadius: "4px",
                  color: COLORS.string, padding: "8px 12px", fontSize: "13px", fontFamily: "Consolas, monospace",
                  outline: "none", boxSizing: "border-box",
                }}
                onFocus={e => e.target.style.borderColor = COLORS.keyword}
                onBlur={e => e.target.style.borderColor = COLORS.border}
              />
            </div>
          ))}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ color: COLORS.variable, fontSize: "11px", marginBottom: "6px" }}>
              <span style={{ color: COLORS.purple }}>const</span> message <span style={{ color: COLORS.text }}>=</span>
            </div>
            <textarea
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder={`"..."`}
              rows={4}
              style={{
                width: "100%", background: "#1e1e1e", border: `1px solid ${COLORS.border}`, borderRadius: "4px",
                color: COLORS.string, padding: "8px 12px", fontSize: "13px", fontFamily: "Consolas, monospace",
                outline: "none", resize: "vertical", boxSizing: "border-box",
              }}
              onFocus={e => e.target.style.borderColor = COLORS.keyword}
              onBlur={e => e.target.style.borderColor = COLORS.border}
            />
          </div>
          <button
            onClick={() => setSent(true)}
            style={{
              background: COLORS.keyword, color: "#1e1e1e", border: "none", borderRadius: "4px",
              padding: "10px 24px", cursor: "pointer", fontFamily: "Consolas, monospace", fontSize: "13px", fontWeight: 700,
            }}
            onMouseEnter={e => e.target.style.opacity = "0.85"}
            onMouseLeave={e => e.target.style.opacity = "1"}
          >
            {">"} send_message()
          </button>
        </div>
      ) : (
        <div style={{ background: "#252526", border: `1px solid ${COLORS.green}44`, borderRadius: "8px", padding: "24px", maxWidth: "520px", color: COLORS.green }}>
          ✓ Message sent! praveena655.cse@gmail.com will get back to you soon.
        </div>
      )}
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  );
}

const ACTIVITY_ICONS = [
  { id: "files", icon: "⊞", title: "Explorer" },
  { id: "search", icon: "⌕", title: "Search" },
  { id: "git", icon: "⑂", title: "Source Control" },
  { id: "extensions", icon: "⊕", title: "Extensions" },
];

export default function App() {
  const [openTabs, setOpenTabs] = useState(["home"]);
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeActivity, setActiveActivity] = useState("files");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openFile = (id) => {
    if (!openTabs.includes(id)) setOpenTabs([...openTabs, id]);
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  const closeTab = (id, e) => {
    e.stopPropagation();
    const next = openTabs.filter(t => t !== id);
    setOpenTabs(next);
    if (activeTab === id) setActiveTab(next[next.length - 1] || null);
  };

  const activeFile = FILES.find(f => f.id === activeTab);

  return (
    <div style={{
      height: "100vh", width: "100vw", display: "flex", flexDirection: "column",
      background: COLORS.bg, color: COLORS.text, fontFamily: "Consolas, 'Courier New', monospace",
      overflow: "hidden", fontSize: "13px",
    }}>
      {/* Top Menu Bar */}
      <div style={{
        height: "30px", background: "#3c3c3c", display: "flex", alignItems: "center",
        padding: "0 12px", borderBottom: `1px solid ${COLORS.border}`, flexShrink: 0, zIndex: 100,
      }}>
        {/* Window dots */}
        <div style={{ display: "flex", gap: "6px", marginRight: "16px" }}>
          {["#ff5f57", "#ffbd2e", "#28c840"].map((c, i) => (
            <div key={i} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c }} />
          ))}
        </div>
        {/* Menu items */}
        <div style={{ display: "flex", gap: "2px", flex: 1 }}>
          {["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"].map(m => (
            <div key={m} style={{
              padding: "2px 8px", color: COLORS.text, fontSize: "12px", cursor: "pointer", borderRadius: "3px",
            }}
              onMouseEnter={e => e.target.style.background = "#505050"}
              onMouseLeave={e => e.target.style.background = "transparent"}
            >{m}</div>
          ))}
        </div>
        {/* Search bar center */}
        <div style={{
          position: "absolute", left: "50%", transform: "translateX(-50%)",
          background: "#3c3c3c", border: `1px solid ${COLORS.border}`, borderRadius: "4px",
          padding: "2px 32px", fontSize: "12px", color: COLORS.textMuted,
          display: "flex", alignItems: "center", gap: "8px",
        }}>
          <span>🔍</span> ~/home
        </div>
        {/* Hamburger on mobile */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
          background: "transparent", border: "none", color: COLORS.text, cursor: "pointer",
          display: "flex", alignItems: "center", padding: "0 4px", marginLeft: "auto",
        }}>☰</button>
      </div>

      {/* Body */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", position: "relative" }}>

        {/* Activity Bar */}
        <div style={{
          width: "48px", background: COLORS.activityBar, borderRight: `1px solid ${COLORS.border}`,
          display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "8px",
          flexShrink: 0, zIndex: 50,
        }}>
          {ACTIVITY_ICONS.map(a => (
            <button key={a.id} title={a.title} onClick={() => {
              if (activeActivity === a.id) setSidebarOpen(v => !v);
              else { setActiveActivity(a.id); setSidebarOpen(true); }
            }} style={{
              width: "40px", height: "40px", background: "transparent", border: "none",
              color: activeActivity === a.id && sidebarOpen ? COLORS.text : COLORS.textDim,
              cursor: "pointer", fontSize: "18px", marginBottom: "4px", borderRadius: "4px",
              borderLeft: activeActivity === a.id && sidebarOpen ? `2px solid ${COLORS.keyword}` : "2px solid transparent",
            }}>{a.icon}</button>
          ))}
          <div style={{ flex: 1 }} />
          <button title="Settings" style={{ width: "40px", height: "40px", background: "transparent", border: "none", color: COLORS.textDim, cursor: "pointer", fontSize: "18px", marginBottom: "8px" }}>⚙</button>
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <div style={{
            width: "220px", background: COLORS.sidebar, borderRight: `1px solid ${COLORS.border}`,
            flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column",
            position: "absolute", left: "48px", top: 0, bottom: 0, zIndex: 40,
            animation: "slideIn 0.15s ease",
          }}>
            <div style={{ padding: "10px 12px", fontSize: "11px", color: COLORS.textMuted, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
              EXPLORER
            </div>
            <div style={{ padding: "4px 0" }}>
              <div style={{ padding: "4px 12px", fontSize: "11px", color: COLORS.textMuted, fontWeight: 700 }}>📁 PORTFOLIO</div>
              {FILES.map(f => (
                <div key={f.id} onClick={() => openFile(f.id)} style={{
                  padding: "5px 8px 5px 28px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px",
                  background: activeTab === f.id ? "#37373d" : "transparent",
                  color: activeTab === f.id ? COLORS.text : COLORS.textMuted,
                  fontSize: "13px",
                }}
                  onMouseEnter={e => { if (activeTab !== f.id) e.currentTarget.style.background = "#2a2d2e"; }}
                  onMouseLeave={e => { if (activeTab !== f.id) e.currentTarget.style.background = "transparent"; }}
                >
                  <span style={{ fontSize: "14px" }}>{f.icon}</span> {f.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Editor */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column", overflow: "hidden",
          marginLeft: sidebarOpen ? "220px" : "0",
          transition: "margin-left 0.15s ease",
        }}>
          {/* Tab Bar */}
          <div style={{
            height: "35px", background: COLORS.tabBar, display: "flex", alignItems: "stretch",
            borderBottom: `1px solid ${COLORS.border}`, flexShrink: 0, overflowX: "auto",
            scrollbarWidth: "none",
          }}>
            {openTabs.map(tid => {
              const f = FILES.find(x => x.id === tid);
              const isActive = tid === activeTab;
              return (
                <div key={tid} onClick={() => setActiveTab(tid)} style={{
                  display: "flex", alignItems: "center", gap: "6px", padding: "0 14px",
                  background: isActive ? COLORS.tabActive : COLORS.tabInactive,
                  borderRight: `1px solid ${COLORS.border}`,
                  borderTop: isActive ? `1px solid ${COLORS.keyword}` : "1px solid transparent",
                  cursor: "pointer", whiteSpace: "nowrap", fontSize: "12px",
                  color: isActive ? COLORS.text : COLORS.textMuted,
                  flexShrink: 0,
                }}>
                  <span>{f?.icon}</span>
                  <span>{f?.name}</span>
                  <span onClick={(e) => closeTab(tid, e)} style={{
                    color: COLORS.textDim, fontSize: "14px", lineHeight: 1,
                    padding: "0 2px", borderRadius: "2px",
                    cursor: "pointer",
                  }}
                    onMouseEnter={e => { e.target.style.color = COLORS.text; e.target.style.background = "#555"; }}
                    onMouseLeave={e => { e.target.style.color = COLORS.textDim; e.target.style.background = "transparent"; }}
                  >×</span>
                </div>
              );
            })}
          </div>

          {/* Breadcrumb */}
          <div style={{
            height: "22px", background: COLORS.bg, padding: "0 12px", display: "flex", alignItems: "center",
            gap: "4px", fontSize: "12px", color: COLORS.textMuted, borderBottom: `1px solid ${COLORS.border}22`, flexShrink: 0,
          }}>
            <span>Portfolio</span>
            <span>›</span>
            <span style={{ color: COLORS.text }}>{activeFile?.name}</span>
          </div>

          {/* Editor Content */}
          <div style={{ flex: 1, overflow: "hidden", display: "flex" }}>
            {/* Line numbers */}
            <div style={{
              width: "48px", background: COLORS.bg, color: COLORS.textDim, fontSize: "12px",
              textAlign: "right", padding: "16px 8px 16px 0", lineHeight: "1.6",
              userSelect: "none", flexShrink: 0, overflowY: "hidden",
            }}>
              {Array.from({ length: 50 }, (_, i) => <div key={i}>{i + 1}</div>)}
            </div>
            <div style={{ flex: 1, overflow: "hidden" }}>
              {activeTab === "home" && <HomeTab onOpen={openFile} />}
              {activeTab === "projects" && <ProjectsTab />}
              {activeTab === "about" && <AboutTab />}
              {activeTab === "contact" && <ContactTab />}
              {!activeTab && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: COLORS.textDim }}>
                  Select a file to open
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile overlay */}
        {mobileMenuOpen && (
          <div style={{
            position: "absolute", inset: 0, background: "#000a", zIndex: 200,
            display: "flex",
          }} onClick={() => setMobileMenuOpen(false)}>
            <div onClick={e => e.stopPropagation()} style={{
              width: "240px", background: COLORS.sidebar, height: "100%", padding: "16px",
              borderRight: `1px solid ${COLORS.border}`,
            }}>
              <div style={{ color: COLORS.textMuted, fontSize: "11px", fontWeight: 700, marginBottom: "12px" }}>OPEN FILE</div>
              {FILES.map(f => (
                <div key={f.id} onClick={() => openFile(f.id)} style={{
                  padding: "10px 12px", cursor: "pointer", borderRadius: "6px", marginBottom: "4px",
                  background: activeTab === f.id ? "#37373d" : "transparent",
                  color: COLORS.text, fontSize: "13px", display: "flex", gap: "8px", alignItems: "center",
                }}>
                  {f.icon} {f.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div style={{
        height: "22px", background: COLORS.statusBar, display: "flex", alignItems: "center",
        padding: "0 12px", fontSize: "11px", color: "#fff", flexShrink: 0, gap: "16px",
      }}>
        <span>⑂ main</span>
        <span>⚠ 0 &nbsp; ✗ 0</span>
        <div style={{ flex: 1 }} />
        <span>{activeFile?.lang || "Plain Text"}</span>
        <span>UTF-8</span>
        <span>LF</span>
        <Clock />
        <span>Dracula+</span>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
        ::-webkit-scrollbar-thumb { background: #555; border-radius: 4px; }
        @keyframes slideIn { from { opacity:0; transform: translateX(-8px); } to { opacity:1; transform: translateX(0); } }
        @media (max-width: 640px) {
          .sidebar-desktop { display: none !important; }
        }
      `}</style>
    </div>
  );
}
