import { ProjectItem } from '@/components/resume/ProjectItem';

const projects = [
  {
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
    tags: ["C++", "ROS", "Machine Learning", "Robotics"]
  },
  {
    title: "3D Printer",
    highlights: [
      "Assembled a FDM Cartesian 3D Printer, wiring and programming the motherboard with Marlin (RepRap) firmware written in C/C++",
      "Interfaced the printer with a Raspberry Pi 3B+ acting as a headless server for remote printing and monitoring",
      "Tools Used: C/C++, Linux"
    ],
    image: "/projects/3d-printer.jpg",
    tags: ["C++", "Linux", "Hardware"]
  },
  {
    title: "Lead Detection Device for Running Water",
    dateRange: "Sep 2018 – May 2019",
    highlights: [
      "Programmed a Raspberry Pi using Python to detect lead in running water as small as 15 parts-per-million",
      "Interfaced a Screen-Printed Electrode, a Gas-Sensor Development Module, and an LCD display using I2C serial connections",
      "Conducted as a year-long project in a team of 2 with 3 presentations to a panel of 8 professional engineers",
      "Tools Used: Python, Linux, Raspberry Pi"
    ],
    image: "/projects/lead-detector.jpg",
    tags: ["Python", "Raspberry Pi", "Hardware"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {project.image && (
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              {project.dateRange && (
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{project.dateRange}</p>
              )}
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
