import React, { useEffect, useState } from 'react';

interface Props {
  score: number;
}

const Score: React.FC<Props> = ({ score }) => {
  const [backgroundGradient, setBackgroundGradient] = useState<string>('');

  useEffect(() => {
    const calculateBackgroundGradient = () => {
      const percentage = (score / 10) * 100;
      const gradient = `linear-gradient(to right, #ff0000 0%, #ff0000 ${percentage}%, #ffffff ${percentage}%, #ffffff 100%)`;
      setBackgroundGradient(gradient);
    };

    calculateBackgroundGradient();
  }, [score]);

  const getScoreColor = (score: number): string => {
    if (score >= 8.5) return 'outline-green-600';
    else if (score >= 6.5) return 'outline-green-400';
    else if (score >= 4.5) return 'outline-yellow-500';
    else if (score >= 2.5) return 'outline-orange-500';
    else return 'outline-red-500';
  };

  const scoreColor = getScoreColor(score);

  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 outline ${scoreColor} text-white font-bold text-xl absolute`}
      style={{ top: '-25px' }}
    >
      {score}
    </div>
  );
};

export default Score;
