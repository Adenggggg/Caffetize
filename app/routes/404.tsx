import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center text-center px-6 py-28">
      <div className="relative w-64 h-64 mb-6">
        <svg viewBox="0 0 260 260" className="w-full h-full">
          <circle cx="130" cy="130" r="118" fill="none" stroke="#3A2A1E" strokeOpacity="0.08" strokeWidth="14" />
          <circle cx="130" cy="130" r="86" fill="none" stroke="#3A2A1E" strokeOpacity="0.14" strokeWidth="10" />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-6xl font-bold leading-none">404</span>
        </div>

        <svg viewBox="0 0 120 90" className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-28">
          <g transform="rotate(-18 60 45)">
            <path
              d="M20 30 h55 a10 10 0 0 1 10 10 v6 a16 16 0 0 1 -16 16 H36 a16 16 0 0 1 -16 -16 Z"
              fill="#3A2A1E"
            />
            <path
              d="M85 34 h8 a10 10 0 0 1 0 20 h-6"
              fill="none"
              stroke="#3A2A1E"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
          <ellipse cx="30" cy="78" rx="22" ry="5" fill="#3A2A1E" opacity="0.18" />
        </svg>

        <svg viewBox="0 0 40 60" className="absolute -bottom-2 left-[38%] w-10 opacity-70 motion-reduce:opacity-40">
          <path
            className="animate-[rise_3.2s_ease-in-out_infinite] motion-reduce:animate-none"
            d="M6 55 C 2 45, 10 40, 6 30"
            fill="none"
            stroke="#8A7B6C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            className="animate-[rise_3.2s_ease-in-out_.6s_infinite] motion-reduce:animate-none"
            d="M18 55 C 14 45, 22 40, 18 28"
            fill="none"
            stroke="#8A7B6C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            className="animate-[rise_3.2s_ease-in-out_1.2s_infinite] motion-reduce:animate-none"
            d="M30 55 C 26 45, 34 40, 30 32"
            fill="none"
            stroke="#8A7B6C"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h1 className="font-display text-4xl font-semibold mb-3">This cup's been spilled</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you're looking for isn't on the menu. It may have been moved,
        renamed, or never brewed in the first place.
      </p>

      <div className="flex items-center gap-3">
        <Button asChild size="lg">
          <Link to="/">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/menu">View Menu</Link>
        </Button>
      </div>
    </div>
  );
}
