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

// Unsplash free photos (crop=face for avatar use)
const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=150&h=150&fit=crop&crop=face&q=80`;

// Women
const PHOTO_PRIYA = img('photo-1622278803606-4212c0b412f7');
const PHOTO_AISHA = img('photo-1512087321902-02867cabd81a');
const PHOTO_MEERA = img('photo-1624610806209-82a4cbb4339a');
const PHOTO_DEEPIKA = img('photo-1769538012116-b26a4cecbcf7');
const PHOTO_SNEHA = img('photo-1659451335972-c3f976f4e567');
const PHOTO_FATIMA = img('photo-1757351122515-21a7b61d682e');
const PHOTO_KAVITA = img('photo-1489993360877-883980cc7333');
// Men
const PHOTO_RAJESH = img('photo-1649433658557-54cf58577c68');
const PHOTO_AMIT = img('photo-1583503674050-e2dcf7e94cd3');
const PHOTO_DEEPAK = img('photo-1560072362-53f3810f8b5b');

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    city: 'Indore',
    context: 'Lost 12kg in 4 months',
    quote: 'NutriAI understood my PCOS and created a plan with Indian foods I actually enjoy. No other app has done that.',
    rating: 5,
    photo: PHOTO_PRIYA,
  },
  {
    name: 'Rajesh Kumar',
    city: 'Lucknow',
    context: 'Reversed pre-diabetes',
    quote: 'My doctor was shocked. HbA1c came down from 9.1 to 6.4 in just 6 months. The plan fit my budget and my wife cooks the same recipes now.',
    rating: 5,
    photo: PHOTO_RAJESH,
  },
  {
    name: 'Aisha Khan',
    city: 'Bhopal',
    context: 'Managing Type 2 Diabetes',
    quote: 'Finally a nutritionist that respects my halal dietary needs AND understands my medications. My HbA1c dropped from 8.2 to 6.5.',
    rating: 5,
    photo: PHOTO_AISHA,
  },
  {
    name: 'Meera Iyer',
    city: 'Coimbatore',
    context: 'Post-pregnancy weight loss',
    quote: 'Lost 14kg after delivery while still breastfeeding. The plan made sure I and my baby were getting proper nutrition. All South Indian meals!',
    rating: 5,
    photo: PHOTO_MEERA,
  },
  {
    name: 'Amit Verma',
    city: 'Jaipur',
    context: 'Lost 22kg for wedding',
    quote: 'Went from 98kg to 76kg before my wedding. My friends could not believe it. NutriAI gave me a Rajasthani-friendly vegetarian plan that actually worked.',
    rating: 5,
    photo: PHOTO_AMIT,
  },
  {
    name: 'Deepika Nair',
    city: 'Nagpur',
    context: 'Thyroid management',
    quote: 'My thyroid levels normalized in 4 months. The plan accounted for my medication timing, my work shifts, and foods available near my area.',
    rating: 5,
    photo: PHOTO_DEEPIKA,
  },
] as const;

export const TRANSFORMATIONS = [
  {
    name: 'Sneha Patel',
    city: 'Indore',
    photo: PHOTO_SNEHA,
    condition: 'PCOS',
    metric: 'Weight',
    unit: 'kg',
    before: 82,
    after: 67,
    duration: '5 months',
    story: 'Three doctors told me PCOS means I will never lose weight. My mother-in-law kept commenting at every family dinner. I had stopped looking in mirrors.',
    now: 'I wear what I want now. My in-laws ask ME for diet tips.',
  },
  {
    name: 'Fatima Begum',
    city: 'Patna',
    photo: PHOTO_FATIMA,
    condition: 'Thyroid + Weight',
    metric: 'Weight',
    unit: 'kg',
    before: 74,
    after: 62,
    duration: '4 months',
    story: 'After my thyroid diagnosis, I gained 12kg in one year. I could not play with my kids without getting breathless. I felt like I was failing as a mother.',
    now: 'I run after my kids now. They say "Mummy you are so fast!"',
  },
  {
    name: 'Meera Iyer',
    city: 'Coimbatore',
    photo: PHOTO_MEERA,
    condition: 'High Cholesterol',
    metric: 'Cholesterol',
    unit: '',
    before: 280,
    after: 190,
    duration: '4 months',
    story: 'At 34, my doctor said I have the cholesterol of a 55-year-old. I was scared I would not be there to see my daughter grow up.',
    now: 'My reports are normal now. My daughter will have her mother for a long time.',
  },
  {
    name: 'Rajesh Kumar',
    city: 'Lucknow',
    photo: PHOTO_RAJESH,
    condition: 'Type 2 Diabetes',
    metric: 'HbA1c',
    unit: '',
    before: 9.1,
    after: 6.4,
    duration: '6 months',
    story: 'My father lost his leg to diabetes. When my own HbA1c hit 9.1, I could not sleep for weeks thinking about my children growing up without a healthy father.',
    now: 'Doctor says I may not even need medication anymore.',
  },
  {
    name: 'Kavita Deshmukh',
    city: 'Nagpur',
    photo: PHOTO_KAVITA,
    condition: 'Post-pregnancy',
    metric: 'Weight',
    unit: 'kg',
    before: 78,
    after: 61,
    duration: '6 months',
    story: 'After my second baby, I did not recognize my own body. My husband never said anything but I saw old photos and cried. I tried 4 different diets — nothing worked while breastfeeding.',
    now: 'I fit into my wedding lehenga again. My husband says I look better than our wedding day.',
  },
  {
    name: 'Deepak Singh',
    city: 'Ranchi',
    photo: PHOTO_DEEPAK,
    condition: 'Fatty Liver',
    metric: 'Weight',
    unit: 'kg',
    before: 95,
    after: 78,
    duration: '6 months',
    story: 'My ultrasound showed Grade 2 fatty liver at age 29. The doctor said "change your lifestyle or prepare for serious problems." I did not know where to start.',
    now: 'Liver is completely normal now. I feel 10 years younger.',
  },
] as const;

export const CREDENTIALS = [
  'Harvard Medical School',
  'Mayo Clinic',
  'WHO Guidelines',
  'American Dietetic Association',
  'PubMed Research',
] as const;
