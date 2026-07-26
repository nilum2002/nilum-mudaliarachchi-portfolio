/* ==========================================================================
   PROFILE DATA
   Edit this file to personalize the site. Nothing here touches markup.
   ========================================================================== */

window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.profile = {
  name: "Nilum Mudaliarachchi",
  initials: "NS",
  role: "Robotics | Embeded Systems | Machine Learning | Computer Vision",
  kicker: "Field notes from the lab",
  heroTitle: "I build systems, then write down what I learn.",
  heroLede:
    "I'm a researcher and engineer working at the intersection of machine learning and " +
    "distributed systems. This site is my running logbook — papers, projects, and the " +
    "occasional write-up on how something actually got built.",
  email: "nilumm.23@cse.mrt.ac.lk",
  socials: [
    { name: "GitHub", url: "https://github.com/nilum2002", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
    { name: "Medium", url: "https://medium.com/", icon: "medium" },
    { name: "Email", url: "mailto:nilumm.23@cse.mrt.ac.lk", icon: "mail" }
  ],
  stats: [
    // { num: "8", label: "Papers" },
    // { num: "23", label: "Projects" },
    // { num: "6yr", label: "In the field" }
  ],
  bio: [
    "I'm currently a research engineer focused on efficient training methods for large models, " +
    "with a side obsession in making distributed systems easier to reason about.",
    "Before this I spent three years shipping backend infrastructure at scale, which is where " +
    "the 'full-stack' half of my title comes from — I like taking an idea from a whiteboard " +
    "sketch to a running service and, sometimes, all the way to a paper.",
    "Outside of work I mentor early-career researchers, contribute to a couple of open-source " +
    "ML tooling projects, and am slowly working through every classic algorithms textbook I " +
    "never finished in school."
  ],
  signoff: "— always happy to talk shop, reach out any time.",
  skills: {
    "Languages": ["Python", "TypeScript", "Go", "C++", "Rust"],
    "ML / Research": ["PyTorch", "JAX", "Ray", "Weights & Biases", "CUDA"],
    "Systems": ["Kubernetes", "gRPC", "PostgreSQL", "Redis", "Terraform"],
    "Web": ["React", "Node.js", "GraphQL", "Docker"]
  },
  experience: [
    {
      period: "2023 — Now",
      role: "Senior Research Engineer",
      org: "Northlight AI",
      desc: "Leading efficiency work on training infrastructure for multi-billion parameter models; cut cluster cost per run by 34%."
    },
    {
      period: "2021 — 2023",
      role: "Backend Engineer",
      org: "Fieldstone Labs",
      desc: "Owned the event-processing pipeline handling 40M+ events/day; migrated the fleet to Kubernetes."
    },
    {
      period: "2019 — 2021",
      role: "Graduate Researcher",
      org: "University of Cascadia",
      desc: "Studied optimization methods for sparse neural networks under Prof. H. Delacroix."
    }
  ]
};
