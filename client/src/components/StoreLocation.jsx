import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function StoreLocation() {
  const storeInfo = [
    {
      icon: <MapPin size={20} />,
      title: 'Our Address',
      desc: 'Smart Fix, ICS Junction, Sasthamcotta, Kollam, Kerala, India - 690521'
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone Number',
      desc: '+91 7994770102'
    },
    {
      icon: <Mail size={20} />,
      title: 'Email Address',
      desc: 'smartfix0102@gmail.com'
    },
    {
      icon: <Clock size={20} />,
      title: 'Working Hours',
      desc: 'Mon - Sat: 9:00 AM - 10:00 PM'
    }
  ];

  return (
    <section id="location" className="section" style={{ background: 'var(--bg-main)' }}>
      {/* Title */}
      <h2 className="section-title">Visit Our Store</h2>
      <p className="section-subtitle">
        Located in the heart of Silicon Valley. Stop by for diagnostics or pick up premium accessories.
      </p>

      {/* Side by side layout */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          width: '100%',
          alignItems: 'stretch'
        }}
        className="location-grid"
      >
        {/* Info Card */}
        <div 
          className="neumorphic-card location-info-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '30px',
            padding: '40px',
            textAlign: 'left'
          }}
        >
          <h3 style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '22px',
            fontWeight: 800,
            marginBottom: '10px'
          }}>
            Store Headquarters
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} className="location-info-list">
            {storeInfo.map((info, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px'
                }}
                className="location-info-item"
              >
                <div 
                  className="location-info-item-icon"
                  style={{
                    background: 'var(--accent-light)',
                    color: 'var(--accent)',
                    padding: '10px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '15px',
                    fontWeight: 700,
                    marginBottom: '4px',
                    color: 'var(--text-main)'
                  }}>
                    {info.title}
                  </h4>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.5'
                  }}>
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Map Frame */}
        <div style={{
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-md)',
          minHeight: '350px',
          position: 'relative'
        }}>
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.989603444956!2d76.58683988230243!3d9.041182538785355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b060500381b74e5%3A0x2d1a1539a283fccf!2sSMART%20FIX!5e0!3m2!1sen!2sin!4v1782111523492!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{
    border: 0,
    minHeight: '350px',
    display: 'block'
  }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Smart Fix Location Map"
/>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .location-info-card {
            padding: 20px !important;
            gap: 20px !important;
          }
          
          .location-info-card h3 {
            font-size: 18px !important;
            margin-bottom: 5px !important;
          }
          
          .location-info-list {
            gap: 15px !important;
          }
          
          .location-info-item {
            gap: 10px !important;
          }
          
          .location-info-item-icon {
            padding: 8px !important;
            border-radius: 10px !important;
          }
          
          .location-info-item-icon svg {
            width: 16px !important;
            height: 16px !important;
          }
          
          .location-info-item h4 {
            font-size: 14px !important;
            margin-bottom: 2px !important;
          }
          
          .location-info-item p {
            font-size: 12px !important;
            line-height: 1.4 !important;
          }
        }
        @media (min-width: 992px) {
          .location-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
