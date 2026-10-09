import { useEffect, useId, useRef, useState } from 'react';
import type { VideoItem } from '../data/site';

type Props = {
  items: VideoItem[];
  baseUrl: string;
  columns?: 2 | 4;
  onDark?: boolean;
};

function PlayIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

function CloseIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export default function VideoGallery({ items, baseUrl, columns = 4, onDark = false }: Props) {
  const [active, setActive] = useState<VideoItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descId = useId();
  const gridClass =
    columns === 2
      ? 'grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 sm:gap-8'
      : 'grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4';

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (active) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else if (dialog.open) {
      dialog.close();
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <ul className={gridClass}>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`reveal reveal-delay-${Math.min(index, 3)} w-full max-w-[260px]`}
          >
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group gallery-tile w-full text-left"
              aria-label={`Play ${item.title}`}
            >
              <div className="phone-shell">
                <div className="phone-screen">
                  <img
                    src={`${baseUrl}${item.thumb}`}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                    width="450"
                    height="800"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/10"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="play-pulse flex h-14 w-14 items-center justify-center rounded-full bg-paper/95 text-ink">
                      <PlayIcon className="ml-0.5 h-6 w-6" />
                    </span>
                  </div>
                  <span className="phone-home" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-4 px-1 text-center sm:text-left">
                <h3
                  className={`font-display text-base font-semibold leading-tight tracking-tight ${
                    onDark ? 'text-paper' : 'text-ink'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-1.5 line-clamp-2 text-sm leading-snug ${
                    onDark ? 'text-paper/65' : 'text-ink-muted'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="m-auto max-h-[92vh] border-0 bg-transparent p-0 text-paper backdrop:bg-ink/75 backdrop:backdrop-blur-sm open:block"
        aria-labelledby={titleId}
        aria-describedby={descId}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setActive(null);
        }}
      >
        {active && (
          <div className="w-[min(92vw,340px)]">
            <div className="mb-3 flex items-start justify-between gap-3 px-1">
              <div className="min-w-0">
                <h3 id={titleId} className="truncate font-display text-base font-semibold tracking-tight text-paper">
                  {active.title}
                </h3>
                <p id={descId} className="mt-0.5 line-clamp-1 text-xs text-paper/70">
                  {active.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper/15 text-paper transition hover:bg-paper/25"
                aria-label="Close video"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="phone-modal">
              <div className="phone-modal-screen relative">
                <div
                  className="pointer-events-none absolute left-1/2 top-2.5 z-10 h-1.5 w-[28%] -translate-x-1/2 rounded-full bg-black/90"
                  aria-hidden="true"
                />
                <video
                  key={active.id}
                  className="aspect-[9/16] w-full bg-black object-contain"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                >
                  <source src={`${baseUrl}${active.video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div
                  className="pointer-events-none absolute bottom-2.5 left-1/2 h-1 w-[28%] -translate-x-1/2 rounded-full bg-paper/35"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
