import type { SVGProps } from 'react';

/**
 * lucide-react dropped brand/logo icons, so GitHub and YouTube are hand-rolled
 * to match the stroke-icon sizing convention used everywhere else (24x24, currentColor).
 */

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={24}
      height={24}
      stroke="none"
      {...props}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={24}
      height={24}
      stroke="none"
      {...props}
    >
      <path d="M23.5 6.5a3 3 0 0 0-2.11-2.12C19.5 4 12 4 12 4s-7.5 0-9.39.38A3 3 0 0 0 .5 6.5 31.6 31.6 0 0 0 .12 12a31.6 31.6 0 0 0 .38 5.5 3 3 0 0 0 2.11 2.12C4.5 20 12 20 12 20s7.5 0 9.39-.38a3 3 0 0 0 2.11-2.12 31.6 31.6 0 0 0 .38-5.5 31.6 31.6 0 0 0-.38-5.5ZM9.6 15.5v-7l6.27 3.5Z" />
    </svg>
  );
}
