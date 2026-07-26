/* ==========================================================================
   PROFILE DATA
   Edit this file to personalize the site. Nothing here touches markup.
   ========================================================================== */

window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.profile = {
  name: "Nilum Mudaliarachchi",
  initials: "NS",
  role: "Robotics | Embeded Systems | Machine Learning | Computer Vision",
  kicker: "",
  heroTitle: "Hi, I'm Nilum.",
  heroLede:
    "I'm a 3rd year Computer Scinece and Engineering undergraduate in University of Moratuwa, Sri Lanka. " +
    "I'm truly passionate about Robotics, Computer vision, Embeded Syatems and Machine Learning." +
    "Looking for opportunities to learn and grow in these fields. I love to explore new technologies and apply them to solve real-world problems.",
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
    "I'm currently an undergraduate in Computer Science and Engineering in University of Moratuwa, Sri Lanka. " +
    "My specialization is Integrated Computer Engineering. I have a strong passion in Robotics, Computer Vision and Machine learing on Edge.",
    "In field of Robotics, my interestes are in to Robot Navigation, Plaining and Perception. " +
    "Specially in Social Navigation where I see a huge gap in current methodologies. " +
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
