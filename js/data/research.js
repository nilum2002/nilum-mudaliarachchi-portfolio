/* ==========================================================================
   RESEARCH DATA
   ========================================================================== */

window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.research = [
  {
    id: "R-04",
    title: "Sparse Gradient Routing for Mixture-of-Experts Training",
    venue: "NeurIPS",
    year: "2025",
    authors: "A. Rivera, T. Nakamura, S. Okafor",
    abstract:
      "We introduce a routing scheme that reduces cross-device gradient traffic in MoE training " +
      "by 41% with no measurable loss in downstream accuracy, by exploiting expert-affinity " +
      "locality discovered during early training steps.",
    tags: ["Distributed Training", "MoE", "Systems"],
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" }
    ]
  },
  {
    id: "R-03",
    title: "Rethinking Checkpointing for Elastic GPU Clusters",
    venue: "MLSys",
    year: "2024",
    authors: "A. Rivera, J. Whitfield",
    abstract:
      "A checkpointing strategy that decouples save frequency from cluster size, enabling elastic " +
      "scale-in/scale-out without the usual restart penalty on preemptible hardware.",
    tags: ["Systems", "Fault Tolerance"],
    links: [
      { label: "Paper", url: "#" },
      { label: "Slides", url: "#" }
    ]
  },
  {
    id: "R-02",
    title: "On the Generalization Gap of Sparse Networks",
    venue: "ICML Workshop on Sparsity",
    year: "2022",
    authors: "A. Rivera, H. Delacroix",
    abstract:
      "An empirical study across 14 pruning methods showing that generalization gap correlates " +
      "more strongly with effective capacity than with raw parameter count.",
    tags: ["Sparsity", "Generalization"],
    links: [
      { label: "Paper", url: "#" }
    ]
  },
  {
    id: "R-01",
    title: "Efficient Second-Order Pruning for Convolutional Networks",
    venue: "University of Cascadia — Master's Thesis",
    year: "2021",
    authors: "A. Rivera",
    abstract:
      "Proposes a Hessian-approximation pruning method that reaches comparable sparsity to " +
      "magnitude pruning at a third of the compute cost.",
    tags: ["Pruning", "CNNs"],
    links: [
      { label: "Thesis", url: "#" }
    ]
  }
];
