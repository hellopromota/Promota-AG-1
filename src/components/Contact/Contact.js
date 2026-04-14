'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
} from '@/components/icons/SocialIcons';
import styles from './Contact.module.css';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7906414250',
    href: 'tel:+917906414250',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'promotaindia@gmail.com',
    href: 'mailto:promotaindia@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bareilly, Uttar Pradesh, India',
    href: 'https://maps.app.goo.gl/GejgJv1mND2DY39d7',
  },
];

const socialLinks = [
  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/hellopromota', color: '#E4405F' },
  { Icon: FacebookIcon, label: 'Facebook', href: 'http://www.facebook.com/hipromota', color: '#1877F2' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'http://www.linkedin.com/company/hellopromota', color: '#0A66C2' },
  { Icon: YoutubeIcon, label: 'YouTube', href: 'http://www.youtube.com/@hellopromota', color: '#FF0000' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animate}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi Promota! 👋\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/917906414250?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className={`section ${styles.contact}`} id="contact" ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} ${styles.animate}`}>
          <span className="section-label">Get in Touch</span>
          <h2 className="heading-section">
            Let&apos;s Grow{' '}
            <span className="text-gradient">Together</span>
          </h2>
          <p className={styles.headerSubtext}>
            Ready to take your brand to the next level? Reach out to us and let&apos;s discuss how we can help.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Contact Form */}
          <div className={`${styles.formCard} ${styles.animate}`}>
            <h3 className={styles.formTitle}>Send us a message</h3>
            <form onSubmit={handleSubmit} className={styles.form} id="contact-form">
              <div className={styles.inputGroup}>
                <label htmlFor="contact-name" className={styles.label}>Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-message" className={styles.label}>Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className={styles.textarea}
                />
              </div>
              <button
                type="submit"
                className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                id="contact-submit"
              >
                {submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.infoCol}>
            <div className={`${styles.infoCards} ${styles.animate}`}>
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoCard}
                  >
                    <div className={styles.infoIcon}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className={styles.infoLabel}>{item.label}</div>
                      <div className={styles.infoValue}>{item.value}</div>
                    </div>
                    <ArrowUpRight size={16} className={styles.infoArrow} />
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className={`${styles.socialSection} ${styles.animate}`}>
              <h4 className={styles.socialTitle}>Follow Us</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => {
                  const Icon = social.Icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={social.label}
                      style={{ '--hover-color': social.color }}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.link/k94x76"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.whatsappCta} ${styles.animate}`}
            >
              <MessageCircle size={24} />
              <div>
                <strong>Quick Chat on WhatsApp</strong>
                <span>Get a response within minutes</span>
              </div>
            </a>

            {/* Map */}
            <div className={`${styles.mapWrap} ${styles.animate}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112370.89692498047!2d79.35879035!3d28.3670355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a007a69bfbfe13%3A0x7067bd8dca2e39e5!2sBareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Promota Location - Bareilly"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
