interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  highlights: string[];
}

export function ExperienceItem({ title, company, location, dateRange, highlights }: ExperienceItemProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600">
            {company} — {location}
          </p>
        </div>
        <span className="text-gray-500 whitespace-nowrap ml-4">{dateRange}</span>
      </div>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {highlights.map((highlight, index) => (
          <li key={index} className="ml-4">{highlight}</li>
        ))}
      </ul>
    </div>
  );
}
