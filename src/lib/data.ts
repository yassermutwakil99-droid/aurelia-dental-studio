export const NAV_LINKS = [
  { label: 'The Studio', href: '#studio' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Experience', href: '#experience' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Voices', href: '#voices' },
] as const;

export interface Treatment {
  index: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  from: string;
}

export const TREATMENTS: Treatment[] = [
  {
    index: '01',
    name: 'Aesthetic Porcelain Veneers',
    tagline: 'Hand-layered ceramics',
    description:
      'Ultra-thin porcelain, characterised by hand to mirror natural enamel — planned on the face as a whole, never tooth by tooth.',
    duration: '2–3 visits',
    from: '£1,450 per tooth',
  },
  {
    index: '02',
    name: 'Invisible Orthodontics',
    tagline: 'Quiet alignment',
    description:
      'Discreet aligner therapy guided by digital smile simulation, so you can see the destination before the journey begins.',
    duration: '6–18 months',
    from: '£3,900',
  },
  {
    index: '03',
    name: 'Implant Restoration',
    tagline: 'Engineered permanence',
    description:
      'Fully guided implant placement and bespoke restoration, restoring function with a precision measured in microns.',
    duration: '3–6 months',
    from: '£2,800',
  },
  {
    index: '04',
    name: 'Whitening & Enamel Care',
    tagline: 'Luminosity, preserved',
    description:
      'Professional brightening paired with remineralisation therapy — a lifted, luminous result that respects your enamel.',
    duration: 'Single visit',
    from: '£590',
  },
  {
    index: '05',
    name: 'Complete Smile Design',
    tagline: 'The signature work',
    description:
      'Our flagship composition: digital planning, trial smile and full ceramic restoration, choreographed over a series of private sessions.',
    duration: '4–8 weeks',
    from: '£12,500',
  },
  {
    index: '06',
    name: 'Preventative Membership',
    tagline: 'Custody of health',
    description:
      'Twice-yearly hygiene, diagnostics and direct access to your clinician — quiet, continuous care in the background of your life.',
    duration: 'Annual',
    from: '£48 / month',
  },
];

export interface Doctor {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  focus: string[];
  initials: string;
}

export const DOCTORS: Doctor[] = [
  {
    name: 'Dr. Elena Marchetti',
    role: 'Founder · Cosmetic & Restorative Dentistry',
    credentials: 'DDS, MSc Aesthetic Dentistry — Florence / London',
    bio: 'Trained in Florence and London, Elena founded AURELIA on a simple conviction: dentistry is a design discipline. Fifteen years of practice have refined a style defined by restraint — teeth that belong to the face, not to fashion.',
    focus: ['Smile Design', 'Veneers', 'Full-mouth Rehabilitation'],
    initials: 'EM',
  },
  {
    name: 'Dr. Julian Ashworth',
    role: 'Clinical Lead · Implantology',
    credentials: 'BDS, MSc Implant Dentistry — Kings College London',
    bio: 'Julian leads our surgical practice, with particular devotion to guided implantology and the quiet confidence that comes from certainty. He has placed more than two thousand implants and still measures every one twice.',
    focus: ['Guided Implants', 'Bone Grafting', 'Complex Cases'],
    initials: 'JA',
  },
  {
    name: 'Dr. Sofia Lindqvist',
    role: 'Orthodontics & Paediatric Care',
    credentials: 'DDS, MOrth RCS(Ed) — Stockholm / London',
    bio: 'Sofia brings a Scandinavian sensibility to alignment: minimal intervention, maximum patience. She treats patients from nine to ninety, and believes the best orthodontic result is the one no one notices was needed.',
    focus: ['Aligner Therapy', 'Early Orthodontics', 'Retention'],
    initials: 'SL',
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'I arrived with a folder of photographs and a vague anxiety. Dr. Marchetti listened for an hour before she looked in my mouth. The result is so unremarkable — in the best sense — that I forget it was ever a project.',
    author: 'Amélie R.',
    context: 'Complete Smile Design, 2025',
  },
  {
    quote:
      'Two implants, one afternoon, no drama. Julian narrates everything he does in a voice that should be prescribed as a sleep aid. I recommend the studio the way people recommend a restaurant.',
    author: 'Daniel K.',
    context: 'Implant Restoration, 2025',
  },
  {
    quote:
      'My daughter asks when she gets to go back to "the dentist hotel". The headphones, the ceiling screen, the gentleness — Sofia has turned a nine-year-old into dental advertising.',
    author: 'Priya S.',
    context: 'Paediatric Orthodontics, 2024',
  },
];

export const TREATMENT_OPTIONS = [
  'Complete Smile Design',
  'Aesthetic Porcelain Veneers',
  'Invisible Orthodontics',
  'Implant Restoration',
  'Whitening & Enamel Care',
  'Preventative Membership',
  'Not sure yet — advise me',
] as const;

export const STATS = [
  { value: '18', label: 'Years of private practice' },
  { value: '2.4k', label: 'Smiles composed' },
  { value: '97%', label: 'Patients who return' },
  { value: '12', label: 'International awards' },
] as const;
