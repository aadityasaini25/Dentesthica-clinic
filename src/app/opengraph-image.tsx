import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Dentesthica – Periodontist & Implantologist | GK-1, New Delhi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f2b45 0%, #1a3a5c 50%, #2a5a8c 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(42, 122, 181, 0.15)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.1)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 60px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Clinic name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-1px',
              marginBottom: 8,
              display: 'flex',
            }}
          >
            DENTESTHICA
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: '#d4af37',
              borderRadius: 2,
              marginBottom: 20,
              display: 'flex',
            }}
          />

          {/* Specialty */}
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: '#5bb8d4',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: 24,
              display: 'flex',
            }}
          >
            Periodontist & Implantologist
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: 32,
              lineHeight: 1.3,
              display: 'flex',
            }}
          >
            Replace Missing Teeth. Restore Healthy Gums.
          </div>

          {/* Stats bar */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              alignItems: 'center',
              marginBottom: 24,
            }}
          >
            {[
              { value: '15+ Years', label: 'Experience' },
              { value: '₹25,000', label: 'Implants From' },
              { value: '4.9 ★', label: 'Google Rating' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: 28, fontWeight: 800, color: '#d4af37', display: 'flex' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', display: 'flex' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: 16,
              color: 'rgba(255,255,255,0.4)',
              display: 'flex',
            }}
          >
            C-38, Greater Kailash-1, New Delhi | gk1dental.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
