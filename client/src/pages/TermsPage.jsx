import React from 'react';
import { ArrowLeft } from 'lucide-react';
import TermsCollapsible from '../components/TermsCollapsible';

export default function TermsPage() {
  return (
    <div style={{
      paddingTop: '100px', // Extra space for the fixed navbar
      background: 'var(--bg-sec)', // Keep aligned with TermsCollapsible theme
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1000px', // Slightly wider to align with terms container layout
        padding: '20px 24px 0',
        display: 'flex',
        justifyContent: 'flex-start'
      }}>
        <a 
          href="#/" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-poppins)',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--text-muted)',
            padding: '8px 16px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-main)',
            boxShadow: 'var(--shadow-sm)',
            cursor: 'pointer',
            transition: 'var(--transition-fast)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--accent)';
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.transform = 'translateX(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>
      </div>
      <TermsCollapsible />
    </div>
  );
}
