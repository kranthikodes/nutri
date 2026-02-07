export const STATS = [
  { label: 'Users Helped', value: 50000, suffix: '+' },
  { label: 'Satisfaction Rate', value: 98, suffix: '%' },
  { label: 'Conditions Covered', value: 500, suffix: '+' },
  { label: 'Available', value: 24, suffix: '/7' },
] as const;

export const STEP_NAMES = [
  'About You',
  'Health Check',
  'Food Vibes',
  'Your World',
  'Last Touches',
] as const;

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    context: 'Lost 12kg in 4 months',
    quote: 'NutriAI understood my PCOS and created a plan with Indian foods I actually enjoy. No other app has done that.',
    rating: 5,
    avatar: 'PS',
  },
  {
    name: 'James Mitchell',
    context: 'Marathon runner, optimized performance',
    quote: 'The level of personalization is insane. It factored in my training schedule, budget, and even local grocery stores.',
    rating: 5,
    avatar: 'JM',
  },
  {
    name: 'Aisha Khan',
    context: 'Managing Type 2 Diabetes',
    quote: 'Finally a nutritionist that respects my halal dietary needs AND understands my medications. My HbA1c dropped from 8.2 to 6.5.',
    rating: 5,
    avatar: 'AK',
  },
] as const;

export const CREDENTIALS = [
  'Harvard Medical School',
  'Mayo Clinic',
  'WHO Guidelines',
  'American Dietetic Association',
  'PubMed Research',
] as const;
