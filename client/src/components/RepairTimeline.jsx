import React, { useEffect, useRef } from 'react';
import { 
  Eye, 
  ClipboardList, 
  Calculator, 
  Wrench, 
  Sparkles, 
  CheckCircle 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_STEPS = [
  {
    icon: <Eye size={22} />,
    title: 'Device Inspection',
    desc: 'Our technician performs a visual inspection, testing physical buttons, ports, and chassis cracks.'
  },
  {
    icon: <ClipboardList size={22} />,
    title: 'Diagnosis',
    desc: 'Connecting diagnostics equipment to read software crash logs, current draw, and sensors.'
  },
  {
    icon: <Calculator size={22} />,
    title: 'Cost Estimation',
    desc: 'We calculate parts and labor, providing a transparent quote. We only proceed upon approval.'
  },
  {
    icon: <Wrench size={22} />,
    title: 'Repair Process',
    desc: 'Conducted under an ESD-safe workspace, using specialized suction tools and OEM components.'
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Quality Testing',
    desc: 'Post-repair calibration and a rigorous 20-point diagnostic run (touch sensitivity, audio, cameras).'
  },
  {
    icon: <CheckCircle size={22} />,
    title: 'Customer Delivery',
    desc: 'Cleaned, polished, and packaged with your warranty certificate, ready for collection.'
  }
];

export default function RepairTimeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clean up function to prevent ScrollTrigger duplication on hot-reload
    const ctx = gsap.context(() => {
      // Progress bar fill width
      gsap.fromTo('.active-progress-line',
        { width: '0%' },
        {
          width: '100%',
          ease: 'power1.inOut',
          duration: 2.2,
          scrollTrigger: {
            trigger: '#timeline-steps-horizontal',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Stagger light up nodes and cards
      TIMELINE_STEPS.forEach((_, idx) => {
        gsap.fromTo(`.step-node-${idx}`,
          { scale: 0.8, borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-sec)', color: 'var(--accent)' },
          {
            scale: 1.1,
            borderColor: 'var(--accent)',
            backgroundColor: 'var(--accent)',
            color: '#ffffff',
            delay: idx * 0.3,
            duration: 0.5,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: '#timeline-steps-horizontal',
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );

        gsap.fromTo(`.step-card-${idx}`,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            delay: idx * 0.3 + 0.15,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#timeline-steps-horizontal',
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" className="section" ref={containerRef} style={{ background: 'var(--bg-main)', overflow: 'hidden' }}>
      {/* Title */}
      <h2 className="section-title">The Repair Journey</h2>
      <p className="section-subtitle">
        We make fixing your device quick and stress-free. Here is exactly what happens when you bring your phone to us.
      </p>

      {/* Horizontal View */}
      <div 
        id="timeline-steps-horizontal"
        className="desktop-timeline-only"
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '40px 0',
          width: '100%',
          marginTop: '40px'
        }}
      >
        {/* Background Track Line */}
        <div 
          className="timeline-track-line"
          style={{
            position: 'absolute',
            top: '100px',
            left: '5%',
            right: '5%',
            height: '4px',
            background: 'rgba(20, 45, 227, 0.08)',
            borderRadius: '2px',
            zIndex: 1
          }}
        ></div>

        {/* GSAP Animated Fill Line Wrapper */}
        <div 
          className="timeline-progress-wrapper"
          style={{
            position: 'absolute',
            top: '100px',
            left: '5%',
            right: '5%',
            height: '4px',
            zIndex: 2
          }}
        >
          <div 
            className="active-progress-line"
            style={{
              width: '0%',
              height: '100%',
              background: 'linear-gradient(to right, var(--accent), #00d2ff)',
              borderRadius: '2px'
            }}
          ></div>
        </div>

        {/* Step Modules */}
        {TIMELINE_STEPS.map((step, index) => (
          <div 
            key={index}
            className="timeline-step-module"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: `${90 / TIMELINE_STEPS.length}%`,
              position: 'relative',
              zIndex: 3,
              textAlign: 'center',
              padding: '0 10px'
            }}
          >
            {/* Phase Badge & Step Title */}
            <div style={{ marginBottom: '20px', minHeight: '55px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Phase 0{index + 1}
              </span>
              <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '4px 0 0', color: 'var(--text-main)' }}>
                {step.title}
              </h3>
            </div>

            {/* Step Node */}
            <div 
              className={`step-node-${index}`}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '3px solid var(--border-color)',
                background: 'var(--bg-sec)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-normal)',
                marginBottom: '25px',
                flexShrink: 0
              }}
            >
              {step.icon}
            </div>

            {/* Description Card */}
            <div 
              className={`step-card-${index} glass-card`}
              style={{
                padding: '20px 15px',
                borderRadius: '20px',
                width: '100%',
                minHeight: '120px',
                border: '1px solid var(--border-color)'
              }}
            >
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .desktop-timeline-only {
          display: flex !important;
          position: relative;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
        }
        
        @media (max-width: 991px) {
          .desktop-timeline-only {
            justify-content: flex-start !important;
            gap: 20px !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            padding: 40px 20px !important;
            /* Hide scrollbar */
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .desktop-timeline-only::-webkit-scrollbar {
            display: none;
          }
          
          .timeline-step-module {
            width: 250px !important;
            flex-shrink: 0 !important;
            scroll-snap-align: center !important;
          }
          
          .timeline-track-line {
            width: 1350px !important;
            left: 125px !important;
            right: auto !important;
          }
          
          .timeline-progress-wrapper {
            width: 1350px !important;
            left: 125px !important;
            right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

