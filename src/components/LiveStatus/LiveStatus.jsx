import { useState, useEffect } from "react";

const LiveStatus = ({ message }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-green-400">
      {message}: {time.toLocaleTimeString()}
    </div>
  );
};

export default LiveStatus;
