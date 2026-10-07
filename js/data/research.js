/* ==========================================================================
   RESEARCH DATA
   ========================================================================== */

window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.research = [
  {
    id: "R-01",
    title: "Pixel Language Models for Low-Resource Languages – Pixel-M4",
    venue: "University of Cascadia — Master's Thesis",
    year: "2025 Dec Ongoing",
    authors: "",
    abstract:
      "Analyzing zero-shot performance on Sinhala and Tamil. " +
      "Testing text rendering and vocabulary-free tokenizer-less configurations on South Asian scripts",
    tags: ["PIXEL-M4", "ViT"],
    links: [
      { label: "", url: "#" }
    ]
  }, 
  {
    id: "R-02",
    title: "A Real-Time 2D LiDAR-Based Person Detection and Tracking Pipeline  for Resource-Constrained Autonomous Mobile Robots in Indoor  Environments",
    venue: "University of Moratuwa — 5th Semester Project",
    year: "2026 July - Sep",
    authors: "",
    abstract:
      "Learned person detection and tracking based on 2D LiDAR running in real time is a demanding capability in mobile robots. " +
      "Currently available detectors assume an onboard GPU accelerator. " +
      "We distributed the perception and tracking pipeline to a networked GPU server and a robot client, where perception is performed on a Raspberry Pi 4 " +
      "and the learned person detection and tracking pipeline runs on a networked GPU server. " +
      "Recent related work runs entirely on an NVIDIA Jetson Xavier NX. " +
      "In contrast, porting the perception pipeline to a low-resource Raspberry Pi 4 requires a robust communication protocol between the robot and the server. " +
      "We compare gRPC, DDS, and raw UDP as transport protocols for transmitting LiDAR scans to the networked GPU server for perception. " +
      "The evaluation is performed on a Kobuki QBot 2 mobile robot with a SLAMTEC RPLiDAR C1 2D LiDAR operating at 10 Hz and a Raspberry Pi 4 as the only onboard computer. " +
      "The results show that only gRPC meets the 100 ms scan-period deadline by maintaining an end-to-end latency of 47 ms when the robot is static " +
      "and 53 ms when the robot is moving with a standard deviation below 22 ms in both cases. " +
      "We implemented the detector by replacing DROW3 fine-tuned on JRDB with the best-performing model on FROG, DR-SPAAM (T = 5). " +
      "Our implementation gives a Multi-Object Tracking Accuracy (MOTA) of 41% on the FROG test set. " +
      "We created our own dataset in a university corridor and annotated it with timestamps. " +
      "Our pipeline reaches a MOTA of 52% when the robot is stationary and 37% when it is moving, despite being deployed in a resource-constrained environment.",
    page: "research/r-02/",
    tags: ["Social Navigation", "DRSPAAM", "Kalman Filtering", "Dynamic Human Motion Prediction", "Person Tracking"],
    links: [
      { label : "Paper", url : "" }, 
      { label: "Code", url: "https://github.com/nilum2002/proactive-social-nav"}
    ]
  }
];
