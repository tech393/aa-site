import type { Metadata } from "next";
import PageGoneUI from "@/components/PageGoneUI";

export const metadata: Metadata = {
  title: "This page is no longer available",
  robots: { index: false, follow: true },
};

export default function GonePage() {
  return <PageGoneUI eyebrow="This page is no longer here" />;
}
