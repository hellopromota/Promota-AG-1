'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Star,
} from 'lucide-react';
import { saasTools } from '@/data/saasTools';
import styles from './SaasShowcase.module.css';

export default function SaasShowcase() {
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
    <section className={`section ${styles.saas}`} id="saas" ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} ${styles.animate}`}>
          <span className="section-label">SaaS Solutions</span>
          <h2 className="heading-section">
            Custom Tools{' '}
            <span className="text-gradient">Built for Your Business</span>
          </h2>
          <p className={styles.headerSubtext}>
            We build tailored SaaS applications to solve your unique business challenges.
            From productivity tools to payment automation — we create tools that work for you.
          </p>
        </div>

        <div className={styles.grid}>
          {saasTools.map((tool, index) => {
            const Icon = tool.icon;
            const isPopular = tool.pricing[1]?.popular;
            return (
              <div
                key={index}
                className={`${styles.card} ${isPopular ? styles.popular : ''} ${styles.animate}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {isPopular && (
                  <div className={styles.popularBadge}>
                    <Star size={12} /> Most Popular
                  </div>
                )}

                <div className={styles.cardHeader}>
                  <div
                    className={styles.iconWrap}
                    style={{ background: tool.color }}
                  >
                    <Icon size={28} color={tool.accentColor} strokeWidth={1.8} />
                  </div>
                  <h3 className={styles.cardName}>{tool.name}</h3>
                  <p className={styles.cardTagline}>{tool.tagline}</p>
                </div>

                <p className={styles.cardDesc}>{tool.description}</p>

                <ul className={styles.features}>
                  {tool.features.map((feature, fi) => (
                    <li key={fi} className={styles.featureItem}>
                      <Check size={14} className={styles.checkIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.priceWrap}>
                  <div className={styles.price}>
                    <span className={styles.currency}>₹</span>
                    <span className={styles.priceValue}>{tool.pricing[0].price}</span>
                    <span className={styles.pricePeriod}>/month</span>
                  </div>
                </div>

                <Link
                  href={`/saas/${tool.slug}`}
                  className={`btn ${isPopular ? 'btn-primary' : 'btn-outline'} ${styles.cardBtn}`}
                >
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className={`${styles.customCta} ${styles.animate}`}>
          <div className={styles.customCtaContent}>
            <h3>Need a custom solution?</h3>
            <p>We build bespoke SaaS tools tailored exactly to your business workflow and needs.</p>
          </div>
          <Link href="/saas" className="btn btn-accent btn-lg">
            View All Solutions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
