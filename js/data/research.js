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
      "Learned person detection and tracking based on 2D LiDAR running in real time is a demanding capability in mobile robots. Currently available detectors assume an onboard GPU accelerator. We distributed the system proposed in Plozza et al [1] where perception is performed on a Raspberry Pi 4 and learned person detection and tracking pipeline runs on a networked GPU server. The original work by Plozza et al [1] is implemented completely on a NVIDIA Jetson Xavier NX. In constrast, porting the perception pipeline to a low resourced Raspberry Pi 4 requires a robust comunication protocol between the robot and the server. We compare gRPC, DDS, and raw UDP as transport protocols for transmitting LiDAR pointcloud to the networked GPU server for perception. The evaluation is performed on a Kobuki QBot 2 mobile robot with a SLAMTEC RPLiDAR C1 2D LiDAR operating at 10Hz and a Raspberry Pi 4 as the only onboard computer. The results show that it is only gRPC that meets the deadline of 100 ms scan period by maintaining an end to end latency of 47 ms when the robot is static and 53 ms when the robot is moving with a standard deviation below 20 ms in both cases. We implemented the detector by replacing DROW3 finetuned on JRDB with the current best model for FROG which is DR-SPAAM (T = 5) by F. Amodeo et al. [2]. Our implementation gives a Multi-ObjectTracking-Accuracy(MOTA) of 41% on the FROG test set. We created our own dataset in a university corridor and annotated it with timestamp. Our pipeline reaches MOTA 52% when the robot is stationary and 37% when it is moving despite being deployed on resource constrained environment." , 
      
    page: "research/r-02/",
    tags: ["Social Navigation", "DRSPAAM", "Kalman Filtering", "Dynamic Human Motion Prediction", "Person Tracking"],
    links: [
      { label : "Paper", url : "" }, 
      { label: "Code", url: "https://github.com/nilum2002/proactive-social-nav"}
    ]
  }
];
