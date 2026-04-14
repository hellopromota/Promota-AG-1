'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'SaaS Solutions', href: '/saas' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Promota Home">
          <img src="/images/logo.png" alt="Promota" className={styles.logoImage} />
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.link/k94x76"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.ctaBtn}`}
        >
          Get Started <ArrowRight size={16} />
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link, index) => (
            <li key={link.label} style={{ animationDelay: `${index * 0.05}s` }}>
              <Link
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.link/k94x76"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary btn-lg ${styles.mobileCta}`}
          onClick={() => setIsMobileOpen(false)}
        >
          Get Started <ArrowRight size={16} />
        </a>
      </div>
    </nav>
  );
}
