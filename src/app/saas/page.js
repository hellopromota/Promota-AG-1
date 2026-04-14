import Link from 'next/link';
import { ArrowRight, Check, Star, Sparkles } from 'lucide-react';
import { saasTools } from '@/data/saasTools';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat';
import styles from './saas.module.css';

export const metadata = {
  title: 'SaaS Solutions — Custom Business Tools | Promota',
  description:
    'Discover our custom-built SaaS tools — FocusBoard, ChasePay, PetCare Pro. Tailored web applications for your business with pricing starting at ₹499/month.',
};

export default function SaasPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <div className={styles.heroOrb1}></div>
            <div className={styles.heroOrb2}></div>
          </div>
          <div className={`container ${styles.heroContent}`}>
            <div className={styles.badge}>
              <Sparkles size={14} />
              <span>SaaS Solutions by Promota</span>
            </div>
            <h1 className={styles.heroTitle}>
              Custom SaaS Tools{' '}
              <span className="text-gradient">Built for Your Business</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We design and develop tailored web applications that solve real business problems.
              From productivity tools to payment automation — we build tools that work for you.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className={`section ${styles.toolsSection}`}>
          <div className="container">
            <div className={styles.toolsGrid}>
              {saasTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div key={index} className={styles.toolCard}>
                    <div className={styles.toolCardHeader} style={{ background: `linear-gradient(135deg, ${tool.gradientFrom}, ${tool.gradientTo})` }}>
                      <div className={styles.toolIconLarge}>
                        <Icon size={36} color={tool.accentColor} strokeWidth={1.5} />
                      </div>
                      <h2 className={styles.toolName}>{tool.name}</h2>
                      <p className={styles.toolTagline}>{tool.tagline}</p>
                    </div>

                    <div className={styles.toolCardBody}>
                      <p className={styles.toolDesc}>{tool.description}</p>

                      <ul className={styles.toolFeatures}>
                        {tool.features.map((feature, fi) => (
                          <li key={fi}>
                            <Check size={14} className={styles.checkIcon} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={styles.toolPricing}>
                        <span className={styles.pricingLabel}>Starting from</span>
                        <div className={styles.priceRow}>
                          <span className={styles.currency}>₹</span>
                          <span className={styles.priceValue}>{tool.pricing[0].price}</span>
                          <span className={styles.pricePeriod}>/month</span>
                        </div>
                      </div>

                      <Link href={`/saas/${tool.slug}`} className={`btn btn-primary ${styles.toolBtn}`}>
                        View Details <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Custom Solution CTA */}
        <section className={`section ${styles.ctaSection}`}>
          <div className="container">
            <div className={styles.ctaBanner}>
              <div className={styles.ctaContent}>
                <h2>Don&apos;t see what you need?</h2>
                <p>
                  We build completely custom SaaS solutions tailored to your specific business workflow.
                  Tell us your problem — we&apos;ll build the solution.
                </p>
              </div>
              <div className={styles.ctaActions}>
                <a
                  href="https://wa.link/k94x76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-lg"
                >
                  Let&apos;s Discuss <ArrowRight size={16} />
                </a>
                <Link href="/#contact" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
