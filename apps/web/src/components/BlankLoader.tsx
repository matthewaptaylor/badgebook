import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

/**
 * A whole-page loader.
 * @param props
 * @returns The component.
 */
const BlankLoader: React.FC = () => {
  // Create indeterminate progress bar
  const [progress, setProgress] = useState(0);
  const [intervalNum, setIntervalNum] = useState<NodeJS.Timeout | null>(null);

  // Set interval on mount
  useEffect(() => {
    // Increment progress if auth is loading
    setIntervalNum(
      setInterval(() => {
        setProgress((progress) => (progress + 1) % 100);
      }, 10),
    );

    return () => {
      if (intervalNum) clearInterval(intervalNum);
    };
  }, [intervalNum]);

  return (
    <div className="min-h-screen">
      <Progress value={progress} className="rounded-none" />
    </div>
  );
};

export default BlankLoader;
