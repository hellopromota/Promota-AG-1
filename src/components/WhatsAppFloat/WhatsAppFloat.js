'use client';

import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppFloat.module.css';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.link/k94x76"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Chat on WhatsApp"
      id="whatsapp-float"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className={styles.tooltip}>Chat with us</span>
    </a>
  );
}
