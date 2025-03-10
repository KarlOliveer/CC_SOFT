import React from "react";

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface ChartProps {
  data: DataPoint[];
  height?: number;
  width?: number;
  title?: string;
  className?: string;
}

// Simple Bar Chart Component
export const BarChart: React.FC<ChartProps> = ({
  data,
  height = 200,
  width = 400,
  title,
  className = "",
}) => {
  const maxValue = Math.max(...data.map((d) => d.value)) * 1.1; // Add 10% padding

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      {title && <h3 className="text-sm font-medium mb-2">{title}</h3>}
      <div className="flex h-full items-end space-x-2">
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * 100;
          const barColor = item.color || `hsl(${index * 40}, 70%, 50%)`;

          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className="w-full rounded-t transition-all duration-500 ease-in-out"
                style={{
                  height: `${barHeight}%`,
                  backgroundColor: barColor,
                  minHeight: "4px",
                }}
              />
              <div
                className="text-xs mt-1 w-full text-center truncate"
                title={item.label}
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Simple Line Chart Component
export const LineChart: React.FC<ChartProps> = ({
  data,
  height = 200,
  width = 400,
  title,
  className = "",
}) => {
  const maxValue = Math.max(...data.map((d) => d.value)) * 1.1; // Add 10% padding
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - (d.value / maxValue) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      {title && <h3 className="text-sm font-medium mb-2">{title}</h3>}
      <div className="relative h-full w-full border-b border-l border-gray-200 dark:border-gray-700">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <polyline
            points={points}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - (item.value / maxValue) * 100;
            return (
              <circle
                key={index}
                cx={`${x}%`}
                cy={`${y}%`}
                r="3"
                fill="#3b82f6"
              />
            );
          })}
        </svg>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
          {data.map((item, index) => (
            <div
              key={index}
              className="text-center"
              style={{ width: `${100 / data.length}%` }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simple Pie Chart Component
export const PieChart: React.FC<ChartProps> = ({
  data,
  height = 200,
  width = 200,
  title,
  className = "",
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercent = 0;

  return (
    <div
      className={`flex flex-col items-center ${className}`}
      style={{ height, width }}
    >
      {title && <h3 className="text-sm font-medium mb-2">{title}</h3>}
      <div
        className="relative"
        style={{
          height: Math.min(height, width),
          width: Math.min(height, width),
        }}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          {data.map((item, index) => {
            const percent = (item.value / total) * 100;
            const startAngle = (cumulativePercent / 100) * 360;
            const endAngle = ((cumulativePercent + percent) / 100) * 360;

            // Calculate the SVG path for the pie slice
            const startX =
              50 + 50 * Math.cos((startAngle - 90) * (Math.PI / 180));
            const startY =
              50 + 50 * Math.sin((startAngle - 90) * (Math.PI / 180));
            const endX = 50 + 50 * Math.cos((endAngle - 90) * (Math.PI / 180));
            const endY = 50 + 50 * Math.sin((endAngle - 90) * (Math.PI / 180));

            const largeArcFlag = percent > 50 ? 1 : 0;

            const pathData = [
              `M 50 50`,
              `L ${startX} ${startY}`,
              `A 50 50 0 ${largeArcFlag} 1 ${endX} ${endY}`,
              `Z`,
            ].join(" ");

            cumulativePercent += percent;

            return (
              <path
                key={index}
                d={pathData}
                fill={item.color || `hsl(${index * 40}, 70%, 50%)`}
                stroke="#fff"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              className="h-3 w-3 mr-1 rounded-sm"
              style={{
                backgroundColor: item.color || `hsl(${index * 40}, 70%, 50%)`,
              }}
            />
            <span className="truncate" title={`${item.label}: ${item.value}`}>
              {item.label} ({Math.round((item.value / total) * 100)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
