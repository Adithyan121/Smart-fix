import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const emailjsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,20}$/.test(formData.phone)) {
      tempErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Enter a valid email address';
    }
    if (!formData.service) tempErrors.service = 'Please select a service';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSubmitError('');
    // Clear error as typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (validate()) {
      const hasEmailjsConfig = Object.values(emailjsConfig).every(
        value => value && !value.includes('xxxx')
      );

      if (!hasEmailjsConfig) {
        setSubmitError('Email service is not configured yet. Please update the EmailJS values in .env.');
        return;
      }

      setIsSubmitting(true);

      try {
        await emailjs.sendForm(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          formRef.current,
          { publicKey: emailjsConfig.publicKey }
        );

        setSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            email: '',
            service: '',
            message: ''
          });
          setSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('EmailJS submit failed:', error);
        setSubmitError('Sorry, we could not send your inquiry right now. Please try WhatsApp or submit again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleWhatsApp = () => {
    const baseText = `Hi Smart Fix! I'd like to inquire about my device. \n\nI am  ${formData.name}\nService Required: ${formData.service}\nDetails: ${formData.message}`;
    const encodedText = encodeURIComponent(baseText);
    window.open(`https://wa.me/+917994770102?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-sec)' }}>
      {/* Title */}
      <h2 className="section-title">Schedule A Repair</h2>
      <p className="section-subtitle">
        Fill out the quick form below for a free estimate or chat directly with a service agent on WhatsApp.
      </p>

      <div style={{ maxWidth: '650px', margin: '0 auto' }}>
        <div className="neumorphic-card" style={{ padding: '40px' }}>
          
          {submitted ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              padding: '40px 0',
              textAlign: 'center'
            }}>
              <div style={{ color: '#10b981', animation: 'scaleUp 0.5s ease-out' }}>
                <CheckCircle2 size={64} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>Inquiry Received!</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '350px' }}>
                Our technician team has received your details. We will contact you at your email or phone shortly with an estimate.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <input type="hidden" name="to_email" value="adithyang24@gmail.com" />

              {/* Form Input: Name */}
              <div className="input-group" style={{ position: 'relative', textAlign: 'left' }}>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder=" " /* Empty space trigger for CSS label floating */
                  className={`styled-input ${errors.name ? 'error' : ''}`}
                />
                <label className="styled-label">Your Name</label>
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              {/* Flex row for Phone & Email */}
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {/* Form Input: Phone */}
                <div className="input-group" style={{ position: 'relative', textAlign: 'left' }}>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className={`styled-input ${errors.phone ? 'error' : ''}`}
                  />
                  <label className="styled-label">Phone Number</label>
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                {/* Form Input: Email */}
                <div className="input-group" style={{ position: 'relative', textAlign: 'left' }}>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className={`styled-input ${errors.email ? 'error' : ''}`}
                  />
                  <label className="styled-label">Email Address</label>
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              {/* Form Dropdown: Service Required */}
              <div className="input-group" style={{ position: 'relative', textAlign: 'left' }}>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className={`styled-input styled-select ${errors.service ? 'error' : ''}`}
                  style={{
                    appearance: 'none',
                    background: 'var(--bg-main)'
                  }}
                >
                  <option value="" disabled hidden></option>
                  <option value="Mobile Phone Sales">Buy  a new or used Mobile Phone or Accessories</option>
                  <option value="Screen Replacement">Screen Replacement</option>
                  <option value="Battery Replacement">Battery Replacement</option>
                  <option value="Water Damage Repair">Water Damage Repair</option>
                  <option value="Charging Port Repair">Charging Port Repair</option>
                  <option value="Software Installation">Software Installation</option>
                  <option value="All IC Works">IC Works</option>
                  <option value="Network Issues">Network Issues</option>
                </select>
                <label className="styled-label select-label">Service Required</label>
                {errors.service && <span className="error-text">{errors.service}</span>}
              </div>

              {/* Form Input: Message */}
              <div className="input-group" style={{ position: 'relative', textAlign: 'left' }}>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder=" "
                  className="styled-input"
                  style={{ resize: 'vertical' }}
                />
                <label className="styled-label">Describe the issue (Optional)</label>
              </div>

              {submitError && <div className="submit-error">{submitError}</div>}

              {/* Buttons panel */}
              <div className="button-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'} <Send size={18} />
                </button>
                <button 
                  type="button" 
                  onClick={handleWhatsApp}
                  className="btn-secondary" 
                  style={{ 
                    justifyContent: 'center',
                    backgroundColor: '#25d366',
                    borderColor: '#25d366',
                    color: '#ffffff',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#20ba56';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#25d366';
                  }}
                >
                  WhatsApp Chat <MessageCircle size={18} />
                </button>
              </div>

            </form>
          )}

        </div>
      </div>

      <style>{`
        /* Floating label styles */
        .input-group {
          margin-bottom: 5px;
        }
        .styled-input {
          width: 100%;
          padding: 16px 20px;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-main);
          color: var(--text-main);
          font-family: var(--font-inter);
          font-size: 15px;
          outline: none;
          transition: var(--transition-fast);
          box-shadow: var(--neu-inset);
        }
        .styled-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(20, 45, 227, 0.15), var(--neu-inset);
        }
        .styled-input.error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15), var(--neu-inset);
        }
        
        .styled-label {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          font-family: var(--font-inter);
          font-size: 15px;
          pointer-events: none;
          transition: var(--transition-fast);
          background-color: transparent;
        }

        /* Float the label up */
        .styled-input:focus ~ .styled-label,
        .styled-input:not(:placeholder-shown) ~ .styled-label {
          top: 0;
          left: 15px;
          transform: translateY(-50%) scale(0.85);
          padding: 0 8px;
          background-color: var(--bg-sec);
          color: var(--accent);
          font-weight: 600;
        }

        /* Adjust labels for select boxes and textareas */
        .styled-select:focus ~ .select-label,
        .styled-select:valid ~ .select-label {
          top: 0;
          left: 15px;
          transform: translateY(-50%) scale(0.85);
          padding: 0 8px;
          background-color: var(--bg-sec);
          color: var(--accent);
          font-weight: 600;
        }

        textarea.styled-input ~ .styled-label {
          top: 25px;
        }
        textarea.styled-input:focus ~ .styled-label,
        textarea.styled-input:not(:placeholder-shown) ~ .styled-label {
          top: 0;
        }

        .error-text {
          font-size: 12px;
          color: #ef4444;
          display: block;
          margin-top: 5px;
          margin-left: 8px;
        }

        .submit-error {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(239, 68, 68, 0.25);
          background: rgba(239, 68, 68, 0.08);
          color: #b91c1c;
          font-size: 14px;
          line-height: 1.5;
          text-align: left;
        }

        @keyframes scaleUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 768px) {
          .form-row, .button-group {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
