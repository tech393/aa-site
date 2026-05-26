import Link from "next/link";
import { Coach, DIRECTORY_CATEGORIES } from "@/lib/coaches";
import CoachImage from "@/components/CoachImage";

type Props = {
  coach: Coach;
  featured?: boolean;
};

function categoryLabel(slug: string) {
  return DIRECTORY_CATEGORIES.find((c) => c.value === slug)?.label ?? slug;
}

export default function CoachCard({ coach, featured = false }: Props) {
  const profilePath = `/directory/${coach.slug}`;

  if (featured) {
    return (
      <Link
        href={profilePath}
        className="group relative flex flex-col overflow-hidden rounded-md bg-white shadow-[0_4px_16px_-6px_rgba(42,26,15,0.12)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(42,26,15,0.22)]"
      >
        {coach.tier === "premium" && (
          <span className="absolute right-3 top-3 z-10 rounded bg-gold px-2.5 py-0.5 text-[11px] font-semibold text-white shadow">
            ★ Featured
          </span>
        )}
        <div className="relative aspect-[16/11] w-full overflow-hidden">
          <CoachImage
            src={coach.imageUrl}
            alt={coach.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={coach.imageZoom ? { transform: `scale(${coach.imageZoom})`, transformOrigin: "center" } : undefined}
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-serif text-lg font-medium text-teal transition-colors group-hover:text-teal-soft">
            {coach.name}
          </h3>
          {coach.location && (
            <p className="flex items-center gap-1.5 text-xs text-ink-soft">
              <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {coach.location}
            </p>
          )}
          {coach.categories.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {coach.categories.slice(0, 3).map((cat) => (
                <span key={cat} className="rounded bg-teal/10 px-2.5 py-0.5 text-[11px] font-medium text-teal">
                  {categoryLabel(cat)}
                </span>
              ))}
            </div>
          )}
          <span className="mt-auto inline-flex items-center text-xs font-semibold text-gold transition-colors group-hover:text-gold-deep">
            View Profile →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={profilePath}
      className="group flex items-stretch gap-0 overflow-hidden rounded-md bg-white shadow-[0_2px_10px_-4px_rgba(42,26,15,0.1)] transition-all hover:shadow-[0_8px_20px_-8px_rgba(42,26,15,0.2)]"
    >
      <div className="relative w-32 shrink-0 overflow-hidden bg-ink/5 sm:w-40">
        <CoachImage
          src={coach.imageUrl}
          alt={coach.name}
          className="absolute inset-0 h-full w-full object-cover"
          style={coach.imageZoom ? { transform: `scale(${coach.imageZoom})`, transformOrigin: "center" } : undefined}
        />
        {coach.tier === "premium" && (
          <span className="absolute bottom-1.5 right-1.5 rounded bg-gold px-1.5 py-0.5 text-[10px] font-bold text-white shadow">
            ★
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 items-center gap-5 p-5">
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <h3 className="font-serif text-base font-medium text-teal transition-colors group-hover:text-teal-soft">
            {coach.name}
          </h3>
          {coach.location && (
            <p className="flex items-center gap-1 text-xs text-ink-soft">
              <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {coach.location}
            </p>
          )}
          {coach.phone && (
            <p className="flex items-center gap-1 text-xs text-ink-soft">
              <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {coach.phone}
            </p>
          )}
          {coach.categories.length > 0 && (
            <div className="mt-0.5 flex flex-wrap gap-1.5">
              {coach.categories.slice(0, 4).map((cat) => (
                <span key={cat} className="rounded bg-teal/10 px-2 py-0.5 text-[11px] font-medium text-teal">
                  {categoryLabel(cat)}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="hidden shrink-0 items-center self-center sm:flex">
          <span className="rounded bg-gold px-4 py-1.5 text-xs font-medium text-white transition-all group-hover:bg-gold-deep">
            View Profile
          </span>
        </div>
      </div>
    </Link>
  );
}
