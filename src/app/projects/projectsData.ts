export interface ProjectDocument {
  title: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  highlights: string[];
  image: string;
  additionalImages?: string[];
  tags: string[];
  type: 'personal' | 'school' | 'work';
  models?: { title: string; url: string; }[];
  documents?: { title: string; url: string; }[];
  github?: string;
  matterport?: string;
  linkedInPosts?: Array<{
    url: string;
    height: number;
  }>;
}

export const projects: Project[] = [
  {
    id: 'autonomous-robot',
    title: "Autonomous Meal Delivery Robot for Medical Facilities",
    date: "Jan 2023 – Aug 2023",
    description: "Senior Design Project",
    highlights: [
      "Developed an autonomous robot with a team of four to deliver meals to patients in a hospital setting, using ROS, Ubuntu, Nvidia Jetson Nano, LiDAR, and Ultrasonic sensors.",
      "Led the development of the robot's autonomous navigation and path planning system, utilizing Machine Learning in ROS to process LiDAR data and make real-time decisions.",
      "Designed and implemented a custom algorithm for the robot's path planning, taking into account factors such as obstacle avoidance, patient privacy, and efficient delivery routes.",
      "Collaborated closely with team members responsible for CAD design, motor control, and user interface design.",
      "Tools Used: C++, LiDAR mapping, Nvidia Jetson Nano microcontroller, Robot Operating System (ROS)"
    ],
    image: "/projects/Engr Capstone Project/robot.png",
    additionalImages: [
      "/projects/Engr Capstone Project/cadModel.png",
      "/projects/Engr Capstone Project/systemDiagram.png",
      "/projects/Engr Capstone Project/fullCadModel.png",
      "/projects/Engr Capstone Project/lidarMap.png",
      "/projects/Engr Capstone Project/lidarDataMap.png",
      "/projects/Engr Capstone Project/driveSystem.jpg",
      "/projects/Engr Capstone Project/conveyorComponent.png",
      "/projects/Engr Capstone Project/conveyorConnection.png",
      "/projects/Engr Capstone Project/conveyorRoller.png",
    ],
    documents: [
      {
        title: "Design Showcase Poster",
        url: "/projects/Engr Capstone Project/Design Showcase Poster.pdf"
      }
    ],
    tags: ["Undergraduate Course","Engineering Capstone Project", "C++", "ROS", "Machine Learning", "LiDAR", "Robotics", "Nvidia Jetson Nano", "Linux"],
    type: "school"
  },
  {
    id: 'pde-black-scholes',
    title: "Fundamentals of Partial Differential Equations with Research into the Black-Scholes Equation",
    date: "Aug 2020 – Dec 2020",
    description: "Graduate Course Project",
    highlights: [
      "Authored a comprehensive LaTeX reference guide on solving diverse partial differential equations, detailing multiple solution methodologies and their applications.",
      "Conducted in-depth research on the Black-Scholes equation in financial mathematics, producing a detailed document encompassing its theoretical foundation, derivation, practical implementation, and limitations in real-world scenarios.",
      "Tools Used: LaTeX"
    ],
    image: "/projects/partialdiffeq/bse.png",
    tags: ["LaTeX", "Partial Differential Equations", "Mathematics", "Graduate Course"],
    type: "school",
    github: "https://github.com/brennanreamer/FundPartialDiffEQ",
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
    date: "2020 - 2021", //Need to find this date
    description: "",
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
    date: "Sep 2018 – May 2019",
    description: "",
    highlights: [
      "Programmed a Raspberry Pi using Python to detect lead in running water as small as 15 parts-per-million",
      "Interfaced a Screen-Printed Electrode, a Gas-Sensor Development Module, and an LCD display using I2C serial connections",
      "Conducted as a year-long project in a team of 2 with 3 presentations to a panel of 8 professional engineers",
      "Tools Used: Python, Linux, Raspberry Pi, LMP91000EVM Development Board, LCD Display, Screen-Printed Electrode"
    ],
    image: "/projects/leadDetectionDiagram.png",
    tags: ["High School Course", "Engineering Capstone Project", "Python", "Raspberry Pi", "Circuit Design"],
    type: "school"
  },
  {
    id: 'barnes-controller-cover',
    title: "Controller Backing for Barnes Group Hot Runner System",
    date: "Jan 2022 – Jun 2022",
    description: "",
    highlights: [
      "Designed a controller backing for a Barnes Group Hot Runner System",
      "Tools Used: Solidworks, 3D printing, CNC Machining"
    ],
    image: "/projects/Barnes_ControllerCover/cadModel.png",
    additionalImages: [
      "/projects/Barnes_ControllerCover/cad_exploded.png",
      "/projects/Barnes_ControllerCover/final_unassembled.png",
      "/projects/Barnes_ControllerCover/final_front.png",
      "/projects/Barnes_ControllerCover/final_back.png"
    ],
    tags: ["Barnes Group Co-op","Solidworks", "3D Printing", "Mechanical Design", "CNC Machining"],
    type: "work",
    documents: [
      {
        title: "Engineering Drawing",
        url: "/projects/Barnes_ControllerCover/CoverDrawing.pdf"
      }
    ]
  },
  {
    id: 'barnes-controller-assembly',
    title: "Assembled and wired a Hot Runner System",
    date: "Jan 2022 – Jun 2022",
    description: "",
    highlights: [
      "Assembled and wired a Hot Runner Controller from scratch, enabling precise temperature control for multiple zones in an injection molding system.",
      "Performed detailed wiring and integration of components to ensure reliable connections within the Hot Runner System."
    ],
    image: "/projects/Barnes_ControllerAssbly/assembled_front.png",
    additionalImages: [
      "/projects/Barnes_ControllerAssbly/unassembled_side.png",
      "/projects/Barnes_ControllerAssbly/unassembled_wired.png"
    ],
    tags: ["Barnes Group Co-op", "Reverse Engineering"],
    type: "work"
  },
  {
    id: 'barnes-manifold-testing',
    title: "Manifold Thermocouple Testing",
    date: "Jan 2022 – Jun 2022",
    description: "",
    highlights: [
      "Conducted comprehensive testing on manifold systems to evaluate performance differences between Type-J and Type-K thermocouples in Hot Runner controllers.",
      "Investigated the impact of thermocouple extension cables on temperature control variability, enhancing understanding of system precision.",
      "Implemented a dual data collection strategy using both Hot Runner controller and National Instruments DAQ Data Logger unit to ensure consistency and accuracy of results.",
      "Utilized multiple thermocouple mounting points to gather diverse data sets, improving the robustness of the analysis.",
      "Leveraged Excel to transform raw data into insightful graphs and tables, presenting complex findings in a clear, accessible format.",
      "Delivered a compelling PowerPoint presentation to corporate leadership, effectively communicating test results and their implications for future system designs.",
      "Tools Used: Excel, Powerpoint, NI DAQ"
    ],
    image: "/projects/Barnes_manifoldTesting/sixZoneManifold.jpg",
    additionalImages: [
      "/projects/Barnes_manifoldTesting/testDiagram.png",
      "/projects/Barnes_manifoldTesting/nidaq.jpg",
    ],
    tags: ["Barnes Group Co-op", "Thermocouple Testing", "NI DAQ", "Data Acquisition", "Excel", "Presentation"],
    type: "work"
  },
  {
    id: 'barnes-motor-powering',
    title: "Energy Harvesting System for Injection Molding Machines",
    date: "Jan 2022 – Jun 2022",
    description: "",
    highlights: [
      "Innovated a novel energy harvesting system to generate electricity from mold movements in injection molding machines, aiming to power small electronics.",
      "Designed and implemented a custom testing apparatus, adapting a pneumatic actuator setup to simulate mold movements and validate the concept.",
      "Engineered critical components for the test setup, including:\n- A cylindrical spacer to modify stroke length from 18mm to 8mm\n- A custom bracket for secure motor mounting on the manifold\n- A specialized connecting pin to interface the motor with the actuator",
      "Achieved a power output of 0.35W (35V at 10mA) over 10 actuations, demonstrating the viability of the energy harvesting concept.",
      "Utilized both multimeter and oscilloscope for precise voltage measurements, ensuring accuracy in data collection and analysis.",
      "Leveraged mechanical design skills to create a back-powered motor system, showcasing innovative thinking in sustainable energy solutions for industrial applications.",
      "Tools Used: Solidworks, Multimeter, Oscilloscope"
    ],
    image: "/projects/Barnes_energyHarvesting/testSetup.png",
    additionalImages: [
      "/projects/Barnes_energyHarvesting/cad_testSetup.png",
      "/projects/Barnes_energyHarvesting/circuitSetup.png",
    ],
    models: [
      {
        title: "Bracket",
        url: "/projects/Barnes_energyHarvesting/models/bracket.glb",
      },
      {
        title: "Manifold",
        url: "/projects/Barnes_energyHarvesting/models/Manifold.glb",
      },
      {
        title: "Connector Pin",
        url: "/projects/Barnes_energyHarvesting/models/Connector Pin.glb",
      },
      {
        title: "Spacer",
        url: "/projects/Barnes_energyHarvesting/models/Spacer.glb",
      }
    ],
    tags: ["Barnes Group Co-op", "Energy Harvesting", "Solidworks", "Mechanical Design", "Circuit Design"],
    type: "work"
  },
  {
    id: 'pokemon-game',
    title: "Pokemon Game",
    date: "Jan 2023 – Aug 2023", //Need to find this date
    description: "",
    highlights: [
      "Developed a text-based Pokémon-style game using C++ Object-Oriented Programming principles, incorporating classes, objects, and inheritance.",
      "Created a robust class hierarchy with base classes for Trainer, Pokémon, and Attack, allowing for modular and reusable code.",
      "Implemented unique Pokémon types (e.g., Charmander, Squirtle, Bulbasaur) that inherit attributes and methods from the Pokémon base class, enhancing gameplay diversity.",
      "Designed a dynamic attack system where each Pokémon has unique attacks inherited from the Attack parent class, stored in an array for efficient management.",
      "Enabled various gameplay mechanics, including:\n- Battling wild Pokémon to level up and capture new ones\n- Competing against trainers to earn in-game currency and experience\n- Purchasing Poké Balls and healing items from the shop\n- Monitoring Pokémon experience and health levels for strategic gameplay" 
    ],
    image: "/projects/pokemonGame/code_1.png",
    additionalImages: [
      "/projects/pokemonGame/code_2.png",
      "/projects/pokemonGame/output_1.png",
      "/projects/pokemonGame/output_2.png"
    ],
    tags: ["Undergraduate Course", "C++", "Object-Oriented Programming", "Text-Based Game"],
    type: "school",
    github: "https://github.com/brennanreamer/OOPFinalProject"
  },
  {
    id: 'space-invaders-game',
    title: "Space Invaders Game",
    date: "Jan 2023 – Aug 2023", //Need to find this date
    description: "",
    highlights: [
      "Collaborated with a team of three to program a Space Invaders-style game using C on an Altera DE0-CV board, integrating pointers, structs, abstraction, and animation.",
      "Developed an animated VGA interface controlled by four pushbutton switches, enhancing user interaction and gameplay experience.",
      "Defined enemy behavior using structs within an array (foes[]), allowing for efficient management of enemy attributes and actions.",
      "Implemented dynamic movement for enemies by adjusting their x1 and x2 coordinates based on an increment variable (inc_x), starting with ±2 on level 1.",
      "Utilized the rand() function to randomly select alive enemies to fire bullets towards the player, adding unpredictability to gameplay.",
      "Gained hands-on experience in embedded systems programming and real-time game development, enhancing skills in teamwork and project management." 
    ],
    image: "/projects/spaceInvadersGame/gameplay.png",
    additionalImages: [
      "/projects/spaceInvadersGame/flowchart.png",
      "/projects/spaceInvadersGame/algorithm.png",
      "/projects/spaceInvadersGame/loop.png"
    ],
    tags: ["Undergraduate Course", "C", "Pointers", "Structs","Abstraction", "Animation"],
    type: "school",
    github: "https://github.com/brennanreamer/SpaceInvadersGame"
  },
  {
    id: 'portfolio-website',
    title: "Portfolio Website",
    date: "Nov 2024 – Dec 2024",
    description: "",
    highlights: [
      "Developed a responsive and user-friendly portfolio website using React and Typescript, showcasing a collection of projects, skills, and experiences.",
      "Utilized TailwindCSS for efficient styling and responsive design, ensuring a visually appealing and mobile-friendly user experience.",
      "Implemented dynamic routing using React Router, enabling navigation between different sections of the website.",
      "Deployed the website using Vercel, enabling easy sharing and access to the portfolio online.",
      "Gained hands-on experience in web development and frontend development, honing skills in React, Typescript, and TailwindCSS.",
      "Integrated Firebase cloud storage to optimize data handling and provide a robust, scalable backend infrastructure",
      "Tools Used: React, Typescript, TailwindCSS, React Router, Vercel, Firebase"
    ],
    image: "/projects/PortfolioWebsite/home.png",
    tags: ["Personal Project", "React", "Typescript", "TailwindCSS"],
    type: "personal",
    github: "https://github.com/brennanreamer/Portfolio"
  },
  {
    id: 'tulip-experience-center',
    title: "Tulip Experience Center Virtual Tour",
    date: "2023 – Present",
    description: "",
    highlights: [
      "Led the development and maintenance of Tulip's Experience Center, showcasing the company's manufacturing software solutions in a hands-on environment.",
      "Created and maintained an interactive virtual tour experience, enabling global access to Tulip's manufacturing solutions and demonstrations.",
      "Designed and implemented various manufacturing demonstrations that highlight Tulip's capabilities in real-world scenarios.",
      "Regularly conduct live and virtual tours for prospects, customers, and partners, effectively communicating Tulip's value proposition.",
      "Continuously update and optimize the Experience Center to reflect new product features and manufacturing best practices."
    ],
    image: "/projects/tulip-experience-center/virtual-tour-screenshot.png",
    tags: ["Tulip Interfaces", "Tulip Experience Center", "Manufacturing", "Virtual Tour"],
    type: "work",
    matterport: "https://my.matterport.com/show/?m=mpkLjuDWrMz"
  },
  {
    id: 'ftoptix-bioreactor-hmi',
    title: "Rockwell Automation FT Optix Bioreactor HMI Demo",
    date: "Sep 2024",
    description: "",
    highlights: [
      "Developed an HMI (Human-Machine Interface) application for to guide an operator through the setup and operation of a Bioreactor, integrating the Tulip platform directly into a Rockwell Automation FTOptix application running on an Allen-Bradley HMI.",
      "This demostrated the integration of Tulip apps directly on the HMI, enabling real-time data visualization and control of a machine, as well as the ability to integrate third-party software using Tulip's simple Connector functionality.",
      "The collaboration was debuted at Hannover Messe 2024, attended by 130,000 people.",
      "The manual for the Bioreactor was embedded within the Tulip application alongside an AI Chatbot, enabling real-time assistance to operators.",
      "Tools Used: Tulip, Rockwell Automation's FactoryTalk Optix, C#"
    ],
    image: "/projects/optixHMI/hmi.png",
    linkedInPosts: [
      {
        url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7188602524948406272",
        height: 789
      },
    ],
    tags: ["Tulip Interfaces", "FT Optix", "Rockwell Automation", "HMI Development", "Allen-Bradley HMI", "Manufacturing"],
    type: "work"
  },
  {
    id: 'imts-2024',
    title: "IMTS 2024",
    date: "Sep 2024",
    description: "",
    highlights: [
      "Developed a Tulip Pop-up Factory, where event-goers could step into the shoes of a manufacturing engineer on the shop floor performing an assembly process.",
      "The Tulip Pop-up Factory showcased Banner Pick-to-Light sensors, Computer Vision for defect detection, and automatic language change using RFID tags.",
      "Setup and provided Tech Support for the Tulip booth, ensuring a smooth experience for event-goers.",
      "Developed a custom PCBA Gizmo Clock for use as part of the Pop-up Factory at international events.",
      "Gave demos to customers during IMTS 2024, attended by 90,000 people."
    ],
    image: "/projects/Events/IMTS_2024/front.jpg",
    additionalImages: [
      "/projects/Events//tradeshow_benches.png",
    ],
    tags: ["Tulip Interfaces", "IMTS 2024", "Event Showcase", "Manufacturing"],
    type: "work"
  },
  {
    id: 'oc-2024',
    title: "Operations Calling 2024",
    date: "Oct 2024",
    description: "",
    highlights: [
      "Revamped our Tulip Experience Center to feature new hardware and software integrations, such as the ZeroKey Quantum RTLS, Cognex Cameras, and Kolver Torque Driver.",
      "Developed a UNS (Unified Namespace) using Litmus, HiveMQ, and HighByte to enable real-time human-readable data from all devices and machines within our Experience Center.",
      "New Eperience Center demos included a fully traceable eDHR-compatible assembly process featuring bolt sequencing, a kanban-based inventory tracking system, and an AI-assisted quality control process.",
      "Developed a Bioreactor/Lab Process demo following the Large-Cell manufacturing of Insulin.", //Review this
      "Gave demos to customers during Operations Calling event, attended by over 600 people.",
      "Assisted Partner demo setups prior to the event, including ZeroKey, HiveMQ, and Mitsubishi Electric.",
      "Integrated a DMG Mori AMR Robot with Tulip over HTTP and MQTT."
    ],
    image: "/projects/Events/OpsCalling_2024/tec_action.jpg",
    additionalImages: [
      "/projects/Events/OpsCalling_2024/tec_action_2.jpg",
      "/projects/Events/OpsCalling_2024/puf_setup.png",
      "/projects/Events/OpsCalling_2024/puf_action.jpg",
      "/projects/Events/OpsCalling_2024/dmgmori_amr.jpg"
    ],
    linkedInPosts: [
      {
        url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7275138627435692032",
        height: 504
      },
      {
        url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7269724998355890179",
        height: 609
      },
      {
        url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256710280296960001",
        height: 646
      },
      {
        url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7255220508047163392",
        height: 642
      },
      {
        url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7250213334145273856",
        height: 642
      },
    ],
    tags: ["Tulip Interfaces", "Ops Calling 2024", "Event Showcase", "Manufacturing"],
    type: "work"
  }

];
