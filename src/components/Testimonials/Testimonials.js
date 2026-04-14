'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Founder, PetVet Clinic',
    content:
      'Promota built us an amazing appointment booking system that completely transformed how we manage our clinic. Our bookings increased by 3x within the first month!',
    rating: 5,
    initials: 'RS',
  },
  {
    name: 'Priya Gupta',
    role: 'Owner, Spice Garden Restaurant',
    content:
      'Their social media marketing and custom reservation tool changed everything for us. We went from empty tables to fully booked weekends. Incredible team!',
    rating: 5,
    initials: 'PG',
  },
  {
    name: 'Amit Verma',
    role: 'CEO, TechFlow Solutions',
    content:
      'The SEO and paid advertising campaigns from Promota delivered outstanding results. Our organic traffic grew by 200% in just 6 months. Highly recommended!',
    rating: 5,
    initials: 'AV',
  },
  {
    name: 'Neha Singh',
    role: 'Director, FashionAura',
    content:
      'Working with Promota has been a game-changer for our brand. Their 360° approach to digital marketing helped us reach customers we never thought possible.',
    rating: 5,
    initials: 'NS',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className={`section ${styles.testimonials}`} ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} ${styles.animate}`}>
          <span className="section-label">Testimonials</span>
          <h2 className="heading-section">
            Loved by{' '}
            <span className="text-gradient">Our Clients</span>
          </h2>
        </div>

        <div className={`${styles.carousel} ${styles.animate}`}>
          <div className={styles.quoteIcon}>
            <Quote size={48} strokeWidth={1} />
          </div>

          <div className={styles.slideContainer}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${styles.slide} ${index === current ? styles.active : ''}`}
              >
                <div className={styles.stars}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className={styles.quote}>&ldquo;{testimonial.content}&rdquo;</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{testimonial.initials}</div>
                  <div>
                    <div className={styles.authorName}>{testimonial.name}</div>
                    <div className={styles.authorRole}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.controls}>
            <button
              onClick={handlePrev}
              className={styles.navBtn}
              aria-label="Previous testimonial"
              id="testimonial-prev"
            >
              <ChevronLeft size={20} />
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === current ? styles.dotActive : ''}`}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className={styles.navBtn}
              aria-label="Next testimonial"
              id="testimonial-next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
