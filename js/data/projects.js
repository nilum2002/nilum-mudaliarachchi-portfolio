/* ==========================================================================
   PROJECTS DATA
   ========================================================================== */

window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.projects = [
  {
    id: "P-06",
    title: "Ledger",
    desc: "A lightweight experiment tracker for ML runs that stores everything in plain SQLite — no server, no account, just a CLI and a local dashboard.",
    stack: ["Python", "SQLite", "FastAPI", "React"],
    links: [
      { label: "Live", url: "#" },
      { label: "Code", url: "#" }
    ]
  },
  {
    id: "P-05",
    title: "Kelpwave",
    desc: "A distributed queue built on top of Raft consensus, designed for teams who want Kafka-like semantics without operating Kafka.",
    stack: ["Go", "gRPC", "Raft"],
    links: [
      { label: "Code", url: "#" }
    ]
  },
  {
    id: "P-04",
    title: "Fieldnotes",
    desc: "The static-site engine behind this portfolio's blog — a ~400-line Markdown-to-HTML generator with zero dependencies.",
    stack: ["Node.js", "Markdown"],
    links: [
      { label: "Code", url: "#" }
    ]
  },
  {
    id: "P-03",
    title: "Wren",
    desc: "A tiny autograd engine (think micrograd, but with a focus on readable broadcasting rules) built for teaching.",
    stack: ["Python", "NumPy"],
    links: [
      { label: "Code", url: "#" },
      { label: "Docs", url: "#" }
    ]
  },
  {
    id: "P-02",
    title: "Harbor",
    desc: "A self-hosted dashboard for monitoring GPU cluster utilization in real time, with cost-per-experiment breakdowns.",
    stack: ["TypeScript", "Kubernetes", "Grafana"],
    links: [
      { label: "Live", url: "#" },
      { label: "Code", url: "#" }
    ]
  },
  {
    id: "P-01",
    title: "Pocket Compiler",
    desc: "A small compiler for a Lisp-like language that targets WebAssembly, built as a weekend project to relearn compilers.",
    stack: ["Rust", "WebAssembly"],
    links: [
      { label: "Code", url: "#" }
    ]
  }
];
