"use client";

import { useEffect, useState } from "react";
import { Sun, CloudRain, Wind, Clock } from "lucide-react";

export default function WeatherWidget() {
  const [time, setTime] = useState("");
  const [temp, setTemp] = useState(45);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    // Simulate subtle temperature fluctuations
    const tempInterval = setInterval(() => {
      setTemp((prev) => {
        const diff = (Math.random() - 0.5) * 2; // -1 to 1
        const next = prev + diff;
        return parseFloat(Math.max(43, Math.min(48, next)).toFixed(1));
      });
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(tempInterval);
    };
  }, []);

  return (
    <div className="flex items-center gap-3 md:gap-6 text-[10px] md:text-xs uppercase tracking-widest text-pearl/60 font-sans glass-panel px-3 py-2 md:px-4 md:py-2.5 rounded-full z-40">
      <div className="flex items-center gap-2">
        <Clock className="w-3.5 h-3.5 text-gold" />
        <span>Resort Time: <span className="text-pearl font-medium">{time || "12:00 PM"}</span></span>
      </div>
      <div className="h-3 w-[1px] bg-glass-border" />
      <div className="flex items-center gap-2">
        <Sun className="w-3.5 h-3.5 text-gold animate-pulse" />
        <span>Fatehpur: <span className="text-pearl font-medium">{temp}°C</span></span>
      </div>
    </div>
  );
}
