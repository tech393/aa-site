import type { Metadata } from "next";
import PodcastShow from "@/components/PodcastShow";
import { PODCASTS } from "@/lib/podcasts";
import { SITE } from "@/lib/site-config";

const p = PODCASTS["dont-die-with-your-song-inside"];

export const metadata: Metadata = {
  title: { absolute: `${p.title} | ${SITE.name}` },
  description: `${p.title}, a self-compassion podcast ${p.attribution}. ${p.description}`,
  alternates: { canonical: `/${p.slug}` },
  openGraph: {
    title: p.title,
    description: p.description,
    images: [{ url: `${SITE.url}${p.cover}` }],
  },
};

export default function Page() {
  return <PodcastShow podcast={p} />;
}
