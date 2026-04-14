import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft, Check, ChevronDown, Star, Sparkles } from 'lucide-react';
import { getToolBySlug, getAllSlugs, saasTools } from '@/data/saasTools';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat';
import SaasDetailClient from './SaasDetailClient';
import styles from './detail.module.css';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  return {
    title: `${tool.name} — ${tool.tagline} | Promota SaaS`,
    description: tool.heroDescription,
  };
}

export default async function SaasDetailPage({ params }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const Icon = tool.icon;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className={styles.hero}
          style={{
            background: `linear-gradient(180deg, ${tool.gradientFrom} 0%, var(--color-bg) 100%)`,
          }}
        >
          <div className={`container ${styles.heroContainer}`}>
            <Link href="/saas" className={styles.backLink}>
              <ArrowLeft size={16} /> All SaaS Solutions
            </Link>

            <div className={styles.heroContent}>
              <div
                className={styles.heroIcon}
                style={{ background: tool.color }}
              >
                <Icon size={48} color={tool.accentColor} strokeWidth={1.5} />
              </div>

              <div className={styles.badge}>
                <Sparkles size={14} />
                <span>{tool.tagline}</span>
              </div>

              <h1 className={styles.heroTitle}>{tool.heroTitle}</h1>
              <p className={styles.heroDesc}>{tool.heroDescription}</p>

              <div className={styles.heroActions}>
                <a
                  href="https://wa.link/k94x76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Start Free Trial <ArrowRight size={16} />
                </a>
                <a href="#pricing" className="btn btn-outline btn-lg">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={`section ${styles.featuresSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className="section-label">Features</span>
              <h2 className="heading-section">
                Everything You Need,{' '}
                <span className="text-gradient">Nothing You Don&apos;t</span>
              </h2>
              <p className={styles.sectionSubtext}>
                {tool.name} comes packed with powerful features to streamline your operations and delight your customers.
              </p>
            </div>

            <div className={styles.featuresGrid}>
              {tool.detailedFeatures.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={index} className={styles.featureCard}>
                    <div
                      className={styles.featureIconWrap}
                      style={{ background: tool.color }}
                    >
                      <FeatureIcon size={22} color={tool.accentColor} strokeWidth={1.8} />
                    </div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className={`section ${styles.pricingSection}`} id="pricing">
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className="section-label">Pricing</span>
              <h2 className="heading-section">
                Simple, Transparent{' '}
                <span className="text-gradient">Pricing</span>
              </h2>
              <p className={styles.sectionSubtext}>
                Choose the plan that fits your business. All plans include a 14-day free trial.
              </p>
            </div>

            <div className={styles.pricingGrid}>
              {tool.pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`${styles.pricingCard} ${plan.popular ? styles.pricingPopular : ''}`}
                >
                  {plan.popular && (
                    <div className={styles.popularBadge}>
                      <Star size={12} /> Most Popular
                    </div>
                  )}

                  <div className={styles.planHeader}>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <p className={styles.planDesc}>{plan.description}</p>
                  </div>

                  <div className={styles.planPrice}>
                    <span className={styles.planCurrency}>₹</span>
                    <span className={styles.planAmount}>{plan.price}</span>
                    <span className={styles.planPeriod}>{plan.period}</span>
                  </div>

                  <ul className={styles.planFeatures}>
                    {plan.features.map((feature, fi) => (
                      <li key={fi}>
                        <Check size={14} className={styles.planCheck} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.link/k94x76"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} ${styles.planBtn}`}
                  >
                    Get Started <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={`section ${styles.faqSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className="section-label">FAQ</span>
              <h2 className="heading-section">
                Frequently Asked{' '}
                <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <SaasDetailClient faqs={tool.faqs} accentColor={tool.accentColor} />
          </div>
        </section>

        {/* Other Tools */}
        <section className={`section ${styles.otherTools}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className="section-label">Explore More</span>
              <h2 className="heading-section">Other SaaS Solutions</h2>
            </div>

            <div className={styles.otherGrid}>
              {saasTools
                .filter((t) => t.slug !== slug)
                .map((otherTool, index) => {
                  const OtherIcon = otherTool.icon;
                  return (
                    <Link
                      key={index}
                      href={`/saas/${otherTool.slug}`}
                      className={styles.otherCard}
                    >
                      <div
                        className={styles.otherIcon}
                        style={{ background: otherTool.color }}
                      >
                        <OtherIcon size={24} color={otherTool.accentColor} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className={styles.otherName}>{otherTool.name}</h3>
                        <p className={styles.otherTagline}>{otherTool.tagline}</p>
                      </div>
                      <ArrowRight size={16} className={styles.otherArrow} />
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
