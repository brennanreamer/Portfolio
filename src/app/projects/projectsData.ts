export interface ProjectDocument {
  title: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  dateRange?: string;
  highlights: string[];
  image?: string;
  additionalImages?: string[];
  tags: string[];
  type: 'school' | 'work' | 'personal';
  documents?: ProjectDocument[];
}

export const projects: Project[] = [
  {
    id: 'autonomous-robot',
    title: "Autonomous Meal Delivery Robot for Medical Facilities",
    subtitle: "Senior Design Project",
    dateRange: "Jan 2023 – Aug 2023",
    highlights: [
      "Developed an autonomous robot with a team of four to deliver meals to patients in a hospital setting, using ROS, Ubuntu, Nvidia Jetson Nano, LiDAR, and Ultrasonic sensors.",
      "Led the development of the robot's autonomous navigation and path planning system, utilizing Machine Learning in ROS to process LiDAR data and make real-time decisions.",
      "Designed and implemented a custom algorithm for the robot's path planning, taking into account factors such as obstacle avoidance, patient privacy, and efficient delivery routes.",
      "Collaborated closely with team members responsible for CAD design, motor control, and user interface design.",
      "Tools Used: C++, LiDAR mapping, Nvidia Jetson Nano microcontroller, Robot Operating System (ROS)"
    ],
    image: "/projects/robot.jpg",
    tags: ["C++", "ROS", "Machine Learning", "Robotics"],
    type: "school"
  },
  {
    id: 'pde-black-scholes',
    title: "Fundamentals of Partial Differential Equations with Research into the Black-Scholes Equation",
    subtitle: "Graduate Course Project",
    dateRange: "Aug 2020 – Dec 2020",
    highlights: [
      "Authored a comprehensive LaTeX reference guide on solving diverse partial differential equations, detailing multiple solution methodologies and their applications.",
      "Conducted in-depth research on the Black-Scholes equation in financial mathematics, producing a detailed document encompassing its theoretical foundation, derivation, practical implementation, and limitations in real-world scenarios.",
      "Tools Used: LaTeX"
    ],
    image: "/projects/partialdiffeq/bse.png",
    tags: ["LaTeX", "Partial Differential Equations", "Mathematics", "Graduate Course"],
    type: "school",
    documents: [
      {
        title: "Fundamentals of Partial Differential Equations",
        url: "/projects/partialdiffeq/FundPartDiffEq.pdf"
      },
      {
        title: "Research on Black-Scholes Equation",
        url: "/projects/partialdiffeq/PDE_BlackScholesEq.pdf"
      }
    ]
  },
  {
    id: '3d-printer',
    title: "3D Printer",
    highlights: [
      "Assembled a FDM Cartesian 3D Printer, wiring and programming the motherboard with Marlin (RepRap) firmware written in C/C++",
      "Interfaced the printer with a Raspberry Pi 3B+ acting as a headless server for remote printing and monitoring",
      "Tools Used: C/C++, Linux"
    ],
    image: "/projects/3D Printer/ender3V2.jpg",
    additionalImages: [
      "/projects/3D Printer/ender3V2_mb.jpg"
    ],
    tags: ["C++", "Linux", "Hardware"],
    type: "personal"
  },
  {
    id: 'lead-detector',
    title: "Lead Detection Device for Running Water",
    dateRange: "Sep 2018 – May 2019",
    highlights: [
      "Programmed a Raspberry Pi using Python to detect lead in running water as small as 15 parts-per-million",
      "Interfaced a Screen-Printed Electrode, a Gas-Sensor Development Module, and an LCD display using I2C serial connections",
      "Conducted as a year-long project in a team of 2 with 3 presentations to a panel of 8 professional engineers",
      "Tools Used: Python, Linux, Raspberry Pi"
    ],
    image: "/projects/leadDetectionDiagram.png",
    tags: ["Python", "Raspberry Pi", "Hardware"],
    type: "school"
  },
  {
    id: 'barnes-controller-cover',
    title: "Controller Backing for Barnes Group Hot Runner System",
    dateRange: "Jan 2022 – Jul 2022",
    highlights: [
      "Designed a controller backing for a Barnes Group Hot Runner System",
      "Tools Used: Solidworks, 3D printing, CNC Machining"
    ],
    image: "/projects/Barnes_ControllerCover/cadModel.png",
    tags: ["Solidworks", "3D Printing", "CNC Machining"],
    type: "work",
    documents: [
      {
        title: "Engineering Drawing",
        url: "/projects/Barnes_ControllerCover/CoverDrawing.pdf"
      }
    ]
  }
];
