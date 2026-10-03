"use client";

import { useEffect, useState } from "react";

const getStockholmTime = () =>
  new Date().toLocaleString("sv-SE", {
    timeZone: "Europe/Stockholm",
    timeStyle: "medium",
  });

export function CurrentTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(getStockholmTime());
    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
}
