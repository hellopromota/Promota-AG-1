'use client';

import { useEffect, useRef } from 'react';
import {
  Zap,
  Shield,
  HeartHandshake,
  TrendingUp,
  Clock,
  Lightbulb,
} from 'lucide-react';
import styles from './WhyChoose.module.css';

const reasons = [
  {
    icon: Clock,
    title: 'Since 2020',
    description: '5+ years of experience delivering exceptional digital marketing results for businesses across India.',
  },
  {
    icon: Zap,
    title: '360° Solutions',
    description: 'One-stop shop for all your digital needs — marketing, development, SaaS, AI, SEO & paid ads.',
  },
  {
    icon: Lightbulb,
    title: 'Custom Approach',
    description: 'No cookie-cutter strategies. Every solution is tailored specifically to your business goals.',
  },
  {
    icon: TrendingUp,
    title: 'Results Driven',
    description: 'We focus on measurable outcomes — real traffic, real leads, and real revenue growth.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: 'Your success is our priority. Get direct access to your team with responsive communication.',
  },
  {
    icon: Shield,
    title: 'Transparent Pricing',
    description: 'Clear, honest pricing in ₹ with no hidden fees. You always know exactly what you\'re paying for.',
  },
];

export default function WhyChoose() {
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

  return (
    <section className={`section ${styles.whyChoose}`} id="why-us" ref={sectionRef}>
      <div className="container">
        <div className={styles.layout}>
          <div className={`${styles.leftCol} ${styles.animate}`}>
            <span className="section-label">Why Promota</span>
            <h2 className="heading-section">
              We Don&apos;t Just Market.{' '}
              <span className="text-gradient">We Partner for Growth.</span>
            </h2>
            <p className={styles.description}>
              Led by Deepak Maurya, Promota brings years of hands-on experience and a passion for
              helping businesses thrive in the digital world. We treat every client like a partner.
            </p>
            <div className={styles.highlight}>
              <div className={styles.highlightNumber}>50+</div>
              <div className={styles.highlightText}>
                <strong>Projects Completed</strong>
                <span>with amazing results</span>
              </div>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.reasonsGrid}>
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className={`${styles.reasonCard} ${styles.animate}`}
                    style={{ transitionDelay: `${index * 0.08}s` }}
                  >
                    <div className={styles.reasonIcon}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className={styles.reasonTitle}>{reason.title}</h4>
                      <p className={styles.reasonDesc}>{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
