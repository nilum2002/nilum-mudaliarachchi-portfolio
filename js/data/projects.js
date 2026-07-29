window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.projects = [
  {
    id: "P-07",
    title: "Proactive Social Navigation for 2D LiDAR Mobile Robots",
    status: "2026 Jul Ongoing",
    desc: "A proactive social navigation framework combining DBN motion prediction, Kalman Filtering, DR-SPAAM LiDAR human detection, and TEB Local Planner constraints in ROS 2 Jazzy & Gazebo Harmonic.",
    stack: ["ROS 2", "Gazebo", "Nav2", "DR-SPAAM", "TEB Local Planner", "Python", "C++"],
    links: [
      { label: "Code", url: "https://github.com/nilum2002/proactive-social-nav" }
    ]
  },
  {
    id: "P-06",
    title: "Autonomous Object Detection, Collection & Placement Robot",
    status: "2026 Mar – Jul",
    desc: "Fully autonomous Kobuki QBot2 mobile robot with SMACH state machine control, YOLOv8 Nano vision, Kinect RGB-D PCL 3D target localization, and Raspberry Pi 5 deployment.",
    stack: ["ROS 2 Jazzy", "YOLOv8 Nano", "Python", "OpenCV", "Kinect RGB-D", "Kobuki QBot2", "Gazebo", "SMACH"],
    links: [
      { label: "Code", url: "https://github.com/IntellisenseLab/final-project-botzilla" }
    ]
  },
  {
    id: "P-05",
    title: "Franka Panda Robot Arm with OpenCV Color Sorting",
    status: "2026 Mar Ongoing",
    desc: "Intelligent 7-DOF Franka Emika Panda automated pick-and-place system using OpenCV for dynamic object detection and MoveIt 2 for trajectory generation.",
    stack: ["ROS 2 Jazzy", "OpenCV", "Gazebo", "MoveIt 2", "C++"],
    links: [
      { label: "Code", url: "https://github.com/nilum2002/OpenCV-Color-Sorting-using-Franka-Panda-Arm" }
    ]
  },
  {
    id: "P-04",
    title: "LLM Fine-Tuning Hub – Parameter-Efficient Optimization",
    status: "2026 March",
    desc: "Reproducible pipelines for fine-tuning Gemma 2/3 and Llama 2 using PEFT (LoRA/QLoRA), 4-bit/8-bit quantization, and SFT running efficiently under 4GB VRAM.",
    stack: ["Python", "Hugging Face", "PEFT", "TRL", "BitsAndBytes", "Google Colab"],
    links: [
      { label: "Code", url: "https://github.com/nilum2002/Fine-Tune-LLMs-" }
    ]
  },
  {
    id: "P-03",
    title: "Low-Cost Multitasking Robot for XbotiX 2026",
    status: "2026 January",
    desc: "Physical multitasking robot built on Arduino Mega featuring dual-loop PID controllers for wall-following and high-speed line-following.",
    stack: ["Arduino Mega", "C++", "PID Control", "Embedded Electronics"],
    links: [
      { label: "Code", url: "https://github.com/nilum2002/XbotiXRuhuna-GenXis-Academy" }
    ]
  },
  {
    id: "P-02",
    title: "8-bit Nano Processor Design with VHDL",
    status: "2025 April",
    desc: "Reprogrammable 8-bit nanoprocessor in VHDL supporting MOVI, ADD, and JZR instructions, synthesized and deployed on Xilinx Basys3 FPGA board.",
    stack: ["VHDL", "Xilinx Vivado", "Basys3 FPGA"],
    links: [
      { label: "Code", url: "https://github.com/nilum2002/Nano_processor_4_bit" }
    ]
  },
  {
    id: "P-01",
    title: "Agentic AI Restaurant Feedback Analyzer",
    status: "2025 August",
    desc: "Multi-agent system using LangGraph for qualitative customer feedback analysis, sentiment classification, and automated operational report generation.",
    stack: ["LangGraph", "LangChain", "Python", "OpenAI API"],
    links: [
      { label: "Code", url: "https://github.com/nilum2002/Automated-Restaurant-Feedback-Agent-SteamNoodles" }
    ]
  }
];
