import React from 'react';
import { Star } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

export default function Testimonials() {
  // Triple the list to ensure smooth infinite marquee wrapping
  const doubleTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg-sec)', overflow: 'hidden' }}>
      {/* Background Orbs */}
      <div className="glow-blur" style={{ top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(20, 45, 227, 0.06) 0%, transparent 70%)' }}></div>

      {/* Title */}
      <h2 className="section-title">What Our Customers Say</h2>
      <p className="section-subtitle">
        With over 5,00+ repaired devices, we are proud to have maintained a 98% customer satisfaction rate.
      </p>

      {/* Marquee Wrapper */}
      <div className="marquee-container" style={{ padding: '20px 0' }}>
        <div className="marquee-content" style={{ animationDuration: '40s' }}>
          {doubleTestimonials.map((item, index) => {
            const initial = item.name.charAt(0);
            return (
              <div 
                key={`${item.name}-${index}`}
                className="glass-card"
                style={{
                  flexShrink: 0,
                  width: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  padding: '25px',
                  borderRadius: '24px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'default',
                  transition: 'var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                {/* Header Profile */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Avatar */}
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent) 0%, #3b52ff 100%)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 700,
                    fontSize: '16px'
                  }}>
                    {initial}
                  </div>
                  {/* Name and Platform */}
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700, fontSize: '15px', color: 'var(--text-main)' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      Verified Google Reviewer
                    </div>
                  </div>
                </div>

                {/* Ratings */}
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                {/* Review Message */}
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                  textAlign: 'left',
                  margin: 0
                }}>
                  "{item.review}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
