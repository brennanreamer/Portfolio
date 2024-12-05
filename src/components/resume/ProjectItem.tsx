interface ProjectItemProps {
  title: string;
  subtitle?: string;
  dateRange?: string;
  highlights: string[];
}

export function ProjectItem({ title, subtitle, dateRange, highlights }: ProjectItemProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {title}
            {subtitle && <span className="font-normal italic ml-2 text-gray-700 dark:text-gray-300">{subtitle}</span>}
          </h3>
        </div>
        {dateRange && (
          <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">{dateRange}</span>
        )}
      </div>
      <ul className="list-disc list-inside space-y-1">
        {highlights.map((highlight, index) => (
          <li key={index} className="ml-4 text-gray-700 dark:text-gray-300">{highlight}</li>
        ))}
      </ul>
    </div>
  );
}
