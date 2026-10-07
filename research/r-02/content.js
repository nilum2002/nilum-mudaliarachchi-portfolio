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
    { name: "Yasantha Niroshana", url: "https://yasantha.me/", aff: [2] },
    { name: "Odil Janandith", url: "https://www.linkedin.com/in/odil-janandith-940a63166/?isSelfProfile=false", aff: [1] },
    { name: "Sulochana Sooriyaarchchi", url: "https://uom.lk/staff/Sooriyaraachchi.SJ", aff: [1] }
  ],

  showVenue: false,
  showAbstract: true,
  showTags: true,

  affiliations: ["University of Moratuwa"],

  // Buttons under the authors. Empty `url` hides the button.
  buttons: [
    { label: "Paper", url: "", icon: "paper" },
    { label: "Video", url: "https://www.youtube.com/watch?v=41ILoJbbnBY", icon: "video" },
    { label: "Code", url: "https://github.com/nilum2002/proactive-social-nav", icon: "github" }
  ],

  teaser:
    "Real-time learned 2D LiDAR person detection and tracking on a Raspberry Pi 4 robot, " +
    "made possible by streaming scans over gRPC to a networked GPU server.",

  // Any YouTube link (watch / youtu.be / embed), a Vimeo player URL, or a local video path.
  video: "https://www.youtube.com/watch?v=41ILoJbbnBY",
  teaserImage: "",

  contributions: [
    {
      title: "Distributed perception pipeline",
      text:
        "We split the robot system originally running entirely on embedded dedicated GPU to " +
        "a Raspberry Pi 4 handles onboard perception while learned detection and tracking run on a networked GPU server."
    },
    {
      title: "Transport protocol comparison",
      text:
        "We compare gRPC, DDS and raw UDP for streaming LiDAR scans to the server. Only gRPC meets the 100 ms scan-period deadline, " +
        "with 47 ms end-to-end latency when static and 53 ms when moving (standard deviation below 22 ms)."
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
    // Paper-style tables. `groups` spans header cells over columns (blank label = no
    // rule); `textColumns` = how many leading columns are labels; `gapAfter` = row
    // indices followed by a small gap. Use "" for a repeated label you want blank.
    tables: [
      {
        label: "",
        caption: "Tracking accuracy (MOTA) and precision (MOTP) for each sequence and tracker.",
        textColumns: 2,
        groups: [{ span: 2 }, { label: "MOTA", span: 2 }, { label: "MOTP [m]", span: 2 }],
        columns: ["Sequence", "Tracker", "0.3", "0.5", "0.3", "0.5"],
        rows: [
          ["FROG test", "KF", "0.402", "0.417", "0.067", "0.072"],
          ["", "Norfair", "0.404", "0.414", "0.034", "0.037"],
          ["Ours, static", "KF", "0.461", "0.485", "0.066", "0.072"],
          ["", "Norfair", "0.491", "0.518", "0.065", "0.072"],
          ["Ours, moving", "KF", "0.323", "0.361", "0.098", "0.108"],
          ["", "Norfair", "0.324", "0.365", "0.088", "0.100"]
        ],
        gapAfter: [1, 3]
      },
      {
        label: "Table III",
        caption: "End-to-end and tracking latency in ms (mean ± standard deviation) for each transport, motion state, and execution strategy.",
        textColumns: 2,
        groups: [{ span: 2 }, { label: "End-to-end latency (ms)", span: 2 }, { label: "Tracking latency (ms)", span: 2 }],
        columns: ["Transport", "Execution", "static", "moving", "static", "moving"],
        rows: [
          ["gRPC", "SEQ", "51.0 ± 17.7", "48.1 ± 24.8", "48.9 ± 17.7", "45.9 ± 24.9"],
          ["gRPC", "PIPE", "47.2 ± 19.0", "53.2 ± 21.1", "46.0 ± 19.0", "51.3 ± 21.1"],
          ["UDP", "SEQ", "80.7 ± 199.5", "89.6 ± 223.9", "73.4 ± 187.9", "84.3 ± 218.7"],
          ["UDP", "PIPE", "83.7 ± 224.0", "166.5 ± 325.5", "78.7 ± 216.1", "148.2 ± 300.9"],
          ["DDS", "SEQ", "151.8 ± 322.4", "166.6 ± 305.6", "144.3 ± 313.2", "158.6 ± 300.9"],
          ["DDS", "PIPE", "138.5 ± 319.5", "161.4 ± 297.0", "131.9 ± 313.8", "154.2 ± 294.7"]
        ]
      },
      {
        label: "Table IV",
        caption: "p95 end-to-end and tracking latency in ms for each transport, motion state, and execution strategy.",
        textColumns: 2,
        groups: [{ span: 2 }, { label: "End-to-end p95 (ms)", span: 2 }, { label: "Tracking p95 (ms)", span: 2 }],
        columns: ["Transport", "Execution", "static", "moving", "static", "moving"],
        rows: [
          ["gRPC", "SEQ", "49.66", "49.70", "47.36", "48.37"],
          ["gRPC", "PIPE", "45.44", "51.77", "44.14", "49.69"],
          ["UDP", "SEQ", "375.25", "360.70", "325.94", "314.21"],
          ["UDP", "PIPE", "233.01", "1056.23", "223.91", "1032.66"],
          ["WiFi", "SEQ", "1092.90", "999.78", "1065.27", "991.55"],
          ["WiFi", "PIPE", "1074.49", "972.43", "1066.21", "962.33"]
        ]
      }
    ],

    // Result figures: { src: "assets/latency.png", caption: "..." }
    figures: []
  },

  bibtex:
    "@misc{mudaliarachchi2026lidar,\n" +
    "  title  = {A Real-Time 2D LiDAR-Based Person Detection and Tracking Pipeline for Resource-Constrained Autonomous Mobile Robots in Indoor Environments},\n" +
    "  author = {Mudaliarachchi, Nilum},\n" +
    "  year   = {2026},\n" +
    "  note   = {University of Moratuwa}\n" +
    "}",

  acknowledgements: ""

};
