import type { Metadata } from "next";
import PageGoneUI from "@/components/PageGoneUI";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <PageGoneUI eyebrow="Page not found" />;
}
