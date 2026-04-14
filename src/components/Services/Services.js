'use client';

import { useEffect, useRef } from 'react';
import {
  Share2,
  Code2,
  Database,
  Bot,
  Search,
  Megaphone,
  ArrowUpRight,
} from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'Strategic content creation, community management, and growth campaigns across Instagram, Facebook, LinkedIn, and more.',
    color: '#E8EFFF',
    iconColor: '#6B8ADB',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Modern, responsive websites and web applications built with cutting-edge technology for optimal performance.',
    color: '#EDE8FF',
    iconColor: '#8B6BDB',
  },
  {
    icon: Database,
    title: 'SaaS Solutions',
    description:
      'Custom SaaS tools tailored to your business needs — appointment systems, management dashboards, and more.',
    color: '#E8F7FF',
    iconColor: '#6BB8DB',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description:
      'Intelligent AI-powered chatbots and automation agents that work 24/7 to engage customers and streamline operations.',
    color: '#FFE8F3',
    iconColor: '#DB6B9E',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Data-driven SEO strategies to improve your search rankings, drive organic traffic, and increase visibility.',
    color: '#E8FFE8',
    iconColor: '#6BDB8B',
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    description:
      'High-ROI ad campaigns on Meta (Facebook & Instagram) and Google Ads to reach your target audience effectively.',
    color: '#FFF3E8',
    iconColor: '#DB9E6B',
  },
];

export default function Services() {
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
    <section className={`section ${styles.services}`} id="services" ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} ${styles.animate}`}>
          <span className="section-label">What We Do</span>
          <h2 className="heading-section">
            360° Digital Solutions{' '}
            <span className="text-gradient">for Your Growth</span>
          </h2>
          <p className={styles.headerSubtext}>
            From strategy to execution, we provide end-to-end digital marketing services
            to help your brand thrive in the digital space.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${styles.card} ${styles.animate}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div
                  className={styles.iconWrap}
                  style={{ background: service.color }}
                >
                  <Icon size={24} color={service.iconColor} strokeWidth={1.8} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <a href="#contact" className={styles.cardLink}>
                  Learn More <ArrowUpRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
