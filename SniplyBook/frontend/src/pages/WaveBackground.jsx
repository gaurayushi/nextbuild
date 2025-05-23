
import React from 'react';

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Top animated waves */}
      <svg
        className="absolute top-0 inset-x-0 w-full h-1/2"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Base gradient */}
        <rect width="1440" height="320" fill="url(#waveGrad)" />

        {/* Wave layer 1 */}
        <g className="wave-layer wave-layer-1">
          <path
            id="wave1"
            d="M0,64 C360,192 720,0 1080,128 C1260,192 1440,128 1440,128 L1440,320 L0,320 Z"
            fill="rgba(255,255,255,0.2)"
          />
          <animateTransform
            xlinkHref="#wave1"
            attributeName="transform"
            type="translate"
            from="0,0" to="-200,0"
            dur="8s"
            repeatCount="indefinite"
          />
        </g>

        {/* Wave layer 2 */}
        <g className="wave-layer wave-layer-2">
          <path
            id="wave2"
            d="M0,112 C360,240 720,48 1080,176 C1260,240 1440,176 1440,176 L1440,320 L0,320 Z"
            fill="rgba(255,255,255,0.4)"
          />
          <animateTransform
            xlinkHref="#wave2"
            attributeName="transform"
            type="translate"
            from="0,0" to="200,0"
            dur="10s"
            repeatCount="indefinite"
          />
        </g>

        {/* Wave layer 3 */}
        <g className="wave-layer wave-layer-3">
          <path
            id="wave3"
            d="M0,160 C360,288 720,96 1080,224 C1260,288 1440,224 1440,224 L1440,320 L0,320 Z"
            fill="#ffffff"
          />
          <animateTransform
            xlinkHref="#wave3"
            attributeName="transform"
            type="translate"
            from="0,0" to="-150,0"
            dur="12s"
            repeatCount="indefinite"
          />
        </g>
      </svg>

      {/* Bottom animated waves (mirrored) */}
      <svg
        className="absolute bottom-0 inset-x-0 w-full h-1/2 transform rotate-180"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradBtm" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        <rect width="1440" height="320" fill="url(#waveGradBtm)" />

        <g>
          <path
            id="bw1"
            d="M0,64 C360,192 720,0 1080,128 C1260,192 1440,128 1440,128 L1440,320 L0,320 Z"
            fill="rgba(255,255,255,0.2)"
          />
          <animateTransform
            xlinkHref="#bw1"
            attributeName="transform"
            type="translate"
            from="0,0" to="-200,0"
            dur="8s"
            repeatCount="indefinite"
          />
        </g>

        <g>
          <path
            id="bw2"
            d="M0,112 C360,240 720,48 1080,176 C1260,240 1440,176 1440,176 L1440,320 L0,320 Z"
            fill="rgba(255,255,255,0.4)"
          />
          <animateTransform
            xlinkHref="#bw2"
            attributeName="transform"
            type="translate"
            from="0,0" to="200,0"
            dur="10s"
            repeatCount="indefinite"
          />
        </g>

        <g>
          <path
            id="bw3"
            d="M0,160 C360,288 720,96 1080,224 C1260,288 1440,224 1440,224 L1440,320 L0,320 Z"
            fill="#ffffff"
          />
          <animateTransform
            xlinkHref="#bw3"
            attributeName="transform"
            type="translate"
            from="0,0" to="-150,0"
            dur="12s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
}
