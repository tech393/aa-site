import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DharmaLesson from "@/components/DharmaLesson";
import { DHARMA_COURSE } from "@/lib/dharma-course";
import { SITE } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return DHARMA_COURSE.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const lesson = DHARMA_COURSE.find((l) => l.slug === slug);
  if (!lesson) return {};
  return {
    title: { absolute: `${lesson.title} | Discover Your Dharma` },
    description: lesson.subtitle ?? lesson.body?.[0] ?? "",
    alternates: { canonical: `/dharma/${lesson.slug}` },
    openGraph: {
      title: `${lesson.title}, Discover Your Dharma`,
      description: lesson.subtitle ?? lesson.body?.[0] ?? "",
      url: `${SITE.url}/dharma/${lesson.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const lesson = DHARMA_COURSE.find((l) => l.slug === slug);
  if (!lesson) notFound();
  return <DharmaLesson lesson={lesson} />;
}
