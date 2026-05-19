import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SPLesson from "@/components/SPLesson";
import { SP_COURSE } from "@/lib/sp-course";
import { SITE } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SP_COURSE.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const lesson = SP_COURSE.find((l) => l.slug === slug);
  if (!lesson) return {};
  return {
    title: { absolute: `${lesson.title} | Softly Powerful` },
    description: lesson.subtitle ?? lesson.bullets[0],
    alternates: { canonical: `/sp/${lesson.slug}` },
    openGraph: {
      title: `${lesson.title}, Softly Powerful`,
      description: lesson.subtitle ?? lesson.bullets[0],
      url: `${SITE.url}/sp/${lesson.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const lesson = SP_COURSE.find((l) => l.slug === slug);
  if (!lesson) notFound();
  return <SPLesson lesson={lesson} />;
}
