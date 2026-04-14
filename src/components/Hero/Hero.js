'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '5+', label: 'Years Experience' },
  { number: '30+', label: 'Happy Clients' },
  { number: '360°', label: 'Digital Solutions' },
];

export default function Hero() {
  const heroRef = useRef(null);

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

    const elements = heroRef.current?.querySelectorAll(`.${styles.animate}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      {/* Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={`${styles.badge} ${styles.animate}`}>
            <Sparkles size={14} />
            <span>Your Growth Partner Since 2020</span>
          </div>

          <h1 className={`${styles.title} ${styles.animate}`}>
            Grow Your Brand{' '}
            <span className={styles.titleAccent}>
              with 360°
              <svg className={styles.underline} viewBox="0 0 200 12" fill="none">
                <path d="M2 8.5C30 3.5 70 1.5 100 4.5C130 7.5 170 9.5 198 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            <br />
            Digital Marketing
          </h1>

          <p className={`${styles.subtitle} ${styles.animate}`}>
            We help businesses and brands grow online with comprehensive digital solutions —
            from social media marketing to custom SaaS tools, AI agents, SEO, and paid advertising.
          </p>

          <div className={`${styles.actions} ${styles.animate}`}>
            <a
              href="https://wa.link/k94x76"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="hero-cta-primary"
            >
              Start Your Journey <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-outline btn-lg" id="hero-cta-secondary">
              <Play size={16} /> Explore Services
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`${styles.statsBar} ${styles.animate}`}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
