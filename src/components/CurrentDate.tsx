"use client";

import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString("bn-BD", { dateStyle: "full" }));
  }, []);

  return <span className="text-xs text-neutral-500 font-medium">{date}</span>;
}
