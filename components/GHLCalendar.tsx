"use client";

import { useId } from "react";

type GHLCalendarProps = {
  calendarId: string;
  title?: string;
};

export default function GHLCalendar({ calendarId, title = "Book a Call" }: GHLCalendarProps) {
  const uniqueSuffix = useId().replace(/:/g, "");
  return (
    <iframe
      src={`https://links.awakenedacademy.com/widget/booking/${calendarId}`}
      style={{ width: "100%", border: "none", overflow: "hidden", minHeight: 800 }}
      scrolling="no"
      id={`${calendarId}_${uniqueSuffix}`}
      title={title}
    />
  );
}
