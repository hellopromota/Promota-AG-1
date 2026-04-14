'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './detail.module.css';

export default function SaasDetailClient({ faqs, accentColor }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${openIndex === index ? styles.faqOpen : ''}`}
        >
          <button
            className={styles.faqQuestion}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            aria-expanded={openIndex === index}
            id={`faq-${index}`}
          >
            <span>{faq.question}</span>
            <ChevronDown size={18} className={styles.faqChevron} />
          </button>
          <div className={styles.faqAnswer}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
