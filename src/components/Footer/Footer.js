'use client';

import Link from 'next/link';
import {
  Heart,
  ArrowUp,
} from 'lucide-react';
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
} from '@/components/icons/SocialIcons';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'SaaS Solutions', href: '/saas' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Contact', href: '/#contact' },
];

const services = [
  'Social Media Marketing',
  'Web Development',
  'SaaS Solutions',
  'AI Agents',
  'SEO Optimization',
  'Paid Advertising',
];

const socialLinks = [
  { Icon: InstagramIcon, href: 'https://www.instagram.com/hellopromota', label: 'Instagram' },
  { Icon: FacebookIcon, href: 'http://www.facebook.com/hipromota', label: 'Facebook' },
  { Icon: LinkedinIcon, href: 'http://www.linkedin.com/company/hellopromota', label: 'LinkedIn' },
  { Icon: YoutubeIcon, href: 'http://www.youtube.com/@hellopromota', label: 'YouTube' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <span className={styles.logoText}>Promota</span>
              <img src="/images/logo.png" alt="" className={styles.logo} />
            </div>
            <p className={styles.brandDesc}>
              Your 360° digital marketing partner. Helping businesses and brands grow online since 2020.
            </p>
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
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.linkList}>
              {services.map((service, index) => (
              <li key={index}>
                  <Link href="/#services" className={styles.link}>{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="tel:+917906414250" className={styles.link}>+91 7906414250</a>
              </li>
              <li>
                <a href="mailto:promotaindia@gmail.com" className={styles.link}>promotaindia@gmail.com</a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/GejgJv1mND2DY39d7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Bareilly, UP, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Promota. Made with{' '}
            <Heart size={14} fill="currentColor" className={styles.heart} /> in Bareilly
          </p>
          <button
            onClick={scrollToTop}
            className={styles.scrollTop}
            aria-label="Scroll to top"
            id="scroll-to-top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
