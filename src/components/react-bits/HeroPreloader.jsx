"use client";

import { useEffect, useState } from "react";
import Preloader from "@/src/components/react-bits/preloader";

/**
 * Zeigt einen Vollbild-Ladebildschirm, während das übergebene Hero-Video
 * im Hintergrund in den Browser-Cache geladen wird. Sobald das Video
 * abspielbereit ist (oder das Sicherheits-Timeout greift), wird der Loader
 * ausgeblendet – das Hero-Video läuft dann sofort flüssig an.
 */
export default function HeroPreloader({
  videoSrc,
  children,
  label,
  maxWait = 6000,
  minDuration = 1500,
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let done = false;
    let ready = false;
    const startedAt = Date.now();

    // Loader wirklich ausblenden – aber frühestens nach minDuration
    const hide = () => {
      if (done) return;
      done = true;
      setLoading(false);
    };

    // Wird aufgerufen, sobald das Video bereit ist (oder ein Fehler auftritt).
    // Der Loader bleibt aber mindestens minDuration sichtbar.
    const finish = () => {
      if (ready) return;
      ready = true;
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(minDuration - elapsed, 0);
      setTimeout(hide, remaining);
    };

    // Hero-Video im Hintergrund vorladen
    const video = document.createElement("video");
    video.muted = true;
    video.preload = "auto";
    video.src = videoSrc;

    video.addEventListener("canplaythrough", finish);
    video.addEventListener("loadeddata", finish);
    video.addEventListener("error", finish); // Fail-safe: nie hängenbleiben
    video.load();

    // Sicherheits-Timeout, damit der Loader nie endlos sichtbar bleibt
    const timeout = setTimeout(hide, maxWait);

    return () => {
      clearTimeout(timeout);
      video.removeEventListener("canplaythrough", finish);
      video.removeEventListener("loadeddata", finish);
      video.removeEventListener("error", finish);
      video.removeAttribute("src");
      video.load();
    };
  }, [videoSrc, maxWait, minDuration]);

  // "Ihr Partner für" steht fest, der Seitenname (label) wird blau hervorgehoben.
  const baseText = "Ihr Partner für";
  const loadingText = label ? `${baseText} ${label}.` : `${baseText}.`;
  const accentFromIndex = label ? baseText.split(" ").length : null;

  return (
    <>
      <div
        className="fixed inset-0"
        style={{ zIndex: 9999, pointerEvents: loading ? "auto" : "none" }}
        aria-hidden={!loading}>
        <Preloader
          loading={loading}
          variant="stairs"
          position="fixed"
          bgColor="#111318"
          stairCount={6}
          loadingText={loadingText}
          accentFromIndex={accentFromIndex}
          accentColor="#007DF8"
          accentClassName="font-semibold"
          textClassName="text-white text-xl sm:text-3xl font-extralight tracking-tight"
          ariaLabel="Inhalte werden geladen"
        />
      </div>
      {children}
    </>
  );
}
