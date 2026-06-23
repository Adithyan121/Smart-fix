import React from 'react';
import appleLogo from '../assets/logos/apple.webp';
import samsungLogo from '../assets/logos/samsung.webp';
import miLogo from '../assets/logos/mi.webp';
import oneplusLogo from '../assets/logos/oneplus.webp';
import vivoLogo from '../assets/logos/vivo.webp';
import oppoLogo from '../assets/logos/oppo.webp';
import googlePixelLogo from '../assets/logos/google pixel.webp';
import realmeLogo from '../assets/logos/realme.webp';
import iqooLogo from '../assets/logos/iqoo.webp';
const BRANDS = [
  { name: 'Apple', color: '#ffffff', logo: appleLogo, scale: 1.15 },
  { name: 'Samsung', color: '#142de3', logo: samsungLogo, scale: 1.9 },
  { name: 'Xiaomi', color: '#ff6700', logo: miLogo, scale: 1.15 },
  { name: 'OnePlus', color: '#eb0028', logo: oneplusLogo, scale: 1.55 },
  { name: 'Vivo', color: '#415fff', logo: vivoLogo, scale: 0.95 },
  { name: 'Oppo', color: '#008a4e', logo: oppoLogo, scale: 1.0 },
  { name: 'Google Pixel', color: '#4285f4', logo: googlePixelLogo, scale: 1.35 },
  { name: 'Realme', color: '#ffc915', logo: realmeLogo, scale: 0.9 },
  { name: 'iQOO', color: '#fdd835', logo: iqooLogo, scale: 0.95 }
];

export default function FeaturedBrands() {
  // Duplicate list to achieve continuous marquee scrolling effect
  const marqueeList = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section 
      style={{
        padding: '60px 0',
        background: 'var(--bg-sec)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
        <h4 style={{
          textAlign: 'center',
          fontFamily: 'var(--font-poppins)',
          fontSize: '14px',
          fontWeight: 700,
          color: 'var(--text-muted)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '35px'
        }}>
          Expert Diagnostics & Repairs For All Major Brands
        </h4>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {marqueeList.map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`}
              style={{
                flexShrink: 0,
                width: '180px',
                height: '75px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-normal)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = brand.color;
                e.currentTarget.style.boxShadow = `0 10px 20px -5px ${brand.color}25`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="brand-logo-img"
                style={{ transform: `scale(${brand.scale || 1})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

