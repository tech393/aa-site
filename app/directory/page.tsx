import type { Metadata } from "next";
import DirectoryClient from "@/components/DirectoryClient";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Find a Spiritual Life Coach | Awakened Academy Directory" },
  description:
    "Browse certified spiritual life coaches, healers, and wellness practitioners from the Awakened Academy community. Filter by location, specialty, or name.",
  alternates: { canonical: "/directory" },
  openGraph: {
    title: "Find a Spiritual Life Coach | Awakened Academy Directory",
    description: "Browse certified spiritual life coaches, healers, and wellness practitioners.",
    url: `${SITE.url}/directory`,
  },
};

export default function DirectoryPage() {
  return <DirectoryClient />;
}
