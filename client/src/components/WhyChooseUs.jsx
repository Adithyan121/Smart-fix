import React, { useEffect, useRef, useState } from 'react';
import { 
  Wrench, 
  History, 
  Zap, 
  ShieldCheck, 
  Smile, 
  Users 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS_DATA = [
  {
    title: 'Devices Repaired',
    value: '500+',
    numericVal: 5000,
    suffix: '+',
    icon: <Wrench size={24} />
  },
  // {
  //   title: 'Years Experience',
  //   value: '10+',
  //   numericVal: 10,
  //   suffix: '+',
  //   icon: <History size={24} />
  // },
  {
    title: 'Express Repairs',
    value: '24hr',
    numericVal: 24,
    suffix: 'hr',
    icon: <Zap size={24} />
  },
  {
    title: 'Genuine Spare Parts',
    value: '100%',
    numericVal: 100,
    suffix: '%',
    icon: <ShieldCheck size={24} />
  },
  {
    title: 'Customer Satisfaction',
    value: '98%',
    numericVal: 98,
    suffix: '%',
    icon: <Smile size={24} />
  },
  // {
  //   title: 'Expert Technicians',
  //   value: '15+',
  //   numericVal: 15,
  //   suffix: '+',
  //   icon: <Users size={24} />
  // }
];

function StatCard({ stat, index }) {
  const [currentVal, setCurrentVal] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const obj = { val: 0 };
    
    const trigger = gsap.to(obj, {
      val: stat.numericVal,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      onUpdate: () => {
        setCurrentVal(Math.floor(obj.val));
      }
    });

    return () => {
      trigger.scrollTrigger?.kill();
    };
  }, [stat.numericVal]);

  return (
    <div 
      ref={cardRef}
      className="neumorphic-card stat-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '15px',
        padding: '30px'
      }}
    >
      {/* Icon frame */}
      <div style={{
        color: 'var(--accent)',
        background: 'var(--bg-main)',
        width: '54px',
        height: '54px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--neu-inset)'
      }}>
        {stat.icon}
      </div>

      {/* Numeric value */}
      <div 
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: '32px',
          fontWeight: 800,
          color: 'var(--text-main)',
          background: 'linear-gradient(135deg, var(--accent) 0%, #00d2ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.2'
        }}
      >
        {currentVal}{stat.suffix}
      </div>

      {/* Label Title */}
      <span style={{
        fontFamily: 'var(--font-poppins)',
        fontSize: '14px',
        fontWeight: 600,
        color: 'var(--text-muted)'
      }}>
        {stat.title}
      </span>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section" style={{ background: 'var(--bg-main)' }}>
      {/* Title */}
      <h2 className="section-title">Why Choose Smart Fix?</h2>
      <p className="section-subtitle">
        We strive for technical perfection and customer delight. Our stats represent years of dedication to our craft.
      </p>

      {/* Stats Grid */}
      <div 
        className="stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '30px',
          width: '100%'
        }}
      >
        {STATS_DATA.map((stat, idx) => (
          <StatCard key={idx} stat={stat} index={idx} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 20px !important;
            padding: 20px !important;
            width: 100% !important;
            -ms-overflow-style: none; /* IE/Edge */
            scrollbar-width: none; /* Firefox */
          }
          
          .stats-grid::-webkit-scrollbar {
            display: none; /* Chrome/Safari */
          }
          
          .stat-card {
            min-width: 200px !important;
            flex-shrink: 0 !important;
            scroll-snap-align: center !important;
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
