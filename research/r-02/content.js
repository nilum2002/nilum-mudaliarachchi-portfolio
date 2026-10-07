/* ==========================================================================
   RESEARCH PAGE CONTENT — R-02
   Standalone landing page served at /research/r-02/. The title (and the
   venue, tags and abstract when switched on) come from js/data/research.js;
   this file adds everything else.
   Anything commented out or left empty ("" or []) is hidden on the page —
   uncomment a block to bring it back.
   Image/video paths are relative to this folder (e.g. "assets/pipeline.png").
   ========================================================================== */

window.PortfolioData = window.PortfolioData || {};
window.PortfolioData.researchDetails = window.PortfolioData.researchDetails || {};

window.PortfolioData.researchDetails["R-02"] = {
  // Add a `url` to link an author's name. `aff` is the 1-based index into
  // `affiliations` (only shown when there is more than one affiliation).
  authors: [
    { name: "Nilum Mudaliarachchi", url: "../../#about", aff: [1] },
    { name: "Author 1", url: "", aff: [1] },
    { name: "Author 2", url: "", aff: [1] },
    { name: "Author 3", url: "", aff: [1] }
  ],

  /* ---------- Hidden for now — uncomment to show ----------

  // Show venue + year above the title, the abstract, and the tag chips
  // (all taken from js/data/research.js).
  showVenue: true,
  showAbstract: true,
  showTags: true,

  affiliations: ["University of Moratuwa"],

  // Buttons under the authors. Empty `url` hides the button.
  buttons: [
    { label: "Paper", url: "", icon: "paper" },
    { label: "Video", url: "", icon: "video" },
    { label: "Code", url: "https://github.com/nilum2002/proactive-social-nav", icon: "github" }
  ],

  teaser:
    "Real-time learned 2D LiDAR person detection and tracking on a Raspberry Pi 4 robot, " +
    "made possible by streaming scans over gRPC to a networked GPU server.",

  // YouTube embed URL (https://www.youtube.com/embed/<id>) or a local video/image path.
  video: "",
  teaserImage: "",

  contributions: [
    {
      title: "Distributed perception pipeline",
      text:
        "We split the system of Plozza et al. [1], originally running entirely on an NVIDIA Jetson Xavier NX: " +
        "a Raspberry Pi 4 handles onboard perception while learned detection and tracking run on a networked GPU server."
    },
    {
      title: "Transport protocol comparison",
      text:
        "We compare gRPC, DDS and raw UDP for streaming LiDAR scans to the server. Only gRPC meets the 100 ms scan-period deadline, " +
        "with 47 ms end-to-end latency when static and 53 ms when moving (standard deviation below 20 ms)."
    },
    {
      title: "Stronger detector",
      text:
        "We replace DROW3 (fine-tuned on JRDB) with DR-SPAAM (T = 5) by F. Amodeo et al. [2], the current best model on FROG, " +
        "reaching 41% MOTA on the FROG test set."
    },
    {
      title: "Real robot evaluation & dataset",
      text:
        "We deploy on a Kobuki QBot 2 with a SLAMTEC RPLiDAR C1 (10 Hz) and record our own timestamp-annotated corridor dataset, " +
        "reaching 52% MOTA with the robot stationary and 37% while moving."
    }
  ],

  results: {
    text:
      "End-to-end latency is measured from scan capture on the robot to tracked output from the server. " +
      "Tracking accuracy is reported as Multi-Object Tracking Accuracy (MOTA).",
    highlights: [
      { value: "47 ms", label: "gRPC latency · static" },
      { value: "53 ms", label: "gRPC latency · moving" },
      { value: "41%", label: "MOTA · FROG test set" },
      { value: "52% / 37%", label: "MOTA · own dataset (static / moving)" }
    ],
    // Result figures: { src: "assets/latency.png", caption: "..." }
    figures: []
  },

  references: [
    "[1] Plozza et al. — original 2D LiDAR person detection and tracking system on Jetson Xavier NX.",
    "[2] F. Amodeo et al. — DR-SPAAM detector for FROG."
  ],

  bibtex:
    "@misc{mudaliarachchi2026lidar,\n" +
    "  title  = {A Real-Time 2D LiDAR-Based Person Detection and Tracking Pipeline for Resource-Constrained Autonomous Mobile Robots in Indoor Environments},\n" +
    "  author = {Mudaliarachchi, Nilum},\n" +
    "  year   = {2026},\n" +
    "  note   = {University of Moratuwa}\n" +
    "}",

  acknowledgements: ""

  ---------- end of hidden block ---------- */
};
