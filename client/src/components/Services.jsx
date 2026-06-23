import React, { useEffect } from 'react';
import { 
  ShoppingBag, 
  Smartphone, 
  BatteryCharging, 
  Droplet, 
  Zap, 
  Cpu, 
  Microchip, 
  GlobeX, 
  ArrowRight 
} from 'lucide-react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    icon: <ShoppingBag size={28} />,
    title: 'Mobile Phone Sales',
    desc: 'Browse our curated selection of premium, certified pre-owned and new smartphones with local warranty.'
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Screen Replacement',
    desc: 'Cracked or bleeding displays restored to factory standards using high-grade, original-spec replacement screens.'
  },
  {
    icon: <BatteryCharging size={28} />,
    title: 'Battery Replacement',
    desc: 'Revitalize your battery life. Quick swaps using original-capacity lithium batteries with testing protocols.'
  },
  {
    icon: <Droplet size={28} />,
    title: 'Water Damage Repair',
    desc: 'Advanced ultrasonic cleaning and component micro-soldering to recover liquid-damaged motherboards.'
  },
  {
    icon: <Zap size={28} />,
    title: 'Charging Port Repair',
    desc: 'Fix loose ports, slow charging speeds, or disconnected solder leads with professional replacement ports.'
  },
  {
    icon: <Cpu size={28} />,
    title: 'Software & Firmware',
    desc: 'System flashing, firmware restoration, bricked device rescue, and secure malware removal.'
  },
  {
  icon: <Microchip size={28} />,
  title: 'All IC Works',
  desc: 'Expert IC-level repairs for power, charging, display, audio, and motherboard-related issues.'
},
{
  icon: <GlobeX size={28} />,
  title: 'Network Issues',
  desc: 'Diagnosis and repair of signal, Wi-Fi, Bluetooth, and mobile network connectivity problems.'
}
];

export default function Services() {
  useEffect(() => {
    // GSAP ScrollTrigger for staggered entry of cards
    gsap.fromTo('.service-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#services',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section id="services" className="section" style={{ background: 'var(--bg-main)' }}>
      {/* Title */}
      <h2 className="section-title">Professional Device Services</h2>
      <p className="section-subtitle">
        Certified technicians, industry-leading diagnostic gear, and original spare parts for peace of mind.
      </p>

      {/* Grid of Cards */}
      <div className="services-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px',
        width: '100%'
      }}>
        {SERVICES_DATA.map((service, index) => (
          <div 
            key={index}
            className="service-card glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              gap: '20px',
              padding: '30px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient Background Light in Card */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(20, 45, 227, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}></div>

            {/* Icon Bubble */}
            <div className="icon-bubble" style={{
              background: 'var(--accent-light)',
              color: 'var(--accent)',
              padding: '16px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--neu-button)'
            }}>
              {service.icon}
            </div>

            {/* Card Content */}
            <h3 style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '20px',
              fontWeight: 700,
              color: 'var(--text-main)'
            }}>
              {service.title}
            </h3>
            
            <p style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              lineHeight: '1.6',
              flexGrow: 1
            }}>
              {service.desc}
            </p>

            <a 
              href="#contact" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--accent)',
                marginTop: '10px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.gap = '10px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.gap = '6px';
              }}
            >
              Inquire Repair <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          
          .service-card {
            padding: 15px !important;
            gap: 10px !important;
            border-radius: 16px !important;
          }
          
          .service-card .icon-bubble {
            padding: 10px !important;
            border-radius: 12px !important;
            box-shadow: none !important;
          }
          
          .service-card .icon-bubble svg {
            width: 20px !important;
            height: 20px !important;
          }
          
          .service-card h3 {
            font-size: 15px !important;
            margin: 0 !important;
            line-height: 1.2 !important;
          }
          
          .service-card p {
            font-size: 12px !important;
            line-height: 1.4 !important;
            margin: 0 !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 3 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }
          
          .service-card a {
            font-size: 12px !important;
            margin-top: 4px !important;
          }
        }
      `}</style>
    </section>
  );
}
