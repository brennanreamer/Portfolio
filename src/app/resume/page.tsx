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
              <h3 className="text-lg font-bold text-gray-900">BS in Electromechanical Engineering</h3>
              <p className="text-gray-600">Wentworth Institute of Technology</p>
            </div>
            <span className="text-gray-500">Aug 2019 – Aug 2023</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li>GPA: 3.9/4.0</li>
            <li>Minor: Applied Math, Computer Science</li>
            <li>Honors: Magna Cum Laude, Dean's list recipient every semester</li>
            <li>Coursework: Parallel Computer Architecture, Machine Learning, Object-Oriented Programming</li>
            <li>Extracurriculars: Wentworth Engineering Honors Society Member, Wentworth Men's Soccer Team player</li>
          </ul>
        </div>
      </ResumeSection>

      <ResumeSection title="Experience">
        <ExperienceItem
          title="North America Tulip Experience Center Lead"
          company="Tulip Interfaces"
          location="Somerville, MA"
          dateRange="Aug 2023 – Present"
          highlights={[
            "Developed an HMI of the Future, integrating the Tulip platform directly into a Rockwell Automation FTOptix application",
            "Led development of several Pop-up Factories and demos to showcase the Tulip software platform at international events",
            "Regularly give tours of our Experience Center both internally for enablement and externally with potential customers",
            "Led a complete rework of our Experience Center, creating a process-driven demo replicating a real factory",
            "Mentored 2 co-ops",
            "Manufactured a custom PCBA Gizmo Clock for use as part of our Pop-up Factory at international events"
          ]}
        />

        <ExperienceItem
          title="Applications Engineering Co-op"
          company="Tulip Interfaces"
          location="Somerville, MA"
          dateRange="Sep 2022 – Aug 2023"
          highlights={[
            "Responsible for daily audit and debugging of state-of-the-art Experience Center",
            "Created apps and experiences to be presented at international tradeshows and partner sites",
            "Created integrations with API and data sources such as Salesforce, Slack, PostgreSQL, and Google services",
            "Completed Hardware R&D projects with methods such as analog current measurement",
            "Created integrations between Tulip and modern industry equipment",
            "Trained and deployed an AI vision model for object detection using LandingAI's LandingLens",
            "Developed an AI Chatbot trained on Tulip documentation"
          ]}
        />

        <ExperienceItem
          title="R&D Design Engineer Co-op"
          company="Barnes"
          location="Peabody, MA"
          dateRange="Jan 2022 – Apr 2022"
          highlights={[
            "Conducted Thermocouple testing on a Synventive Hot Runner Injection Molding System",
            "Developed an energy harvesting system for use within the injection molding process",
            "Designed new Dynamic Feed plastic flow methods in SolidWorks for patent application",
            "Collaborated in an Agile software testing environment",
            "Developed automated UI tests using Cypress in JavaScript"
          ]}
        />
      </ResumeSection>

      <ResumeSection title="Technologies">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">Languages</h3>
            <p>C++, C, JavaScript, SQL, Python, LaTeX, Matlab, Cypress, R</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Protocols</h3>
            <p>Modbus, MQTT, OPC-UA, Serial</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Technologies</h3>
            <p>Tulip, AWS, Node-RED, HighByte, HiveMQ, Rockwell Automation's FactoryTalk Optix, Salesforce, LandingAI, Jira</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Computer-Aided Design</h3>
            <p>Autodesk Fusion 360, Solidworks, NI Multisim, Simulink</p>
          </div>
        </div>
      </ResumeSection>

      <div className="mt-8 text-center">
        <a
          href="/BrennanReamer_Resume.pdf"
          download
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Download PDF Resume
        </a>
      </div>
    </div>
  );
}
