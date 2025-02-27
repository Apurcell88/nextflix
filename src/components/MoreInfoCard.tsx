import React from "react";

interface MoreInfoCardProps {
  title: string;
}

const MoreInfoCard: React.FC<MoreInfoCardProps> = ({ title }) => {
  console.log("MoreInfoCard props:", { title });
  return (
    <div className="text-white">
      <h1>{title}</h1>
    </div>
  );
};

export default MoreInfoCard;
