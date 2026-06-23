import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import faqsData from '../data/faqs.json';

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="section" style={{ background: 'var(--bg-main)' }}>
      {/* Title */}
      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-subtitle">
        Have questions about our service? Here are answers to our most common customer inquiries.
      </p>

      {/* Accordion List */}
      <div style={{
        maxWidth: '750px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {faqsData.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div 
              key={index}
              className="faq-item"
              style={{
                borderRadius: '20px',
                background: 'var(--bg-sec)',
                border: '1px solid var(--border-color)',
                boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                overflow: 'hidden',
                transition: 'var(--transition-normal)'
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 30px',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: isOpen ? 'var(--accent)' : 'var(--text-main)',
                  transition: 'var(--transition-fast)'
                }}>
                  {faq.question}
                </span>
                <span style={{
                  color: isOpen ? 'var(--accent)' : 'var(--text-muted)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ChevronDown size={20} />
                </span>
              </button>

              {/* Answer Content */}
              <div 
                className={`accordion-content ${isOpen ? 'open' : ''}`}
                style={{
                  maxHeight: isOpen ? '200px' : '0px',
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  padding: isOpen ? '0 30px 24px' : '0 30px 0',
                  transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s ease, opacity 0.3s ease',
                  textAlign: 'left',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-inter)'
                }}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
