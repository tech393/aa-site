"use client";

import { useEffect, useRef, useState } from "react";
import { coaches } from "@/lib/coaches";

// Google Maps JS API key. Public by design (referrer-restricted at the API key
// level in Google Cloud Console); the same key powers the WP directory at
// directory.awakenedacademy.com. Override via NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
// in Vercel env if rotating.
const MAP_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
  "AIzaSyBpv_6MmtbEt8IlnFLgep3u9YJ71e_Ub1w";

const SCRIPT_ID = "aa-google-maps-js";

declare global {
  interface Window {
    google?: typeof google;
    __aaMapScriptPromise?: Promise<void>;
  }
}

function loadMapsScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.google?.maps) return Promise.resolve();
  if (window.__aaMapScriptPromise) return window.__aaMapScriptPromise;

  window.__aaMapScriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Maps script failed")));
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Maps script failed"));
    document.head.appendChild(script);
  });
  return window.__aaMapScriptPromise;
}

export default function DirectoryMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const withMarkers = coaches.filter(
      (c): c is typeof c & { lat: number; lng: number } =>
        typeof c.lat === "number" && typeof c.lng === "number",
    );
    if (withMarkers.length === 0 || !containerRef.current) return;

    loadMapsScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.google?.maps) return;
        const { Map, Marker, InfoWindow, LatLngBounds } = window.google.maps;

        const map = new Map(containerRef.current, {
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          styles: [
            { featureType: "poi.business", stylers: [{ visibility: "off" }] },
            { featureType: "transit", stylers: [{ visibility: "simplified" }] },
          ],
        });

        const bounds = new LatLngBounds();
        const info = new InfoWindow();

        withMarkers.forEach((coach) => {
          const position = { lat: coach.lat, lng: coach.lng };
          bounds.extend(position);
          const marker = new Marker({
            position,
            map,
            title: coach.name,
          });
          marker.addListener("click", () => {
            const html = `
              <div style="font-family:system-ui,-apple-system,sans-serif;min-width:200px;max-width:240px">
                ${
                  coach.imageUrl
                    ? `<img src="${coach.imageUrl}" alt="" style="display:block;width:100%;height:120px;object-fit:cover;border-radius:4px;margin-bottom:8px"/>`
                    : ""
                }
                <div style="font-family:Georgia,serif;font-size:15px;font-weight:600;color:#0F5F55;margin-bottom:2px">${coach.name}</div>
                ${coach.location ? `<div style="font-size:12px;color:#6b6b6b;margin-bottom:8px">${coach.location}</div>` : ""}
                <a href="/directory/${coach.slug}" style="display:inline-block;background:#C9A04C;color:#fff;text-decoration:none;font-size:12px;font-weight:500;padding:6px 12px;border-radius:3px">View profile →</a>
              </div>
            `;
            info.setContent(html);
            info.open({ anchor: marker, map });
          });
        });

        map.fitBounds(bounds, 60);
        // For a single marker, fitBounds zooms in too far; clamp to z=5.
        if (withMarkers.length === 1) {
          window.google.maps.event.addListenerOnce(map, "idle", () => {
            const zoom = map.getZoom();
            if (typeof zoom === "number" && zoom > 5) map.setZoom(5);
          });
        }
      })
      .catch((e: Error) => {
        if (!cancelled) setError(e.message || "Map failed to load");
      });

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
          className="h-[460px] w-full overflow-hidden rounded-md bg-ink/5"
          aria-label="Map of Awakened Academy coaches"
          role="application"
        />
        {error && (
          <p className="mt-3 text-center text-xs text-ink-soft">
            Map couldn&apos;t load right now. <a className="underline text-teal" href="https://directory.awakenedacademy.com/" target="_blank" rel="noopener">Open the directory map</a> instead.
          </p>
        )}
      </div>
    </section>
  );
}
