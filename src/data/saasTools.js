import {
  Calendar,
  Users,
  BarChart3,
  PawPrint,
  Target,
  Receipt,
  Bell,
  FileText,
  CreditCard,
  Clock,
  Star,
  Shield,
  Zap,
  Smartphone,
  BarChart,
  CheckCircle,
  MessageSquare,
  Settings,
  Lightbulb,
  ListTodo,
  Timer,
  Brain,
  TrendingUp,
  Sparkles,
  Mail,
  Send,
  AlertTriangle,
  LineChart,
  Repeat,
  UserCheck,
} from 'lucide-react';

export const saasTools = [
  {
    slug: 'focusboard',
    icon: Target,
    name: 'FocusBoard',
    tagline: 'Productivity OS for Ambitious Minds',
    heroTitle: 'Stop Juggling Ideas. Start Shipping Projects.',
    heroDescription:
      'The productivity tool built for ambitious people who have too many ideas and not enough execution. Park your ideas, focus on ONE project, build daily routines, and actually finish what you start — with AI-powered weekly reviews.',
    description:
      'Park your ideas, focus on ONE project at a time, build daily routines, and get AI-powered weekly reviews. The productivity OS for people who can\'t stop starting.',
    color: '#F0EAFF',
    accentColor: '#7C5CDB',
    gradientFrom: '#F0EAFF',
    gradientTo: '#E0D4FF',
    features: [
      'Idea Parking Lot with Scoring',
      'Single Active Project Tracker',
      'Daily Routine Builder',
      'Morning & Evening Check-ins',
      'AI Weekly Reviews',
      'Anti-Overthinking Mode',
    ],
    detailedFeatures: [
      {
        icon: Lightbulb,
        title: 'Idea Parking Lot',
        description: 'Dump ALL your ideas here and get them out of your head. Each idea gets scored on time-to-money, effort, and your interest level — helping you pick ONE to pursue.',
      },
      {
        icon: Target,
        title: 'Active Project Tracker',
        description: 'Only ONE project is "active" at a time. Full roadmap, milestones, and daily tasks keep you laser-focused on what matters most right now.',
      },
      {
        icon: Timer,
        title: 'Daily Routine Builder',
        description: 'Set your daily time blocks — 9am–11am = FocusBoard, 11am–1pm = client work. FocusBoard reminds you what to do right now so you never waste a minute.',
      },
      {
        icon: ListTodo,
        title: 'Daily Check-ins',
        description: 'Every morning: "What are your 3 tasks today?" Every evening: "What did you complete? What blocked you?" Build accountability into your daily flow.',
      },
      {
        icon: Brain,
        title: 'AI Weekly Reviews',
        description: 'Every Sunday, AI analyzes your week — shows your progress, what slipped, patterns in your productivity, and generates next week\'s priorities automatically.',
      },
      {
        icon: Shield,
        title: 'Anti-Overthinking Mode',
        description: 'When you add a new idea mid-sprint, FocusBoard says: "Great idea! Parked. Now get back to your active project." No more shiny object syndrome.',
      },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '499',
        period: '/month',
        description: 'For getting started',
        features: [
          'Idea Parking Lot (up to 20 ideas)',
          '1 Active Project',
          'Daily check-ins',
          'Basic routine builder',
          'Email support',
        ],
        popular: false,
      },
      {
        name: 'Pro',
        price: '1,499',
        period: '/month',
        description: 'For serious builders',
        features: [
          'Unlimited ideas with scoring',
          '1 Active + archived projects',
          'AI Weekly Reviews',
          'Advanced routine builder',
          'Anti-Overthinking Mode',
          'Progress analytics',
          'Priority support',
        ],
        popular: true,
      },
      {
        name: 'Team',
        price: '3,999',
        period: '/month',
        description: 'For small teams & agencies',
        features: [
          'Everything in Pro',
          'Up to 10 team members',
          'Team dashboards',
          'Shared idea boards',
          'Manager weekly reports',
          'Slack integration',
          'Dedicated support',
        ],
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'Why can I only have ONE active project?',
        answer: 'That\'s the whole point! Research shows multitasking kills productivity. FocusBoard forces you to commit to one project, finish it (or consciously shelve it), then move to the next. Your parked ideas aren\'t going anywhere.',
      },
      {
        question: 'What is the Idea Parking Lot scoring system?',
        answer: 'Each idea gets scored on three dimensions: Time to Money (how quickly can this generate revenue?), Effort (how much work is involved?), and Your Interest (how excited are you?). This helps you objectively pick the best idea instead of chasing the newest one.',
      },
      {
        question: 'How does the Anti-Overthinking Mode work?',
        answer: 'Whenever you try to add a new idea while you have an active project, FocusBoard acknowledges the idea, parks it automatically, and redirects you back to your current project with an encouraging nudge. It\'s like having a productivity coach in your pocket.',
      },
      {
        question: 'Who is FocusBoard for?',
        answer: 'Anyone with ambition and too many ideas — freelancers juggling directions, entrepreneurs with 10 business ideas, digital marketers, students with side hustle dreams, and content creators who can\'t stay consistent.',
      },
      {
        question: 'Can I try it before paying?',
        answer: 'Yes! We offer a 14-day free trial of the Pro plan. No credit card required. Experience the full power of FocusBoard and see how much more you get done.',
      },
    ],
  },
  {
    slug: 'chasepay',
    icon: Receipt,
    name: 'ChasePay',
    tagline: 'Freelancer Invoice & Payment Chaser',
    heroTitle: 'Stop Chasing Payments. Let ChasePay Do It For You.',
    heroDescription:
      'Late payments are killing your cash flow. ChasePay sends professional invoices and automatically follows up with polite-to-firm reminders on day 3, 7, and 14 — so you get paid without the awkward conversations.',
    description:
      'Send invoices and let ChasePay auto-chase late payments with escalating follow-ups. No more awkward "just checking in" emails — get paid on time, every time.',
    color: '#E8FFF0',
    accentColor: '#3DB86E',
    gradientFrom: '#E8FFF0',
    gradientTo: '#D0F5DD',
    features: [
      'Professional Invoice Builder',
      'Auto Payment Reminders',
      'Escalating Follow-up Tones',
      'Payment Status Dashboard',
      'Multi-currency Support',
      'Client Payment Portal',
    ],
    detailedFeatures: [
      {
        icon: FileText,
        title: 'Professional Invoice Builder',
        description: 'Create beautiful, branded invoices in seconds. Add your logo, line items, taxes, and payment terms. Send directly via email with a one-click payment link.',
      },
      {
        icon: Send,
        title: 'Smart Auto-Chase Sequences',
        description: 'Client didn\'t pay? ChasePay automatically sends polite follow-ups on day 3, firmer reminders on day 7, and escalated messages on day 14 — you never manually chase again.',
      },
      {
        icon: TrendingUp,
        title: 'Escalating Tone Engine',
        description: 'Day 3: friendly nudge. Day 7: professional reminder. Day 14: firm follow-up. Each email escalates naturally so you maintain professionalism while getting results.',
      },
      {
        icon: BarChart3,
        title: 'Payment Dashboard',
        description: 'See all invoices at a glance — paid, pending, overdue, and total outstanding. Know exactly where your money is and which clients need attention.',
      },
      {
        icon: Repeat,
        title: 'Recurring Invoices',
        description: 'Set up recurring invoices for retainer clients. ChasePay sends them automatically each month and starts the chase sequence if payment is late.',
      },
      {
        icon: UserCheck,
        title: 'Client Payment Portal',
        description: 'Clients get a clean payment page with multiple payment options. One click to pay — no excuses. Track when they open the invoice and when they pay.',
      },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '799',
        period: '/month',
        description: 'For new freelancers',
        features: [
          'Up to 10 invoices/month',
          'Basic auto-chase (2 reminders)',
          'Email notifications',
          'Single currency',
          'Email support',
        ],
        popular: false,
      },
      {
        name: 'Professional',
        price: '2,499',
        period: '/month',
        description: 'For active freelancers',
        features: [
          'Unlimited invoices',
          'Full chase sequence (5 reminders)',
          'Escalating tone engine',
          'Recurring invoices',
          'Multi-currency support',
          'Payment analytics',
          'Priority support',
        ],
        popular: true,
      },
      {
        name: 'Agency',
        price: '5,999',
        period: '/month',
        description: 'For teams & agencies',
        features: [
          'Everything in Professional',
          'Up to 10 team members',
          'Custom branding per client',
          'Bulk invoicing',
          'API access',
          'Accounting integrations',
          'Dedicated account manager',
        ],
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'Will my clients know this is automated?',
        answer: 'No! Every email looks like it came from you personally. ChasePay sends from your email address with your name, signature, and branding. Clients see a professional follow-up, not a bot.',
      },
      {
        question: 'What if a client pays after the first reminder?',
        answer: 'ChasePay automatically detects payment and stops the chase sequence immediately. No more embarrassing "please pay" emails after someone has already paid.',
      },
      {
        question: 'Can I customize the follow-up emails?',
        answer: 'Absolutely! You can customize every email in the chase sequence — the timing, tone, and content. We provide proven templates that you can tweak to match your voice.',
      },
      {
        question: 'What payment methods are supported?',
        answer: 'Clients can pay via UPI, bank transfer, credit/debit cards, and popular wallets. We integrate with Razorpay and Stripe so your clients have multiple easy options.',
      },
      {
        question: 'Is this only for Indian freelancers?',
        answer: 'Not at all! ChasePay supports multi-currency invoicing and international payment gateways. Freelancers from anywhere in the world can use it to chase payments in any currency.',
      },
    ],
  },
  {
    slug: 'petcare-pro',
    icon: PawPrint,
    name: 'PetCare Pro',
    tagline: 'Clinic & Appointment Management',
    heroTitle: 'Complete Pet Hospital & Clinic Management',
    heroDescription:
      'Transform your veterinary practice with an all-in-one web application. Online appointment booking, patient records, billing, and clinic analytics — everything your pet hospital needs in one beautiful dashboard.',
    description:
      'Complete pet hospital management — online appointment booking, patient records, billing, and clinic analytics all in one beautiful dashboard.',
    color: '#FFE8F3',
    accentColor: '#DB6B9E',
    gradientFrom: '#FFE8F3',
    gradientTo: '#F8D0E3',
    features: [
      'Online Appointment Booking',
      'Patient Records & History',
      'Automated Reminders',
      'Billing & Invoicing',
      'Analytics Dashboard',
    ],
    detailedFeatures: [
      {
        icon: Calendar,
        title: 'Smart Appointment Booking',
        description: 'Let pet owners book appointments online 24/7. Smart scheduling avoids conflicts and sends automatic confirmations.',
      },
      {
        icon: FileText,
        title: 'Patient Records & History',
        description: 'Complete digital medical records for every pet — vaccination history, prescriptions, allergies, and visit notes.',
      },
      {
        icon: Bell,
        title: 'Automated Reminders',
        description: 'Never miss a follow-up. Send automated SMS/WhatsApp reminders for appointments, vaccinations, and checkups.',
      },
      {
        icon: CreditCard,
        title: 'Billing & Invoicing',
        description: 'Generate professional invoices, track payments, and manage billing with integrated payment processing.',
      },
      {
        icon: BarChart3,
        title: 'Analytics Dashboard',
        description: 'Real-time insights into daily appointments, revenue, popular services, and patient growth trends.',
      },
      {
        icon: Smartphone,
        title: 'Mobile Friendly',
        description: 'Fully responsive dashboard and customer booking portal that works seamlessly on phones, tablets, and desktops.',
      },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '4,999',
        period: '/month',
        description: 'Perfect for small clinics',
        features: [
          'Up to 100 appointments/month',
          'Basic patient records',
          'Email reminders',
          'Single user',
          'Email support',
        ],
        popular: false,
      },
      {
        name: 'Professional',
        price: '14,999',
        period: '/month',
        description: 'For growing practices',
        features: [
          'Unlimited appointments',
          'Full patient records & history',
          'SMS + WhatsApp reminders',
          'Up to 5 staff users',
          'Analytics dashboard',
          'Online payment integration',
          'Priority support',
        ],
        popular: true,
      },
      {
        name: 'Enterprise',
        price: '29,999',
        period: '/month',
        description: 'Multi-location hospitals',
        features: [
          'Everything in Professional',
          'Multi-location support',
          'Unlimited staff users',
          'Custom branding',
          'API access',
          'Dedicated account manager',
          '24/7 phone support',
        ],
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'How long does it take to set up PetCare Pro?',
        answer: 'Most clinics are up and running within 24-48 hours. Our team handles the entire setup and data migration process for you.',
      },
      {
        question: 'Can pet owners book appointments from their phone?',
        answer: 'Yes! PetCare Pro includes a fully responsive customer portal where pet owners can book, reschedule, and view their pet records from any device.',
      },
      {
        question: 'Is my data secure?',
        answer: 'Absolutely. We use industry-standard encryption and secure cloud hosting. Your data is backed up daily and accessible only to authorized users.',
      },
      {
        question: 'Can I import my existing patient records?',
        answer: 'Yes, we support importing data from spreadsheets and most common clinic management systems. Our team will help with the migration.',
      },
      {
        question: 'Do you offer a free trial?',
        answer: 'Yes, we offer a 14-day free trial with full access to all Professional features. No credit card required.',
      },
    ],
  },
];

export function getToolBySlug(slug) {
  return saasTools.find((tool) => tool.slug === slug) || null;
}

export function getAllSlugs() {
  return saasTools.map((tool) => tool.slug);
}
