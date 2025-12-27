"use client";

import { useEffect, useState } from "react";

const getStockholmTime = () =>
  new Date().toLocaleString("sv-SE", {
    timeZone: "Europe/Stockholm",
    timeStyle: "medium",
  });

export function CurrentTime() {
  const [time, setTime] = useState(getStockholmTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleString("sv-SE", {
          timeZone: "Europe/Stockholm",
          timeStyle: "medium",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span className="text-muted-foreground">{time}</span>;
}
