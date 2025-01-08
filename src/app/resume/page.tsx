import { ResumeSection } from '@/components/resume/ResumeSection';
import { ExperienceItem } from '@/components/resume/ExperienceItem';
import { ProjectItem } from '@/components/resume/ProjectItem';

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Brennan Reamer</h1>
      
      <ResumeSection title="Education">
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Bachelor of Science in Electromechanical Engineering</h3>
              <p className="text-gray-600">Wentworth Institute of Technology — Boston, MA</p>
            </div>
            <span className="text-gray-500">Aug 2019 – Aug 2023</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li>GPA: 3.9/4.0</li>
            <li>Minors: Applied Mathematics, Computer Science</li>
            <li>Honors: Magna Cum Laude, Dean's list recipient every semester</li>
            <li>Extracurriculars: Wentworth Engineering Honors Society Member, Wentworth Men's Soccer Team player</li>
          </ul>
        </div>
      </ResumeSection>

      <ResumeSection title="Experience">
        <ExperienceItem
          title="Tulip Experience Center Program Manager"
          company="Tulip Interfaces"
          location="Somerville, MA"
          dateRange="Nov 2024 – Present"
          highlights={[
            "Developed and executed strategic roadmap for Tulip's Experience Center, aligning program objectives with company's growth targets and market demands",
            "Managed and mentored a team of two co-op engineers, providing technical guidance, career development, and performance evaluations",
            "Led workshops and training sessions, providing guidance to prospective partners wanting their own Experience Center program",
            "Trained and mentored Tulip's sales team in how to successfully give a demonstration of the Tulip platform to customers",
            "Designed and built new travel kits using Fusion 360 and 80/20 for Sales Engineers to bring for demos at prospective client sites"
          ]}
        />

        <ExperienceItem
          title="Tulip Experience Center Lead"
          company="Tulip Interfaces"
          location="Somerville, MA"
          dateRange="Jun 2024 – Nov 2024"
          highlights={[
            "Led and scaled Tulip's Experience Center program, creating immersive demonstrations of manufacturing technology for Fortune 500 clients",
            "Spearheaded Tulip's presence at major manufacturing events including IMTS, Operations Calling, and Hannover Messe, delivering live demonstrations to 500+ attendees",
            "Designed and implemented 15+ interactive manufacturing applications using the Tulip platform, showcasing real-time data collection, quality control, process optimization, and integration with external APIs",
            "Established and maintained strategic partnerships with several enterprise companies, providing consultation on manufacturing digitization strategies",
            "Developed a full 3D model of the Tulip Experience Center using Fusion 360 for use as a virtual TEC for prospective clients and to minimize TEC downtime when planning and executing large-scale design or layout changes"
          ]}
        />

        <ExperienceItem
          title="Tulip Experience Center Engineer"
          company="Tulip Interfaces"
          location="Somerville, MA"
          dateRange="May 2023 – Jun 2024"
          highlights={[
            "Developed and maintained complex manufacturing applications for Experience Center demonstrations and client proof-of-concepts",
            "Created comprehensive technical documentation and training materials for Tulip's platform features and integrations",
            "Collaborated with product team to identify and implement feature improvements based on client feedback",
            "Delivered live demonstrations to prospective clients, effectively communicating technical concepts to diverse audiences",
            "Developed an HMI of the Future, integrating the Tulip platform directly into a Rockwell Automation FTOptix application running on an Allen-Bradley HMI",
          ]}
        />

        <ExperienceItem
          title="Tulip Experience Center Applications Engineering Co-op"
          company="Tulip Interfaces"
          location="Somerville, MA"
          dateRange="Sep 2022 – Dec 2022"
          highlights={[
            "Built and maintained demonstrations of manufacturing processes integrating IoT devices, sensors, and industrial equipment",
            "Performed daily audits and debugging of the experience center's state-of-the-art hardware and software systems, reducing issues during client tours by 70%",
            "Implemented custom software solutions to showcase manufacturing process optimization",
            "Assisted in developing demonstration environments for client visits and virtual tours",
            "Created apps and experiences to be presented at international tradeshows and partner sites",
            "Created integrations with API and data sources such as Salesforce, Slack, PostgreSQL, and Google services",
            "Completed Hardware R&D projects with methods such as analog current measurement",
            "Created integrations between Tulip and modern industry equipment",
            "Trained and deployed an AI vision model for object detection using LandingAI's LandingLens",
            "Developed an AI Chatbot trained on Tulip documentation"
          ]}
        />

        <ExperienceItem
          title="R&D Design Engineering Co-op"
          company="Barnes Group"
          location="Peabody, MA"
          dateRange="Jan 2022 – Apr 2022"
          highlights={[
            "Led comprehensive testing of manifold systems, comparing Type-J and Type-K thermocouples in Hot Runner controllers, utilizing data acquisition systems and Excel for analysis",
            "Designed and implemented an innovative energy harvesting system for injection molding machines, achieving 0.35W power output over 10 actuations",
            "Engineered custom components including controller backing and mounting solutions using Solidworks and DFM (Design for Manufacturability) principles",
            "Assembled and wired Hot Runner Controllers from scratch, ensuring precise temperature control for multiple zones",
            "Designed new Dynamic Feed plastic flow methods in SolidWorks for patent application",
            "Developed automated UI tests using Cypress in JavaScript"
          ]}
        />
      </ResumeSection>

      <ResumeSection title="Skills">
        <div className="space-y-2 text-gray-700">
          <p><span className="font-bold">Programming Languages:</span> C++, JavaScript, Python, TypeScript, React, Cypress, SQL, R, LaTeX, Matlab</p>
          <p><span className="font-bold">Protocols:</span> Modbus, MQTT, OPC-UA, Serial, Ethernet, WiFi</p>
          <p><span className="font-bold">Technologies:</span> ROS, Linux, Git, Nvidia Jetson, Raspberry Pi, Arduino, I2C, Machine Learning, AWS</p>
          <p><span className="font-bold">Software:</span> Solidworks, Fusion 360, Node-RED, HighByte, HiveMQ, Rockwell Automation's FactoryTalk Optix, Salesforce, LandingAI, Jira, Excel, Powerpoint, Figma, National Instruments DAQ, NI Multisim, Simulink</p>
          <p><span className="font-bold">Hardware:</span> LiDAR, Sensors, Microcontrollers, 3D Printing (FDM & SLA), Soldering</p>
          <p><span className="font-bold">Machine Tools:</span> Drill Press, Lathe, Milling Machine, Band Saws, CNC Machining</p>
        </div>
      </ResumeSection>

      <div className="mt-8 text-center">
        <a
          href="/resume/resume_website.pdf"
          download
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Download PDF Resume
        </a>
      </div>
    </div>
  );
}
