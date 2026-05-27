"use client";

import { useEffect, useRef, useState } from "react";
import { coaches } from "@/lib/coaches";

// Leaflet + OpenStreetMap. No API key required, no referrer restriction.
// Tiles served by CartoDB (Positron, clean low-contrast for brand colors).

export default function DirectoryMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const withMarkers = coaches.filter(
      (c): c is typeof c & { lat: number; lng: number } =>
        typeof c.lat === "number" && typeof c.lng === "number",
    );
    if (withMarkers.length === 0 || !containerRef.current) return;

    (async () => {
      try {
        // Side-effect: injects Leaflet's stylesheet rules onto the global scope.
        const L = (await import("leaflet")).default;
        if (cancelled || !containerRef.current) return;

        // Inject the Leaflet stylesheet once. (Importing leaflet/dist/leaflet.css
        // in a server component would crash; doing it client-side keeps SSR clean.)
        const styleId = "aa-leaflet-css";
        if (!document.getElementById(styleId)) {
          const link = document.createElement("link");
          link.id = styleId;
          link.rel = "stylesheet";
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
          document.head.appendChild(link);
        }

        const map = L.map(containerRef.current, {
          scrollWheelZoom: false,
          attributionControl: true,
        });

        // CartoDB Positron — clean light grayscale, suits cream/teal brand.
        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19,
        }).addTo(map);

        // Custom branded marker (gold pin)
        const icon = L.divIcon({
          className: "aa-map-pin",
          html: `<span style="display:block;width:22px;height:22px;background:#C9A04C;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></span>`,
          iconSize: [22, 22],
          iconAnchor: [11, 11],
        });

        const latlngs: [number, number][] = [];
        withMarkers.forEach((coach) => {
          const m = L.marker([coach.lat, coach.lng], { icon, title: coach.name }).addTo(map);
          latlngs.push([coach.lat, coach.lng]);
          const html = `
            <div style="font-family:system-ui,-apple-system,sans-serif;min-width:200px;max-width:240px">
              ${
                coach.imageUrl
                  ? `<img src="${coach.imageUrl}" alt="" style="display:block;width:100%;height:120px;object-fit:cover;border-radius:4px;margin-bottom:8px"/>`
                  : ""
              }
              <div style="font-family:Georgia,serif;font-size:15px;font-weight:600;color:#0F5F55;margin-bottom:2px">${escapeHtml(coach.name)}</div>
              ${coach.location ? `<div style="font-size:12px;color:#6b6b6b;margin-bottom:8px">${escapeHtml(coach.location)}</div>` : ""}
              <a href="/directory/${coach.slug}" style="display:inline-block;background:#C9A04C;color:#fff;text-decoration:none;font-size:12px;font-weight:500;padding:6px 12px;border-radius:3px">View profile &rarr;</a>
            </div>
          `;
          m.bindPopup(html);
        });

        if (latlngs.length === 1) {
          map.setView(latlngs[0], 5);
        } else {
          map.fitBounds(latlngs as L.LatLngBoundsExpression, { padding: [40, 40] });
        }

        setReady(true);
      } catch (e: unknown) {
        if (!cancelled) {
          const message = e instanceof Error ? e.message : "Map failed to load";
          setError(message);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-widest px-6 pb-12 pt-8">
        <div className="mb-6 text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-teal">
            Browse the Map
          </div>
          <h2 className="mt-2 font-serif text-[clamp(20px,3vw,28px)] font-light text-ink">
            Find a coach near you
          </h2>
        </div>
        <div
          ref={containerRef}
          className="relative h-[460px] w-full overflow-hidden rounded-md bg-ink/5"
          aria-label="Map of Awakened Academy coaches"
          role="application"
        >
          {!ready && !error && (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-ink-soft">
              Loading map…
            </div>
          )}
        </div>
        {error && (
          <p className="mt-3 text-center text-xs text-ink-soft">
            Map couldn&apos;t load. <a className="underline text-teal" href="https://directory.awakenedacademy.com/" target="_blank" rel="noopener">Open the directory map</a> instead.
          </p>
        )}
      </div>
    </section>
  );
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
