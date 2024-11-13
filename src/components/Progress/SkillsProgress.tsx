import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import PageHeader from "../common/PageHeader";

// Define the prop types for AnimatedProgressBar
interface AnimatedProgressBarProps {
  label: string;
  percentage: number;
  color: string;
}

const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({
  label,
  percentage,
  color,
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => setWidth(percentage), 500);
  }, [percentage]);
  return (
    <>
      <Container >
        <div className="grid grid-cols-2 gap-8 ">
          <div>
          <p className="w-28 text-sm font-semibold grid-span-1 mt-4 mb-2">{label}</p>
          <div className="grid-span-4">
            <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
              <div
                style={{ width: `${width}%`, background: color }}
                className="h-full transition-all duration-1000 ease-in-out flex justify-end"
              >
                <span className="w-12 text-sm text-white flex items-center  font-semibold">
                  {percentage}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="w-28 text-sm font-semibold grid-span-1 mt-4 mb-2">{label}</p>
          <div className="grid-span-4">
            <div className="w-full bg-gray-200 rounded h-6 overflow-hidden">
              <div
                style={{ width: `${width}%`, background: color }}
                className="h-full transition-all duration-1000 ease-in-out flex justify-end"
              >
                <span className="w-12 text-sm text-black flex items-center  font-semibold">
                  {percentage}%
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </>
  );
};

const SkillsProgress: React.FC = () => {
  const skills = [
    {
      label: "Designing",
      percentage: 95,
      color: "linear-gradient(to right, #ff512f, #dd2476)",
    },
    {
      label: "Management",
      percentage: 85,
      color: "linear-gradient(to right, #ff512f, #dd2476)",
    },
    {
      label: "Marketing",
      percentage: 75,
      color: "linear-gradient(to right, #ff512f, #dd2476)",
    },
    {
      label: "Development",
      percentage: 80,
      color: "linear-gradient(to right, #ff512f, #dd2476)",
    },
  ];

  return (
    <>
      <PageHeader
        title="Progress Bar"
        path="/progress-bar"
        breadcrumbPath="Progress Bar"
      />
      <div className="py-20 md:py-36 bg-gray-100">
        {skills.map((skill, index) => (
          <AnimatedProgressBar
            key={index}
            label={skill.label}
            percentage={skill.percentage}
            color={skill.color}
          />
        ))}
      </div>
    </>
  );
};

export default SkillsProgress;
