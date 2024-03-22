import React from "react";

interface LoadingProps {
  title: string;
}

const Loading = ({ title }: LoadingProps) => {
  return (
    <div className="fixed inset-0 bg-light-blue flex items-center justify-center animate-fadeIn">
      <p className="text-light-yellow text-6xl font-semibold">
        Loading {title}
        <span className="dot-animation"></span>
      </p>
    </div>
  );
};

export default Loading;
